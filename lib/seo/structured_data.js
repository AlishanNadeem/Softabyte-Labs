import { site_name, site_url } from "@/lib/site";

export function get_organization_schema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site_name,
    url: `${site_url}/`,
  };
}

export function get_website_schema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site_name,
    url: `${site_url}/`,
  };
}

export function get_sitewide_structured_data() {
  return [get_organization_schema(), get_website_schema()];
}

/**
 * Future blog sitemap entries.
 * Merge published posts when MongoDB publishing is implemented.
 *
 * @param {Array<{ slug: string, updated_at?: string }>} published_posts
 */
export function get_blog_sitemap_entries(published_posts = []) {
  return published_posts.map((post) => ({
    url: `${site_url}/blog/${post.slug}/`,
    ...(post.updated_at ? { lastModified: post.updated_at } : {}),
  }));
}

/**
 * Future static marketing routes for sitemap expansion.
 * Add paths here only when the production page exists and is indexable.
 */
export function get_indexable_static_routes() {
  const paths = [
    "/",
    "/services/",
    "/services/custom-software-development/",
    "/services/web-development/",
    "/services/mobile-app-development/",
    "/services/ai-automation/",
    "/services/ui-ux-design/",
    "/services/hosting-infrastructure/",
    "/industries/",
    "/industries/ecommerce/",
    "/industries/healthcare/",
    "/industries/real-estate/",
    "/industries/transportation-logistics/",
    "/industries/professional-services/",
    "/industries/startups-saas/",
    "/about/",
    "/process/",
    "/contact/",
  ];

  return paths.map((path) => ({
    url: `${site_url}${path === "/" ? "/" : path}`,
    priority:
      path === "/"
        ? 1
        : path === "/services/" || path === "/industries/"
          ? 0.9
          : path === "/about/" || path === "/process/" || path === "/contact/"
            ? 0.7
            : 0.8,
  }));
}
