import { get_collection, is_mongodb_configured } from "@/lib/db/mongodb";
import { BLOG_POSTS_COLLECTION } from "@/lib/admin/constants";
import { enrich_blog_post } from "@/lib/blog/helpers";

let indexes_ensured = false;

export async function ensure_blog_indexes() {
  if (indexes_ensured || !is_mongodb_configured()) return;
  const collection = await get_collection(BLOG_POSTS_COLLECTION);
  await collection.createIndexes([
    { key: { slug: 1 }, name: "slug_unique", unique: true },
    { key: { status: 1, published_at: -1 }, name: "status_published_at" },
    { key: { featured: 1, status: 1 }, name: "featured_status" },
    { key: { updated_at: -1 }, name: "updated_at_desc" },
  ]);
  indexes_ensured = true;
}

function to_iso_date(value) {
  if (!value) return null;
  if (typeof value === "string") return value.slice(0, 10);
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return null;
}

export function serialize_blog_post(document) {
  if (!document) return null;

  const plain = {
    id: String(document._id),
    slug: document.slug,
    status: document.status,
    featured: Boolean(document.featured),
    title: document.title || "",
    meta_title: document.meta_title || "",
    meta_description: document.meta_description || "",
    excerpt: document.excerpt || "",
    category: document.category || "",
    tags: Array.isArray(document.tags) ? document.tags : [],
    published_at: to_iso_date(document.published_at),
    updated_at: to_iso_date(document.updated_at),
    created_at: to_iso_date(document.created_at),
    author_name: document.author_name || document.author || "Softabyte Labs",
    hero_image: document.hero_image || null,
    hero_image_alt: document.hero_image_alt || null,
    hero_placeholder: document.hero_placeholder || null,
    content: Array.isArray(document.content) ? document.content : [],
    related_services: Array.isArray(document.related_services)
      ? document.related_services
      : [],
    related_industries: Array.isArray(document.related_industries)
      ? document.related_industries
      : [],
    related_slugs: Array.isArray(document.related_slugs)
      ? document.related_slugs
      : [],
  };

  return enrich_blog_post(plain);
}

export async function get_blog_collection() {
  await ensure_blog_indexes();
  return get_collection(BLOG_POSTS_COLLECTION);
}
