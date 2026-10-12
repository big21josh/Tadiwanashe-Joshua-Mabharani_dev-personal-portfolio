import { useEffect, useState } from 'react';
import {
  Menu,
  X,
  Monitor,
  Smartphone,
  PanelsLeftBottom,
  Layers,
  Image,
  MousePointer2,
  ZoomIn,
  ChevronDown,
  Home,
  Globe,
  Code2,
  PenTool,
  LayoutTemplate,
  Database,
  Network,
  Gauge,
  Wrench,
  ShieldCheck,
  Search,
  Plus,
  Minus,
  Pause,
  Play,
} from 'lucide-react';
import { LightField } from './ProjectSpiral';
import { ThemeToggle } from './ThemeToggle';
import { useActiveSection } from '../hooks/useActiveSection';
import { Button } from './Button';
import { Github, Linkedin } from './SocialIcons';
import { profile, projects } from '../data/portfolio';
const links = [
  ['#home', 'Home'],
  ['#about', 'About'],
  ['#project-spiral', 'Works'],
  ['#services', 'Skills'],
  ['#journey', 'Experience'],
  ['#certificates', 'Certificates'],
];
export function ReferenceNav() {
  const section = useActiveSection();
  const active = {
    work: 'project-spiral', toolkit: 'home', intro: 'home',
    approach: 'services', faqs: 'contact', footer: 'contact',
  }[section] || section;
  const [open, setOpen] = useState(false);
  const [floating, setFloating] = useState(false);
  useEffect(() => {
    const scroll = () => setFloating(window.scrollY > 40);
    scroll();
    window.addEventListener('scroll', scroll, { passive: true });
    return () => window.removeEventListener('scroll', scroll);
  }, []);
  useEffect(() => {
    const close = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    const resize = () => {
      if (window.innerWidth > 1000) setOpen(false);
    };
    document.addEventListener('keydown', close);
    window.addEventListener('resize', resize);
    return () => {
      document.removeEventListener('keydown', close);
      window.removeEventListener('resize', resize);
    };
  }, []);
  return (
    <header className={`ref-nav${floating ? ' is-floating' : ''}`}>
      <a className="ref-brand" href="#home" aria-label={`${profile.name} home`}>
        TJM<span>Joshua Mabharani</span>
      </a>
      <nav className="ref-nav-links" aria-label="Main navigation">
        {links.map(([href, label]) => (
          <a key={href} href={href} aria-current={href === `#${active}` ? 'location' : undefined}>
            {label}
          </a>
        ))}
      </nav>
      <div className="ref-nav-tools">
        <ThemeToggle />
        <a className="ref-connect" href="#contact" aria-current={active === 'contact' ? 'location' : undefined}>
          Let’s Connect
        </a>
        <button
          className="icon-button ref-menu-toggle"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-controls="ref-mobile"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      <nav id="ref-mobile" className="ref-mobile" aria-label="Mobile navigation" hidden={!open}>
        {[...links, ['#contact', 'Contact']].map(([href, label]) => (
          <a key={href} href={href} onClick={() => setOpen(false)} aria-current={href === `#${active}` ? 'location' : undefined}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
export function ReferenceHero({ reduced }) {
  const [mobile, setMobile] = useState(false);
  const [panel, setPanel] = useState('Layers');
  const [selected, setSelected] = useState(0);
  const [collapsed, setCollapsed] = useState(false);
  const [zoom, setZoom] = useState(false);
  const [paused, setPaused] = useState(false);
  const project = projects[selected];
  return (
    <section id="home" className="ref-hero" aria-labelledby="hero-title">
      <div className="ref-blue-bars" aria-hidden="true">
        {Array.from({ length: 14 }, (_, i) => (
          <i
            key={i}
            style={{
              '--bar': i,
              '--initial-scale': (30 + 70 * Math.pow(2 * Math.abs(i / 13 - 0.5), 1.2)) / 100,
            }}
          />
        ))}
      </div>
      <div className="ref-hero-copy">
        <span className="ref-badge">Design In Details</span>
        <h1 id="hero-title" aria-label="Crafted Websites, Lasting Impressions">
          Crafted <em>Websites</em>
          <br />
          <span className="ref-serif">Lasting</span> Impressions
        </h1>
        <p>Thoughtful digital experiences, designed and developed by Joshua.</p>
        <div className="ref-ctas">
          <Button href="#contact">Get in touch</Button>
          <Button href="#project-spiral" variant="outline">
            See my work
          </Button>
        </div>
      </div>
      <div
        className={`ref-editor${collapsed ? ' panels-collapsed' : ''}${mobile ? ' mobile-canvas' : ''}`}
      >
        <div className="ref-editor-header">
          <button
            className="ref-editor-brand"
            aria-label={collapsed ? 'Expand panels' : 'Collapse panels'}
            aria-expanded={!collapsed}
            onClick={() => setCollapsed(!collapsed)}
          >
            TJM <PanelsLeftBottom size={15} />
          </button>
          <div className="ref-editor-devices">
            <div className="ref-segment">
              <button
                aria-label="Desktop preview"
                aria-pressed={!mobile}
                onClick={() => setMobile(false)}
              >
                <Monitor size={17} />
              </button>
              <button
                aria-label="Mobile preview"
                aria-pressed={mobile}
                onClick={() => setMobile(true)}
              >
                <Smartphone size={17} />
              </button>
            </div>
            <span className="ref-dimensions">
              {mobile ? '390' : '1440'}px <span>|</span> {zoom ? '125' : '100'}%
            </span>
          </div>
          <img className="ref-editor-avatar" src="/projects/profile.png" alt={profile.name} />
        </div>
        <div className="ref-editor-body">
          <aside className="ref-editor-sidebar">
            <div className="ref-segment">
              {['Pages', 'Layers', 'Assets'].map((label) => (
                <button key={label} aria-pressed={panel === label} onClick={() => setPanel(label)}>
                  {label}
                </button>
              ))}
            </div>
            <a className="ref-editor-home" href="#home">
              <Home size={14} /> Portfolio <ChevronDown size={13} />
            </a>
            {panel === 'Layers' ? (
              <nav aria-label="Portfolio sections">
                {links.map(([href, label]) => (
                  <a key={href} href={href}>
                    <Layers size={14} />
                    {label}
                  </a>
                ))}
              </nav>
            ) : panel === 'Pages' ? (
              <div className="ref-page-list">
                {projects.map((p, i) => (
                  <button key={p.id} aria-pressed={selected === i} onClick={() => setSelected(i)}>
                    <Globe size={14} />
                    {p.title}
                  </button>
                ))}
              </div>
            ) : (
              <div className="ref-assets">
                {projects.map((p, i) => (
                  <button
                    key={p.id}
                    aria-label={`Preview ${p.title}`}
                    onClick={() => setSelected(i)}
                  >
                    <img src={p.image} alt={p.title} />
                  </button>
                ))}
              </div>
            )}
          </aside>
          <div className={`ref-canvas${zoom ? ' is-zoomed' : ''}`}>
            <div
              key={project.id}
              className={`ref-canvas-track${paused || reduced ? ' is-paused' : ''}`}
            >
              {[project, ...projects.filter((p) => p.id !== project.id)].map((p) => (
                <a
                  key={p.id}
                  className="ref-canvas-project"
                  href="#work"
                  aria-label={`Explore ${p.title}`}
                >
                  <div className="ref-browser-chrome">
                    <span />
                    <span />
                    <span />
                    <small>{p.title}</small>
                  </div>
                  <img src={p.image} alt={`${p.title} actual website screenshot`} />
                </a>
              ))}
            </div>
            <div className="ref-canvas-toolbar" role="toolbar" aria-label="Preview controls">
              <button
                aria-label="Reset preview zoom"
                aria-pressed={!zoom}
                onClick={() => setZoom(false)}
              >
                <MousePointer2 size={17} />
              </button>
              <button aria-label="Zoom preview" aria-pressed={zoom} onClick={() => setZoom(!zoom)}>
                <ZoomIn size={17} />
              </button>
              <button
                aria-label={paused ? 'Play preview scrolling' : 'Pause preview scrolling'}
                disabled={reduced}
                onClick={() => setPaused(!paused)}
              >
                {paused || reduced ? <Play size={16} /> : <Pause size={16} />}
              </button>
              <a href="#work" aria-label="Browse all projects">
                <Image size={17} />
              </a>
            </div>
          </div>
          <aside className="ref-inspector">
            <div className="ref-inspector-icons">
              <MousePointer2 size={14} />
              <Layers size={14} />
              <LayoutTemplate size={14} />
              <Code2 size={14} />
            </div>
            <strong>Project</strong>
            <dl>
              <dt>Name</dt>
              <dd>{project.title}</dd>
              <dt>Type</dt>
              <dd>{project.category}</dd>
            </dl>
            <strong>Build</strong>
            <dl>
              {project.tags.map((tag) => (
                <div key={tag}>
                  <dt>Technology</dt>
                  <dd>{tag}</dd>
                </div>
              ))}
            </dl>
            {project.live ? (
              <a
                className="ref-inspector-visit"
                href={project.live}
                target="_blank"
                rel="noreferrer"
              >
                Visit project
              </a>
            ) : (
              <a className="ref-inspector-visit" href="#work">
                Explore project
              </a>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}
const services = [
  [Globe, 'Website Development'],
  [LayoutTemplate, 'Responsive Interfaces'],
  [Code2, 'React & Next.js'],
  [Database, 'Python & Django'],
  [PenTool, 'Product & UI Design'],
  [Network, 'IP Networking'],
  [ShieldCheck, 'CCTV Systems'],
  [Gauge, 'Performance'],
  [Wrench, 'Technical Support'],
  [Search, 'Research & Discovery'],
];
export function ReferenceServices() {
  return (
    <section id="services" className="section ref-services" aria-labelledby="services-title">
      <div className="section-heading">
        <h2 id="services-title">
          Elevate your
          <br />
          digital footprint.
        </h2>
        <div className="ref-ctas">
          <Button href="#work">View my work</Button>
          <Button variant="outline" href="#contact">
            Start a conversation
          </Button>
        </div>
      </div>
      <div className="ref-service-grid">
        {services.map(([Icon, title]) => (
          <a href="#contact" key={title} className="ref-service-card">
            <Icon size={28} />
            <span>{title}</span>
          </a>
        ))}
      </div>
      <div className="ref-platform-grid">
        <div className="ref-platform-copy">
          <h3>
            Engineering precision.
            <br />
            Design consistency.
          </h3>
          <p>
            From React interfaces to Django applications, I bring the same care to every detail:
            clear, responsive, and built for people.
          </p>
          <a href="#project-spiral">
            See my work</a>
        </div>
        <div className="ref-platform-facts">
          {['React', 'Next.js', 'TypeScript', 'Python', 'Django', 'Supabase', 'Figma', 'Git'].map(
            (name) => (
              <span key={name}>{name}</span>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
const approach = [
  [
    'Discovery first',
    'Understand the problem, the people, and what a successful result should do.',
  ],
  ['Mobile-first design', 'Create clear, usable interfaces that work across screen sizes.'],
  [
    'Thoughtful interaction',
    'Use motion and feedback to make the experience easier to understand.',
  ],
  [
    'Careful development',
    'Build reusable components and connect the interface to reliable application logic.',
  ],
  [
    'Review and refine',
    'Check the layout, navigation, and key workflows before sharing the result.',
  ],
  ['Keep learning', 'Bring new knowledge from engineering and product design into the next build.'],
];
export function ReferenceApproach() {
  return (
    <section id="approach" className="section ref-approach" aria-labelledby="approach-title">
      <h2 id="approach-title">
        My <em>Approach</em>
      </h2>
      <div className="ref-approach-grid">
        {approach.map(([title, detail]) => (
          <article key={title}>
            <div className="ref-approach-visual" aria-hidden="true">
              <div className="ref-wire-window">
                <span />
                <span />
                <span />
                <div />
                <div />
              </div>
            </div>
            <h3>{title}</h3>
            <p>{detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
const faqs = [
  [
    'What do you build?',
    'Websites and web applications with React, Next.js, JavaScript, TypeScript, Python, and Django, alongside product and UI design.',
  ],
  [
    'Where can I explore your projects?',
    'The Works section contains real screenshots, project details, and live links where a deployment is available.',
  ],
  [
    'How can we start a conversation?',
    'Use the contact form to prepare an email, or contact me directly at ' + profile.email + '.',
  ],
  [
    'Where are you based?',
    'I am based in Harare, Zimbabwe. Email is the best way to discuss a project or opportunity.',
  ],
  [
    'Can I see your experience and certificates?',
    'Yes. The Experience and Certificates sections include my professional background and all certificates from my original portfolio.',
  ],
];
export function ReferenceFAQs() {
  return (
    <section id="faqs" className="section ref-faqs" aria-labelledby="faq-title">
      <h2 id="faq-title">
        Frequently Asked <em>Questions</em>
      </h2>
      <div>
        {faqs.map(([q, a]) => (
          <details key={q}>
            <summary>
              {q}
              <Plus size={17} className="faq-plus" />
              <Minus size={17} className="faq-minus" />
            </summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
export function ReferenceFooter({ motion, onCommand }) {
  return (
    <footer id="footer" className="ref-footer">
      <LightField reduced={motion.reduced} className="ref-footer-field" />
      <div className="section">
        <div className="ref-footer-cta">
          <h2>
            Create Bold.
            <br />
            <em>Build Better.</em>
          </h2>
          <div className="ref-ctas">
            <Button variant="outline" href="#project-spiral">
            See my work
            </Button>
            <Button href="#contact">Get in touch</Button>
          </div>
          <div className="social-links">
            <a href={profile.github} target="_blank" rel="noreferrer">
              <Github size={18} /> GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </div>
        <div className="ref-footer-grid">
          <div>
            <h3>Portfolio</h3>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#work">Works</a>
          </div>
          <div>
            <h3>Expertise</h3>
            <a href="#services">Skills</a>
            <a href="#journey">Experience</a>
            <a href="#certificates">Certificates</a>
          </div>
          <div>
            <h3>Resources</h3>
            <a href={profile.cv} download>
              Download CV
            </a>
            <a href="#faqs">FAQs</a>
            <button onClick={onCommand}>Quick navigation · Ctrl K</button>
            <button onClick={motion.toggleMotion} disabled={motion.systemReduced}>
              {motion.reduced ? 'Play animations' : 'Pause animations'}
            </button>
          </div>
          <div>
            <h3>Contact</h3>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <p>Based in Harare, Zimbabwe</p>
            <a href="#contact">Start a conversation</a>
          </div>
        </div>
        <div className="ref-footer-bottom">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <a href="#home">Back to top</a>
        </div>
        <div className="ref-footer-mark" aria-hidden="true">
          TJM
        </div>
      </div>
    </footer>
  );
}
