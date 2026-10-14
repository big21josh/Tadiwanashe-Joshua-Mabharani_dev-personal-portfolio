import { useEffect, useState } from 'react';
import { resolveSection, sectionMetadata } from '../data/navigation';

export function useActiveSection() {
  const [active, setActive] = useState('home');
  useEffect(() => {
    const meta = sectionMetadata[active];
    document.title = meta.title;
    for (const [selector, content] of [
      ['meta[name="description"]', meta.description],
      ['meta[property="og:title"]', meta.title],
      ['meta[property="og:description"]', meta.description],
      ['meta[name="twitter:title"]', meta.title],
      ['meta[name="twitter:description"]', meta.description],
    ]) document.querySelector(selector)?.setAttribute('content', content);
  }, [active]);
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
      const owner = resolveSection(current);
      setActive(owner);
      if (window.location.hash !== `#${owner}`) {
        window.history.replaceState(window.history.state, '', `#${owner}`);
      }
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    const hash = window.location.hash.slice(1);
    const target = document.getElementById(hash) || document.getElementById(resolveSection(hash));
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
