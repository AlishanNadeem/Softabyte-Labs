import "./globals.css";
import Script from "next/script";
import { font_variables, poppins } from "@/lib/fonts";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { JsonLd } from "@/components/seo/JsonLd";
import { get_sitewide_structured_data } from "@/lib/seo/structured_data";
import { site_description, site_name, site_url } from "@/lib/site";

export const metadata = {
  metadataBase: new URL(site_url),
  title: {
    default: site_name,
    template: `%s | ${site_name}`,
  },
  description: site_description,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    siteName: site_name,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={font_variables}>
      <body
        className={`${poppins.className} bg-background-primary text-text-primary min-h-screen flex flex-col`}
      >
        <Script id="ds-js-flag" strategy="beforeInteractive">
          {`document.documentElement.classList.add("js");`}
        </Script>
        <JsonLd data={get_sitewide_structured_data()} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
