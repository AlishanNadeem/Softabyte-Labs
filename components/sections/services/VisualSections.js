import { Reveal } from "@/components/ui/Reveal";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SectionHeader } from "@/components/sections/home/SectionHeader";

export function VisualSplit({
  eyebrow,
  headline,
  description,
  paragraphs = [],
  visual,
  visual_position = "right",
}) {
  const is_visual_left = visual_position === "left";
  const content = (
    <div className="space-y-4">
      {(eyebrow || headline || description) && (
        <SectionHeader
          eyebrow={eyebrow}
          headline={headline}
          description={description}
          className="mb-0"
        />
      )}
      {paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 40)} className="ds-body text-text-secondary">
          {paragraph}
        </p>
      ))}
    </div>
  );

  const visual_block = visual && (
    <ImagePlaceholder
      {...visual}
      aspect_class={visual.aspect_class}
      reveal
      className="w-full"
    />
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      {is_visual_left ? (
        <>
          <Reveal
            variant="slide_left"
            className="order-2 lg:order-1"
            delay={40}
          >
            {visual_block}
          </Reveal>
          <Reveal variant="slide_right" className="order-1 lg:order-2">
            {content}
          </Reveal>
        </>
      ) : (
        <>
          <Reveal variant="slide_left">{content}</Reveal>
          <Reveal variant="slide_right" delay={40}>
            {visual_block}
          </Reveal>
        </>
      )}
    </div>
  );
}

export function WideVisual({ visual, className = "" }) {
  if (!visual) return null;

  return (
    <Reveal variant="fade_in">
      <ImagePlaceholder
        {...visual}
        aspect_class={visual.aspect_class}
        reveal
        className={`w-full max-w-5xl mx-auto ${className}`.trim()}
      />
    </Reveal>
  );
}

export function FullBleedVisual({ visual }) {
  if (!visual) return null;

  return (
    <Reveal variant="scale_in">
      <ImagePlaceholder
        {...visual}
        aspect_class={visual.aspect_class}
        reveal
        className="w-full"
      />
    </Reveal>
  );
}
