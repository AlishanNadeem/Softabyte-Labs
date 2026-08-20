import { GlobalCTA } from "@/components/sections/GlobalCTA";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Reveal } from "@/components/ui/Reveal";
import {
  ContentIntro,
  ProblemList,
  TextWithLinks,
} from "@/components/sections/services/ContentBlocks";
import { IndustryHero } from "@/components/sections/industries/IndustryHero";
import { IndustryIndex } from "@/components/sections/industries/IndustryIndex";
import { ServiceSection } from "@/components/sections/services/ServiceSection";
import { TechnologyWeUse } from "@/components/sections/services/TechnologyWeUse";
import { SectionHeader } from "@/components/sections/home/SectionHeader";
import { industries_hub } from "@/config/industries_content";
import { industries_hub_visual } from "@/config/industries_visuals";

export function IndustriesHub() {
  const hub = industries_hub;

  return (
    <>
      <IndustryHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Industries" }]}
        eyebrow={hub.hero.eyebrow}
        h1={hub.hero.h1}
        description={hub.hero.description}
        ambient_variant={hub.hero.ambient_variant}
      />
      <ServiceSection theme="primary">
        <ContentIntro {...hub.intro} />
      </ServiceSection>
      <ServiceSection theme="secondary">
        <Reveal>
          <SectionHeader {...hub.index_section} className="mb-8 md:mb-10" />
        </Reveal>
        <IndustryIndex />
      </ServiceSection>
      <ServiceSection theme="deep">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <Reveal variant="slide_left" className="lg:col-span-5">
            <SectionHeader
              eyebrow={hub.overview_visual.eyebrow}
              headline={hub.overview_visual.headline}
              description={hub.overview_visual.description}
              className="mb-0"
            />
          </Reveal>
          <Reveal variant="scale_in" delay={80} className="lg:col-span-7">
            <ImagePlaceholder
              {...industries_hub_visual}
              aspect_class={industries_hub_visual.aspect_class}
              reveal
            />
          </Reveal>
        </div>
      </ServiceSection>
      <ServiceSection theme="primary">
        <ProblemList {...hub.problems_section} />
      </ServiceSection>
      <ServiceSection theme="secondary">
        <TextWithLinks {...hub.capabilities_section} />
      </ServiceSection>
      <ServiceSection theme="deep">
        <TextWithLinks {...hub.relationship_section} />
      </ServiceSection>
      <ServiceSection theme="primary">
        <TechnologyWeUse
          {...hub.technology_section}
          technologies={hub.technology_section.technologies}
          variant="static"
        />
      </ServiceSection>
      <ServiceSection theme="secondary">
        <TextWithLinks {...hub.engagement_section} />
      </ServiceSection>
      <GlobalCTA
        eyebrow={hub.cta.eyebrow}
        headline={hub.cta.headline}
        description={hub.cta.description}
        primary_action={hub.cta.primary_action}
        secondary_action={hub.cta.secondary_action}
        theme="dark"
        ambient_glow
      />
    </>
  );
}
