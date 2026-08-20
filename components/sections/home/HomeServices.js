import Link from "next/link";
import {
  ArrowRight,
  Braces,
  Globe,
  PenTool,
  Server,
  Smartphone,
  Workflow,
} from "lucide-react";
import { BackgroundBlur } from "@/components/ui/BackgroundBlur";
import { Reveal } from "@/components/ui/Reveal";
import { TextLink } from "@/components/ui/TextLink";
import { services_section } from "@/config/homepage_content";
import { SectionHeader } from "@/components/sections/home/SectionHeader";

const service_icons = {
  "01": Braces,
  "02": Globe,
  "03": Smartphone,
  "04": Workflow,
  "05": PenTool,
  "06": Server,
};

export function HomeServices() {
  return (
    <section className="relative ds-section bg-background-secondary border-b border-border overflow-hidden">
      <BackgroundBlur
        variant="primary"
        position="bottom-left"
        size="lg"
        opacity={0.28}
        mobile="reduce"
      />
      <div className="ds-container relative z-[1]">
        <SectionHeader
          eyebrow={services_section.eyebrow}
          headline={services_section.headline}
          description={services_section.description}
        />
        <div className="divide-y divide-border border-y border-border">
          {services_section.items.map((service, index) => {
            const Icon = service_icons[service.index];
            return (
              <Reveal key={service.href} stagger_index={index}>
                <Link
                  href={service.href}
                  className="group grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-x-8 md:gap-y-0 items-start py-6 md:py-8 px-1 md:px-2 transition-colors duration-200 hover:bg-surface/40 ds-focus rounded-sm"
                >
                  <div className="md:col-span-1 md:pt-2">
                    <span className="text-[0.6875rem] font-semibold tabular-nums leading-none tracking-normal text-brand-primary">
                      {service.index}
                    </span>
                  </div>
                  <div className="md:col-span-8 space-y-2">
                    <div className="flex items-center gap-3.5 min-w-0">
                      {Icon && (
                        <span
                          className="inline-flex items-center justify-center w-9 h-9 shrink-0 rounded-[10px] bg-background-secondary border border-border transition-[border-color] duration-200 group-hover:border-brand-primary-border"
                          aria-hidden="true"
                        >
                          <Icon
                            size={17}
                            strokeWidth={1.75}
                            className="text-text-secondary transition-colors duration-200 group-hover:text-brand-primary"
                            aria-hidden="true"
                          />
                        </span>
                      )}
                      <h3 className="ds-h3 text-text-primary min-w-0 transition-colors duration-200 group-hover:text-brand-primary">
                        {service.label}
                      </h3>
                    </div>
                    <p className="ds-body text-text-secondary">
                      {service.description}
                    </p>
                  </div>
                  <div className="md:col-span-3 md:flex md:justify-end md:items-start md:pt-1">
                    <span className="inline-flex items-center gap-2 min-h-11 text-sm font-medium text-text-primary transition-colors duration-200 group-hover:text-brand-primary">
                      Explore service
                      <ArrowRight
                        size={16}
                        strokeWidth={1.75}
                        className="ds-arrow-shift shrink-0"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
        <div className="mt-8">
          <TextLink href={services_section.view_all.href}>
            {services_section.view_all.label}
          </TextLink>
        </div>
      </div>
    </section>
  );
}
