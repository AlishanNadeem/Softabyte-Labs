const REVEAL_OBSERVER_OPTIONS = {
  threshold: 0.12,
  rootMargin: "0px 0px -8% 0px",
};

let shared_observer = null;
const callbacks = new WeakMap();

function get_shared_observer() {
  if (typeof window === "undefined") return null;

  if (!shared_observer) {
    shared_observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;

        const on_intersect = callbacks.get(entry.target);
        if (on_intersect) {
          on_intersect();
        }

        shared_observer.unobserve(entry.target);
        callbacks.delete(entry.target);
      }
    }, REVEAL_OBSERVER_OPTIONS);
  }

  return shared_observer;
}

/**
 * Observe an element once for scroll reveal.
 * Shared observer across the page to avoid N observers.
 */
export function observe_reveal_once(element, on_intersect) {
  const observer = get_shared_observer();
  if (!observer || !element) return () => {};

  callbacks.set(element, on_intersect);
  observer.observe(element);

  return () => {
    observer.unobserve(element);
    callbacks.delete(element);
  };
}

export const MOTION_STAGGER_STEP_MS = 70;
export const MOTION_MAX_DELAY_MS = 350;

export function resolve_reveal_delay({ delay, stagger_index } = {}) {
  if (typeof delay === "number" && !Number.isNaN(delay)) {
    return Math.min(Math.max(delay, 0), MOTION_MAX_DELAY_MS);
  }

  if (typeof stagger_index === "number" && !Number.isNaN(stagger_index)) {
    return Math.min(
      Math.max(stagger_index, 0) * MOTION_STAGGER_STEP_MS,
      MOTION_MAX_DELAY_MS
    );
  }

  return 0;
}

export const REVEAL_VARIANTS = [
  "fade_up",
  "fade_in",
  "fade_down",
  "slide_left",
  "slide_right",
  "scale_in",
];
