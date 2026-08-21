"use client";

import { useCallback, useEffect, useId, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
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

function subscribe_noop() {
  return () => {};
}

function useIsClient() {
  return useSyncExternalStore(subscribe_noop, () => true, () => false);
}

function is_route_active(pathname, href) {
  if (!pathname || !href) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href);
}

function MobileDisclosure({
  id,
  label,
  items,
  view_all,
  numbered = false,
  is_expanded,
  on_toggle,
  on_navigate,
  pathname,
}) {
  const panel_id = `${id}-panel`;

  return (
    <div className="border-b border-border">
      <button
        type="button"
        className="flex w-full min-h-11 items-center justify-between gap-3 py-3.5 text-left text-base font-medium text-text-primary ds-focus rounded-sm"
        aria-expanded={is_expanded}
        aria-controls={panel_id}
        onClick={on_toggle}
      >
        <span>{label}</span>
        <ChevronDown
          size={18}
          strokeWidth={1.75}
          className={`shrink-0 text-text-muted transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            is_expanded ? "rotate-180" : "rotate-0"
          }`}
          aria-hidden="true"
        />
      </button>

      <div
        id={panel_id}
        className={`grid transition-[grid-template-rows] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          is_expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
        aria-hidden={!is_expanded}
        inert={!is_expanded ? true : undefined}
      >
        <div className="overflow-hidden">
          <ul className="space-y-0.5 pb-3 pl-1">
            {items.map((item) => {
              const active = is_route_active(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={on_navigate}
                    tabIndex={is_expanded ? undefined : -1}
                    className={`flex min-h-11 items-center rounded-sm px-2 text-sm transition-colors duration-200 ds-focus ${
                      active
                        ? "text-brand-primary font-medium"
                        : "text-text-secondary hover:text-brand-primary"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    {numbered && (
                      <span className="text-brand-primary mr-2 tabular-nums shrink-0">
                        {item.index}
                      </span>
                    )}
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link
                href={view_all.href}
                onClick={on_navigate}
                tabIndex={is_expanded ? undefined : -1}
                className="inline-flex min-h-11 items-center gap-2 rounded-sm px-2 text-sm font-medium text-brand-primary ds-focus"
              >
                {view_all.label}
                <ArrowUpRight size={14} strokeWidth={1.75} aria-hidden="true" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export function MobileNavigation() {
  const pathname = usePathname();
  const is_client = useIsClient();
  const [is_open, set_is_open] = useState(false);
  const [open_section, set_open_section] = useState(null);
  const [tracked_pathname, set_tracked_pathname] = useState(pathname);
  const menu_button_ref = useRef(null);
  const panel_ref = useRef(null);
  const drawer_title_id = useId();

  /* Reset drawer when the route changes (render-phase update) */
  if (pathname !== tracked_pathname) {
    set_tracked_pathname(pathname);
    set_is_open(false);
    set_open_section(null);
  }

  const close_menu = useCallback(() => {
    set_is_open(false);
    set_open_section(null);
  }, []);

  const open_menu = useCallback(() => {
    set_is_open(true);
  }, []);

  /* Close if viewport crosses into desktop nav */
  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");

    function handle_change(event) {
      if (event.matches) close_menu();
    }

    media.addEventListener("change", handle_change);
    return () => media.removeEventListener("change", handle_change);
  }, [close_menu]);

  /* Body scroll lock — restore on close / unmount */
  useEffect(() => {
    if (!is_open) return;

    const previous_body = document.body.style.overflow;
    const previous_html = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previous_body;
      document.documentElement.style.overflow = previous_html;
    };
  }, [is_open]);

  /* Escape + focus trap */
  useEffect(() => {
    if (!is_open) return;

    function handle_keydown(event) {
      if (event.key === "Escape") {
        event.preventDefault();
        close_menu();
        menu_button_ref.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !panel_ref.current) return;

      const focusable = panel_ref.current.querySelectorAll(
        'a[href]:not([tabindex="-1"]), button:not([disabled]):not([tabindex="-1"]), [tabindex]:not([tabindex="-1"])'
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

    const close_button = panel_ref.current?.querySelector(
      "[data-mobile-drawer-close]"
    );
    close_button?.focus();

    return () => document.removeEventListener("keydown", handle_keydown);
  }, [is_open, close_menu]);

  function toggle_section(section) {
    set_open_section((current) => (current === section ? null : section));
  }

  const drawer = (
    <>
      <div
        className={`fixed inset-0 z-[100] bg-background-deep/80 transition-opacity duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          is_open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!is_open}
        onClick={close_menu}
      />

      <div
        id="mobile-navigation-panel"
        ref={panel_ref}
        role="dialog"
        aria-modal="true"
        aria-labelledby={drawer_title_id}
        aria-hidden={!is_open}
        inert={!is_open ? true : undefined}
        className={`fixed top-0 right-0 bottom-0 z-[110] flex h-[100dvh] max-h-[100dvh] w-[min(88vw,420px)] flex-col border-l border-border bg-background-deep transition-transform duration-[260ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          is_open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          paddingTop: "env(safe-area-inset-top)",
          paddingBottom: "env(safe-area-inset-bottom)",
        }}
      >
        <div className="flex shrink-0 items-center justify-between gap-4 border-b border-border px-5 py-4">
          <div id={drawer_title_id} className="min-w-0">
            <Logo />
          </div>
          <button
            type="button"
            data-mobile-drawer-close
            className="inline-flex items-center justify-center min-h-11 min-w-11 rounded-md text-text-primary hover:text-brand-primary transition-colors duration-200 ds-focus"
            aria-label="Close menu"
            onClick={() => {
              close_menu();
              menu_button_ref.current?.focus();
            }}
          >
            <X size={22} strokeWidth={1.75} aria-hidden="true" />
          </button>
        </div>

        <nav
          className="flex-1 overflow-y-auto overscroll-contain px-5 py-2"
          aria-label="Mobile"
        >
          <MobileDisclosure
            id="mobile-services"
            label="Services"
            items={service_navigation}
            view_all={service_hub}
            numbered
            is_expanded={open_section === "services"}
            on_toggle={() => toggle_section("services")}
            on_navigate={close_menu}
            pathname={pathname}
          />
          <MobileDisclosure
            id="mobile-industries"
            label="Industries"
            items={industry_navigation}
            view_all={industry_hub}
            is_expanded={open_section === "industries"}
            on_toggle={() => toggle_section("industries")}
            on_navigate={close_menu}
            pathname={pathname}
          />

          {primary_navigation.map((item) => {
            const active = is_route_active(pathname, item.href);
            return (
              <div key={item.href} className="border-b border-border">
                <Link
                  href={item.href}
                  onClick={close_menu}
                  className={`flex min-h-11 items-center py-3.5 text-base font-medium transition-colors duration-200 ds-focus rounded-sm ${
                    active
                      ? "text-brand-primary"
                      : "text-text-primary hover:text-brand-primary"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </div>
            );
          })}
        </nav>

        <div className="shrink-0 border-t border-border p-5">
          <Button
            href={primary_cta.href}
            variant="primary"
            className="w-full min-h-11"
            onClick={close_menu}
          >
            {primary_cta.label}
            <ArrowUpRight size={16} strokeWidth={1.75} aria-hidden="true" />
          </Button>
        </div>
      </div>
    </>
  );

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

      {is_client ? createPortal(drawer, document.body) : null}
    </div>
  );
}
