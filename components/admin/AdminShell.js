"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { admin_logout_action } from "@/lib/admin/actions";

const nav_items = [
  { label: "Dashboard", href: "/admin/" },
  { label: "Blog", href: "/admin/blog/" },
  { label: "Contact Submissions", href: "/admin/contact-submissions/" },
];

function is_active_path(pathname, href) {
  if (href === "/admin/") {
    return pathname === "/admin" || pathname === "/admin/";
  }
  return pathname === href || pathname.startsWith(href);
}

export function AdminShell({ children, admin }) {
  const pathname = usePathname() || "/admin/";
  const [nav_open, set_nav_open] = useState(false);

  return (
    <div className="min-h-screen bg-background-deep text-text-primary">
      <div className="border-b border-border bg-background-secondary">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="ds-btn ds-btn--secondary inline-flex min-h-10 items-center rounded-md border border-border px-3 text-sm md:hidden"
              aria-expanded={nav_open}
              aria-controls="admin-sidebar-nav"
              onClick={() => set_nav_open((open) => !open)}
            >
              {nav_open ? "Close menu" : "Menu"}
            </button>
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-brand-primary">
                Softabyte Labs
              </p>
              <p className="text-sm font-medium text-text-primary">Admin</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <p className="hidden text-sm text-text-secondary sm:block">
              {admin?.email}
            </p>
            <form action={admin_logout_action}>
              <button
                type="submit"
                className="ds-btn ds-btn--secondary inline-flex min-h-10 items-center rounded-md border border-border px-3 text-sm"
              >
                Log out
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:flex-row lg:gap-8">
        <aside
          id="admin-sidebar-nav"
          className={`${
            nav_open ? "block" : "hidden"
          } w-full shrink-0 rounded-md border border-border bg-background-secondary p-3 md:block lg:w-56`}
        >
          <p className="mb-2 px-2 text-xs text-text-muted sm:hidden">
            {admin?.email}
          </p>
          <nav aria-label="Admin">
            <ul className="m-0 list-none space-y-1 p-0">
              {nav_items.map((item) => {
                const active = is_active_path(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => set_nav_open(false)}
                      className={`block rounded-md px-3 py-2 text-sm ds-focus ${
                        active
                          ? "bg-brand-primary-soft text-brand-primary"
                          : "text-text-secondary hover:bg-surface hover:text-text-primary"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>

        <main className="min-w-0 flex-1">{children}</main>
      </div>
    </div>
  );
}
