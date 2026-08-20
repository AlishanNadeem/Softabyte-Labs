import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { TextLink } from "@/components/ui/TextLink";
import { industry_navigation } from "@/config/navigation";
import { industries_section } from "@/config/homepage_content";
import { SectionHeader } from "@/components/sections/home/SectionHeader";

export function HomeIndustries() {
  return (
    <section className="ds-section bg-background-secondary border-b border-border">
      <div className="ds-container">
        <SectionHeader
          eyebrow={industries_section.eyebrow}
          headline={industries_section.headline}
          description={industries_section.description}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-border rounded-md overflow-hidden bg-background-primary divide-y sm:divide-y-0 sm:divide-x divide-border">
          {industry_navigation.map((industry, index) => (
            <Reveal key={industry.href} stagger_index={index}>
              <Link
                href={industry.href}
                className="group block p-5 md:p-6 h-full transition-colors duration-200 hover:bg-surface ds-focus"
              >
                <span className="ds-eyebrow text-brand-primary block mb-3">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-base font-semibold font-heading text-text-primary mb-2 group-hover:text-brand-primary transition-colors duration-200">
                  {industry.label}
                </h3>
                <p className="ds-body-small text-text-muted mb-4">
                  {industry.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-text-secondary group-hover:text-brand-primary transition-colors duration-200">
                  View industry
                  <ArrowRight
                    size={14}
                    strokeWidth={1.75}
                    className="ds-arrow-shift shrink-0"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-8">
          <TextLink href={industries_section.view_all.href}>
            {industries_section.view_all.label}
          </TextLink>
        </div>
      </div>
    </section>
  );
}
