/**
 * Blog helpers — Phase 9.
 * Pure utilities; safe for Server Components.
 */

const WORDS_PER_MINUTE = 220;

export function slugify_heading(text) {
  return String(text)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function count_words_in_block(block) {
  if (!block) return 0;

  if (block.type === "paragraph" || block.type === "callout") {
    return String(block.text || "")
      .trim()
      .split(/\s+/)
      .filter(Boolean).length;
  }

  if (block.type === "rich_paragraph") {
    return (block.segments || [])
      .map((segment) => String(segment.value || "").trim())
      .join(" ")
      .split(/\s+/)
      .filter(Boolean).length;
  }

  if (block.type === "heading") {
    return String(block.text || "")
      .trim()
      .split(/\s+/)
      .filter(Boolean).length;
  }

  if (block.type === "unordered_list" || block.type === "ordered_list") {
    return (block.items || [])
      .join(" ")
      .split(/\s+/)
      .filter(Boolean).length;
  }

  return 0;
}

export function count_content_words(content = []) {
  return content.reduce((total, block) => total + count_words_in_block(block), 0);
}

export function get_reading_time_minutes(content = []) {
  const words = count_content_words(content);
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
}

export function format_blog_date(iso_date) {
  if (!iso_date) return "";
  const date = new Date(`${iso_date}T12:00:00`);
  if (Number.isNaN(date.getTime())) return "";

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export function get_heading_blocks(content = []) {
  return content
    .filter((block) => block.type === "heading" && block.level === 2)
    .map((block) => ({
      id: block.id || slugify_heading(block.text),
      text: block.text,
    }));
}

export function enrich_blog_post(post) {
  if (!post) return null;

  const reading_time_minutes = get_reading_time_minutes(post.content || []);
  const path = `/blog/${post.slug}/`;

  return {
    ...post,
    path,
    reading_time_minutes,
    author_name: post.author_name || "Softabyte Labs",
  };
}
