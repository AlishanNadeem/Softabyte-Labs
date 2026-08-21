export function BlogTableOfContents({ items = [] }) {
  if (!items.length) return null;

  return (
    <nav aria-label="Table of contents" className="ds-blog-toc">
      <p className="ds-eyebrow text-text-muted mb-3">On this page</p>
      <ol className="space-y-2 list-none pl-0 m-0">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="text-sm text-text-secondary hover:text-brand-primary transition-colors duration-200 ds-focus rounded-sm"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
