import bcrypt from "bcryptjs";
import { BCRYPT_COST, ADMIN_PASSWORD_MIN_LENGTH } from "@/lib/admin/constants";

export function normalize_admin_email(email) {
  return String(email || "")
    .trim()
    .toLowerCase();
}

export function validate_admin_password(password) {
  if (typeof password !== "string" || password.length < ADMIN_PASSWORD_MIN_LENGTH) {
    return {
      valid: false,
      message: `Password must be at least ${ADMIN_PASSWORD_MIN_LENGTH} characters.`,
    };
  }
  return { valid: true, message: "" };
}

export async function hash_admin_password(password) {
  return bcrypt.hash(password, BCRYPT_COST);
}

export async function verify_admin_password(password, password_hash) {
  if (!password || !password_hash) return false;
  return bcrypt.compare(password, password_hash);
}
