import Link from "next/link";
import {
  ArrowRight,
  LayoutDashboard,
  MonitorSmartphone,
  Workflow,
} from "lucide-react";
import { BackgroundBlur } from "@/components/ui/BackgroundBlur";
import { Reveal } from "@/components/ui/Reveal";
import { what_we_build_section } from "@/config/homepage_content";
import { SectionHeader } from "@/components/sections/home/SectionHeader";

const panel_icons = {
  "Business Platforms": LayoutDashboard,
  "Customer-Facing Products": MonitorSmartphone,
  "Operational Systems": Workflow,
};

function CapabilityVisual({ variant = "platform" }) {
  if (variant === "platform") {
    return (
      <div className="ds-capability-visual ds-capability-visual--platform" aria-hidden="true">
        <div className="ds-capability-visual__sidebar" />
        <div className="ds-capability-visual__main">
          <div className="ds-capability-visual__row">
            <span className="ds-capability-visual__block ds-capability-visual__block--wide" />
          </div>
          <div className="ds-capability-visual__row">
            <span className="ds-capability-visual__block" />
            <span className="ds-capability-visual__block" />
            <span className="ds-capability-visual__block" />
          </div>
          <div className="ds-capability-visual__row">
            <span className="ds-capability-visual__block ds-capability-visual__block--chart" />
            <span className="ds-capability-visual__block ds-capability-visual__block--list" />
          </div>
        </div>
      </div>
    );
  }

  if (variant === "product") {
    return (
      <div className="ds-capability-visual ds-capability-visual--product" aria-hidden="true">
        <div className="ds-capability-visual__browser">
          <div className="ds-capability-visual__browser-bar">
            <span />
            <span />
            <span />
          </div>
          <div className="ds-capability-visual__browser-body">
            <span className="ds-capability-visual__block ds-capability-visual__block--hero-line" />
            <span className="ds-capability-visual__block ds-capability-visual__block--hero-line short" />
          </div>
        </div>
        <div className="ds-capability-visual__phone">
          <div className="ds-capability-visual__phone-notch" />
          <div className="ds-capability-visual__phone-body">
            <span className="ds-capability-visual__block" />
            <span className="ds-capability-visual__block short" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="ds-capability-visual ds-capability-visual--workflow" aria-hidden="true">
      <div className="ds-capability-visual__node" />
      <div className="ds-capability-visual__connector" />
      <div className="ds-capability-visual__node ds-capability-visual__node--accent" />
      <div className="ds-capability-visual__connector" />
      <div className="ds-capability-visual__node" />
    </div>
  );
}

function FeaturedPanel({ item }) {
  const Icon = panel_icons[item.category];

  return (
    <article className="group rounded-md border border-border bg-surface overflow-hidden h-full transition-colors duration-300 hover:border-brand-primary-border">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[18rem]">
        <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
          <p className="ds-eyebrow text-brand-primary mb-3">{item.category}</p>
          <h3 className="ds-h3 text-text-primary mb-3">{item.title}</h3>
          <p className="ds-body text-text-secondary mb-6">{item.description}</p>
          <Link
            href={item.href}
            className="inline-flex items-center gap-2 text-sm font-medium text-text-primary group-hover:text-brand-primary transition-colors duration-200 ds-focus rounded-sm w-fit"
          >
            {item.link_label}
            <ArrowRight
              size={16}
              strokeWidth={1.75}
              className="ds-arrow-shift shrink-0"
              aria-hidden="true"
            />
          </Link>
        </div>
        <div className="relative border-t lg:border-t-0 lg:border-l border-border bg-background-secondary p-6 md:p-8 flex items-center justify-center min-h-[14rem]">
          {Icon && (
            <Icon
              size={20}
              strokeWidth={1.75}
              className="absolute top-5 right-5 text-text-muted"
              aria-hidden="true"
            />
          )}
          <CapabilityVisual variant="platform" />
        </div>
      </div>
    </article>
  );
}

function SupportingPanel({ item, visual_variant }) {
  const Icon = panel_icons[item.category];

  return (
    <article className="group rounded-md border border-border bg-background-secondary overflow-hidden h-full transition-colors duration-300 hover:border-brand-primary-border flex flex-col">
      <div className="relative border-b border-border bg-background-primary p-5 md:p-6 min-h-[10rem] flex items-center justify-center">
        {Icon && (
          <Icon
            size={18}
            strokeWidth={1.75}
            className="absolute top-4 right-4 text-text-muted"
            aria-hidden="true"
          />
        )}
        <CapabilityVisual variant={visual_variant} />
      </div>
      <div className="p-5 md:p-6 flex flex-col flex-1">
        <p className="ds-eyebrow text-brand-primary mb-2">{item.category}</p>
        <h3 className="ds-h4 text-text-primary mb-2">{item.title}</h3>
        <p className="ds-body-small text-text-secondary mb-4 flex-1">
          {item.description}
        </p>
        <Link
          href={item.href}
          className="inline-flex items-center gap-2 text-sm font-medium text-text-primary group-hover:text-brand-primary transition-colors duration-200 ds-focus rounded-sm w-fit mt-auto"
        >
          {item.link_label}
          <ArrowRight
            size={16}
            strokeWidth={1.75}
            className="ds-arrow-shift shrink-0"
            aria-hidden="true"
          />
        </Link>
      </div>
    </article>
  );
}

export function HomeWhatWeBuild() {
  const visual_variants = ["product", "workflow"];

  return (
    <section className="relative ds-section bg-background-deep border-b border-border overflow-hidden">
      <BackgroundBlur
        variant="secondary"
        position="top-right"
        size="md"
        opacity={0.16}
        mobile="hide"
      />
      <div className="ds-container relative z-[1]">
        <SectionHeader
          eyebrow={what_we_build_section.eyebrow}
          headline={what_we_build_section.headline}
          description={what_we_build_section.description}
        />
        <div className="grid grid-cols-1 gap-6 lg:gap-8">
          <Reveal>
            <FeaturedPanel item={what_we_build_section.featured} />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {what_we_build_section.supporting.map((item, index) => (
              <Reveal key={item.category} stagger_index={index}>
                <SupportingPanel
                  item={item}
                  visual_variant={visual_variants[index]}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
