import Link from "next/link";
import { BackgroundBlur } from "@/components/ui/BackgroundBlur";
import { Reveal } from "@/components/ui/Reveal";
import { Breadcrumbs } from "@/components/sections/services/Breadcrumbs";
import { SectionHeader } from "@/components/sections/home/SectionHeader";
import { GlobalCTA } from "@/components/sections/GlobalCTA";
import { BlogCard } from "@/components/blog/BlogCard";
import { blog_hub } from "@/config/blog_content";

export function BlogHubView({ featured_post, posts = [] }) {
  const grid_posts = posts.filter(
    (post) => !featured_post || post.slug !== featured_post.slug
  );

  return (
    <>
      <section className="relative border-b border-border bg-background-deep overflow-hidden">
        <BackgroundBlur
          variant="primary"
          position="top-right"
          size="md"
          opacity={0.22}
          mobile="reduce"
        />
        <div className="ds-container relative z-[1] py-12 md:py-16 lg:py-20">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Blog" }]}
          />
          <Reveal>
            <div className="max-w-3xl">
              <p className="ds-eyebrow text-brand-primary mb-4">
                {blog_hub.hero.eyebrow}
              </p>
              <span className="ds-accent-line mb-5 block" aria-hidden="true" />
              <h1 className="ds-h1 text-text-primary mb-5">
                {blog_hub.hero.h1}
              </h1>
              <p className="ds-body-large text-text-secondary">
                {blog_hub.hero.description}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {featured_post && (
        <section className="border-b border-border bg-background-primary">
          <div className="ds-container py-12 md:py-16">
            <Reveal>
              <p className="ds-eyebrow text-brand-primary mb-4">Featured</p>
              <BlogCard post={featured_post} featured />
            </Reveal>
          </div>
        </section>
      )}

      <section className="border-b border-border bg-background-secondary">
        <div className="ds-container py-12 md:py-16 lg:py-20">
          <SectionHeader
            eyebrow={blog_hub.grid_eyebrow}
            headline={blog_hub.grid_headline}
          />
          {posts.length === 0 ? (
            <p className="ds-body text-text-secondary">
              Articles will appear here when published.
            </p>
          ) : (
            <Reveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                {(grid_posts.length ? grid_posts : posts).map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            </Reveal>
          )}
        </div>
      </section>

      <section className="border-b border-border bg-background-primary">
        <div className="ds-container py-12 md:py-16">
          <SectionHeader
            eyebrow={blog_hub.services_bridge.eyebrow}
            headline={blog_hub.services_bridge.headline}
            description={blog_hub.services_bridge.description}
          />
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl list-none pl-0 m-0">
            {blog_hub.services_bridge.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center justify-between gap-3 rounded-md border border-border bg-background-secondary px-4 py-3.5 text-sm font-medium text-text-primary hover:border-brand-primary-border hover:text-brand-primary transition-colors duration-200 ds-focus"
                >
                  <span>{link.label}</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <GlobalCTA
        eyebrow={blog_hub.cta.eyebrow}
        headline={blog_hub.cta.headline}
        description={blog_hub.cta.description}
        primary_action={blog_hub.cta.primary_action}
        secondary_action={blog_hub.cta.secondary_action}
        theme="dark"
      />
    </>
  );
}
