import { LegalPageView } from "@/components/sections/legal/LegalPageView";
import { privacy_page } from "@/config/privacy_content";
import { create_page_metadata } from "@/lib/seo/metadata";

export const metadata = create_page_metadata({
  title: privacy_page.seo.title,
  description: privacy_page.seo.description,
  path: privacy_page.seo.path,
  title_absolute: true,
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPageView page={privacy_page} breadcrumb_label="Privacy Policy" />
  );
}
