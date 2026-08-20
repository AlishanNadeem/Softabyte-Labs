import { Bot, Code2, Globe, Palette, Server } from "lucide-react";
import { positioning_strip } from "@/config/homepage_content";

const strip_icons = [Code2, Globe, Bot, Palette, Server];

export function HomePositioning() {
  return (
    <section
      className="border-b border-border bg-background-primary py-6 md:py-8"
      aria-label="Core capabilities"
    >
      <div className="ds-container">
        <ul className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap lg:divide-x lg:divide-border border border-border rounded-md overflow-hidden bg-background-secondary">
          {positioning_strip.map((item, index) => {
            const Icon = strip_icons[index];
            return (
              <li
                key={item}
                className="flex-1 flex items-center justify-center sm:justify-start gap-2.5 px-4 py-4 md:px-5 md:py-5 border-b sm:border-b-0 sm:border-r border-border last:border-b-0 sm:last:border-r-0 lg:border-r lg:last:border-r-0"
              >
                {Icon && (
                  <Icon
                    size={16}
                    strokeWidth={1.75}
                    className="text-text-muted shrink-0 hidden sm:block"
                    aria-hidden="true"
                  />
                )}
                <span className="ds-label text-text-primary text-center sm:text-left">
                  {item}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
