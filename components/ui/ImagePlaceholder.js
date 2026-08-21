import Image from "next/image";

const aspect_map = {
  hero: "aspect-[4/3]",
  project: "aspect-[8/5]",
  supporting: "aspect-[3/2]",
};

export function ImagePlaceholder({
  src,
  alt = "",
  width,
  height,
  filename,
  dimensions,
  aspect_ratio,
  purpose,
  aspect_class,
  size,
  framed = true,
  reveal = false,
  className = "",
  sizes = "(max-width: 1024px) 100vw, 50vw",
  priority = false,
}) {
  const resolved_aspect = aspect_class || aspect_map[size] || "aspect-[4/3]";
  const reveal_class = reveal ? "group ds-image-zoom" : "";
  const frame_class = framed ? "ds-frame-accent ds-image-placeholder--framed" : "";

  if (src) {
    const has_intrinsic = width && height;

    return (
      <figure
        className={`ds-image-placeholder m-0 ${framed ? "ds-frame-accent" : ""} ${reveal_class} ${className}`.trim()}
      >
        <div
          className={`relative overflow-hidden rounded-md border border-border bg-surface shadow-[0_24px_48px_-28px_rgba(0,0,0,0.75)] ${has_intrinsic ? "" : resolved_aspect}`.trim()}
        >
          {has_intrinsic ? (
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              sizes={sizes}
              priority={priority}
              className={`w-full h-auto ${reveal ? "ds-image-zoom" : ""}`.trim()}
            />
          ) : (
            <Image
              src={src}
              alt={alt}
              fill
              sizes={sizes}
              priority={priority}
              className={`object-cover ${reveal ? "ds-image-zoom" : ""}`.trim()}
            />
          )}
        </div>
      </figure>
    );
  }

  return (
    <figure
      className={`ds-image-placeholder ${resolved_aspect} ${frame_class} ${reveal_class} ${className}`.trim()}
      aria-hidden="true"
    >
      <div className="ds-image-placeholder__surface">
        <div className="ds-image-placeholder__gradient" aria-hidden="true" />
        <div className="ds-image-placeholder__meta">
          <p className="ds-image-placeholder__path">{filename}</p>
          <p className="ds-image-placeholder__spec">
            {dimensions} · {aspect_ratio}
          </p>
          <p className="ds-image-placeholder__purpose">{purpose}</p>
        </div>
      </div>
    </figure>
  );
}
