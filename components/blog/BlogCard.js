import Link from "next/link";
import { format_blog_date } from "@/lib/blog/helpers";

export function BlogVisualPlaceholder({
  category,
  aspect_class = "aspect-[14/9]",
  className = "",
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-md border border-border bg-surface ${aspect_class} ${className}`.trim()}
      aria-hidden="true"
    >
      <div className="absolute inset-0 ds-blog-visual-grid" />
      <div className="absolute inset-0 ds-blog-visual-glow" />
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 flex items-end justify-between gap-3">
        {category ? (
          <span className="ds-eyebrow text-brand-primary">{category}</span>
        ) : (
          <span />
        )}
        <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow shrink-0" />
      </div>
    </div>
  );
}

export function BlogCard({ post, featured = false }) {
  if (!post) return null;

  const date_label = format_blog_date(post.published_at);

  return (
    <article
      className={`group rounded-md border border-border bg-background-secondary overflow-hidden transition-colors duration-200 hover:border-brand-primary-border ${
        featured ? "md:grid md:grid-cols-2" : "flex flex-col h-full"
      }`}
    >
      <div className={featured ? "" : ""}>
        <BlogVisualPlaceholder
          category={post.category}
          aspect_class={featured ? "aspect-[14/9] md:aspect-auto md:h-full md:min-h-[16rem]" : "aspect-[14/9]"}
        />
      </div>

      <div className="flex flex-col p-5 md:p-6 lg:p-7 flex-1">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-3">
          <span className="ds-eyebrow text-brand-primary">{post.category}</span>
          <span className="text-text-muted text-xs" aria-hidden="true">
            ·
          </span>
          <time
            dateTime={post.published_at}
            className="text-xs text-text-muted"
          >
            {date_label}
          </time>
          <span className="text-text-muted text-xs" aria-hidden="true">
            ·
          </span>
          <span className="text-xs text-text-muted">
            {post.reading_time_minutes} min read
          </span>
        </div>

        <h3
          className={`${featured ? "ds-h3" : "ds-h4"} text-text-primary mb-3`}
        >
          <Link
            href={post.path}
            className="hover:text-brand-primary transition-colors duration-200 ds-focus rounded-sm"
          >
            {post.title}
          </Link>
        </h3>

        <p className="ds-body-small text-text-secondary mb-5 flex-1">
          {post.excerpt}
        </p>

        <Link
          href={post.path}
          className="inline-flex items-center gap-2 text-sm font-medium text-brand-primary hover:text-brand-primary-hover transition-colors duration-200 ds-focus rounded-sm mt-auto"
        >
          Read article
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
