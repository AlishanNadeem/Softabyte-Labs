import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { service_icon_map } from "@/lib/service_icons";
import { get_service_by_slug } from "@/config/services_content";
import { SectionHeader } from "@/components/sections/home/SectionHeader";

export function RelatedServices({
  eyebrow = "Related services",
  headline = "Capabilities that often connect to this work",
  slugs = [],
}) {
  const services = slugs.map(get_service_by_slug).filter(Boolean);

  if (!services.length) return null;

  return (
    <Reveal>
      <SectionHeader
        eyebrow={eyebrow}
        headline={headline}
        className="mb-8 md:mb-10"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {services.map((service) => {
          const Icon = service_icon_map[service.slug];
          return (
            <Link
              key={service.slug}
              href={service.path}
              className="group block rounded-md border border-border bg-background-secondary p-5 md:p-6 h-full transition-colors duration-200 hover:border-brand-primary-border hover:bg-surface ds-focus"
            >
              {Icon && (
                <Icon
                  size={18}
                  strokeWidth={1.75}
                  className="text-text-muted mb-4 group-hover:text-brand-primary transition-colors duration-200"
                  aria-hidden="true"
                />
              )}
              <h3 className="ds-h4 text-text-primary mb-2 group-hover:text-brand-primary transition-colors duration-200">
                {service.short_label}
              </h3>
              <p className="ds-body-small text-text-secondary mb-4">
                {service.summary}
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-text-primary group-hover:text-brand-primary transition-colors duration-200">
                Explore service
                <ArrowRight
                  size={14}
                  strokeWidth={1.75}
                  className="ds-arrow-shift shrink-0"
                  aria-hidden="true"
                />
              </span>
            </Link>
          );
        })}
      </div>
    </Reveal>
  );
}
