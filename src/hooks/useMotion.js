import { useEffect, useState } from 'react';
export function useMotion() {
  const [systemReduced, setSystemReduced] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );
  const [paused, setPaused] = useState(() => {
    try {
      return localStorage.getItem('portfolio-motion') === 'paused';
    } catch {
      return false;
    }
  });
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = (event) => setSystemReduced(event.matches);
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);
  const reduced = systemReduced || paused;
  useEffect(() => {
    document.documentElement.dataset.motion = reduced ? 'reduced' : 'full';
  }, [reduced]);
  function toggleMotion() {
    setPaused((value) => {
      const next = !value;
      try {
        localStorage.setItem('portfolio-motion', next ? 'paused' : 'full');
      } catch {
        /* In-memory fallback. */
      }
      return next;
    });
  }
  return { reduced, paused, systemReduced, toggleMotion };
}
