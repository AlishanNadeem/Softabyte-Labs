#!/usr/bin/env node

/**
 * Create or update an Admin account.
 * Usage:
 *   npm run create-admin
 *   npm run create-admin -- --update
 */

import dotenv from "dotenv";
import { createInterface } from "readline";
import { MongoClient } from "mongodb";
import bcrypt from "bcryptjs";

dotenv.config({ path: ".env.local" });
dotenv.config();

const uri = process.env.MONGODB_URI;
const db_name = process.env.MONGODB_DB_NAME || "softabyte_labs";
const update_existing = process.argv.includes("--update");
const min_length = 12;
const bcrypt_cost = 12;

function normalize_email(email) {
  return String(email || "")
    .trim()
    .toLowerCase();
}

function read_line(prompt, { silent = false } = {}) {
  if (!silent) {
    const rl = createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    return new Promise((resolve) => {
      rl.question(prompt, (answer) => {
        rl.close();
        resolve(answer);
      });
    });
  }

  return new Promise((resolve) => {
    const stdout = process.stdout;
    stdout.write(prompt);
    let password = "";
    const on_data = (char) => {
      char = `${char}`;
      if (char === "\n" || char === "\r" || char === "\u0004") {
        process.stdin.pause();
        process.stdin.removeListener("data", on_data);
        process.stdin.setRawMode?.(false);
        stdout.write("\n");
        resolve(password);
        return;
      }
      if (char === "\u0003") process.exit(1);
      stdout.write("*");
      password += char;
    };
    process.stdin.resume();
    process.stdin.setRawMode?.(true);
    process.stdin.on("data", on_data);
  });
}

async function main() {
  if (!uri) {
    console.error("MONGODB_URI is not configured.");
    process.exit(1);
  }

  const email = normalize_email(await read_line("Admin email: "));
  const password = await read_line("Password (min 12 chars): ", {
    silent: true,
  });
  const confirm = await read_line("Confirm password: ", { silent: true });

  if (!email.includes("@")) {
    console.error("A valid email is required.");
    process.exit(1);
  }
  if (password.length < min_length) {
    console.error(`Password must be at least ${min_length} characters.`);
    process.exit(1);
  }
  if (password !== confirm) {
    console.error("Passwords do not match.");
    process.exit(1);
  }

  const client = new MongoClient(uri);
  await client.connect();
  const collection = client.db(db_name).collection("admin_users");
  await collection.createIndex(
    { email: 1 },
    { unique: true, name: "email_unique" }
  );

  const password_hash = await bcrypt.hash(password, bcrypt_cost);
  const now = new Date();
  const existing = await collection.findOne({ email });

  if (existing) {
    if (!update_existing) {
      console.error("Admin already exists. Re-run with --update to replace password.");
      await client.close();
      process.exit(1);
    }
    await collection.updateOne(
      { _id: existing._id },
      {
        $set: {
          password_hash,
          role: "admin",
          is_active: true,
          updated_at: now,
        },
      }
    );
    console.log(`Admin updated: ${email}`);
  } else {
    await collection.insertOne({
      email,
      password_hash,
      role: "admin",
      is_active: true,
      created_at: now,
      updated_at: now,
      last_login_at: null,
    });
    console.log(`Admin created: ${email}`);
  }

  await client.close();
  process.exit(0);
}

main().catch((error) => {
  console.error(error.message || "Failed to create admin.");
  process.exit(1);
});
