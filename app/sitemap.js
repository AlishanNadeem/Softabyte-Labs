import { get_indexable_static_routes } from "@/lib/seo/structured_data";

export default function sitemap() {
  const static_routes = get_indexable_static_routes();

  // Future blog publishing:
  // const published_posts = await get_published_blog_posts();
  // return [...static_routes, ...get_blog_sitemap_entries(published_posts)];

  return static_routes;
}
