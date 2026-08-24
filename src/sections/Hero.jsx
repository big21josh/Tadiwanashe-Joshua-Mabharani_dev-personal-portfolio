import { Button } from "@/components/Button";
import { ArrowRight, ChevronDown, Download } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const skills = [
  "JavaScript",
  "React",
  "Python",
  "HTML5/CSS3",
  "Tailwind",
  "Django",
  "Figma",
  "Adobe",
  "SEO",
  "AI",
  "Git",
  "Vercel",
  "Canva",
];
export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg Image + Gradient  */}
      <div className="absolute inset-0">
        <img
          src="/projects/room.jpg"
          alt="Hero bg"
          className="w-full h-full object-cover opacity-[var(--hero-bg-opacity)] transition-opacity duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/5 via-background/40 to-background transition-colors duration-300" />
      </div>

      {/* Animated Dots - Purple + Cyan */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-40"
            style={{
              backgroundColor: i % 3 === 0 ? "var(--color-accent)" : "var(--color-primary)",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Column - Text */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="badge badge-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer • Product Designer • Digital Marketing
              </span>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h1 className="text-5xl lg:text-7xl font-bold font-serif leading-tight">
                Hi, I'm <span className="text-primary">Tadiwanashe Joshua Mabharani</span>
              </h1>
            </div>

            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Based in Harare, I build user-centered web applications with
              <span className="text-primary"> React</span> and <span className="text-primary"> Python</span> as a Software Engineer at
              <span className="text-primary"> Uncommon.org</span> backed by a rare mix of design sensibility, digital marketing know-how
              and hands-on security systems experience as a CCTV Installation Technician.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              {/* Contact Me Button */}
              <AnimatedBorderButton
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="flex items-center gap-2">
                  Contact Me
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </AnimatedBorderButton>

              {/* Download CV Button */}
              <AnimatedBorderButton onClick={() => window.open('/Tadiwanashe_Joshua_Mabharani_CV.pdf', '_blank')}>
                <span className="flex items-center gap-2">
                  <Download className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  Download CV
                </span>
              </AnimatedBorderButton>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              <a
                href="https://github.com/big21josh"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.838 1.237 1.838 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.467-1.334-5.467-5.94 0-1.312.469-2.383 1.236-3.222-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.02 0 2.047.137 3.003.404 2.293-1.552 3.301-1.23 3.301-1.23.653 1.653.241 2.873.117 3.176.77.839 1.236 1.91 1.236 3.222 0 4.61-2.807 5.633-5.479 5.93.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.596 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/tadiwanashe-joshua-mabharani-001084346/"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-current"
                  aria-hidden="true"
                >
                  <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5V8h3zM6.5 6.75a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0 0 13 14.19V19h-3V8h3v1.18A3 3 0 0 1 15.9 8.1c2.08 0 3.1 1.37 3.1 3.97z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column - Profile Image  */}
          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0 
              rounded-3xl bg-gradient-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
              />
              {/* Blurred bg glow for depth */}
              <div className="absolute inset-0 bg-primary/0 blur-3xl rounded-2xl group-hover:bg-primary/50 transition-all duration-300" />

              {/* Image container */}
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/projects/profile.jpg"
                  alt="Tadiwanashe Joshua Mabharani"
                  className="rounded-xl w-full object-cover"
                />
                {/*Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 
                  animate-[float_3s_ease-in-out_infinite]
                  shadow-[0_0_15px_2px_rgba(139,92,246,0.4)]
                  hover:shadow-[0_0_25px_4px_rgba(139,92,246,0.7)]
                  transition-shadow duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available For work
                    </span>
                  </div>
                </div>
                {/* stats Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">8</div>
                  <div className="text-xs text-muted-foreground">Months Exp.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section*/}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};