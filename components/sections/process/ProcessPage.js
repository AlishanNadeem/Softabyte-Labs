import { GlobalCTA } from "@/components/sections/GlobalCTA";
import { BackgroundBlur } from "@/components/ui/BackgroundBlur";
import { Reveal } from "@/components/ui/Reveal";
import { Breadcrumbs } from "@/components/sections/services/Breadcrumbs";
import {
  ContentIntro,
  ProblemList,
  TextWithLinks,
} from "@/components/sections/services/ContentBlocks";
import { RelatedServices } from "@/components/sections/services/RelatedServices";
import { ServiceSection } from "@/components/sections/services/ServiceSection";
import { SectionHeader } from "@/components/sections/home/SectionHeader";
import { process_page } from "@/config/process_content";

export function ProcessPage() {
  const page = process_page;

  return (
    <>
      <section className="relative border-b border-border bg-background-deep overflow-hidden">
        <BackgroundBlur
          variant="primary"
          position="far-right"
          size="md"
          opacity={0.26}
          mobile="hide"
        />
        <div className="ds-container relative z-[1] py-12 md:py-16 lg:py-20">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Process" }]}
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
        <ContentIntro {...page.overview} />
      </ServiceSection>

      <ServiceSection
        theme="secondary"
        blurs={[
          {
            variant: "primary",
            position: "right-center",
            size: "md",
            opacity: 0.2,
            mobile: "hide",
          },
        ]}
      >
        <Reveal>
          <SectionHeader
            eyebrow="Six stages"
            headline="From discovery to support and improvement"
            description="Each stage has a clear job. Projects may overlap stages when that produces a better outcome."
            className="mb-8 md:mb-10"
          />
        </Reveal>
        <ol className="ds-process-detail list-none pl-0 m-0">
          {page.stages.map((stage, index) => (
            <li key={stage.title} className="ds-process-detail__item">
              <Reveal stagger_index={index}>
                <div className="ds-process-detail__inner">
                  <div className="ds-process-detail__rail" aria-hidden="true">
                    <span className="ds-process-detail__dot" />
                    {index < page.stages.length - 1 && (
                      <span className="ds-process-detail__line" />
                    )}
                  </div>
                  <div className="ds-process-detail__content">
                    <span className="ds-process-timeline__number mb-2 block">
                      {stage.step}
                    </span>
                    <h2 className="ds-h3 text-text-primary mb-2">
                      {stage.title}
                    </h2>
                    <p className="ds-body text-text-secondary mb-4">
                      {stage.summary}
                    </p>
                    <ul className="space-y-2 list-none pl-0 m-0">
                      {stage.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex gap-3 ds-body-small text-text-secondary"
                        >
                          <span
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary"
                            aria-hidden="true"
                          />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </ServiceSection>

      <ServiceSection theme="deep">
        <TextWithLinks {...page.decisions} />
      </ServiceSection>

      <ServiceSection theme="primary">
        <ProblemList {...page.collaboration} />
      </ServiceSection>

      <ServiceSection theme="secondary">
        <Reveal>
          <SectionHeader
            eyebrow={page.quality.eyebrow}
            headline={page.quality.headline}
            description={page.quality.description}
            className="mb-8 md:mb-10"
          />
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 list-none pl-0 m-0">
            {page.quality.items.map((item) => (
              <li
                key={item}
                className="rounded-md border border-border bg-background-primary px-5 py-4 ds-body text-text-secondary"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </ServiceSection>

      <ServiceSection theme="deep">
        <TextWithLinks {...page.launch} />
      </ServiceSection>

      <ServiceSection theme="primary">
        <RelatedServices
          eyebrow="Relevant capabilities"
          headline="Services that often connect to this process"
          slugs={page.relevant_services}
        />
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
