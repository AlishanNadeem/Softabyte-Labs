import Link from "next/link";
import { Breadcrumbs } from "@/components/sections/services/Breadcrumbs";
import { Reveal } from "@/components/ui/Reveal";
import { BackgroundBlur } from "@/components/ui/BackgroundBlur";

function LegalSection({ section }) {
  return (
    <section id={section.id} className="scroll-mt-28">
      <h2 className="ds-h3 text-text-primary mb-4">{section.title}</h2>
      {section.paragraphs?.map((paragraph, index) => (
        <p
          key={`${section.id}-p-${index}`}
          className="ds-body text-text-secondary mb-4 last:mb-0"
        >
          {paragraph}
        </p>
      ))}
      {section.list?.length > 0 && (
        <ul className="mt-4 mb-4 space-y-2 pl-5 list-disc text-text-secondary ds-body">
          {section.list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      {section.paragraphs_after?.map((paragraph, index) => (
        <p
          key={`${section.id}-pa-${index}`}
          className="ds-body text-text-secondary mb-4 last:mb-0"
        >
          {paragraph}
        </p>
      ))}
    </section>
  );
}

export function LegalPageView({ page, breadcrumb_label }) {
  return (
    <>
      <section className="relative border-b border-border bg-background-deep overflow-hidden">
        <BackgroundBlur
          variant="primary"
          position="top-right"
          size="sm"
          opacity={0.16}
          mobile="hide"
        />
        <div className="ds-container relative z-[1] py-12 md:py-16 lg:py-20">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: breadcrumb_label },
            ]}
          />
          <Reveal>
            <div className="max-w-3xl">
              <p className="ds-eyebrow text-brand-primary mb-4">{page.hero.eyebrow}</p>
              <span className="ds-accent-line mb-5 block" aria-hidden="true" />
              <h1 className="ds-h1 text-text-primary mb-5">{page.hero.h1}</h1>
              <p className="ds-body-large text-text-secondary mb-4">
                {page.hero.intro}
              </p>
              <p className="ds-body-small text-text-muted">
                Last updated:{" "}
                <time dateTime={page.last_updated_iso}>{page.last_updated}</time>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-background-primary">
        <div className="ds-container py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <aside className="hidden lg:block lg:col-span-3">
              <nav
                aria-label="On this page"
                className="sticky top-28 space-y-1"
              >
                <p className="ds-eyebrow text-text-muted mb-4">On this page</p>
                <ul className="space-y-2 list-none pl-0 m-0">
                  {page.sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="text-sm text-text-secondary hover:text-brand-primary transition-colors duration-200 ds-focus rounded-sm"
                      >
                        {section.title.replace(/^\d+\.\s*/, "")}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            <article className="lg:col-span-9 max-w-[52rem] space-y-10 md:space-y-12">
              {page.sections.map((section) => (
                <LegalSection key={section.id} section={section} />
              ))}

              <div className="pt-6 border-t border-border">
                <p className="ds-body-small text-text-muted">
                  Questions? Email{" "}
                  <a
                    href={page.contact_email_href}
                    className="text-brand-primary hover:underline ds-focus rounded-sm"
                  >
                    {page.contact_email}
                  </a>{" "}
                  or use the{" "}
                  <Link
                    href={page.contact_page_href}
                    className="text-brand-primary hover:underline ds-focus rounded-sm"
                  >
                    contact form
                  </Link>
                  .
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
