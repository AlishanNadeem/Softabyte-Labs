import { ObjectId } from "mongodb";
import { get_collection, is_mongodb_configured } from "@/lib/db/mongodb";
import {
  ADMIN_ROLE,
  ADMIN_USERS_COLLECTION,
} from "@/lib/admin/constants";
import {
  hash_admin_password,
  normalize_admin_email,
  validate_admin_password,
} from "@/lib/admin/password";

let indexes_ensured = false;

export async function ensure_admin_user_indexes() {
  if (indexes_ensured || !is_mongodb_configured()) return;

  const collection = await get_collection(ADMIN_USERS_COLLECTION);
  await collection.createIndexes([
    { key: { email: 1 }, name: "email_unique", unique: true },
  ]);
  indexes_ensured = true;
}

export async function find_admin_by_email(email) {
  if (!is_mongodb_configured()) return null;
  await ensure_admin_user_indexes();

  const collection = await get_collection(ADMIN_USERS_COLLECTION);
  return collection.findOne({ email: normalize_admin_email(email) });
}

export async function find_admin_by_id(user_id) {
  if (!user_id || !is_mongodb_configured()) return null;
  if (!ObjectId.isValid(user_id)) return null;

  await ensure_admin_user_indexes();
  const collection = await get_collection(ADMIN_USERS_COLLECTION);
  return collection.findOne({ _id: new ObjectId(user_id) });
}

export async function create_or_update_admin_user({
  email,
  password,
  update_existing = false,
}) {
  await ensure_admin_user_indexes();

  const normalized_email = normalize_admin_email(email);
  if (!normalized_email || !normalized_email.includes("@")) {
    throw new Error("A valid email is required.");
  }

  const password_check = validate_admin_password(password);
  if (!password_check.valid) {
    throw new Error(password_check.message);
  }

  const password_hash = await hash_admin_password(password);
  const now = new Date();
  const collection = await get_collection(ADMIN_USERS_COLLECTION);
  const existing = await collection.findOne({ email: normalized_email });

  if (existing) {
    if (!update_existing) {
      throw new Error("Admin already exists. Pass --update to replace password.");
    }

    await collection.updateOne(
      { _id: existing._id },
      {
        $set: {
          password_hash,
          role: ADMIN_ROLE,
          is_active: true,
          updated_at: now,
        },
      }
    );

    return { action: "updated", email: normalized_email, id: String(existing._id) };
  }

  const result = await collection.insertOne({
    email: normalized_email,
    password_hash,
    role: ADMIN_ROLE,
    is_active: true,
    created_at: now,
    updated_at: now,
    last_login_at: null,
  });

  return {
    action: "created",
    email: normalized_email,
    id: String(result.insertedId),
  };
}

export async function mark_admin_login(user_id) {
  if (!user_id) return;
  const collection = await get_collection(ADMIN_USERS_COLLECTION);
  await collection.updateOne(
    { _id: new ObjectId(user_id) },
    { $set: { last_login_at: new Date(), updated_at: new Date() } }
  );
}

export function serialize_admin_user(user) {
  if (!user) return null;
  return {
    id: String(user._id),
    email: user.email,
    role: user.role,
    is_active: Boolean(user.is_active),
    last_login_at: user.last_login_at || null,
  };
}
