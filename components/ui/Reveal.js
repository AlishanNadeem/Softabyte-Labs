"use client";

import { useEffect, useRef } from "react";
import {
  observe_reveal_once,
  resolve_reveal_delay,
  REVEAL_VARIANTS,
} from "@/lib/motion/reveal_observer";

/**
 * Progressive-enhancement scroll reveal.
 *
 * SSR / no-JS: content is fully visible (no .js class on html).
 * With JS: early .js class hides pending reveals; IntersectionObserver
 * reveals once. Animate-once — no hide on scroll-up.
 */
export function Reveal({
  children,
  className = "",
  variant = "fade_up",
  delay,
  stagger_index,
  as: Tag = "div",
}) {
  const ref = useRef(null);
  const resolved_variant = REVEAL_VARIANTS.includes(variant)
    ? variant
    : "fade_up";
  const resolved_delay = resolve_reveal_delay({ delay, stagger_index });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefers_reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefers_reduced) {
      element.classList.add("ds-reveal--visible");
      return;
    }

    if (resolved_delay > 0) {
      element.style.setProperty("--reveal-delay", `${resolved_delay}ms`);
    }

    // Already in view on mount (e.g. short pages) — reveal promptly.
    const rect = element.getBoundingClientRect();
    const already_visible =
      rect.top < window.innerHeight * 0.92 && rect.bottom > 0;

    if (already_visible) {
      // Double-rAF ensures initial hidden styles paint first.
      let frame_two = 0;
      const frame_one = window.requestAnimationFrame(() => {
        frame_two = window.requestAnimationFrame(() => {
          element.classList.add("ds-reveal--visible");
        });
      });
      return () => {
        window.cancelAnimationFrame(frame_one);
        window.cancelAnimationFrame(frame_two);
      };
    }

    return observe_reveal_once(element, () => {
      element.classList.add("ds-reveal--visible");
    });
  }, [resolved_delay]);

  return (
    <Tag
      ref={ref}
      className={`ds-reveal ds-reveal--${resolved_variant} ${className}`.trim()}
      data-reveal={resolved_variant}
    >
      {children}
    </Tag>
  );
}
