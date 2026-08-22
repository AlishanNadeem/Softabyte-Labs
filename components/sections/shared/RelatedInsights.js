import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/sections/home/SectionHeader";
import { get_related_insights } from "@/config/related_insights_links";

export function RelatedInsights({
  path,
  eyebrow = "From the blog",
  headline = "Related reading",
}) {
  const articles = get_related_insights(path);

  if (!articles.length) return null;

  return (
    <Reveal>
      <SectionHeader
        eyebrow={eyebrow}
        headline={headline}
        className="mb-8 md:mb-10"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}/`}
            className="group block rounded-md border border-border bg-background-secondary p-5 md:p-6 h-full transition-colors duration-200 hover:border-brand-primary-border hover:bg-surface ds-focus"
          >
            <span className="ds-eyebrow text-brand-primary">
              {article.category}
            </span>
            <h3 className="ds-h4 text-text-primary mt-3 mb-2 group-hover:text-brand-primary transition-colors duration-200">
              {article.title}
            </h3>
            <p className="ds-body-small text-text-secondary mb-4">
              {article.excerpt}
            </p>
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-text-primary group-hover:text-brand-primary transition-colors duration-200">
              Read article
              <ArrowRight
                size={14}
                strokeWidth={1.75}
                className="ds-arrow-shift shrink-0"
                aria-hidden="true"
              />
            </span>
          </Link>
        ))}
      </div>
    </Reveal>
  );
}
