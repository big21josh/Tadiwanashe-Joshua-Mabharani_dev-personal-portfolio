import { useEffect, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';
import { projects } from '../data/portfolio';

export function LightField({ reduced, className = '', theme: fixedTheme }) {
  const canvas = useRef(null);
  useEffect(() => {
    let stopped = false;
    let dispose;
    const colors = () =>
      (fixedTheme || document.documentElement.dataset.theme) === 'light'
        ? [
            [1, 1, 1],
            [0.8, 0.925, 1],
            [0.239, 0.694, 1],
            [0, 0.6, 1],
          ]
        : [
            [0, 0, 0],
            [0, 0.36, 0.6],
            [0, 0.6, 1],
            [0.72, 0.96, 1],
          ];
    let engine;
    const start = () => {
      if (stopped || !engine || !canvas.current) return;
      dispose?.();
      try {
        dispose = engine.createLightField(canvas.current, colors(), reduced);
      } catch {
        /* The CSS blue glow remains available without WebGL. */
      }
    };
    import('./lightFieldEngine').then((module) => {
      engine = module;
      start();
    });
    const theme = new MutationObserver(start);
    if (!fixedTheme) {
      theme.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    }
    return () => {
      stopped = true;
      theme.disconnect();
      dispose?.();
    };
  }, [reduced, fixedTheme]);
  return <canvas ref={canvas} className={`ref-light-field ${className}`} aria-hidden="true" />;
}
export function ProjectSpiral({ motion }) {
  const root = useRef(null);
  const canvas = useRef(null);
  const progress = useRef(0);
  const controller = useRef(null);
  const pausedRef = useRef(false);
  const [paused, setPaused] = useState(false);
  const [failed, setFailed] = useState(false);
  const reduced = motion.reduced || paused;
  useEffect(() => {
    pausedRef.current = reduced;
    controller.current?.refresh();
  }, [reduced]);
  useEffect(() => {
    let stopped = false;
    let engine;
    let dispose;
    const section = root.current;
    const measure = () => {
      if (pausedRef.current) return;
      const rect = section.getBoundingClientRect();
      progress.current = Math.max(
        0,
        Math.min(1, -rect.top / Math.max(1, rect.height - window.innerHeight)),
      );
      section.style.setProperty('--spiral-progress', progress.current);
      section.dataset.phase = progress.current > 0.842142857 ? 'exit' : 'coil';
    };
    measure();
    window.addEventListener('scroll', measure, { passive: true });
    window.addEventListener('resize', measure);
    const observe = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || engine) return;
        observe.disconnect();
        import('./projectCoilEngine')
          .then((module) => {
            if (stopped) return;
            try {
              engine = module.createProjectCoil(canvas.current, {
                items: projects,
                progressRef: progress,
                pausedRef,
                onOpen: (project) =>
                  window.dispatchEvent(
                    new CustomEvent('portfolio:open-project', { detail: project.id }),
                  ),
                onFailure: () => setFailed(true),
              });
              controller.current = engine;
              dispose = () => {
                engine.dispose();
                controller.current = null;
              };
            } catch {
              setFailed(true);
            }
          })
          .catch(() => {
            if (!stopped) setFailed(true);
          });
      },
      { rootMargin: '100% 0px' },
    );
    observe.observe(section);
    return () => {
      stopped = true;
      observe.disconnect();
      dispose?.();
      window.removeEventListener('scroll', measure);
      window.removeEventListener('resize', measure);
    };
  }, []);
  return (
    <section
      id="works"
      ref={root}
      className={`ref-project-spiral${failed ? ' spiral-fallback' : ''}`}
      aria-labelledby="spiral-title"
      data-phase="coil"
    >
      <div className="ref-spiral-stage">
        <LightField reduced={reduced} theme="dark" />
        <h2 id="spiral-title">
          My <em>Works</em>
        </h2>
        <canvas ref={canvas} className="ref-spiral-canvas" aria-hidden="true" />
        {failed && (
          <div className="ref-spiral-fallback-grid">
            {projects.slice(0, 4).map((project) => (
              <img key={project.id} src={project.image} alt={project.title} />
            ))}
          </div>
        )}
        <div className="ref-spiral-exit">
          <a href="#work">
            <em>View all</em>
          </a>
        </div>
        <div className="ref-spiral-controls">
          <span>Scroll to explore</span>
          <button
            onClick={() => setPaused(!paused)}
            disabled={motion.systemReduced || motion.reduced}
            aria-label={reduced ? 'Play spiral animation' : 'Pause spiral animation'}
          >
            {reduced ? <Play size={15} /> : <Pause size={15} />}
          </button>
          <a href="#work">All projects</a>
        </div>
        <nav className="sr-only spiral-accessible" aria-label="Spiral project previews">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() =>
                window.dispatchEvent(
                  new CustomEvent('portfolio:open-project', { detail: project.id }),
                )
              }
            >
              Open {project.title} case study
            </button>
          ))}
        </nav>
      </div>
    </section>
  );
}
