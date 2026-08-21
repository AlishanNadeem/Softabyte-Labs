import { GlobalCTA } from "@/components/sections/GlobalCTA";
import { HomeAI } from "@/components/sections/home/HomeAI";
import { HomeCapabilities } from "@/components/sections/home/HomeCapabilities";
import { HomeHero } from "@/components/sections/home/HomeHero";
import { HomeIndustries } from "@/components/sections/home/HomeIndustries";
import { HomeInsights } from "@/components/sections/home/HomeInsights";
import { HomePositioning } from "@/components/sections/home/HomePositioning";
import { HomeProcess } from "@/components/sections/home/HomeProcess";
import { HomeServices } from "@/components/sections/home/HomeServices";
import { HomeWhatWeBuild } from "@/components/sections/home/HomeWhatWeBuild";
import { final_cta, homepage_seo } from "@/config/homepage_content";
import { create_page_metadata } from "@/lib/seo/metadata";

export const dynamic = "force-dynamic";

export const metadata = create_page_metadata({
  title: homepage_seo.title,
  description: homepage_seo.description,
  path: "/",
  title_absolute: true,
  open_graph_type: "website",
});

export default async function HomePage() {
  return (
    <>
      <HomeHero />
      <HomePositioning />
      <HomeServices />
      <HomeWhatWeBuild />
      <HomeCapabilities />
      <HomeIndustries />
      <HomeProcess />
      <HomeAI />
      <HomeInsights />
      <GlobalCTA
        eyebrow={final_cta.eyebrow}
        headline={final_cta.headline}
        description={final_cta.description}
        primary_action={final_cta.primary_action}
        secondary_action={final_cta.secondary_action}
        theme={final_cta.theme}
        ambient_glow
      />
    </>
  );
}
