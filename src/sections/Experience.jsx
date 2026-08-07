const experience = [
   {
      period: "June 2026 - Present",
      role: "Junior Software Engineer",
      company: "Uncommon.org",
      description: "Building responsive web applications using React, JavaScript, and Python. Applying UX/UI design principles to create user-centered product experiences. Familiar with POS systems integration and retail tech solutions. Collaborating in agile teams on product design and development.",
      technologies: ["Software Development", "React", "Digital Marketing", "Python", "POS Systems"],
      current: true,
   },
   {
      period: "2023 — Present",
      role: "CCTV Installation Technician",
      company: "Muwoni Technologies",
      description: "Installation, configuration, and maintenance of CCTV and security systems. Computer hardware troubleshooting, networking and system diagnostics. Client training and after-installation support",
      technologies: ["Hikvision", "Dahua", "IP Cameras", "NVR/DVR", "Network Configuration", "Computer Hardware", "Troubleshooting", "Client Training"],
      current: true,
   },
   {
      period: "Feb 2021 — May 2022",
      role: "Sales Representative",
      company: "Builderz Pride, Cameron Ext, Magaba",
      description: "Customer service, sales consultations, and inventory management. Developed strong communication and client relationship skills",
      technologies: ["Sales", "Inventory Management", "Client Relations", "Communication"],
      current: false,
   },
   {
      period: "2022 – Present",
      role: "Software Provider",
      company: "Classic Technology",
      description: "Software Provider specializing in POS Systems & Retail Tech. Business management systems for retail operations",
      technologies: ["POS Systems", "Retail Tech", "Business Management Systems", "Software", "Customer Support"],
      current: true,
   },

]



export const Experience = () => {
   return (<section id="experience" className="py-32 relative overflow-hidden">
      <div
         className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
         {/* Section Header*/}
         <div className="max-w-3xl mb-16">
            <span className="text-secondary-foreground text-sm
             font-medium tracking-wider uppercase animate-fade-in"
            >
               Developing Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-serif  mt-4 mb-6 animate-fade-in animation-delay-100
              text-secondary-foreground">
               Experience that{" "}
               <span className="font-serif italic font-normal text-white">
                  {" "}
                  speaks volumes.
               </span>
            </h2>

            <p
               className="text-muted-foreground
             animate-fade-in animation-delay-200"
            >
               A Time for my professional growth, curious beginner to a skilled software engineer, with a strong foundation in software development, UX/UI design and digital marketing. My journey has been marked by hands-on experience in building responsive web applications, integrating POS systems, and providing technical support for CCTV installations.
            </p>
         </div>

         {/* Timeline */}
         <div className="relative">
            <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

            {/* Experience Items */}
            <div className="space-y-12">
               {experience.map((exp, idx) => (
                  <div
                     key={idx}
                     className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                     style={{ animationDelay: `${(idx + 1) * 150}ms` }}
                  >
                     {/* Timeline Dot*/}
                     <div className="absolute"></div>

                     {/* Content */}
                     <div className={`pl-8 md:pl-0 
                     ${idx % 2 === 0
                           ? "md:pr-16 md:-text-right"
                           : "md:col-start-2 md:pl-16"
                        }`}
                     >
                        <div className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                        >
                           <span className="text-sm text-primary font-medium">{exp.period}</span>
                           <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                           <p className="text-muted-foreground">{exp.company}</p>
                           <p className="text-sm text-muted-foreground mt-4">{exp.description}

                           </p>
                           <div className={`flex`}>
                              {exp.technologies.map((tech, techIdx) => (
                                 <span >
                                    {tech}
                                 </span>
                              ))}</div>
                        </div>
                     </div>

                  </div>
               ))}
            </div>

         </div>
      </div>
   </section>
   );
};