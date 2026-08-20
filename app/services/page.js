import { ServicesHub } from "@/components/sections/services/ServicesHub";
import { services_hub } from "@/config/services_content";
import { create_page_metadata } from "@/lib/seo/metadata";

export const metadata = create_page_metadata({
  title: services_hub.seo.title,
  description: services_hub.seo.description,
  path: services_hub.seo.path,
  title_absolute: true,
});

export default function ServicesPage() {
  return <ServicesHub />;
}
