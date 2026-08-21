"use client";

import { useEffect, useId, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUp } from "lucide-react";

const SHOW_AFTER_PX = 600;
const VIEWBOX = 56;
const STROKE_WIDTH = 2.75;
const RADIUS = (VIEWBOX - STROKE_WIDTH) / 2 - 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

/**
 * Global scroll-to-top with circular scroll-progress ring.
 * Public marketing pages only — hidden on /admin/.
 */
export function ScrollToTop() {
  const pathname = usePathname() || "/";
  const gradient_id = useId().replace(/:/g, "");
  const [is_visible, set_is_visible] = useState(false);
  const [prefers_reduced_motion, set_prefers_reduced_motion] = useState(false);

  const visible_ref = useRef(false);
  const root_ref = useRef(null);
  const progress_circle_ref = useRef(null);
  const raf_ref = useRef(0);
  const ticking_ref = useRef(false);

  const is_admin = pathname.startsWith("/admin");

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync_motion = () => set_prefers_reduced_motion(media.matches);
    sync_motion();
    media.addEventListener("change", sync_motion);
    return () => media.removeEventListener("change", sync_motion);
  }, []);

  useEffect(() => {
    if (is_admin) {
      return undefined;
    }

    function apply_progress() {
      const scroll_y = window.scrollY || window.pageYOffset || 0;
      const doc = document.documentElement;
      const total = Math.max(doc.scrollHeight - window.innerHeight, 0);
      const progress = total > 0 ? Math.min(1, Math.max(0, scroll_y / total)) : 0;

      if (progress_circle_ref.current) {
        progress_circle_ref.current.style.strokeDashoffset = String(
          CIRCUMFERENCE * (1 - progress)
        );
      }

      if (root_ref.current) {
        root_ref.current.dataset.progress = progress >= 0.9 ? "near" : "mid";
        root_ref.current.style.setProperty(
          "--scroll-top-progress",
          String(progress)
        );
      }

      const should_show = scroll_y >= SHOW_AFTER_PX;
      if (should_show !== visible_ref.current) {
        visible_ref.current = should_show;
        set_is_visible(should_show);
      }

      ticking_ref.current = false;
    }

    function request_update() {
      if (ticking_ref.current) return;
      ticking_ref.current = true;
      raf_ref.current = window.requestAnimationFrame(apply_progress);
    }

    visible_ref.current = false;
    window.addEventListener("scroll", request_update, { passive: true });
    window.addEventListener("resize", request_update, { passive: true });
    request_update();

    return () => {
      window.removeEventListener("scroll", request_update);
      window.removeEventListener("resize", request_update);
      if (raf_ref.current) window.cancelAnimationFrame(raf_ref.current);
      ticking_ref.current = false;
      visible_ref.current = false;
    };
  }, [is_admin, pathname]);

  if (is_admin) return null;

  function handle_click() {
    window.scrollTo({
      top: 0,
      behavior: prefers_reduced_motion ? "auto" : "smooth",
    });
  }

  return (
    <div
      ref={root_ref}
      className={`ds-scroll-top ${is_visible ? "is-visible" : ""} ${
        prefers_reduced_motion ? "is-reduced-motion" : ""
      }`}
      data-progress="mid"
      aria-hidden={!is_visible}
    >
      <button
        type="button"
        className="ds-scroll-top__button ds-focus"
        aria-label="Scroll to top"
        title="Scroll to top"
        tabIndex={is_visible ? 0 : -1}
        onClick={handle_click}
      >
        <span className="ds-scroll-top__halo" aria-hidden="true" />
        <svg
          className="ds-scroll-top__ring"
          viewBox={`0 0 ${VIEWBOX} ${VIEWBOX}`}
          aria-hidden="true"
          focusable="false"
        >
          <defs>
            <linearGradient
              id={`ds-scroll-top-progress-${gradient_id}`}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="var(--brand-cyan)" />
              <stop offset="72%" stopColor="var(--brand-cyan)" />
              <stop offset="100%" stopColor="var(--brand-yellow)" />
            </linearGradient>
            <filter
              id={`ds-scroll-top-glow-${gradient_id}`}
              x="-40%"
              y="-40%"
              width="180%"
              height="180%"
            >
              <feGaussianBlur stdDeviation="1.1" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <circle
            className="ds-scroll-top__track"
            cx={VIEWBOX / 2}
            cy={VIEWBOX / 2}
            r={RADIUS}
            fill="none"
            strokeWidth={STROKE_WIDTH}
          />
          <circle
            ref={progress_circle_ref}
            className="ds-scroll-top__progress"
            cx={VIEWBOX / 2}
            cy={VIEWBOX / 2}
            r={RADIUS}
            fill="none"
            strokeWidth={STROKE_WIDTH}
            strokeLinecap="round"
            stroke={`url(#ds-scroll-top-progress-${gradient_id})`}
            filter={`url(#ds-scroll-top-glow-${gradient_id})`}
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={CIRCUMFERENCE}
            transform={`rotate(-90 ${VIEWBOX / 2} ${VIEWBOX / 2})`}
          />
        </svg>
        <span className="ds-scroll-top__inner" aria-hidden="true">
          <ArrowUp className="ds-scroll-top__icon" size={18} strokeWidth={2.4} />
        </span>
      </button>
    </div>
  );
}
