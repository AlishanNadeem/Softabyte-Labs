import { IndustriesHub } from "@/components/sections/industries/IndustriesHub";
import { industries_hub } from "@/config/industries_content";
import { create_page_metadata } from "@/lib/seo/metadata";

export const metadata = create_page_metadata({
  title: industries_hub.seo.title,
  description: industries_hub.seo.description,
  path: industries_hub.seo.path,
  title_absolute: true,
});

export default function IndustriesPage() {
  return <IndustriesHub />;
}
