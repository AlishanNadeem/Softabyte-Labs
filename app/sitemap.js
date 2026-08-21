import {
  get_blog_sitemap_entries,
  get_indexable_static_routes,
} from "@/lib/seo/structured_data";
import { get_published_blog_posts } from "@/lib/blog/repository";

export default function sitemap() {
  const static_routes = get_indexable_static_routes();
  const published_posts = get_published_blog_posts().map((post) => ({
    slug: post.slug,
  }));

  return [...static_routes, ...get_blog_sitemap_entries(published_posts)];
}
