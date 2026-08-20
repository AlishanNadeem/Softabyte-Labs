import { create_canonical_url } from "@/lib/seo/canonical";
import { site_locale, site_name } from "@/lib/site";

/**
 * Reusable page metadata for App Router pages.
 *
 * Title strategy:
 * - title_absolute: true → use full title from keyword_map (already includes brand)
 * - title_absolute: false → short title; root layout template adds " | Softabyte Labs"
 */
export function create_page_metadata({
  title,
  description,
  path = "/",
  title_absolute = false,
  robots = { index: true, follow: true },
  open_graph_type = "website",
  open_graph_image,
}) {
  const canonical = create_canonical_url(path);
  const resolved_title = title_absolute ? { absolute: title } : title;

  const metadata = {
    title: resolved_title,
    description,
    alternates: {
      canonical,
    },
    robots,
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: site_name,
      locale: site_locale,
      type: open_graph_type,
    },
  };

  if (open_graph_image) {
    metadata.openGraph.images = [{ url: open_graph_image }];
    metadata.twitter = {
      card: "summary_large_image",
      title,
      description,
    };
  }

  return metadata;
}
