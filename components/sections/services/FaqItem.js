"use client";

import { useEffect, useId, useRef } from "react";
import { ChevronDown } from "lucide-react";

function prefers_reduced_motion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function FaqItem({ id, question, answer, is_open, on_toggle }) {
  const details_ref = useRef(null);
  const panel_ref = useRef(null);
  const closing_ref = useRef(false);
  const timeout_ref = useRef(null);
  const panel_listener_ref = useRef(null);
  const react_id = useId();
  const panel_id = `${id}-panel-${react_id}`;

  function clear_close_listeners() {
    const panel = panel_ref.current;
    if (panel && panel_listener_ref.current) {
      panel.removeEventListener("transitionend", panel_listener_ref.current);
      panel_listener_ref.current = null;
    }
    if (timeout_ref.current) {
      window.clearTimeout(timeout_ref.current);
      timeout_ref.current = null;
    }
  }

  function finish_close() {
    const details = details_ref.current;
    if (!details) return;

    clear_close_listeners();
    details.open = false;
    details.classList.remove("is-closing");
    closing_ref.current = false;
  }

  function start_close_animation() {
    const details = details_ref.current;
    const panel = panel_ref.current;
    if (!details || closing_ref.current) return;

    closing_ref.current = true;
    details.classList.add("is-closing");

    function on_transition_end(event) {
      if (event.target !== panel) return;
      if (event.propertyName !== "grid-template-rows") return;
      finish_close();
    }

    panel_listener_ref.current = on_transition_end;
    panel?.addEventListener("transitionend", on_transition_end);
    timeout_ref.current = window.setTimeout(finish_close, 400);
  }

  useEffect(() => {
    const details = details_ref.current;
    if (!details) return;

    if (is_open) {
      clear_close_listeners();
      closing_ref.current = false;
      details.classList.remove("is-closing");
      details.open = true;
      return;
    }

    if (!details.open || closing_ref.current) return;

    if (prefers_reduced_motion()) {
      details.open = false;
      details.classList.remove("is-closing");
      return;
    }

    start_close_animation();

    return () => {
      clear_close_listeners();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- sync open state from parent only
  }, [is_open]);

  useEffect(() => {
    return () => {
      clear_close_listeners();
    };
  }, []);

  function handle_summary_click(event) {
    event.preventDefault();
    on_toggle(id);
  }

  return (
    <details ref={details_ref} className="ds-faq">
      <summary
        className="ds-faq__summary ds-focus"
        aria-expanded={is_open}
        aria-controls={panel_id}
        onClick={handle_summary_click}
      >
        <span className="ds-faq__summary-row">
          <span className="ds-faq__question ds-body font-medium">{question}</span>
          <ChevronDown
            size={18}
            strokeWidth={1.75}
            className="ds-faq__chevron"
            aria-hidden="true"
          />
        </span>
      </summary>
      <div ref={panel_ref} className="ds-faq__panel" id={panel_id} role="region">
        <div className="ds-faq__panel-inner">
          <p className="ds-faq__answer ds-body">{answer}</p>
        </div>
      </div>
    </details>
  );
}
