import { LegalPageView } from "@/components/sections/legal/LegalPageView";
import { terms_page } from "@/config/terms_content";
import { create_page_metadata } from "@/lib/seo/metadata";

export const metadata = create_page_metadata({
  title: terms_page.seo.title,
  description: terms_page.seo.description,
  path: terms_page.seo.path,
  title_absolute: true,
});

export default function TermsPage() {
  return <LegalPageView page={terms_page} breadcrumb_label="Terms of Use" />;
}
