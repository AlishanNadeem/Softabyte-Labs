import { is_mongodb_configured } from "@/lib/db/mongodb";
import { BLOG_STATUS_PUBLISHED } from "@/lib/admin/constants";
import { get_blog_collection, serialize_blog_post } from "@/lib/blog/db";

/**
 * Public Blog repository — published posts only.
 */

export async function get_published_blog_posts() {
  if (!is_mongodb_configured()) return [];

  try {
    const collection = await get_blog_collection();
    const documents = await collection
      .find({ status: BLOG_STATUS_PUBLISHED })
      .sort({ published_at: -1 })
      .toArray();
    return documents.map(serialize_blog_post);
  } catch (error) {
    console.error(
      "[blog] get_published_blog_posts failed:",
      error?.name || "Error"
    );
    return [];
  }
}

export async function get_featured_blog_post() {
  const published = await get_published_blog_posts();
  if (!published.length) return null;
  return published.find((post) => post.featured) || published[0];
}

export async function get_blog_post_by_slug(slug) {
  if (!slug || !is_mongodb_configured()) return null;

  try {
    const collection = await get_blog_collection();
    const document = await collection.findOne({
      slug,
      status: BLOG_STATUS_PUBLISHED,
    });
    return serialize_blog_post(document);
  } catch (error) {
    console.error(
      "[blog] get_blog_post_by_slug failed:",
      error?.name || "Error"
    );
    return null;
  }
}

export async function get_related_blog_posts(post, limit = 3) {
  if (!post) return [];

  const published = (await get_published_blog_posts()).filter(
    (item) => item.slug !== post.slug
  );

  const preferred = [];
  for (const related_slug of post.related_slugs || []) {
    const match = published.find((item) => item.slug === related_slug);
    if (match) preferred.push(match);
  }

  if (preferred.length >= limit) return preferred.slice(0, limit);

  const remaining = published.filter(
    (item) =>
      !preferred.some((preferred_item) => preferred_item.slug === item.slug)
  );
  const same_category = remaining.filter(
    (item) => item.category === post.category
  );
  const others = remaining.filter((item) => item.category !== post.category);

  return [...preferred, ...same_category, ...others].slice(0, limit);
}

export async function get_latest_blog_posts(limit = 3) {
  const published = await get_published_blog_posts();
  return published.slice(0, limit);
}

export async function get_published_blog_slugs() {
  const published = await get_published_blog_posts();
  return published.map((post) => post.slug);
}
