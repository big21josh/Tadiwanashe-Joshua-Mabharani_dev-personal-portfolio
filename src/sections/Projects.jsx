import { useEffect, useState } from 'react';
import { ArrowRight, Search, CodeXml, Check, Layers } from 'lucide-react';
import { filterProjects, projects } from '../data/portfolio';
import { Dialog } from '../components/Dialog';
import { Button } from '../components/Button';

function ProjectDetails({ project, onClose }) {
  return (
    <Dialog title={project.category} onClose={onClose}>
      <img
        className="case-screenshot"
        src={project.image}
        alt={`${project.title} actual interface`}
      />
      <h2 className="case-title">{project.title}</h2>
      <p className="case-intro">{project.subtitle}</p>
      <div className="tags">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <div className="case-block">
        <h3>The challenge</h3>
        <p>{project.challenge}</p>
      </div>
      <div className="case-block">
        <h3>The approach</h3>
        <p>{project.approach}</p>
      </div>
      <div className="case-block">
        <h3>Inside the build</h3>
        <ul>
          {project.features.map((feature) => (
            <li key={feature}>
              <Check size={15} />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <p className="case-note">{project.note}</p>
      <div className="button-row">
        {project.live && (
          <Button href={project.live} target="_blank" rel="noreferrer">
            Visit project
          </Button>
        )}
        {project.github && (
          <Button variant="outline" href={project.github} target="_blank" rel="noreferrer">
            <CodeXml size={16} /> View source
          </Button>
        )}
      </div>
    </Dialog>
  );
}
export function Projects() {
  const [category, setCategory] = useState('All projects');
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(null);
  useEffect(() => {
    const open = (event) => {
      const project = projects.find((item) => item.id === event.detail);
      if (project) setSelected(project);
    };
    window.addEventListener('portfolio:open-project', open);
    return () => window.removeEventListener('portfolio:open-project', open);
  }, []);
  const visible = filterProjects(category, query);
  return (
    <section id="work" className="section work-section" aria-labelledby="work-title">
      <div className="section-heading">
        <div>
          <div className="eyebrow">SELECTED WORK</div>
          <h2 id="work-title">
            Built with purpose.
            <br />
            <span className="muted">Made to be used.</span>
          </h2>
        </div>
        <p>
          A few things I’ve brought to life.
          <br />
          Real problems, thoughtful solutions.
        </p>
      </div>
      <div className="project-toolbar">
        <div className="filters" aria-label="Filter projects">
          {['All projects', 'Full stack', 'Frontend'].map((item) => (
            <button
              key={item}
              className={category === item ? 'active' : ''}
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <label className="project-search">
          <Search size={15} />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Find a project"
            aria-label="Search projects"
          />
        </label>
      </div>
      <p className="sr-only" aria-live="polite">
        {visible.length} {visible.length === 1 ? 'project' : 'projects'} found
      </p>
      <div className="project-grid">
        {visible.map((project) => (
          <article key={project.id} className={`project-card project-${project.kind}`}>
            <button
              className="project-visual"
              aria-label={`Read ${project.title} case study`}
              onClick={() => setSelected(project)}
            >
              <img
                src={project.image}
                alt={`${project.title} website screenshot`}
                loading="lazy"
                width="1200"
                height="700"
              />

              <span className="project-open">View preview</span>
            </button>
            <div className="project-meta">
              <span>{project.category.toUpperCase()}</span>
              <span>{project.year}</span>
            </div>
            <button className="project-title" onClick={() => setSelected(project)}>
              <h3>{project.title}</h3>
            </button>
            <p>{project.description}</p>
            <div className="tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <div className="project-links">
              <button onClick={() => setSelected(project)}>
                Behind the build <ArrowRight size={14} />
              </button>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit ${project.title}`}
                >
                  Visit project
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
      {!visible.length && (
        <div className="empty-state">
          <Layers size={28} />
          <p>No projects match that search.</p>
          <button
            className="text-link"
            onClick={() => {
              setQuery('');
              setCategory('All projects');
            }}
          >
            Reset filters <ArrowRight size={15} />
          </button>
        </div>
      )}
      {selected && <ProjectDetails project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
