export function Tag({ children, active = false, className = "" }) {
  const active_class = active
    ? "border-brand-primary-border text-brand-primary bg-brand-primary-soft"
    : "border-border text-text-secondary bg-background-primary";

  return (
    <span
      className={`inline-flex items-center rounded-sm border px-2.5 py-1 text-xs font-medium ${active_class} ${className}`}
    >
      {children}
    </span>
  );
}
