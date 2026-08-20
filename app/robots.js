import { site_url } from "@/lib/site";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/api/", "/design-preview/"],
    },
    sitemap: `${site_url}/sitemap.xml`,
  };
}
