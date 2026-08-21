"use client";

const BLOCK_TYPE_OPTIONS = [
  { value: "paragraph", label: "Paragraph" },
  { value: "rich_paragraph", label: "Paragraph with links" },
  { value: "heading", label: "Heading" },
  { value: "unordered_list", label: "Unordered list" },
  { value: "ordered_list", label: "Ordered list" },
  { value: "callout", label: "Callout" },
];

function create_empty_block(type) {
  if (type === "heading") {
    return { type: "heading", level: 2, text: "" };
  }
  if (type === "unordered_list" || type === "ordered_list") {
    return { type, items: [] };
  }
  if (type === "callout") {
    return { type: "callout", text: "" };
  }
  if (type === "rich_paragraph") {
    return { type: "rich_paragraph", segments: [{ type: "text", value: "" }] };
  }
  return { type: "paragraph", text: "" };
}

function list_items_to_text(items) {
  return Array.isArray(items) ? items.join("\n") : "";
}

function text_to_list_items(value) {
  return String(value || "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

/**
 * Serialize rich segments to editable text with [label](/path/) markers.
 */
function segments_to_text(segments) {
  if (!Array.isArray(segments)) return "";
  return segments
    .map((segment) => {
      if (segment?.type === "link") {
        return `[${segment.value || ""}](${segment.href || ""})`;
      }
      return segment?.value || "";
    })
    .join("");
}

/**
 * Parse [label](/path/) into rich_paragraph segments. Internal paths only.
 */
function text_to_segments(value) {
  const source = String(value || "");
  const segments = [];
  const pattern = /\[([^\]]+)\]\((\/[^)\s]*)\)/g;
  let last_index = 0;
  let match;

  while ((match = pattern.exec(source)) !== null) {
    if (match.index > last_index) {
      segments.push({
        type: "text",
        value: source.slice(last_index, match.index),
      });
    }
    segments.push({
      type: "link",
      value: match[1],
      href: match[2],
    });
    last_index = match.index + match[0].length;
  }

  if (last_index < source.length) {
    segments.push({ type: "text", value: source.slice(last_index) });
  }

  if (!segments.length) {
    return [{ type: "text", value: "" }];
  }

  return segments;
}

export function BlogBlockEditor({ content = [], on_change }) {
  const blocks = Array.isArray(content) ? content : [];

  function update_blocks(next_blocks) {
    on_change(next_blocks);
  }

  function update_block(index, patch) {
    update_blocks(
      blocks.map((block, block_index) =>
        block_index === index ? { ...block, ...patch } : block
      )
    );
  }

  function change_type(index, type) {
    update_blocks(
      blocks.map((block, block_index) =>
        block_index === index ? create_empty_block(type) : block
      )
    );
  }

  function add_block(type = "paragraph") {
    update_blocks([...blocks, create_empty_block(type)]);
  }

  function delete_block(index) {
    update_blocks(blocks.filter((_, block_index) => block_index !== index));
  }

  function move_block(index, direction) {
    const target = index + direction;
    if (target < 0 || target >= blocks.length) return;
    const next = [...blocks];
    const [item] = next.splice(index, 1);
    next.splice(target, 0, item);
    update_blocks(next);
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm font-medium text-text-primary">Content blocks</p>
        <div className="flex flex-wrap gap-2">
          {BLOCK_TYPE_OPTIONS.filter(
            (option) => option.value !== "rich_paragraph"
          ).map((option) => (
            <button
              key={option.value}
              type="button"
              className="ds-btn ds-btn--secondary inline-flex min-h-9 items-center rounded-md border border-border px-3 text-xs"
              onClick={() => add_block(option.value)}
            >
              Add {option.label.toLowerCase()}
            </button>
          ))}
          <button
            type="button"
            className="ds-btn ds-btn--secondary inline-flex min-h-9 items-center rounded-md border border-border px-3 text-xs"
            onClick={() => add_block("rich_paragraph")}
          >
            Add paragraph with links
          </button>
        </div>
      </div>

      {blocks.length === 0 ? (
        <p className="rounded-md border border-dashed border-border px-4 py-6 text-sm text-text-muted">
          No blocks yet. Add a paragraph or heading to start writing.
        </p>
      ) : null}

      <ul className="m-0 list-none space-y-4 p-0">
        {blocks.map((block, index) => {
          const type = block.type || "paragraph";
          return (
            <li
              key={`block-${index}`}
              className="rounded-md border border-border bg-background-secondary p-4"
            >
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <label className="sr-only" htmlFor={`block-type-${index}`}>
                  Block type
                </label>
                <select
                  id={`block-type-${index}`}
                  className="ds-input max-w-[14rem]"
                  value={type}
                  onChange={(event) => change_type(index, event.target.value)}
                >
                  {BLOCK_TYPE_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>

                {type === "heading" ? (
                  <>
                    <label className="sr-only" htmlFor={`block-level-${index}`}>
                      Heading level
                    </label>
                    <select
                      id={`block-level-${index}`}
                      className="ds-input max-w-[7rem]"
                      value={Number(block.level) === 3 ? 3 : 2}
                      onChange={(event) =>
                        update_block(index, {
                          level: Number(event.target.value) === 3 ? 3 : 2,
                        })
                      }
                    >
                      <option value={2}>H2</option>
                      <option value={3}>H3</option>
                    </select>
                  </>
                ) : null}

                <div className="ml-auto flex flex-wrap gap-2">
                  <button
                    type="button"
                    className="ds-btn ds-btn--secondary inline-flex min-h-9 items-center rounded-md border border-border px-3 text-xs"
                    onClick={() => move_block(index, -1)}
                    disabled={index === 0}
                  >
                    Up
                  </button>
                  <button
                    type="button"
                    className="ds-btn ds-btn--secondary inline-flex min-h-9 items-center rounded-md border border-border px-3 text-xs"
                    onClick={() => move_block(index, 1)}
                    disabled={index === blocks.length - 1}
                  >
                    Down
                  </button>
                  <button
                    type="button"
                    className="ds-btn ds-btn--secondary inline-flex min-h-9 items-center rounded-md border border-border px-3 text-xs"
                    onClick={() => delete_block(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>

              {type === "unordered_list" || type === "ordered_list" ? (
                <div className="space-y-2">
                  <label
                    htmlFor={`block-items-${index}`}
                    className="block text-xs text-text-muted"
                  >
                    One item per line
                  </label>
                  <textarea
                    id={`block-items-${index}`}
                    className="ds-input ds-textarea min-h-28 w-full"
                    value={list_items_to_text(block.items)}
                    onChange={(event) =>
                      update_block(index, {
                        items: text_to_list_items(event.target.value),
                      })
                    }
                  />
                </div>
              ) : type === "rich_paragraph" ? (
                <div className="space-y-2">
                  <label
                    htmlFor={`block-text-${index}`}
                    className="block text-xs text-text-muted"
                  >
                    Text with internal links as [label](/path/)
                  </label>
                  <textarea
                    id={`block-text-${index}`}
                    className="ds-input ds-textarea min-h-28 w-full"
                    value={segments_to_text(block.segments)}
                    onChange={(event) =>
                      update_block(index, {
                        segments: text_to_segments(event.target.value),
                      })
                    }
                  />
                </div>
              ) : (
                <div className="space-y-2">
                  <label
                    htmlFor={`block-text-${index}`}
                    className="block text-xs text-text-muted"
                  >
                    {type === "heading" ? "Heading text" : "Text"}
                  </label>
                  <textarea
                    id={`block-text-${index}`}
                    className="ds-input ds-textarea min-h-24 w-full"
                    value={block.text || ""}
                    onChange={(event) =>
                      update_block(index, { text: event.target.value })
                    }
                  />
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
