import { ProcessPage } from "@/components/sections/process/ProcessPage";
import { process_page } from "@/config/process_content";
import { create_page_metadata } from "@/lib/seo/metadata";

export const metadata = create_page_metadata({
  title: process_page.seo.title,
  description: process_page.seo.description,
  path: process_page.seo.path,
  title_absolute: true,
});

export default function ProcessRoute() {
  return <ProcessPage />;
}
