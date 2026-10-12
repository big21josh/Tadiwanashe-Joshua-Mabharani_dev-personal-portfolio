import { Award, ExternalLink } from 'lucide-react';
import { certificates } from '../data/portfolio';
export function Certificates() {
  return (
    <section
      id="certificates"
      className="section certificates-section"
      aria-labelledby="certificates-title"
    >
      <div className="section-heading">
        <div>
          <div className="eyebrow">LEARNING, WITH INTENTION</div>
          <h2 id="certificates-title">
            Knowledge that
            <br />
            <span className="muted">shapes my work.</span>
          </h2>
        </div>
        <p>
          My certificates in engineering,
          <br />
          development, and product design.
        </p>
      </div>
      <div className="certificate-grid">
        {certificates.map((cert) => (
          <article className="certificate-card" key={cert.title}>
            <Award size={23} className="certificate-award" />
            <small>{cert.issuer}</small>
            <h3>{cert.title}</h3>
            <div className="certificate-bottom">
              <span>{cert.date}</span>
              {cert.href ? (
                <a href={cert.href} target="_blank" rel="noreferrer">
                  View credential <ExternalLink size={14} />
                </a>
              ) : (
                <span className="certificate-completed">Completed</span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
