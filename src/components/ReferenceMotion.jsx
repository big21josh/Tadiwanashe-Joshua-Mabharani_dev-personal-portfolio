import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
gsap.registerPlugin(SplitText, ScrollTrigger);
export function ReferenceMotion({ reduced }) {
  const loader = useRef(null);
  const entered = useRef(false);
  useEffect(() => {
    if (reduced) return;
    let cancelled = false;
    let context;
    let smooth;
    let raf;
    let modalObserver;
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    if (finePointer) {
      smooth = new Lenis({ duration: 1.05, anchors: true, autoRaf: false });
      const frame = (time) => {
        if (!document.hidden) smooth.raf(time);
        raf = requestAnimationFrame(frame);
      };
      raf = requestAnimationFrame(frame);
      smooth.on('scroll', ScrollTrigger.update);
      const syncModal = () => {
        if (document.body.style.overflow === 'hidden') smooth.stop();
        else smooth.start();
      };
      modalObserver = new MutationObserver(syncModal);
      modalObserver.observe(document.body, { attributes: true, attributeFilter: ['style'] });
      syncModal();
    }
    document.fonts.ready.then(() => {
      if (cancelled) return;
      context = gsap.context(() => {
        let split;
        if (!entered.current) {
        entered.current = true;
        split = SplitText.create('.ref-hero h1', {
          type: 'words,chars',
          aria: 'auto',
          tag: 'span',
        });
        const timeline = gsap.timeline();
        timeline
          .to('.ref-load-mark', { opacity: 0, duration: 0.18, ease: 'power2.in' }, 0.12)
          .to(
            '.ref-load-panel',
            { yPercent: -100, duration: 0.46, stagger: 0.05, ease: 'power3.inOut' },
            0.18,
          )
          .set(loader.current, { visibility: 'hidden' }, 0.9)
          .from('.ref-badge', { opacity: 0, y: 16, duration: 0.6 }, 0.4)
          .from(
            split.chars,
            {
              opacity: 0,
              yPercent: 45,
              filter: 'blur(7px)',
              duration: 0.7,
              stagger: 0.017,
              ease: 'power3.out',
            },
            0.45,
          )
          .from(
            '.ref-hero-copy>p,.ref-hero-copy>.ref-ctas',
            { opacity: 0, y: 20, duration: 0.8, stagger: 0.1 },
            0.95,
          )
          .fromTo(
            '.ref-editor',
            { opacity: 0, y: 72, scale: 0.985 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1.4,
              ease: 'expo.out',
              clearProps: 'transform',
            },
            1.15,
          )
          .from('.ref-blue-bars', { opacity: 0, duration: 1.6 }, 1.9);
        } else { gsap.set(loader.current, {visibility:'hidden'}); }
        gsap.fromTo(
          '.ref-intro',
          { y: 110 },
          {
            y: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: '.ref-intro',
              start: 'top bottom',
              end: 'top 35%',
              scrub: true,
            },
          },
        );
        gsap.utils
          .toArray('.ref-service-card,.ref-approach-grid article,.ref-faqs details')
          .forEach((element, index) =>
            gsap.from(element, {
              y: 32,
              opacity: 0,
              duration: 0.8,
              delay: (index % 5) * 0.05,
              ease: 'power3.out',
              scrollTrigger: { trigger: element, start: 'top 94%', once: true },
            }),
          );
        ScrollTrigger.refresh();
        return () => split?.revert();
      });
    });
    return () => {
      cancelled = true;
      context?.revert();
      cancelAnimationFrame(raf);
      modalObserver?.disconnect();
      smooth?.destroy();
    };
  }, [reduced]);
  return (
    <div
      ref={loader}
      className={`ref-load-transition${reduced ? ' motion-skip' : ''}`}
      aria-hidden="true"
    >
      <div className="ref-load-panels">
        {Array.from({ length: 5 }, (_, i) => (
          <span className="ref-load-panel" key={i} />
        ))}
      </div>
      <span className="ref-load-mark">TJM</span>
    </div>
  );
}
