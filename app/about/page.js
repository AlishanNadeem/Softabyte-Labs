import { AboutPage } from "@/components/sections/about/AboutPage";
import { about_page } from "@/config/about_content";
import { create_page_metadata } from "@/lib/seo/metadata";

export const metadata = create_page_metadata({
  title: about_page.seo.title,
  description: about_page.seo.description,
  path: about_page.seo.path,
  title_absolute: true,
});

export default function AboutRoute() {
  return <AboutPage />;
}
