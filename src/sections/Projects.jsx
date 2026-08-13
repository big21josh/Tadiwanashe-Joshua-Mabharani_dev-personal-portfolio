import { ArrowUpRight } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
   {
      title: "Muwoni Tasks",
      description:
         "Muwoni Tasks - A simple web task app to organize your daily to-dos. My first project deployed online, my first real-world application.",
      image: "/projects/muwoni.png",
      tags: ["Django", "Python", "HTML", "Shell"],
      link: "https://muwoni-completed-project.onrender.com/",
      github: "https://github.com/big21josh/muwoni-completed-project.git"
   },
   {
      title: "Portfolio Dashboard",
      description:
         "A responsive dashboard UI with glassmorphism showing my skills and experience. it's this current portfolio site . Built with React + Tailwind.",
      image: "/projects/dash.png",
      tags: ["React", "Tailwind", "JavaScript",],
      link: "#",
      github: "https://github.com/big21josh/Tadiwanashe-Joshua-Mabharani_dev-personal-portfolio.git"
   },
   {
      title: "Task Tracker UI",
      description:
         "Clean to-do interface with animations and local storage. Focus on UX and accessibility.",
      image: "/projects/room.jpg",
      tags: ["React", "CSS", "LocalStorage"],
      link: "#",
      github: "#"
   },
];

export const Projects = () => {
   return (
      <section id="projects" className="py-32 relative overflow-hidden">
         {/* Bg glows */}
         <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
         <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

         <div className="container mx-auto px-6 relative z-10">
            {/* Section Header */}
            <div className="text-center mx-auto max-w-3xl mb-16">
               <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                  Featured Work
               </span>
               <h2 className="text-4xl md:text-5xl font-bold font-serif mt-4 mb-6 animate-fade-in text-secondary-foreground" style={{ animationDelay: '100ms' }}>
                  Projects that
                  <span className="font-serif italic font-normal text-white"> make an impact.</span>
               </h2>
               <p className="text-muted-foreground animate-fade-in" style={{ animationDelay: '200ms' }}>
                  A selection of my recent work, from complex web applications to innovative tools that solve real-world problems.
               </p>
            </div>

            {/* Project Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {projects.map((project, idx) => (
                  <div
                     key={idx}
                     className="group glass rounded-2xl overflow-hidden animate-fade-in hover:glow-border transition-all duration-300"
                     style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                  >
                     {/* Image */}
                     <div className="relative overflow-hidden aspect-video">
                        <img
                           src={project.image}
                           alt={project.title}
                           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div
                           className="absolute inset-0
                        bg-gradient-to-t from-card via-card/50
                        to-transparent opacity-60"
                        />
                        {/* Overlay Links */}
                        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                           <a
                              href={project.link}
                              className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                           >
                              <ArrowUpRight className="w-5 h-5" />
                           </a>
                           <a
                              href={project.github}
                              className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                           >
                              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                                 <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.838 1.237 1.838 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.467-1.334-5.467-5.94 0-1.312.469-2.383 1.236-3.222-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.02 0 2.047.137 3.003.404 2.293-1.552 3.301-1.23 3.301-1.23.653 1.653.241 2.873.117 3.176.77.839 1.236 1.91 1.236 3.222 0 4.61-2.807 5.633-5.479 5.93.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.596 24 12.297c0-6.627-5.373-12-12-12" />
                              </svg>
                           </a>
                        </div>
                     </div>

                     {/* Content */}
                     <div className="p-6 space-y-4">
                        <div className="flex items-center justify-between">
                           <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                              {project.title}</h3>

                           <ArrowUpRight
                              className="w-5 h-5
                             text-muted-forground group-hover:text-primary
                             group-hover:translate-x-1
                             group-hover:-translate-y-1 transition-all"
                           />
                        </div>
                        <p className="text-muted-foreground text-sm">
                           {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                           {project.tags.map((tag, tagidx) => (
                              <span
                                 key={tagidx}
                                 className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300 ">
                                 {tag}
                              </span>
                           ))}
                        </div>
                     </div>
                  </div>
               ))}
            </div>

            {/* View All CTA */}
            <div className="text-center mt-12 animate-fade-in animation-delay-500">
               <AnimatedBorderButton>
                  <span className="inline-flex items-center gap-2">
                     View All Projects
                     <ArrowUpRight className="w-5 h-5" />
                  </span>
               </AnimatedBorderButton>
            </div>
         </div>
      </section>
   );
};