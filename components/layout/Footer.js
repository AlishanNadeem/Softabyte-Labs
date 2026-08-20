import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/layout/Logo";
import {
  footer_legal,
  footer_navigation,
  footer_statement,
  primary_cta,
} from "@/config/navigation";

function FooterColumn({ title, links }) {
  return (
    <div>
      <h2 className="ds-eyebrow text-text-muted mb-4">{title}</h2>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-text-secondary hover:text-brand-primary transition-colors duration-200 ds-focus rounded-sm"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const current_year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background-deep">
      <div className="h-px w-full bg-brand-primary" aria-hidden="true" />

      <div className="ds-container py-14 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-4 space-y-6">
            <Logo />
            <p className="ds-body-small text-text-secondary max-w-sm leading-relaxed">
              {footer_statement}
            </p>
            <Button href={primary_cta.href} variant="primary" className="!min-h-10">
              {primary_cta.label}
              <ArrowUpRight size={16} strokeWidth={1.75} aria-hidden="true" />
            </Button>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
            <FooterColumn title="Services" links={footer_navigation.services} />
            <FooterColumn title="Company" links={footer_navigation.company} />
            <FooterColumn
              title="Industries"
              links={footer_navigation.industries}
            />
            <FooterColumn
              title="Resources"
              links={footer_navigation.resources}
            />
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-xs text-text-muted">
            © {current_year} Softabyte Labs. All rights reserved.
          </p>
          <nav aria-label="Legal">
            <ul className="flex flex-wrap gap-4 sm:gap-6">
              {footer_legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-text-muted hover:text-brand-primary transition-colors duration-200 ds-focus rounded-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
