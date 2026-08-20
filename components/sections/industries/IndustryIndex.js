import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { industry_index_icons } from "@/lib/industry_icons";
import { industry_navigation } from "@/config/navigation";

export function IndustryIndex() {
  return (
    <div className="divide-y divide-border border-y border-border">
      {industry_navigation.map((industry, index) => {
        const number = String(index + 1).padStart(2, "0");
        const Icon = industry_index_icons[number];

        return (
          <Reveal key={industry.href} stagger_index={index}>
            <Link
              href={industry.href}
              className="group grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-x-8 md:gap-y-0 items-start py-6 md:py-8 px-1 md:px-2 transition-colors duration-200 hover:bg-surface/40 ds-focus rounded-sm"
            >
              <div className="md:col-span-1 md:pt-2">
                <span className="text-[0.6875rem] font-semibold tabular-nums leading-none tracking-normal text-brand-primary">
                  {number}
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
                  <h2 className="ds-h3 text-text-primary min-w-0 transition-colors duration-200 group-hover:text-brand-primary">
                    {industry.label}
                  </h2>
                </div>
                <p className="ds-body text-text-secondary">
                  {industry.description}
                </p>
              </div>
              <div className="md:col-span-3 md:flex md:justify-end md:items-start md:pt-1">
                <span className="inline-flex items-center gap-2 min-h-11 text-sm font-medium text-text-primary transition-colors duration-200 group-hover:text-brand-primary">
                  Explore industry
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
  );
}
