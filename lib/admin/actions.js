"use server";

import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { authenticate_admin, logout_admin, require_admin } from "@/lib/admin/auth";
import { enforce_admin_login_rate_limit } from "@/lib/admin/login_rate_limit";
import {
  admin_create_blog_post,
  admin_delete_blog_post,
  admin_find_primary_keyword_conflicts,
  admin_update_blog_post,
} from "@/lib/blog/admin_repository";
import {
  admin_delete_contact_submission,
  admin_update_contact_status,
} from "@/lib/contact/admin_repository";

export async function admin_login_action(form_data) {
  const email = String(form_data.get("email") || "");
  const password = String(form_data.get("password") || "");
  const next_path = String(form_data.get("next") || "/admin/");

  const header_store = await headers();
  const request_like = {
    headers: {
      get(name) {
        return header_store.get(name);
      },
    },
  };

  const rate = await enforce_admin_login_rate_limit(request_like, email);
  if (rate.limited) {
    return {
      ok: false,
      message: "Too many login attempts. Please try again later.",
    };
  }

  const result = await authenticate_admin(email, password);
  if (!result.ok) {
    return { ok: false, message: result.message };
  }

  const safe_next =
    next_path.startsWith("/admin/") && !next_path.includes("//")
      ? next_path
      : "/admin/";
  redirect(safe_next);
}

export async function admin_logout_action() {
  await logout_admin();
  redirect("/admin/login/");
}

export async function save_blog_draft_action(id, payload) {
  await require_admin();
  if (id) {
    return admin_update_blog_post(id, payload, { publish: false });
  }
  return admin_create_blog_post(payload, { publish: false });
}

export async function publish_blog_action(id, payload) {
  await require_admin();
  if (id) {
    return admin_update_blog_post(id, payload, { publish: true });
  }
  return admin_create_blog_post(payload, { publish: true });
}

export async function unpublish_blog_action(id, payload) {
  await require_admin();
  return admin_update_blog_post(id, payload, { unpublish: true });
}

export async function delete_blog_action(id) {
  await require_admin();
  return admin_delete_blog_post(id);
}

export async function check_primary_keyword_conflict_action(
  primary_keyword,
  exclude_id
) {
  await require_admin();
  const matches = await admin_find_primary_keyword_conflicts(
    primary_keyword,
    exclude_id
  );
  return { ok: true, matches };
}

export async function update_contact_status_action(id, submission_status) {
  await require_admin();
  return admin_update_contact_status(id, submission_status);
}

export async function delete_contact_submission_action(id) {
  await require_admin();
  return admin_delete_contact_submission(id);
}
