"use client";

import { useState } from "react";
import { FaqItem } from "@/components/sections/services/FaqItem";

export function FaqAccordion({ items = [] }) {
  const [active_id, set_active_id] = useState(null);

  function handle_toggle(id) {
    set_active_id((current) => (current === id ? null : id));
  }

  return (
    <div className="ds-faq-list max-w-3xl space-y-3">
      {items.map((item, index) => {
        const id = `faq-${index}`;
        return (
          <FaqItem
            key={item.question}
            id={id}
            question={item.question}
            answer={item.answer}
            is_open={active_id === id}
            on_toggle={handle_toggle}
          />
        );
      })}
    </div>
  );
}
