import { blog_posts } from "@/lib/blog/posts";
import { enrich_blog_post } from "@/lib/blog/helpers";

const STATUS_PUBLISHED = "published";

function sort_by_published_desc(a, b) {
  return String(b.published_at).localeCompare(String(a.published_at));
}

/**
 * All published posts, newest first.
 * Phase 10: swap implementation to MongoDB query.
 */
export function get_published_blog_posts() {
  return blog_posts
    .filter((post) => post.status === STATUS_PUBLISHED)
    .slice()
    .sort(sort_by_published_desc)
    .map(enrich_blog_post);
}

/**
 * Featured published post, or newest published if none flagged.
 */
export function get_featured_blog_post() {
  const published = get_published_blog_posts();
  if (!published.length) return null;

  return published.find((post) => post.featured) || published[0];
}

/**
 * Single published post by slug. Drafts and unknown slugs return null.
 */
export function get_blog_post_by_slug(slug) {
  if (!slug) return null;

  const post = blog_posts.find(
    (item) => item.slug === slug && item.status === STATUS_PUBLISHED
  );

  return enrich_blog_post(post);
}

/**
 * Related published posts for an article.
 */
export function get_related_blog_posts(post, limit = 3) {
  if (!post) return [];

  const published = get_published_blog_posts().filter(
    (item) => item.slug !== post.slug
  );

  const preferred = [];
  for (const related_slug of post.related_slugs || []) {
    const match = published.find((item) => item.slug === related_slug);
    if (match) preferred.push(match);
  }

  if (preferred.length >= limit) {
    return preferred.slice(0, limit);
  }

  const remaining = published.filter(
    (item) => !preferred.some((preferred_item) => preferred_item.slug === item.slug)
  );

  const same_category = remaining.filter(
    (item) => item.category === post.category
  );
  const others = remaining.filter((item) => item.category !== post.category);

  return [...preferred, ...same_category, ...others].slice(0, limit);
}

/**
 * Latest published posts for hub / homepage.
 */
export function get_latest_blog_posts(limit = 3) {
  return get_published_blog_posts().slice(0, limit);
}

/**
 * Slugs for generateStaticParams — published only.
 */
export function get_published_blog_slugs() {
  return get_published_blog_posts().map((post) => post.slug);
}
