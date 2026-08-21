import {
  get_blog_sitemap_entries,
  get_indexable_static_routes,
} from "@/lib/seo/structured_data";
import { get_published_blog_posts } from "@/lib/blog/repository";

export const dynamic = "force-dynamic";

export default async function sitemap() {
  const static_routes = get_indexable_static_routes();
  const published_posts = await get_published_blog_posts();
  const blog_entries = get_blog_sitemap_entries(
    published_posts.map((post) => ({ slug: post.slug }))
  );

  return [...static_routes, ...blog_entries];
}
