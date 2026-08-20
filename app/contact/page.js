import { ContactPageView } from "@/components/sections/contact/ContactPageView";
import { contact_page } from "@/config/contact_content";
import { create_page_metadata } from "@/lib/seo/metadata";

export const metadata = create_page_metadata({
  title: contact_page.seo.title,
  description: contact_page.seo.description,
  path: contact_page.seo.path,
  title_absolute: true,
});

export default function ContactRoute() {
  return <ContactPageView />;
}
