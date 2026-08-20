"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/layout/Logo";
import {
  industry_hub,
  industry_navigation,
  primary_cta,
  primary_navigation,
  service_hub,
  service_navigation,
} from "@/config/navigation";

function MobileDisclosure({
  label,
  items,
  view_all,
  numbered = false,
  on_navigate,
}) {
  const [is_expanded, set_is_expanded] = useState(false);
  const panel_id = `mobile-${label.toLowerCase()}-panel`;

  return (
    <div className="border-b border-border">
      <button
        type="button"
        className="flex w-full items-center justify-between py-4 text-left text-base font-medium text-text-primary ds-focus"
        aria-expanded={is_expanded}
        aria-controls={panel_id}
        onClick={() => set_is_expanded((current) => !current)}
      >
        {label}
        <span
          className={`text-text-muted transition-transform duration-200 ${is_expanded ? "rotate-45" : ""}`}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      <div id={panel_id} hidden={!is_expanded} className="pb-4">
        <ul className="space-y-1 pl-1">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={on_navigate}
                className="block py-2 text-sm text-text-secondary hover:text-brand-primary transition-colors duration-200 ds-focus rounded-sm"
              >
                {numbered && (
                  <span className="text-brand-primary mr-2">{item.index}</span>
                )}
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href={view_all.href}
              onClick={on_navigate}
              className="inline-flex items-center gap-2 py-2 text-sm font-medium text-brand-primary ds-focus rounded-sm"
            >
              {view_all.label}
              <ArrowUpRight size={14} strokeWidth={1.75} aria-hidden="true" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export function MobileNavigation() {
  const [is_open, set_is_open] = useState(false);
  const menu_button_ref = useRef(null);
  const panel_ref = useRef(null);
  const overlay_ref = useRef(null);

  const close_menu = useCallback(() => {
    set_is_open(false);
  }, []);

  const open_menu = useCallback(() => {
    set_is_open(true);
  }, []);

  useEffect(() => {
    if (is_open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [is_open]);

  useEffect(() => {
    if (!is_open) return;

    function handle_keydown(event) {
      if (event.key === "Escape") {
        close_menu();
        menu_button_ref.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !panel_ref.current) return;

      const focusable = panel_ref.current.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handle_keydown);
    const first_link = panel_ref.current?.querySelector("a, button");
    first_link?.focus();

    return () => document.removeEventListener("keydown", handle_keydown);
  }, [is_open, close_menu]);

  return (
    <div className="lg:hidden">
      <button
        ref={menu_button_ref}
        type="button"
        className="inline-flex items-center justify-center min-h-11 min-w-11 rounded-md text-text-primary hover:text-brand-primary transition-colors duration-200 ds-focus"
        aria-expanded={is_open}
        aria-controls="mobile-navigation-panel"
        aria-label={is_open ? "Close menu" : "Open menu"}
        onClick={() => (is_open ? close_menu() : open_menu())}
      >
        {is_open ? (
          <X size={22} strokeWidth={1.75} aria-hidden="true" />
        ) : (
          <Menu size={22} strokeWidth={1.75} aria-hidden="true" />
        )}
      </button>

      <div
        ref={overlay_ref}
        className={`fixed inset-0 z-40 bg-background-deep/80 transition-opacity duration-[220ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${is_open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        aria-hidden={!is_open}
        onClick={close_menu}
      />

      <div
        id="mobile-navigation-panel"
        ref={panel_ref}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        aria-hidden={!is_open}
        inert={!is_open ? "" : undefined}
        className={`fixed top-0 right-0 z-50 flex h-full w-full max-w-sm flex-col border-l border-border bg-background-deep transition-transform duration-[280ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${is_open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-4">
          <Logo />
          <button
            type="button"
            className="inline-flex items-center justify-center min-h-11 min-w-11 rounded-md text-text-primary ds-focus"
            aria-label="Close menu"
            onClick={close_menu}
          >
            <X size={22} strokeWidth={1.75} aria-hidden="true" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-5 py-2" aria-label="Mobile">
          <MobileDisclosure
            label="Services"
            items={service_navigation}
            view_all={service_hub}
            numbered
            on_navigate={close_menu}
          />
          <MobileDisclosure
            label="Industries"
            items={industry_navigation}
            view_all={industry_hub}
            on_navigate={close_menu}
          />

          {primary_navigation.map((item) => (
            <div key={item.href} className="border-b border-border">
              <Link
                href={item.href}
                className="block py-4 text-base font-medium text-text-primary hover:text-brand-primary transition-colors duration-200 ds-focus"
                onClick={close_menu}
              >
                {item.label}
              </Link>
            </div>
          ))}
        </nav>

        <div className="border-t border-border p-5">
          <Button
            href={primary_cta.href}
            variant="primary"
            className="w-full"
            onClick={close_menu}
          >
            {primary_cta.label}
            <ArrowUpRight size={16} strokeWidth={1.75} aria-hidden="true" />
          </Button>
        </div>
      </div>
    </div>
  );
}
