import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BackgroundBlur } from "@/components/ui/BackgroundBlur";
import { Breadcrumbs } from "@/components/sections/services/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { BlogArticleContent } from "@/components/blog/BlogArticleContent";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogTableOfContents } from "@/components/blog/BlogTableOfContents";
import { BlogVisualPlaceholder } from "@/components/blog/BlogCard";
import { format_blog_date, get_heading_blocks } from "@/lib/blog/helpers";
import { primary_cta } from "@/config/navigation";

export function BlogArticleView({ post, related_posts = [] }) {
  const toc_items = get_heading_blocks(post.content || []);
  const published_label = format_blog_date(post.published_at);
  const show_updated =
    post.updated_at && post.updated_at !== post.published_at;

  return (
    <>
      <article>
        <header className="relative border-b border-border bg-background-deep overflow-hidden">
          <BackgroundBlur
            variant="primary"
            position="top-right"
            size="sm"
            opacity={0.16}
            mobile="hide"
          />
          <div className="ds-container relative z-[1] py-12 md:py-16">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog/" },
                { label: post.title },
              ]}
            />
            <div className="max-w-3xl">
              <p className="ds-eyebrow text-brand-primary mb-4">
                {post.category}
              </p>
              <span className="ds-accent-line mb-5 block" aria-hidden="true" />
              <h1 className="ds-h1 text-text-primary mb-5">{post.title}</h1>
              <p className="ds-body-large text-text-secondary mb-6">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-text-muted">
                <span>{post.author_name}</span>
                <span aria-hidden="true">·</span>
                <time dateTime={post.published_at}>{published_label}</time>
                {show_updated && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span>
                      Updated{" "}
                      <time dateTime={post.updated_at}>
                        {format_blog_date(post.updated_at)}
                      </time>
                    </span>
                  </>
                )}
                <span aria-hidden="true">·</span>
                <span>{post.reading_time_minutes} min read</span>
              </div>
            </div>
          </div>
        </header>

        <div className="border-b border-border bg-background-primary">
          <div className="ds-container py-8 md:py-10 max-w-5xl">
            <BlogVisualPlaceholder
              category={post.category}
              aspect_class="aspect-[14/9]"
            />
          </div>
        </div>

        <div className="border-b border-border bg-background-primary">
          <div className="ds-container py-12 md:py-16 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
              <aside className="lg:col-span-3 order-1 lg:order-none">
                <div className="lg:sticky lg:top-28">
                  <BlogTableOfContents items={toc_items} />
                </div>
              </aside>

              <div className="lg:col-span-8 lg:col-start-5 max-w-[46rem]">
                <BlogArticleContent content={post.content} />

                {(post.related_services?.length > 0 ||
                  post.related_industries?.length > 0) && (
                  <div className="mt-12 pt-8 border-t border-border space-y-6">
                    {post.related_services?.length > 0 && (
                      <div>
                        <p className="ds-eyebrow text-text-muted mb-3">
                          Related services
                        </p>
                        <ul className="space-y-2 list-none pl-0 m-0">
                          {post.related_services.map((service) => (
                            <li key={service.href}>
                              <Link
                                href={service.href}
                                className="text-sm font-medium text-brand-primary hover:underline ds-focus rounded-sm"
                              >
                                {service.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {post.related_industries?.length > 0 && (
                      <div>
                        <p className="ds-eyebrow text-text-muted mb-3">
                          Related industries
                        </p>
                        <ul className="space-y-2 list-none pl-0 m-0">
                          {post.related_industries.map((industry) => (
                            <li key={industry.href}>
                              <Link
                                href={industry.href}
                                className="text-sm font-medium text-brand-primary hover:underline ds-focus rounded-sm"
                              >
                                {industry.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                <div className="mt-12 rounded-md border border-border bg-background-secondary p-6 md:p-8">
                  <p className="ds-eyebrow text-brand-primary mb-3">Next step</p>
                  <h2 className="ds-h3 text-text-primary mb-3">
                    Need help applying this to your business?
                  </h2>
                  <p className="ds-body text-text-secondary mb-6">
                    Have a workflow or product challenge you want to discuss?
                    Share the context and we will respond with a clear next
                    step.
                  </p>
                  <Button href={primary_cta.href} variant="primary">
                    {primary_cta.label}
                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {related_posts.length > 0 && (
        <section className="border-b border-border bg-background-secondary">
          <div className="ds-container py-12 md:py-16">
            <p className="ds-eyebrow text-brand-primary mb-3">Keep reading</p>
            <h2 className="ds-h2 text-text-primary mb-8">Related articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {related_posts.map((related) => (
                <BlogCard key={related.slug} post={related} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
