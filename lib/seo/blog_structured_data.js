import { create_canonical_url } from "@/lib/seo/canonical";
import { site_name, site_url } from "@/lib/site";

export function get_blog_hub_schema() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Software & Technology Insights",
    description:
      "Practical writing on software decisions, digital products, automation, and running systems that last.",
    url: create_canonical_url("/blog/"),
    isPartOf: {
      "@type": "WebSite",
      name: site_name,
      url: `${site_url}/`,
    },
  };
}

export function get_blog_posting_schema(post) {
  if (!post) return null;

  const url = create_canonical_url(post.path || `/blog/${post.slug}/`);

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.meta_description || post.excerpt,
    datePublished: post.published_at,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    author: {
      "@type": "Organization",
      name: post.author_name || site_name,
      url: `${site_url}/`,
    },
    publisher: {
      "@type": "Organization",
      name: site_name,
      url: `${site_url}/`,
    },
    url,
  };

  if (post.updated_at && post.updated_at !== post.published_at) {
    schema.dateModified = post.updated_at;
  } else {
    schema.dateModified = post.published_at;
  }

  if (post.hero_image) {
    schema.image = [`${site_url}${post.hero_image}`];
  }

  return schema;
}

export function get_blog_breadcrumb_schema(items = []) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href
        ? { item: create_canonical_url(item.href) }
        : {}),
    })),
  };
}
