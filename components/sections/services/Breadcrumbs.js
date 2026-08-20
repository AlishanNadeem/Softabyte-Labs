import Link from "next/link";

export function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 md:mb-8">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 list-none pl-0 m-0 text-xs text-text-muted">
        {items.map((item, index) => {
          const is_last = index === items.length - 1;
          return (
            <li key={item.href || item.label} className="flex items-center gap-2">
              {index > 0 && (
                <span className="text-border-strong" aria-hidden="true">
                  /
                </span>
              )}
              {is_last ? (
                <span className="text-text-secondary" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-brand-primary transition-colors duration-200 ds-focus rounded-sm"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
