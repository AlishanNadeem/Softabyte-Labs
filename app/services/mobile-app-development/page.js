import { ServicePage } from "@/components/sections/services/ServicePage";
import { get_service_page } from "@/config/services_content";
import { create_page_metadata } from "@/lib/seo/metadata";

const content = get_service_page("mobile-app-development");

export const metadata = create_page_metadata({
  title: content.seo.title,
  description: content.seo.description,
  path: content.seo.path,
  title_absolute: true,
});

export default function MobileAppDevelopmentPage() {
  return <ServicePage content={content} />;
}
