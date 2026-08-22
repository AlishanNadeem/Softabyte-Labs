import { GlobalCTA } from "@/components/sections/GlobalCTA";
import {
  AudienceSplit,
  ComparisonSplit,
  ContentIntro,
  DeliverablesList,
  ProblemList,
  ProcessSteps,
  TextWithLinks,
} from "@/components/sections/services/ContentBlocks";
import { FAQSection } from "@/components/sections/services/FAQSection";
import { RelatedServices } from "@/components/sections/services/RelatedServices";
import { RelatedInsights } from "@/components/sections/shared/RelatedInsights";
import { ServiceHero } from "@/components/sections/services/ServiceHero";
import { ServiceSection } from "@/components/sections/services/ServiceSection";
import { TechnologyWeUse } from "@/components/sections/services/TechnologyWeUse";
import {
  FullBleedVisual,
  VisualSplit,
  WideVisual,
} from "@/components/sections/services/VisualSections";
import {
  service_technologies,
  technology_section_copy,
} from "@/config/services_technology";
import { service_visuals } from "@/config/services_visuals";
import { get_related_insights } from "@/config/related_insights_links";
import {
  blur_preset_primary,
  service_hero_blurs,
} from "@/config/background_blur";

const base_breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services/" },
];

function render_section(section, index, slug) {
  const theme = section.theme || (index % 2 === 0 ? "primary" : "secondary");
  const key = section.headline || section.type + index;
  const visuals = service_visuals[slug] || {};

  switch (section.type) {
    case "intro":
      return (
        <ServiceSection key={key} theme={theme}>
          <ContentIntro {...section} />
        </ServiceSection>
      );
    case "audience":
      return (
        <ServiceSection key={key} theme={theme}>
          <AudienceSplit {...section} />
        </ServiceSection>
      );
    case "problems":
      return (
        <ServiceSection key={key} theme={theme}>
          <ProblemList {...section} />
        </ServiceSection>
      );
    case "deliverables":
      return (
        <ServiceSection key={key} theme={theme}>
          <DeliverablesList {...section} />
        </ServiceSection>
      );
    case "comparison":
      return (
        <ServiceSection key={key} theme={theme}>
          <ComparisonSplit {...section} />
        </ServiceSection>
      );
    case "process":
      return (
        <ServiceSection key={key} theme={theme}>
          <ProcessSteps {...section} />
        </ServiceSection>
      );
    case "text":
      return (
        <ServiceSection key={key} theme={theme}>
          <TextWithLinks {...section} />
        </ServiceSection>
      );
    case "visual_split": {
      const visual =
        section.visual_key === "secondary"
          ? visuals.secondary
          : visuals.primary;
      return (
        <ServiceSection key={key} theme={theme}>
          <VisualSplit {...section} visual={visual} />
        </ServiceSection>
      );
    }
    case "wide_visual":
      return (
        <ServiceSection key={key} theme={theme}>
          <WideVisual visual={visuals.primary} />
        </ServiceSection>
      );
    case "full_bleed_visual":
      return (
        <ServiceSection key={key} theme={theme} border={false}>
          <FullBleedVisual
            visual={
              section.visual_key === "secondary"
                ? visuals.secondary
                : visuals.primary
            }
          />
        </ServiceSection>
      );
    case "technology":
      return (
        <ServiceSection key={key} theme={theme}>
          <TechnologyWeUse
            {...technology_section_copy.service}
            {...section}
            technologies={service_technologies[slug] || []}
            variant={section.variant || "static"}
          />
        </ServiceSection>
      );
    default:
      return null;
  }
}

export function ServicePage({ content }) {
  const breadcrumbs = [...base_breadcrumbs, { label: content.breadcrumb_label }];
  const visuals = service_visuals[content.slug] || {};
  const hero_visual =
    content.hero.layout === "split" ? visuals.primary : null;

  return (
    <>
      <ServiceHero
        breadcrumbs={breadcrumbs}
        eyebrow={content.hero.eyebrow}
        h1={content.hero.h1}
        description={content.hero.description}
        service_slug={content.slug}
        align={content.hero.align}
        layout={content.hero.layout}
        hero_visual={hero_visual}
        blurs={service_hero_blurs[content.slug] || blur_preset_primary}
      />
      {content.sections.map((section, index) =>
        render_section(section, index, content.slug)
      )}
      {content.faq?.items?.length > 0 && (
        <ServiceSection theme="secondary">
          <FAQSection {...content.faq} />
        </ServiceSection>
      )}
      {content.related_services?.length > 0 && (
        <ServiceSection theme="deep">
          <RelatedServices
            slugs={content.related_services}
            {...content.related_copy}
          />
        </ServiceSection>
      )}
      {get_related_insights(content.path).length > 0 && (
        <ServiceSection theme="secondary">
          <RelatedInsights path={content.path} />
        </ServiceSection>
      )}
      <GlobalCTA
        eyebrow={content.cta.eyebrow}
        headline={content.cta.headline}
        description={content.cta.description}
        primary_action={content.cta.primary_action}
        secondary_action={content.cta.secondary_action}
        theme="dark"
        ambient_glow={content.cta.ambient_glow}
      />
    </>
  );
}
