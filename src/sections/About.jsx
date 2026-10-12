import { Code2, PenTool, Network, MapPin, Download } from 'lucide-react';
import { Button } from '../components/Button';
import { profile, experience } from '../data/portfolio';
const skills = [
  {
    icon: Code2,
    title: 'Engineering',
    detail: 'Interfaces that feel right. Systems that hold up.',
    tags: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Python', 'Django', 'Supabase', 'Git'],
  },
  {
    icon: PenTool,
    title: 'Product & design',
    detail: 'Turning a good idea into a clear experience.',
    tags: ['Figma', 'UI / UX', 'Responsive design', 'Prototyping', 'Tailwind CSS'],
  },
  {
    icon: Network,
    title: 'Practical technology',
    detail: 'Real-world experience beyond the browser.',
    tags: ['POS systems', 'IP networking', 'CCTV systems', 'Technical support'],
  },
];
export function About() {
  return (
    <>
      <section id="about" className="section about-section" aria-labelledby="about-title">
        <div className="eyebrow">THE PERSON BEHIND THE PIXELS</div>
        <div className="about-grid">
          <div className="portrait-wrap">
            <img
              src="/projects/profile.png"
              alt="Tadiwanashe Joshua Mabharani"
              loading="lazy"
              width="600"
              height="750"
            />
            <div className="portrait-caption">
              <span>{profile.name.toUpperCase()}</span>
              <span>
                <MapPin size={12} /> HARARE, ZW
              </span>
            </div>
            <span className="portrait-stamp">
              BUILT ON
              <br />
              CURIOSITY.
            </span>
          </div>
          <div className="about-copy">
            <h2 id="about-title">
              A developer’s mind.
              <br />
              <span className="muted">A designer’s eye.</span>
            </h2>
            <p className="about-lead">
              Hey, I’m Joshua. I build useful digital things, and care just as much about how they
              feel as how they work.
            </p>
            <p>
              I’m a software developer and product designer based in Harare, Zimbabwe. My work
              brings together React and Python development, UI/UX design, and hands-on experience
              with business software and technical systems.
            </p>
            <p>
              From helping a skateboarding community tell its story to simplifying everyday task
              management, I enjoy turning practical problems into considered, approachable
              experiences.
            </p>
            <div className="about-signoff">
              <span className="signature">Joshua.</span>
              <Button variant="outline" href={profile.cv} download>
                <Download size={16} /> Download CV
              </Button>
            </div>
          </div>
        </div>
        <div className="skill-grid">
          {skills.map(({ icon: Icon, title, detail, tags }) => (
            <div className="skill-group" key={title}>
              <div className="skill-top">
                <Icon size={23} />
              </div>
              <h3>{title}</h3>
              <p>{detail}</p>
              <div className="tags">
                {tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="journey" className="section journey-section" aria-labelledby="journey-title">
        <div className="section-heading">
          <div>
            <div className="eyebrow">ALWAYS BUILDING. ALWAYS LEARNING.</div>
            <h2 id="journey-title">
              Experience shapes
              <br />
              <span className="muted">the way I build.</span>
            </h2>
          </div>
          <p>
            A journey through code, design,
            <br />
            and real-world problem solving.
          </p>
        </div>
        <div className="journey-grid">
          <div className="timeline">
            {experience.map((job, index) => (
              <article className="timeline-item" key={job.company}>
                <div className="timeline-marker" />
                <div className="timeline-period">
                  {job.period}
                  {index === 0 && <span className="current-label">CURRENT</span>}
                </div>
                <h3>{job.role}</h3>
                <span className="timeline-company">{job.company}</span>
                <p>{job.detail}</p>
              </article>
            ))}
          </div>
          <aside className="credentials">
            <div className="eyebrow">LEARNING, WITH INTENTION</div>
            <h3>
              A little more knowledge.
              <br />A better next build.
            </h3>
            <p className="learning-note">
              Software engineering, React, Python, product design, UI components, leadership, AI
              prompts, typography, and UX foundations.
            </p>
            <a className="button button--outline" href="#certificates">
              Explore all certificates
            </a>
            <div className="design-learning">
              <PenTool size={18} />
              <p>Continued study in product design, typography, and UI components through Uxcel.</p>
            </div>
            <a className="text-link" href={profile.linkedin} target="_blank" rel="noreferrer">
              More on LinkedIn
            </a>
          </aside>
        </div>
      </section>
    </>
  );
}
