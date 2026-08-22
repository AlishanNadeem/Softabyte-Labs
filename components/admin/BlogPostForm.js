"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { BlogBlockEditor } from "@/components/admin/BlogBlockEditor";
import {
  check_primary_keyword_conflict_action,
  delete_blog_action,
  publish_blog_action,
  save_blog_draft_action,
  unpublish_blog_action,
} from "@/lib/admin/actions";
import {
  industry_navigation,
  service_navigation,
} from "@/config/navigation";
import { slugify_blog_title } from "@/lib/blog/helpers";
import { BLOG_STATUS_PUBLISHED } from "@/lib/admin/constants";
import {
  CONTENT_CLUSTER_OPTIONS,
  SEARCH_INTENT_OPTIONS,
  find_commercial_owner_overlap,
} from "@/lib/seo/content_planning";

function tags_to_string(tags) {
  if (Array.isArray(tags)) return tags.join(", ");
  return String(tags || "");
}

function hrefs_from_related(items) {
  if (!Array.isArray(items)) return [];
  return items.map((item) => item.href).filter(Boolean);
}

function build_related(selected_hrefs, navigation) {
  return navigation
    .filter((item) => selected_hrefs.includes(item.href))
    .map((item) => ({ label: item.label, href: item.href }));
}

function initial_state(post) {
  return {
    title: post?.title || "",
    slug: post?.slug || "",
    excerpt: post?.excerpt || "",
    category: post?.category || "",
    tags: tags_to_string(post?.tags),
    meta_title: post?.meta_title || "",
    meta_description: post?.meta_description || "",
    featured: Boolean(post?.featured),
    hero_image: post?.hero_image || "",
    hero_image_alt: post?.hero_image_alt || "",
    content: Array.isArray(post?.content) ? post.content : [],
    related_service_hrefs: hrefs_from_related(post?.related_services),
    related_industry_hrefs: hrefs_from_related(post?.related_industries),
    primary_keyword: post?.primary_keyword || "",
    search_intent: post?.search_intent || "",
    content_cluster: post?.content_cluster || "",
    target_service: post?.target_service || "",
    target_industry: post?.target_industry || "",
  };
}

export function BlogPostForm({ post = null, mode = "create" }) {
  const router = useRouter();
  const [form, set_form] = useState(() => initial_state(post));
  const [errors, set_errors] = useState({});
  const [form_message, set_form_message] = useState("");
  const [is_pending, set_is_pending] = useState(false);
  const [keyword_conflicts, set_keyword_conflicts] = useState(null);
  const [checking_keyword, set_checking_keyword] = useState(false);

  const post_id = post?.id || null;
  const status = post?.status || "draft";
  const is_published = status === BLOG_STATUS_PUBLISHED;
  const slug_locked =
    is_published || Boolean(post?.published_at);

  const meta_title_count = form.meta_title.length;
  const meta_description_count = form.meta_description.length;

  const commercial_owner_overlap = useMemo(
    () => find_commercial_owner_overlap(form.primary_keyword),
    [form.primary_keyword]
  );

  async function handle_check_keyword_conflict() {
    const value = form.primary_keyword.trim();
    if (!value) return;
    set_checking_keyword(true);
    set_keyword_conflicts(null);
    try {
      const result = await check_primary_keyword_conflict_action(
        value,
        post_id
      );
      set_keyword_conflicts(result?.matches || []);
    } catch (error) {
      set_keyword_conflicts([]);
    } finally {
      set_checking_keyword(false);
    }
  }

  const page_title = useMemo(() => {
    if (mode === "edit") return "Edit blog post";
    return "New blog post";
  }, [mode]);

  function update_field(name, value) {
    set_form((current) => {
      const next = { ...current, [name]: value };
      if (name === "title" && !slug_locked && !is_published) {
        next.slug = slugify_blog_title(value);
      }
      return next;
    });
    if (errors[name] || errors.form) {
      set_errors((current) => {
        const next = { ...current };
        delete next[name];
        delete next.form;
        return next;
      });
    }
  }

  function toggle_related(group, href) {
    set_form((current) => {
      const key =
        group === "services"
          ? "related_service_hrefs"
          : "related_industry_hrefs";
      const existing = current[key] || [];
      const next_values = existing.includes(href)
        ? existing.filter((item) => item !== href)
        : [...existing, href];
      return { ...current, [key]: next_values };
    });
  }

  function build_payload() {
    return {
      title: form.title,
      slug: form.slug,
      excerpt: form.excerpt,
      category: form.category,
      tags: form.tags,
      meta_title: form.meta_title,
      meta_description: form.meta_description,
      featured: form.featured,
      hero_image: form.hero_image || null,
      hero_image_alt: form.hero_image_alt || null,
      hero_placeholder: post?.hero_placeholder || null,
      content: form.content,
      related_services: build_related(
        form.related_service_hrefs,
        service_navigation
      ),
      related_industries: build_related(
        form.related_industry_hrefs,
        industry_navigation
      ),
      related_slugs: Array.isArray(post?.related_slugs)
        ? post.related_slugs
        : [],
      primary_keyword: form.primary_keyword,
      search_intent: form.search_intent,
      content_cluster: form.content_cluster,
      target_service: form.target_service,
      target_industry: form.target_industry,
    };
  }

  async function run_action(action_name) {
    set_is_pending(true);
    set_form_message("");
    set_errors({});

    const payload = build_payload();
    let result;

    try {
      if (action_name === "draft") {
        result = await save_blog_draft_action(post_id, payload);
      } else if (action_name === "publish") {
        result = await publish_blog_action(post_id, payload);
      } else if (action_name === "unpublish") {
        result = await unpublish_blog_action(post_id, payload);
      } else if (action_name === "delete") {
        result = await delete_blog_action(post_id);
      }
    } catch (error) {
      set_form_message("Something went wrong. Please try again.");
      set_is_pending(false);
      return;
    }

    if (!result?.ok) {
      set_errors(result?.errors || {});
      set_form_message(
        result?.message ||
          result?.errors?.form ||
          "Could not save the post. Check the fields below."
      );
      set_is_pending(false);
      return;
    }

    if (action_name === "delete") {
      router.push("/admin/blog/");
      router.refresh();
      return;
    }

    const next_id = result.post?.id || post_id;
    if (next_id) {
      router.push(`/admin/blog/${next_id}/edit/`);
      router.refresh();
    } else {
      router.push("/admin/blog/");
      router.refresh();
    }
  }

  async function handle_delete() {
    const confirmed = window.confirm(
      "Delete this draft permanently? This cannot be undone."
    );
    if (!confirmed) return;
    await run_action("delete");
  }

  async function handle_unpublish() {
    const confirmed = window.confirm(
      "Unpublish this article? It will leave the public Blog and may make an indexed URL unavailable."
    );
    if (!confirmed) return;
    await run_action("unpublish");
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-text-primary">
            {page_title}
          </h1>
          {mode === "edit" ? (
            <p className="mt-1 text-sm text-text-secondary">
              Status:{" "}
              <span className="text-brand-primary">{status}</span>
              {post?.slug ? (
                <>
                  {" "}
                  ·{" "}
                  <Link
                    href={`/admin/blog/${post_id}/preview/`}
                    className="text-brand-primary hover:underline"
                  >
                    Preview
                  </Link>
                </>
              ) : null}
            </p>
          ) : null}
        </div>
        <Link
          href="/admin/blog/"
          className="text-sm text-text-secondary hover:text-brand-primary"
        >
          Back to blog list
        </Link>
      </div>

      {form_message ? (
        <p
          className="rounded-md border border-border bg-background-secondary px-3 py-2 text-sm text-text-secondary"
          role="alert"
        >
          {form_message}
        </p>
      ) : null}

      <div className="space-y-5 rounded-md border border-border bg-background-secondary p-4 sm:p-6">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="space-y-2 md:col-span-2">
            <label htmlFor="blog-title" className="text-sm font-medium">
              Title
            </label>
            <input
              id="blog-title"
              className="ds-input w-full"
              value={form.title}
              onChange={(event) => update_field("title", event.target.value)}
              disabled={is_pending}
            />
            {errors.title ? (
              <p className="text-sm text-text-muted">{errors.title}</p>
            ) : null}
          </div>

          <div className="space-y-2 md:col-span-2">
            <label htmlFor="blog-slug" className="text-sm font-medium">
              Slug
            </label>
            <input
              id="blog-slug"
              className="ds-input w-full"
              value={form.slug}
              onChange={(event) => update_field("slug", event.target.value)}
              disabled={is_pending || slug_locked}
            />
            {slug_locked ? (
              <p className="text-xs text-text-muted">
                Slug is locked because this post has been published.
              </p>
            ) : null}
            {errors.slug ? (
              <p className="text-sm text-text-muted">{errors.slug}</p>
            ) : null}
          </div>

          <div className="space-y-2 md:col-span-2">
            <label htmlFor="blog-excerpt" className="text-sm font-medium">
              Excerpt
            </label>
            <textarea
              id="blog-excerpt"
              className="ds-input ds-textarea min-h-24 w-full"
              value={form.excerpt}
              onChange={(event) => update_field("excerpt", event.target.value)}
              disabled={is_pending}
            />
            {errors.excerpt ? (
              <p className="text-sm text-text-muted">{errors.excerpt}</p>
            ) : null}
          </div>

          <div className="space-y-2">
            <label htmlFor="blog-category" className="text-sm font-medium">
              Category
            </label>
            <input
              id="blog-category"
              className="ds-input w-full"
              value={form.category}
              onChange={(event) => update_field("category", event.target.value)}
              disabled={is_pending}
            />
            {errors.category ? (
              <p className="text-sm text-text-muted">{errors.category}</p>
            ) : null}
          </div>

          <div className="space-y-2">
            <label htmlFor="blog-tags" className="text-sm font-medium">
              Tags
            </label>
            <input
              id="blog-tags"
              className="ds-input w-full"
              value={form.tags}
              onChange={(event) => update_field("tags", event.target.value)}
              placeholder="comma, separated, tags"
              disabled={is_pending}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="blog-meta-title" className="text-sm font-medium">
              Meta title
            </label>
            <input
              id="blog-meta-title"
              className="ds-input w-full"
              value={form.meta_title}
              onChange={(event) =>
                update_field("meta_title", event.target.value)
              }
              disabled={is_pending}
            />
            <p className="text-xs text-text-muted">
              {meta_title_count} / 120 characters
            </p>
            {errors.meta_title ? (
              <p className="text-sm text-text-muted">{errors.meta_title}</p>
            ) : null}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="blog-meta-description"
              className="text-sm font-medium"
            >
              Meta description
            </label>
            <textarea
              id="blog-meta-description"
              className="ds-input ds-textarea min-h-24 w-full"
              value={form.meta_description}
              onChange={(event) =>
                update_field("meta_description", event.target.value)
              }
              disabled={is_pending}
            />
            <p className="text-xs text-text-muted">
              {meta_description_count} / 320 characters
            </p>
            {errors.meta_description ? (
              <p className="text-sm text-text-muted">
                {errors.meta_description}
              </p>
            ) : null}
          </div>

          <div className="space-y-2">
            <label htmlFor="blog-hero-image" className="text-sm font-medium">
              Hero image path
            </label>
            <input
              id="blog-hero-image"
              className="ds-input w-full"
              value={form.hero_image}
              onChange={(event) =>
                update_field("hero_image", event.target.value)
              }
              placeholder="/images/blog/example.webp"
              disabled={is_pending}
            />
            {errors.hero_image ? (
              <p className="text-sm text-text-muted">{errors.hero_image}</p>
            ) : null}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="blog-hero-image-alt"
              className="text-sm font-medium"
            >
              Hero image alt
            </label>
            <input
              id="blog-hero-image-alt"
              className="ds-input w-full"
              value={form.hero_image_alt}
              onChange={(event) =>
                update_field("hero_image_alt", event.target.value)
              }
              disabled={is_pending}
            />
            {errors.hero_image_alt ? (
              <p className="text-sm text-text-muted">{errors.hero_image_alt}</p>
            ) : null}
          </div>

          <div className="flex items-center gap-2 md:col-span-2">
            <input
              id="blog-featured"
              type="checkbox"
              className="h-4 w-4"
              checked={form.featured}
              onChange={(event) =>
                update_field("featured", event.target.checked)
              }
              disabled={is_pending}
            />
            <label htmlFor="blog-featured" className="text-sm">
              Featured post
            </label>
          </div>
        </div>

        <fieldset className="space-y-4 border-t border-border pt-5">
          <div>
            <legend className="text-sm font-medium text-text-primary">
              SEO planning (internal only)
            </legend>
            <p className="mt-1 text-xs text-text-muted">
              Editorial planning fields for the content team. Never shown
              publicly, never included in page metadata.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2 sm:col-span-2">
              <label
                htmlFor="blog-primary-keyword"
                className="text-sm font-medium"
              >
                Primary keyword / theme
              </label>
              <div className="flex flex-wrap items-start gap-2">
                <input
                  id="blog-primary-keyword"
                  className="ds-input w-full sm:max-w-sm"
                  value={form.primary_keyword}
                  onChange={(event) =>
                    update_field("primary_keyword", event.target.value)
                  }
                  disabled={is_pending}
                />
                <button
                  type="button"
                  className="ds-btn ds-btn--secondary inline-flex min-h-9 items-center rounded-md border border-border px-3 text-xs"
                  onClick={handle_check_keyword_conflict}
                  disabled={is_pending || checking_keyword || !form.primary_keyword.trim()}
                >
                  {checking_keyword ? "Checking…" : "Check for conflicts"}
                </button>
              </div>
              {keyword_conflicts && keyword_conflicts.length > 0 ? (
                <p className="text-xs text-text-muted" role="status">
                  Already used by: {" "}
                  {keyword_conflicts
                    .map((item) => `${item.title || item.slug} (${item.status})`)
                    .join(", ")}
                </p>
              ) : null}
              {keyword_conflicts && keyword_conflicts.length === 0 ? (
                <p className="text-xs text-text-muted" role="status">
                  No other post uses this exact primary keyword.
                </p>
              ) : null}
              {commercial_owner_overlap.length > 0 ? (
                <p className="text-xs text-text-muted" role="status">
                  Note: this theme is close to the commercial primary of{" "}
                  {commercial_owner_overlap
                    .map((owner) => owner.label)
                    .join(", ")}
                  . Consider a differentiated angle before drafting.
                </p>
              ) : null}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="blog-search-intent"
                className="text-sm font-medium"
              >
                Search intent
              </label>
              <select
                id="blog-search-intent"
                className="ds-input w-full"
                value={form.search_intent}
                onChange={(event) =>
                  update_field("search_intent", event.target.value)
                }
                disabled={is_pending}
              >
                <option value="">Not set</option>
                {SEARCH_INTENT_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="blog-content-cluster"
                className="text-sm font-medium"
              >
                Content cluster
              </label>
              <select
                id="blog-content-cluster"
                className="ds-input w-full"
                value={form.content_cluster}
                onChange={(event) =>
                  update_field("content_cluster", event.target.value)
                }
                disabled={is_pending}
              >
                <option value="">Not set</option>
                {CONTENT_CLUSTER_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="blog-target-service"
                className="text-sm font-medium"
              >
                Target service (planning)
              </label>
              <select
                id="blog-target-service"
                className="ds-input w-full"
                value={form.target_service}
                onChange={(event) =>
                  update_field("target_service", event.target.value)
                }
                disabled={is_pending}
              >
                <option value="">None</option>
                {service_navigation.map((service) => (
                  <option key={service.href} value={service.href}>
                    {service.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="blog-target-industry"
                className="text-sm font-medium"
              >
                Target industry (planning)
              </label>
              <select
                id="blog-target-industry"
                className="ds-input w-full"
                value={form.target_industry}
                onChange={(event) =>
                  update_field("target_industry", event.target.value)
                }
                disabled={is_pending}
              >
                <option value="">None</option>
                {industry_navigation.map((industry) => (
                  <option key={industry.href} value={industry.href}>
                    {industry.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </fieldset>

        <fieldset className="space-y-3 border-t border-border pt-5">
          <legend className="text-sm font-medium text-text-primary">
            Related services
          </legend>
          <div className="grid gap-2 sm:grid-cols-2">
            {service_navigation.map((service) => (
              <label
                key={service.href}
                className="flex items-start gap-2 text-sm text-text-secondary"
              >
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4"
                  checked={form.related_service_hrefs.includes(service.href)}
                  onChange={() => toggle_related("services", service.href)}
                  disabled={is_pending}
                />
                <span>{service.label}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset className="space-y-3 border-t border-border pt-5">
          <legend className="text-sm font-medium text-text-primary">
            Related industries
          </legend>
          <div className="grid gap-2 sm:grid-cols-2">
            {industry_navigation.map((industry) => (
              <label
                key={industry.href}
                className="flex items-start gap-2 text-sm text-text-secondary"
              >
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4"
                  checked={form.related_industry_hrefs.includes(industry.href)}
                  onChange={() => toggle_related("industries", industry.href)}
                  disabled={is_pending}
                />
                <span>{industry.label}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="border-t border-border pt-5">
          {errors.content ? (
            <p className="mb-3 text-sm text-text-muted">{errors.content}</p>
          ) : null}
          <BlogBlockEditor
            content={form.content}
            on_change={(content) => update_field("content", content)}
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          className="ds-btn ds-btn--secondary inline-flex min-h-11 items-center rounded-md border border-border px-5 text-sm"
          onClick={() => run_action("draft")}
          disabled={is_pending}
        >
          Save draft
        </button>
        <button
          type="button"
          className="ds-btn ds-btn--primary inline-flex min-h-11 items-center rounded-md px-5 text-sm font-medium"
          onClick={() => run_action("publish")}
          disabled={is_pending}
        >
          Publish
        </button>
        {is_published ? (
          <button
            type="button"
            className="ds-btn ds-btn--secondary inline-flex min-h-11 items-center rounded-md border border-border px-5 text-sm"
            onClick={handle_unpublish}
            disabled={is_pending}
          >
            Unpublish
          </button>
        ) : null}
        {mode === "edit" && !is_published ? (
          <button
            type="button"
            className="ds-btn ds-btn--secondary inline-flex min-h-11 items-center rounded-md border border-border px-5 text-sm text-text-muted"
            onClick={handle_delete}
            disabled={is_pending}
          >
            Delete draft
          </button>
        ) : null}
      </div>
    </div>
  );
}
