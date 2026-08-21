import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { TextLink } from "@/components/ui/TextLink";
import { insights_section } from "@/config/homepage_content";
import { SectionHeader } from "@/components/sections/home/SectionHeader";
import { format_blog_date } from "@/lib/blog/helpers";
import { get_latest_blog_posts } from "@/lib/blog/repository";

export async function HomeInsights() {
  const posts = await get_latest_blog_posts(3);

  return (
    <section className="ds-section bg-background-deep border-b border-border">
      <div className="ds-container">
        <SectionHeader
          eyebrow={insights_section.eyebrow}
          headline={insights_section.headline}
          description={insights_section.description}
        />
        <Reveal>
          {posts.length === 0 ? (
            <p className="ds-body text-text-secondary">
              Practical articles on software decisions, delivery, and operations
              — published when ready.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="rounded-md border border-border bg-background-secondary p-5 md:p-6 transition-colors duration-200 hover:border-brand-primary-border"
                >
                  <p className="ds-eyebrow text-brand-primary mb-3">
                    {post.category}
                  </p>
                  <h3 className="ds-h4 text-text-primary mb-3">
                    <Link
                      href={post.path}
                      className="hover:text-brand-primary transition-colors duration-200 ds-focus rounded-sm"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="ds-body-small text-text-secondary mb-4">
                    {post.excerpt}
                  </p>
                  <p className="text-xs text-text-muted">
                    <time dateTime={post.published_at}>
                      {format_blog_date(post.published_at)}
                    </time>
                    <span aria-hidden="true"> · </span>
                    {post.reading_time_minutes} min read
                  </p>
                </article>
              ))}
            </div>
          )}
          <TextLink href={insights_section.cta.href}>
            {insights_section.cta.label}
          </TextLink>
        </Reveal>
      </div>
    </section>
  );
}
