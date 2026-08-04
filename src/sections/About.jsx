import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
   {
      icon: Code2,
      title: "Clean Code",
      description:
         "Writing maintainable, scalable code that stands the test of time."
   },
   {
      icon: Rocket,
      title: "Performance",
      description:
         "Optimizing for speed and delivering lightning-fast user experriences."
   },
   {
      icon: Users,
      title: "Collaboration",
      description:
         "Working closely with teams to bring ideas to Life."
   },
   {
      icon: Lightbulb,
      title: "Innovation",
      description:
         "Staying ahead with the latest technologies and best practices."
   },
];
export const About = () => {
   return (
      <section id="about" className="py-32 relative overflow-hidden">
         <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               {/* Left Column*/}
               <div className="space-y-8">
                  <div className="animate-fade-in">
                     <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
                  </div>

                  <h2 className="text-4xl md:text-5xl font-bold font-serif leading-tight animate-fade-in animation-delay-100 text-secondary-foreground ">
                     Building the future,
                     <span className="font-serif italic font-normal text-white "> one component at a time.
                     </span>
                  </h2>

                  <div>
                     <p>
                        I'm a Software Developer and Product Designer based in Harare with a unique blend of software engineering, UX/UI product design, digital marketing, and hands-on security systems experience. Junior Software Engineer at Uncommon.org, specializing in building user-centered web applications with React and Python. Proven ability to bridge design, code, and business growth. Also experienced CCTV Installation Technician with strong hardware troubleshooting skills. Passionate tech enthusiast eager to build impactful digital products.
                     </p>
                     <p>

                     </p>
                     <p>

                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );

}