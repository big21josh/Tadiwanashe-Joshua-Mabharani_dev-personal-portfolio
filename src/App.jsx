import { useEffect, useState } from 'react';
import { Certificates } from './sections/Certificates';
import { useRevealMotion } from './hooks/useRevealMotion';
import { CommandMenu } from './components/CommandMenu';
import { Projects } from './sections/Projects';
import { About } from './sections/About';
import { Contact } from './sections/Contact';
import { useMotion } from './hooks/useMotion';
import {
  ReferenceNav,
  ReferenceHero,
  ReferenceServices,
  ReferenceApproach,
  ReferenceFAQs,
  ReferenceFooter,
} from './components/ReferenceExperience';
import { ProjectSpiral } from './components/ProjectSpiral';
import { ReferenceMotion } from './components/ReferenceMotion';
import './reference.css';
export default function App() {
  const [commandOpen, setCommandOpen] = useState(false);
  const motion = useMotion();
  useRevealMotion(motion.reduced);
  useEffect(() => {
    const keydown = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setCommandOpen((value) => !value);
      }
    };
    document.addEventListener('keydown', keydown);
    return () => document.removeEventListener('keydown', keydown);
  }, []);
  return (
    <div className="reference-portfolio">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <ReferenceMotion reduced={motion.reduced} />
      <ReferenceNav />
      <main id="main">
        <ReferenceHero reduced={motion.reduced} />
        <div id="intro" className="section ref-intro">
          <h2>
            Design that speaks.
            <br />
            <em>Code that delivers.</em>
          </h2>
          <p>
            I’m Tadiwanashe Joshua Mabharani, a software developer and product designer in Harare. I
            turn practical problems into focused digital experiences.
          </p>
          <div className="ref-ctas">
            <a className="button button--primary" href="#about">
              About me
            </a>
            <a className="button button--outline" href="#work">
              See my work
            </a>
          </div>
        </div>
        <ProjectSpiral motion={motion} />
        <Projects />
        <ReferenceServices />
        <About />
        <ReferenceApproach />
        <Certificates />
        <ReferenceFAQs />
        <Contact />
      </main>
      <ReferenceFooter motion={motion} onCommand={() => setCommandOpen(true)} />
      {commandOpen && <CommandMenu onClose={() => setCommandOpen(false)} />}
    </div>
  );
}
