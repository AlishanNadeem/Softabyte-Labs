import { ObjectId } from "mongodb";
import { BLOG_BLOCK_TYPES, BLOG_STATUS_DRAFT, BLOG_STATUS_PUBLISHED } from "@/lib/admin/constants";
import { is_valid_blog_slug, slugify_blog_title, slugify_heading } from "@/lib/blog/helpers";
import { industry_navigation, service_navigation } from "@/config/navigation";

export function is_valid_object_id(value) {
  return ObjectId.isValid(String(value || ""));
}

const allowed_service_hrefs = new Set(
  service_navigation.map((item) => item.href)
);
const allowed_industry_hrefs = new Set(
  industry_navigation.map((item) => item.href)
);

function sanitize_block(block) {
  if (!block || typeof block !== "object" || Array.isArray(block)) {
    return null;
  }

  const type = String(block.type || "");
  if (!BLOG_BLOCK_TYPES.includes(type)) return null;

  if (type === "paragraph" || type === "callout") {
    const text = String(block.text || "").trim();
    if (!text || text.length > 20000) return null;
    return { type, text };
  }

  if (type === "heading") {
    const level = Number(block.level) === 3 ? 3 : 2;
    const text = String(block.text || "").trim();
    if (!text || text.length > 300) return null;
    return {
      type,
      level,
      text,
      id: block.id ? slugify_heading(block.id) : slugify_heading(text),
    };
  }

  if (type === "unordered_list" || type === "ordered_list") {
    const items = Array.isArray(block.items)
      ? block.items
          .map((item) => String(item || "").trim())
          .filter(Boolean)
          .slice(0, 50)
      : [];
    if (!items.length) return null;
    return { type, items };
  }

  if (type === "rich_paragraph") {
    const segments = Array.isArray(block.segments)
      ? block.segments
          .map((segment) => {
            if (!segment || typeof segment !== "object") return null;
            if (segment.type === "link") {
              const href = String(segment.href || "").trim();
              const value = String(segment.value || "").trim();
              if (!href.startsWith("/") || !value) return null;
              return { type: "link", href, value };
            }
            const value = String(segment.value || "");
            if (!value) return null;
            return { type: "text", value };
          })
          .filter(Boolean)
          .slice(0, 40)
      : [];
    if (!segments.length) return null;
    return { type, segments };
  }

  return null;
}

export function sanitize_blog_content(content) {
  if (!Array.isArray(content)) return [];
  return content.map(sanitize_block).filter(Boolean).slice(0, 200);
}

export function sanitize_related_services(items) {
  if (!Array.isArray(items)) return [];
  return items
    .filter(
      (item) =>
        item &&
        allowed_service_hrefs.has(item.href) &&
        typeof item.label === "string"
    )
    .map((item) => ({ label: item.label, href: item.href }))
    .slice(0, 6);
}

export function sanitize_related_industries(items) {
  if (!Array.isArray(items)) return [];
  return items
    .filter(
      (item) =>
        item &&
        allowed_industry_hrefs.has(item.href) &&
        typeof item.label === "string"
    )
    .map((item) => ({ label: item.label, href: item.href }))
    .slice(0, 6);
}

export function sanitize_tags(tags) {
  if (typeof tags === "string") {
    tags = tags.split(",");
  }
  if (!Array.isArray(tags)) return [];
  const seen = new Set();
  const result = [];
  for (const tag of tags) {
    const value = String(tag || "")
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .slice(0, 48);
    if (!value || seen.has(value)) continue;
    seen.add(value);
    result.push(value);
  }
  return result.slice(0, 20);
}

/**
 * Validate payload for draft save or publish.
 * @param {"draft"|"published"} mode
 */
export function validate_blog_payload(raw = {}, mode = "draft", options = {}) {
  const errors = {};
  const title = String(raw.title || "").trim();
  let slug = String(raw.slug || "").trim().toLowerCase();
  const excerpt = String(raw.excerpt || "").trim();
  const meta_title = String(raw.meta_title || "").trim();
  const meta_description = String(raw.meta_description || "").trim();
  const category = String(raw.category || "").trim();
  const author_name =
    String(raw.author_name || raw.author || "Softabyte Labs").trim() ||
    "Softabyte Labs";
  const content = sanitize_blog_content(raw.content);
  const tags = sanitize_tags(raw.tags);
  const related_services = sanitize_related_services(raw.related_services);
  const related_industries = sanitize_related_industries(raw.related_industries);
  const related_slugs = Array.isArray(raw.related_slugs)
    ? raw.related_slugs
        .map((item) => String(item || "").trim())
        .filter(is_valid_blog_slug)
        .slice(0, 10)
    : [];
  const featured = Boolean(raw.featured);
  let hero_image = raw.hero_image ? String(raw.hero_image).trim() : null;
  let hero_image_alt = raw.hero_image_alt
    ? String(raw.hero_image_alt).trim()
    : null;

  if (hero_image && !hero_image.startsWith("/")) {
    errors.hero_image = "Hero image must be a site path starting with /.";
    hero_image = null;
  }

  if (!title) {
    errors.title = "Title is required.";
  } else if (title.length > 160) {
    errors.title = "Title is too long.";
  }

  if (!slug && title) {
    slug = slugify_blog_title(title);
  }

  if (!slug) {
    errors.slug = "Slug is required.";
  } else if (!is_valid_blog_slug(slug)) {
    errors.slug = "Use lowercase letters, numbers, and hyphens only.";
  } else if (slug.length > 120) {
    errors.slug = "Slug is too long.";
  }

  if (options.lock_slug && options.existing_slug && slug !== options.existing_slug) {
    errors.slug = "Published article slugs cannot be changed.";
    slug = options.existing_slug;
  }

  if (mode === "published") {
    if (!excerpt) errors.excerpt = "Excerpt is required to publish.";
    if (!meta_title) errors.meta_title = "Meta title is required to publish.";
    if (!meta_description) {
      errors.meta_description = "Meta description is required to publish.";
    }
    if (!category) errors.category = "Category is required to publish.";
    if (!content.length) {
      errors.content = "Add at least one content block before publishing.";
    }
    if (hero_image && !hero_image_alt) {
      errors.hero_image_alt = "Alt text is required when a hero image is set.";
    }
  }

  if (excerpt && excerpt.length > 400) {
    errors.excerpt = "Excerpt is too long.";
  }
  if (meta_title && meta_title.length > 120) {
    errors.meta_title = "Meta title is too long.";
  }
  if (meta_description && meta_description.length > 320) {
    errors.meta_description = "Meta description is too long.";
  }

  const valid = Object.keys(errors).length === 0;

  return {
    valid,
    errors,
    data: {
      title,
      slug,
      excerpt,
      meta_title: meta_title || title,
      meta_description,
      category,
      tags,
      author_name,
      content,
      related_services,
      related_industries,
      related_slugs,
      featured,
      hero_image,
      hero_image_alt,
      hero_placeholder: raw.hero_placeholder || null,
      status: mode === "published" ? BLOG_STATUS_PUBLISHED : BLOG_STATUS_DRAFT,
    },
  };
}
