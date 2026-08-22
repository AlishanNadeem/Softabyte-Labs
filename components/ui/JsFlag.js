"use client";

import { useLayoutEffect } from "react";

/**
 * Adds the `js` class to <html> after hydration, before the first paint.
 *
 * Replaces the previous beforeInteractive inline script, which mutated
 * document.documentElement before React hydrated and caused a className
 * mismatch on <html>. Server markup and the first client render stay
 * identical (font variables only); progressive-enhancement reveal CSS
 * activates once this effect runs.
 */
export function JsFlag() {
  useLayoutEffect(() => {
    document.documentElement.classList.add("js");
  }, []);

  return null;
}
