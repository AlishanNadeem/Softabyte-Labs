export function SectionHeader({ eyebrow, headline, description, className = "" }) {
  return (
    <div className={`mb-10 md:mb-12 max-w-2xl ${className}`}>
      {eyebrow && (
        <p className="ds-eyebrow text-brand-primary mb-3">{eyebrow}</p>
      )}
      <span className="ds-accent-line mb-4 block" aria-hidden="true" />
      <h2 className="ds-h2 text-text-primary mb-4">{headline}</h2>
      {description && (
        <p className="ds-body-large text-text-secondary">{description}</p>
      )}
    </div>
  );
}
