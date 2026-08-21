import { createHash, randomBytes } from "crypto";
import { cookies } from "next/headers";
import { ObjectId } from "mongodb";
import { get_collection, is_mongodb_configured } from "@/lib/db/mongodb";
import {
  ADMIN_SESSIONS_COLLECTION,
  ADMIN_SESSION_COOKIE,
  ADMIN_SESSION_DAYS,
} from "@/lib/admin/constants";

export function generate_session_token() {
  return randomBytes(32).toString("hex");
}

export function hash_session_token(token) {
  return createHash("sha256").update(String(token)).digest("hex");
}

export function get_session_expiry_date(from = new Date()) {
  const expires = new Date(from);
  expires.setDate(expires.getDate() + ADMIN_SESSION_DAYS);
  return expires;
}

export function get_session_cookie_options(expires_at) {
  const is_production = process.env.NODE_ENV === "production";

  return {
    httpOnly: true,
    secure: is_production,
    sameSite: "lax",
    path: "/",
    expires: expires_at,
  };
}

let indexes_ensured = false;

export async function ensure_admin_session_indexes() {
  if (indexes_ensured || !is_mongodb_configured()) return;

  const collection = await get_collection(ADMIN_SESSIONS_COLLECTION);
  await collection.createIndexes([
    { key: { token_hash: 1 }, name: "token_hash_unique", unique: true },
    { key: { user_id: 1 }, name: "user_id" },
    {
      key: { expires_at: 1 },
      name: "expires_at_ttl",
      expireAfterSeconds: 0,
    },
  ]);
  indexes_ensured = true;
}

export async function create_admin_session(user_id) {
  await ensure_admin_session_indexes();

  const token = generate_session_token();
  const token_hash = hash_session_token(token);
  const now = new Date();
  const expires_at = get_session_expiry_date(now);

  const collection = await get_collection(ADMIN_SESSIONS_COLLECTION);
  await collection.insertOne({
    user_id: new ObjectId(user_id),
    token_hash,
    created_at: now,
    expires_at,
    last_seen_at: now,
  });

  return { token, expires_at };
}

export async function find_valid_session_by_token(token) {
  if (!token || !is_mongodb_configured()) return null;

  await ensure_admin_session_indexes();

  const token_hash = hash_session_token(token);
  const collection = await get_collection(ADMIN_SESSIONS_COLLECTION);
  const session = await collection.findOne({
    token_hash,
    expires_at: { $gt: new Date() },
  });

  return session;
}

export async function touch_admin_session(session_id) {
  if (!session_id) return;
  const collection = await get_collection(ADMIN_SESSIONS_COLLECTION);
  await collection.updateOne(
    { _id: session_id },
    { $set: { last_seen_at: new Date() } }
  );
}

export async function destroy_admin_session_by_token(token) {
  if (!token || !is_mongodb_configured()) return;
  const token_hash = hash_session_token(token);
  const collection = await get_collection(ADMIN_SESSIONS_COLLECTION);
  await collection.deleteOne({ token_hash });
}

export async function destroy_admin_sessions_for_user(user_id) {
  if (!user_id || !is_mongodb_configured()) return;
  const collection = await get_collection(ADMIN_SESSIONS_COLLECTION);
  await collection.deleteMany({ user_id: new ObjectId(user_id) });
}

export async function set_admin_session_cookie(token, expires_at) {
  const store = await cookies();
  store.set(ADMIN_SESSION_COOKIE, token, get_session_cookie_options(expires_at));
}

export async function clear_admin_session_cookie() {
  const store = await cookies();
  store.set(ADMIN_SESSION_COOKIE, "", {
    ...get_session_cookie_options(new Date(0)),
    maxAge: 0,
  });
}

export async function read_admin_session_token() {
  const store = await cookies();
  return store.get(ADMIN_SESSION_COOKIE)?.value || null;
}
