import Link from "next/link";

export function BlogArticleContent({ content = [] }) {
  if (!content.length) return null;

  return (
    <div className="ds-blog-prose space-y-5 md:space-y-6">
      {content.map((block, index) => {
        const key = `${block.type}-${index}`;

        if (block.type === "heading") {
          const Tag = block.level === 3 ? "h3" : "h2";
          const class_name =
            block.level === 3
              ? "ds-h4 text-text-primary pt-2"
              : "ds-h3 text-text-primary pt-4";

          return (
            <Tag
              key={key}
              id={block.id}
              className={`${class_name} scroll-mt-28`}
            >
              {block.text}
            </Tag>
          );
        }

        if (block.type === "paragraph") {
          return (
            <p key={key} className="ds-body text-text-secondary">
              {block.text}
            </p>
          );
        }

        if (block.type === "rich_paragraph") {
          return (
            <p key={key} className="ds-body text-text-secondary">
              {(block.segments || []).map((segment, segment_index) => {
                if (segment.type === "link") {
                  return (
                    <Link
                      key={`${key}-seg-${segment_index}`}
                      href={segment.href}
                      className="text-brand-primary hover:underline ds-focus rounded-sm"
                    >
                      {segment.value}
                    </Link>
                  );
                }

                return (
                  <span key={`${key}-seg-${segment_index}`}>
                    {segment.value}
                  </span>
                );
              })}
            </p>
          );
        }

        if (block.type === "unordered_list") {
          return (
            <ul
              key={key}
              className="list-disc pl-5 space-y-2 ds-body text-text-secondary"
            >
              {(block.items || []).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }

        if (block.type === "ordered_list") {
          return (
            <ol
              key={key}
              className="list-decimal pl-5 space-y-2 ds-body text-text-secondary"
            >
              {(block.items || []).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          );
        }

        if (block.type === "callout") {
          return (
            <aside
              key={key}
              className="rounded-md border border-brand-primary-border bg-brand-primary-soft/40 px-5 py-4"
            >
              <p className="ds-body text-text-primary m-0">{block.text}</p>
            </aside>
          );
        }

        return null;
      })}
    </div>
  );
}
