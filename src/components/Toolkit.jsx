const tools = [
  'React',
  'Next.js',
  'TypeScript',
  'JavaScript',
  'Python',
  'Django',
  'HTML',
  'CSS',
  'Tailwind CSS',
  'Bootstrap',
  'Node.js',
  'Express',
  'SQLite',
  'PostgreSQL',
  'Supabase',
  'MongoDB',
  'Git',
  'GitHub',
  'Vite',
  'Three.js',
  'Framer Motion',
  'Lucide',
  'Figma',
  'Vercel',
  'Render',
  'FFmpeg',
];
export function Toolkit() {
  return (
    <section id="toolkit" className="toolkit toolkit-text-only" aria-label="Technologies I use">
      <div className="section">
        <div
          className="toolkit-window"
          tabIndex={0}
          role="region"
          aria-label="Scrolling technology names; hover or focus to pause"
        >
          <div className="toolkit-track">
            {[false, true].map((duplicate) => (
              <div
                className="toolkit-group"
                key={String(duplicate)}
                aria-hidden={duplicate || undefined}
              >
                {tools.map((name) => (
                  <span key={name} className="toolkit-name">
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
