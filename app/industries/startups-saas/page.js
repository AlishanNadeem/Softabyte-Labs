import { IndustryPage } from "@/components/sections/industries/IndustryPage";
import { get_industry_page } from "@/config/industries_content";
import { create_page_metadata } from "@/lib/seo/metadata";

const content = get_industry_page("startups-saas");

export const metadata = create_page_metadata({
  title: content.seo.title,
  description: content.seo.description,
  path: content.seo.path,
  title_absolute: true,
});

export default function StartupsSaasIndustryPage() {
  return <IndustryPage content={content} />;
}
