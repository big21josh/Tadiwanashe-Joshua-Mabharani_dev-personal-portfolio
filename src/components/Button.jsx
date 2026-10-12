// Adapted from the original GitHub portfolio component.
export function Button({ className = '', variant = 'primary', href, children, ...props }) {
  const classes = `button button--${variant} ${className}`;
  return href ? (
    <a className={classes} href={href} {...props}>
      {children}
    </a>
  ) : (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
