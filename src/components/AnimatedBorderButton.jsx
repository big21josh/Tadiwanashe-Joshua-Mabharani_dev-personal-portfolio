import { Button } from './Button';
// Adapted from the original GitHub animated SVG border component.
export function AnimatedBorderButton({ children, ...props }) {
  return (
    <Button variant="outline" className="animated-border" {...props}>
      <svg
        className="border-trace"
        viewBox="0 0 240 56"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <rect
          x="1"
          y="1"
          width="238"
          height="54"
          rx="8"
          fill="none"
          stroke="currentColor"
          pathLength="100"
        />
      </svg>
      {children}
    </Button>
  );
}
