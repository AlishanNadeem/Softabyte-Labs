#!/usr/bin/env node

/**
 * Idempotent migration: Phase 9 local posts → MongoDB blog_posts.
 * Usage: npm run migrate-blog
 */

import dotenv from "dotenv";
import { MongoClient } from "mongodb";
import { pathToFileURL } from "url";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config({ path: ".env.local" });
dotenv.config();

const uri = process.env.MONGODB_URI;
const db_name = process.env.MONGODB_DB_NAME || "softabyte_labs";

function parse_date(iso) {
  if (!iso) return new Date("2026-08-22T12:00:00.000Z");
  const date = new Date(`${String(iso).slice(0, 10)}T12:00:00.000Z`);
  return Number.isNaN(date.getTime())
    ? new Date("2026-08-22T12:00:00.000Z")
    : date;
}

async function load_posts() {
  // Load post modules via relative file URLs (no @/ alias needed).
  const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
  const files = [
    "lib/blog/posts/custom_software_vs_off_the_shelf.js",
    "lib/blog/posts/when_business_needs_client_portal.js",
    "lib/blog/posts/business_processes_worth_automating.js",
  ];

  const posts = [];
  for (const relative of files) {
    const absolute = path.join(root, relative);
    const mod = await import(pathToFileURL(absolute).href);
    const value = Object.values(mod).find(
      (item) => item && typeof item === "object" && item.slug
    );
    if (value) posts.push(value);
  }
  return posts;
}

async function main() {
  if (!uri) {
    console.error("MONGODB_URI is not configured.");
    process.exit(1);
  }

  const posts = await load_posts();
  const client = new MongoClient(uri);
  await client.connect();
  const collection = client.db(db_name).collection("blog_posts");
  await collection.createIndex({ slug: 1 }, { unique: true, name: "slug_unique" });
  await collection.createIndex(
    { status: 1, published_at: -1 },
    { name: "status_published_at" }
  );

  let inserted = 0;
  let updated = 0;

  for (const post of posts) {
    const published_at = parse_date(post.published_at);
    const updated_at = parse_date(post.updated_at);
    const existing = await collection.findOne({ slug: post.slug });
    const document = {
      slug: post.slug,
      status: post.status || "published",
      featured: Boolean(post.featured),
      title: post.title,
      meta_title: post.meta_title,
      meta_description: post.meta_description,
      excerpt: post.excerpt,
      category: post.category,
      tags: post.tags || [],
      published_at,
      updated_at,
      author_name: post.author_name || "Softabyte Labs",
      hero_image: post.hero_image || null,
      hero_image_alt: post.hero_image_alt || null,
      hero_placeholder: post.hero_placeholder || null,
      content: post.content || [],
      related_services: post.related_services || [],
      related_industries: post.related_industries || [],
      related_slugs: post.related_slugs || [],
    };

    if (existing) {
      await collection.updateOne(
        { _id: existing._id },
        {
          $set: {
            ...document,
            created_at: existing.created_at || published_at,
            updated_at: new Date(),
          },
        }
      );
      updated += 1;
      console.log(`updated: ${post.slug}`);
    } else {
      await collection.insertOne({
        ...document,
        created_at: published_at,
      });
      inserted += 1;
      console.log(`inserted: ${post.slug}`);
    }
  }

  await client.close();
  console.log(
    `Migration complete. inserted=${inserted} updated=${updated} skipped=0`
  );
}

main().catch((error) => {
  console.error(error.message || "Migration failed.");
  process.exit(1);
});
