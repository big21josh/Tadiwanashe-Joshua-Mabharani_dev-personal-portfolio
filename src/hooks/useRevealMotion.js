import { useEffect, useRef } from 'react';
// Animate on entry without hiding content before JavaScript or observers are ready.
export function useRevealMotion(reduced) {
  const seen = useRef(new WeakSet());
  useEffect(() => {
    if (reduced) return;
    const animations = new Set();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting && !seen.current.has(entry.target)) {
            seen.current.add(entry.target);
            const animation = entry.target.animate(
              [
                { opacity: 0, transform: 'translateY(22px)' },
                { opacity: 1, transform: 'translateY(0)' },
              ],
              { duration: 600, easing: 'cubic-bezier(.2,.7,.3,1)' },
            );
            animations.add(animation);
            animation.finished.then(() => animations.delete(animation)).catch(() => {});
            observer.unobserve(entry.target);
          }
      },
      { threshold: 0.08 },
    );
    document
      .querySelectorAll(
        '.section-heading,.project-card,.about-grid,.skill-group,.timeline-item,.certificate-card',
      )
      .forEach((el) => observer.observe(el));
    return () => {
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
    };
  }, [reduced]);
}
