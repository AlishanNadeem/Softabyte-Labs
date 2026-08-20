const variant_styles = {
  primary: "ds-btn--primary border border-transparent",
  secondary:
    "ds-btn--secondary bg-background-secondary text-text-primary border border-border-strong hover:border-brand-cyan-border hover:bg-surface active:bg-background-secondary",
};

const base_styles =
  "ds-btn inline-flex items-center justify-center gap-2 min-h-11 px-5 text-sm font-medium rounded-md ds-focus";

export function Button({
  variant = "primary",
  href,
  className = "",
  children,
  ...props
}) {
  const classes = `${base_styles} ${variant_styles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
