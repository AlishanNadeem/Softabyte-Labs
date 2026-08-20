import { IndustryPage } from "@/components/sections/industries/IndustryPage";
import { get_industry_page } from "@/config/industries_content";
import { create_page_metadata } from "@/lib/seo/metadata";

const content = get_industry_page("real-estate");

export const metadata = create_page_metadata({
  title: content.seo.title,
  description: content.seo.description,
  path: content.seo.path,
  title_absolute: true,
});

export default function RealEstateIndustryPage() {
  return <IndustryPage content={content} />;
}
