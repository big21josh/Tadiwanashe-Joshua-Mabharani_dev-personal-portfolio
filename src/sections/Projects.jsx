import { ArrowUpRight, Github } from "lucide-react";

const projects = [
   {
      title: "Muwoni Tasks",
      description: "A simple web task app to organize your daily to-dos. My first project deployed online.",
      image: "/projects/mate.png",
      tags: ["Django", "Python", "JavaScript"],
      link: "https://muwoni-completed-project.onrender.com/",
   },
   {
      title: "Portfolio Dashboard",
      description: "A responsive dashboard UI with glassmorphism and dark/light theme. Built with React + Tailwind.",
      image: "/projects/dash.png",
      tags: ["React", "Tailwind", "Framer Motion"],
      link: "#",
   },
   {
      title: "Task Tracker UI",
      description: "Clean to-do interface with animations and local storage. Focus on UX and accessibility.",
      image: "/projects/room.jpg",
      tags: ["React", "CSS", "LocalStorage"],
      link: "#",
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
               <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in text-secondary-foreground" style={{ animationDelay: '100ms' }}>
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
                              <Github className="w-5 h-5"/>
                           </a>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};