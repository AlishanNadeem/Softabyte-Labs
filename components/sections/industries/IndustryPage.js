import { GlobalCTA } from "@/components/sections/GlobalCTA";
import {
  AudienceSplit,
  ContentIntro,
  DeliverablesList,
  ProblemList,
  TextWithLinks,
} from "@/components/sections/services/ContentBlocks";
import { FAQSection } from "@/components/sections/services/FAQSection";
import { IndustryHero } from "@/components/sections/industries/IndustryHero";
import { IndustryWorkflow } from "@/components/sections/industries/IndustryWorkflow";
import { RelatedIndustries } from "@/components/sections/industries/RelatedIndustries";
import { RelatedServices } from "@/components/sections/services/RelatedServices";
import { ServiceSection } from "@/components/sections/services/ServiceSection";
import {
  VisualSplit,
  WideVisual,
} from "@/components/sections/services/VisualSections";
import { industry_visuals } from "@/config/industries_visuals";

const base_breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Industries", href: "/industries/" },
];

function render_section(section_key, content, theme, visuals) {
  switch (section_key) {
    case "problems":
      return content.problems ? (
        <ServiceSection key="problems" theme={theme}>
          <ProblemList {...content.problems} />
        </ServiceSection>
      ) : null;
    case "use_cases":
      return content.use_cases ? (
        <ServiceSection key="use_cases" theme={theme}>
          <DeliverablesList {...content.use_cases} />
        </ServiceSection>
      ) : null;
    case "workflow":
      return content.workflow ? (
        <ServiceSection key="workflow" theme={theme}>
          <IndustryWorkflow {...content.workflow} />
        </ServiceSection>
      ) : null;
    case "audience":
      return content.audience ? (
        <ServiceSection key="audience" theme={theme}>
          <AudienceSplit {...content.audience} />
        </ServiceSection>
      ) : null;
    case "approach":
      return content.approach ? (
        <ServiceSection key="approach" theme={theme}>
          <TextWithLinks {...content.approach} />
        </ServiceSection>
      ) : null;
    case "intro":
      return content.intro ? (
        <ServiceSection key="intro" theme={theme}>
          <ContentIntro {...content.intro} />
        </ServiceSection>
      ) : null;
    case "wide_visual":
      return visuals.primary ? (
        <ServiceSection key="wide_visual" theme={theme}>
          <WideVisual visual={visuals.primary} />
        </ServiceSection>
      ) : null;
    case "visual_split":
      return content.visual_split && visuals.primary ? (
        <ServiceSection key="visual_split" theme={theme}>
          <VisualSplit {...content.visual_split} visual={visuals.primary} />
        </ServiceSection>
      ) : null;
    case "relevant_services":
      return content.relevant_services?.length ? (
        <ServiceSection key="relevant_services" theme={theme}>
          <RelatedServices
            eyebrow="Relevant services"
            headline="Capabilities most often involved in this industry"
            slugs={content.relevant_services}
          />
        </ServiceSection>
      ) : null;
    case "related_industries":
      return content.related_industries?.length ? (
        <ServiceSection key="related_industries" theme={theme}>
          <RelatedIndustries slugs={content.related_industries} />
        </ServiceSection>
      ) : null;
    case "faq":
      return content.faq?.items?.length ? (
        <ServiceSection key="faq" theme={theme}>
          <FAQSection {...content.faq} />
        </ServiceSection>
      ) : null;
    default:
      return null;
  }
}

const theme_cycle = ["primary", "secondary", "deep"];

export function IndustryPage({ content }) {
  const breadcrumbs = [
    ...base_breadcrumbs,
    { label: content.breadcrumb_label },
  ];
  const visuals = industry_visuals[content.slug] || {};
  const hero_visual =
    content.hero.layout === "split" ? visuals.primary : null;

  return (
    <>
      <IndustryHero
        breadcrumbs={breadcrumbs}
        eyebrow={content.hero.eyebrow}
        h1={content.hero.h1}
        description={content.hero.description}
        industry_slug={content.slug}
        ambient_variant={content.hero.ambient_variant}
        layout={content.hero.layout}
        hero_visual={hero_visual}
        primary_action={content.hero.primary_action}
        secondary_action={content.hero.secondary_action}
      />
      {content.section_order.map((section_key, index) =>
        render_section(
          section_key,
          content,
          theme_cycle[index % theme_cycle.length],
          visuals
        )
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
