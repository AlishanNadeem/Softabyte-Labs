import { ArrowRight } from "lucide-react";

export function TextLink({
  href = "#",
  children,
  className = "",
  show_arrow = true,
  accent = false,
}) {
  const color_class = accent
    ? "text-brand-primary hover:text-brand-primary-hover"
    : "text-text-primary hover:text-brand-primary";

  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200 ds-focus ${color_class} ${className}`}
    >
      <span>{children}</span>
      {show_arrow && (
        <ArrowRight
          size={16}
          strokeWidth={1.75}
          className="ds-arrow-shift shrink-0"
          aria-hidden="true"
        />
      )}
    </a>
  );
}
