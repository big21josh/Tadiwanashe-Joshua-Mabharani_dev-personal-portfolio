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
               Career Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-bold
             mt-4 mb-6 animate-fade-in animation-delay-100
              text-secondary-foreground">
               Experience that{" "}
             <span>speaks volumes.</span>
            </h2>
         </div>
      </div>
   </section>
   );
};