import { redirect } from "next/navigation";
import { verify_admin_password } from "@/lib/admin/password";
import {
  clear_admin_session_cookie,
  create_admin_session,
  destroy_admin_session_by_token,
  find_valid_session_by_token,
  read_admin_session_token,
  set_admin_session_cookie,
  touch_admin_session,
} from "@/lib/admin/session";
import {
  find_admin_by_email,
  mark_admin_login,
  serialize_admin_user,
  find_admin_by_id,
} from "@/lib/admin/users";
import { ADMIN_ROLE } from "@/lib/admin/constants";
import { is_mongodb_configured } from "@/lib/db/mongodb";

export async function get_current_admin() {
  if (!is_mongodb_configured()) return null;

  const token = await read_admin_session_token();
  if (!token) return null;

  const session = await find_valid_session_by_token(token);
  if (!session) {
    await clear_admin_session_cookie();
    return null;
  }

  const user = await find_admin_by_id(session.user_id);
  if (!user || !user.is_active || user.role !== ADMIN_ROLE) {
    await destroy_admin_session_by_token(token);
    await clear_admin_session_cookie();
    return null;
  }

  await touch_admin_session(session._id);
  return serialize_admin_user(user);
}

export async function require_admin() {
  const admin = await get_current_admin();
  if (!admin) {
    redirect("/admin/login/");
  }
  return admin;
}

export async function require_admin_api() {
  const admin = await get_current_admin();
  if (!admin) {
    return { ok: false, admin: null, status: 401 };
  }
  return { ok: true, admin, status: 200 };
}

/**
 * Authenticate credentials and create a fresh session.
 * Always returns generic failure message to avoid account enumeration.
 */
export async function authenticate_admin(email, password) {
  const generic_error = "Invalid email or password.";

  if (!is_mongodb_configured()) {
    return { ok: false, message: "Admin authentication is unavailable." };
  }

  const user = await find_admin_by_email(email);
  if (!user || !user.is_active || user.role !== ADMIN_ROLE) {
    return { ok: false, message: generic_error };
  }

  const valid = await verify_admin_password(password, user.password_hash);
  if (!valid) {
    return { ok: false, message: generic_error };
  }

  const { token, expires_at } = await create_admin_session(user._id);
  await set_admin_session_cookie(token, expires_at);
  await mark_admin_login(user._id);

  return { ok: true, admin: serialize_admin_user(user) };
}

export async function logout_admin() {
  const token = await read_admin_session_token();
  if (token) {
    await destroy_admin_session_by_token(token);
  }
  await clear_admin_session_cookie();
}
