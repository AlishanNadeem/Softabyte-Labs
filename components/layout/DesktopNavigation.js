"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import {
  industry_hub,
  industry_navigation,
  primary_navigation,
  service_hub,
  service_navigation,
} from "@/config/navigation";

const CLOSE_DELAY_MS = 120;

function can_use_hover() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

function DropdownPanel({
  id,
  is_open,
  title,
  view_all,
  items,
  numbered = false,
  on_navigate,
}) {
  return (
    <div
      id={id}
      role="region"
      aria-label={title}
      aria-hidden={!is_open}
      inert={!is_open ? true : undefined}
      className={`absolute left-0 top-full pt-3 z-50 min-w-[22rem] max-w-[26rem] transition-[opacity,transform] duration-[200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
        is_open
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-1.5 pointer-events-none invisible"
      }`}
    >
      <div className="rounded-md border border-border bg-surface shadow-lg p-2">
        <p className="ds-eyebrow text-brand-primary px-3 pt-2 pb-3">{title}</p>
        <ul className="space-y-0.5">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                tabIndex={is_open ? undefined : -1}
                onClick={on_navigate}
                className="group flex gap-3 rounded-sm px-3 py-2.5 hover:bg-background-secondary transition-colors duration-200 ds-focus"
              >
                {numbered && (
                  <span className="ds-eyebrow text-brand-primary shrink-0 pt-0.5 w-6">
                    {item.index}
                  </span>
                )}
                <span className="min-w-0">
                  <span className="block text-sm font-medium text-text-primary group-hover:text-brand-primary transition-colors duration-200">
                    {item.label}
                  </span>
                  {item.description && (
                    <span className="block text-xs text-text-muted mt-0.5 leading-relaxed">
                      {item.description}
                    </span>
                  )}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="border-t border-border mt-2 pt-2 px-3 pb-1">
          <Link
            href={view_all.href}
            tabIndex={is_open ? undefined : -1}
            onClick={on_navigate}
            className="group inline-flex items-center gap-2 text-sm font-medium text-text-primary hover:text-brand-primary transition-colors duration-200 ds-focus py-2"
          >
            {view_all.label}
            <ArrowRight
              size={14}
              strokeWidth={1.75}
              className="ds-arrow-shift shrink-0"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

function NavDropdownTrigger({ label, is_open, controls_id, on_toggle, button_ref }) {
  return (
    <button
      ref={button_ref}
      type="button"
      className="ds-nav-link inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-200 ds-focus py-2"
      aria-expanded={is_open}
      aria-controls={controls_id}
      aria-haspopup="true"
      onClick={on_toggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          on_toggle();
        }
      }}
    >
      {label}
      <ChevronDown
        size={15}
        strokeWidth={1.75}
        className={`shrink-0 transition-transform duration-200 ${is_open ? "rotate-180" : ""}`}
        aria-hidden="true"
      />
    </button>
  );
}

function NavDropdown({
  id,
  label,
  is_open,
  title,
  view_all,
  items,
  numbered = false,
  button_ref,
  wrapper_ref,
  on_toggle,
  on_open,
  on_close_request,
  on_cancel_close,
  on_navigate,
}) {
  return (
    <div
      className="relative"
      ref={wrapper_ref}
      onMouseEnter={() => {
        if (!can_use_hover()) return;
        on_cancel_close();
        on_open();
      }}
      onMouseLeave={() => {
        if (!can_use_hover()) return;
        on_close_request();
      }}
    >
      <NavDropdownTrigger
        label={label}
        is_open={is_open}
        controls_id={id}
        on_toggle={on_toggle}
        button_ref={button_ref}
      />
      <DropdownPanel
        id={id}
        is_open={is_open}
        title={title}
        view_all={view_all}
        items={items}
        numbered={numbered}
        on_navigate={on_navigate}
      />
    </div>
  );
}

export function DesktopNavigation() {
  const [open_dropdown, set_open_dropdown] = useState(null);
  const services_ref = useRef(null);
  const industries_ref = useRef(null);
  const services_button_ref = useRef(null);
  const industries_button_ref = useRef(null);
  const close_timer_ref = useRef(null);
  const services_panel_id = "nav-services-panel";
  const industries_panel_id = "nav-industries-panel";

  const clear_close_timer = useCallback(() => {
    if (close_timer_ref.current) {
      window.clearTimeout(close_timer_ref.current);
      close_timer_ref.current = null;
    }
  }, []);

  const close_dropdown = useCallback(() => {
    clear_close_timer();
    set_open_dropdown(null);
  }, [clear_close_timer]);

  const open_named = useCallback(
    (name) => {
      clear_close_timer();
      set_open_dropdown(name);
    },
    [clear_close_timer]
  );

  const toggle_named = useCallback(
    (name) => {
      clear_close_timer();
      set_open_dropdown((current) => (current === name ? null : name));
    },
    [clear_close_timer]
  );

  const request_close = useCallback(() => {
    clear_close_timer();
    close_timer_ref.current = window.setTimeout(() => {
      const active = document.activeElement;
      const focus_inside =
        services_ref.current?.contains(active) ||
        industries_ref.current?.contains(active);

      // Keep open while keyboard focus is inside a dropdown.
      if (focus_inside) return;
      set_open_dropdown(null);
      close_timer_ref.current = null;
    }, CLOSE_DELAY_MS);
  }, [clear_close_timer]);

  useEffect(() => {
    return () => clear_close_timer();
  }, [clear_close_timer]);

  useEffect(() => {
    function handle_keydown(event) {
      if (event.key === "Escape" && open_dropdown) {
        const current = open_dropdown;
        close_dropdown();
        if (current === "services") services_button_ref.current?.focus();
        if (current === "industries") industries_button_ref.current?.focus();
      }
    }

    function handle_pointer_down(event) {
      const target = event.target;
      if (
        services_ref.current?.contains(target) ||
        industries_ref.current?.contains(target)
      ) {
        return;
      }
      close_dropdown();
    }

    document.addEventListener("keydown", handle_keydown);
    document.addEventListener("mousedown", handle_pointer_down);
    return () => {
      document.removeEventListener("keydown", handle_keydown);
      document.removeEventListener("mousedown", handle_pointer_down);
    };
  }, [open_dropdown, close_dropdown]);

  return (
    <nav className="hidden lg:flex items-center gap-7 xl:gap-8" aria-label="Main">
      <NavDropdown
        id={services_panel_id}
        label="Services"
        is_open={open_dropdown === "services"}
        title="Services"
        view_all={service_hub}
        items={service_navigation}
        numbered
        button_ref={services_button_ref}
        wrapper_ref={services_ref}
        on_toggle={() => toggle_named("services")}
        on_open={() => open_named("services")}
        on_close_request={request_close}
        on_cancel_close={clear_close_timer}
        on_navigate={close_dropdown}
      />

      <NavDropdown
        id={industries_panel_id}
        label="Industries"
        is_open={open_dropdown === "industries"}
        title="Industries"
        view_all={industry_hub}
        items={industry_navigation}
        button_ref={industries_button_ref}
        wrapper_ref={industries_ref}
        on_toggle={() => toggle_named("industries")}
        on_open={() => open_named("industries")}
        on_close_request={request_close}
        on_cancel_close={clear_close_timer}
        on_navigate={close_dropdown}
      />

      {primary_navigation.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="ds-nav-link text-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-200 ds-focus py-2"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
