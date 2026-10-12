import { useEffect, useState } from 'react';

export function useActiveSection() {
  const [active, setActive] = useState('home');
  useEffect(() => {
    const sections = [...document.querySelectorAll('main section[id], main .ref-intro[id], footer[id]')];
    let frame;
    const update = () => {
      frame = null;
      const marker = Math.min(160, window.innerHeight * 0.25);
      let current = sections[0]?.id || 'home';
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= marker) current = section.id;
        else break;
      }
      setActive(current);
      if (window.location.hash !== `#${current}`) {
        window.history.replaceState(window.history.state, '', `#${current}`);
      }
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    const target = document.getElementById(window.location.hash.slice(1));
    if (target && sections.includes(target)) target.scrollIntoView({ behavior: 'instant' });
    schedule();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, []);
  return active;
}
