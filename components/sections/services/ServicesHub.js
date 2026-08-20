import Image from "next/image";
import { GlobalCTA } from "@/components/sections/GlobalCTA";
import { Reveal } from "@/components/ui/Reveal";
import { ContentIntro, TextWithLinks } from "@/components/sections/services/ContentBlocks";
import { ServiceHero } from "@/components/sections/services/ServiceHero";
import { ServiceIndex } from "@/components/sections/services/ServiceIndex";
import { ServiceSection } from "@/components/sections/services/ServiceSection";
import { TechnologyWeUse } from "@/components/sections/services/TechnologyWeUse";
import { SectionHeader } from "@/components/sections/home/SectionHeader";
import { services_hub } from "@/config/services_content";
import {
  hub_technologies,
  technology_section_copy,
} from "@/config/services_technology";
import { services_hub_visual } from "@/config/services_visuals";

export function ServicesHub() {
  const hub = services_hub;

  return (
    <>
      <ServiceHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        eyebrow={hub.hero.eyebrow}
        h1={hub.hero.h1}
        description={hub.hero.description}
        ambient_variant="hero-primary"
        align="left"
      />
      <ServiceSection theme="primary">
        <ContentIntro {...hub.intro} />
      </ServiceSection>
      <ServiceSection theme="secondary">
        <Reveal>
          <SectionHeader {...hub.index_section} className="mb-8 md:mb-10" />
        </Reveal>
        <ServiceIndex />
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
            <figure className="group ds-frame-accent m-0">
              <div className="relative overflow-hidden rounded-md border border-border bg-surface shadow-[0_24px_48px_-28px_rgba(0,0,0,0.75)] aspect-[16/11]">
                <Image
                  src={services_hub_visual.src}
                  alt={services_hub_visual.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover ds-image-zoom"
                />
              </div>
            </figure>
          </Reveal>
        </div>
      </ServiceSection>
      <ServiceSection theme="primary">
        <TechnologyWeUse
          {...technology_section_copy.hub}
          technologies={hub_technologies}
          variant="marquee"
        />
      </ServiceSection>
      <ServiceSection theme="secondary">
        <TextWithLinks {...hub.capabilities_section} />
      </ServiceSection>
      <ServiceSection theme="deep">
        <TextWithLinks {...hub.engagement_section} />
      </ServiceSection>
      <ServiceSection theme="primary">
        <TextWithLinks {...hub.industries_section} />
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
