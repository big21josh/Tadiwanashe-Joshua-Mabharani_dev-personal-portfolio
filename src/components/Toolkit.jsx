import { techStack } from '../data/techStack';
export function Toolkit() {
  return (
    <section id="toolkit" className="toolkit toolkit-text-only" aria-label="Technologies I use">
      <div className="section">
        <div
          className="toolkit-window"
          tabIndex={0}
          role="region"
          aria-label="Technologies used in my projects; hover or focus to pause"
        >
          <div className="toolkit-track">
            {[false, true].map((duplicate) => (
              <div
                className="toolkit-group"
                key={String(duplicate)}
                aria-hidden={duplicate || undefined}
              >
                {techStack.map(({ name, icon }) => (
                  <span key={name} className="toolkit-name">
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <path d={icon.path} />
                    </svg>
                    {name}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
