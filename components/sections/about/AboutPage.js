import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GlobalCTA } from "@/components/sections/GlobalCTA";
import { BackgroundBlur } from "@/components/ui/BackgroundBlur";
import { Reveal } from "@/components/ui/Reveal";
import { Breadcrumbs } from "@/components/sections/services/Breadcrumbs";
import {
  ContentIntro,
  ProblemList,
  TextWithLinks,
} from "@/components/sections/services/ContentBlocks";
import { ServiceSection } from "@/components/sections/services/ServiceSection";
import { SectionHeader } from "@/components/sections/home/SectionHeader";
import { about_page } from "@/config/about_content";

function BridgeCard({ eyebrow, headline, description, href, label }) {
  return (
    <Reveal>
      <Link
        href={href}
        className="group block h-full rounded-md border border-border bg-background-secondary p-6 md:p-7 transition-colors duration-200 hover:border-brand-primary-border hover:bg-surface ds-focus"
      >
        <p className="ds-eyebrow text-brand-primary mb-3">{eyebrow}</p>
        <h3 className="ds-h3 text-text-primary mb-3 group-hover:text-brand-primary transition-colors duration-200">
          {headline}
        </h3>
        <p className="ds-body text-text-secondary mb-5">{description}</p>
        <span className="inline-flex items-center gap-2 text-sm font-medium text-text-primary group-hover:text-brand-primary transition-colors duration-200">
          {label}
          <ArrowRight
            size={16}
            strokeWidth={1.75}
            className="ds-arrow-shift"
            aria-hidden="true"
          />
        </span>
      </Link>
    </Reveal>
  );
}

export function AboutPage() {
  const page = about_page;

  return (
    <>
      <section className="relative border-b border-border bg-background-deep overflow-hidden">
        <BackgroundBlur
          variant="primary"
          position="top-right"
          size="lg"
          opacity={0.3}
          mobile="reduce"
        />
        <div className="ds-container relative z-[1] py-12 md:py-16 lg:py-20">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "About" }]}
          />
          <div className="max-w-3xl">
            <p
              className="ds-eyebrow text-brand-primary mb-4 ds-hero-entrance"
              style={{ "--hero-delay": "0ms" }}
            >
              {page.hero.eyebrow}
            </p>
            <span
              className="ds-accent-line mb-5 block ds-hero-entrance"
              style={{ "--hero-delay": "40ms" }}
              aria-hidden="true"
            />
            <h1
              className="ds-h1 text-text-primary mb-5 ds-hero-entrance"
              style={{ "--hero-delay": "60ms" }}
            >
              {page.hero.h1}
            </h1>
            <p
              className="ds-body-large text-text-secondary ds-hero-entrance"
              style={{ "--hero-delay": "120ms" }}
            >
              {page.hero.description}
            </p>
          </div>
        </div>
      </section>

      <ServiceSection theme="primary">
        <ContentIntro {...page.builds} />
      </ServiceSection>

      <ServiceSection theme="secondary">
        <TextWithLinks {...page.thinking} />
      </ServiceSection>

      <ServiceSection theme="deep">
        <ProblemList {...page.capabilities} />
      </ServiceSection>

      <ServiceSection theme="primary">
        <ContentIntro {...page.who_we_work_with} />
      </ServiceSection>

      <ServiceSection theme="secondary">
        <Reveal>
          <SectionHeader
            eyebrow={page.principles.eyebrow}
            headline={page.principles.headline}
            className="mb-8 md:mb-10"
          />
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 list-none pl-0 m-0">
            {page.principles.items.map((item, index) => (
              <Reveal key={item.title} stagger_index={index} as="li">
                <div className="rounded-md border border-border bg-background-primary p-5 md:p-6 h-full">
                <span className="text-[0.6875rem] font-semibold tabular-nums text-brand-primary block mb-3">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="ds-h4 text-text-primary mb-2">{item.title}</h3>
                <p className="ds-body-small text-text-secondary">
                  {item.description}
                </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </Reveal>
      </ServiceSection>

      <ServiceSection theme="deep">
        <Reveal>
          <SectionHeader
            eyebrow="Explore further"
            headline="Services and industries"
            description="About builds trust. Services and industries help you route to the right next page."
            className="mb-8 md:mb-10"
          />
        </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
          <BridgeCard {...page.bridges.services} />
          <BridgeCard {...page.bridges.industries} />
        </div>
      </ServiceSection>

      <GlobalCTA
        eyebrow={page.cta.eyebrow}
        headline={page.cta.headline}
        description={page.cta.description}
        primary_action={page.cta.primary_action}
        secondary_action={page.cta.secondary_action}
        theme="dark"
        ambient_glow
      />
    </>
  );
}
