import { Award, ExternalLink, Calendar } from "lucide-react";
import { useEffect } from "react";
import { generateCertificateSchema, injectStructuredData } from "@/utils/seoUtils";

const certificates = [
  {
    title: "Introduction to Software Engineering",
    issuer: "Coursera",
    org: "IBM",
    date: "Aug 2026",
    credentialUrl: "https://coursera.org/verify/ZMGSA9VVO8BX",
  },
  {
    title: "React Basics",
    issuer: "Coursera",
    org: "Meta",
    date: "Jul 2026",
    credentialUrl: "https://coursera.org/verify/6QMQU1SIY8E3",
  },
  {
    title: "Crash Course on Python",
    issuer: "Coursera",
    org: "Google",
    date: "Jul 2026",
    credentialUrl: "https://coursera.org/verify/8KUUBGTPQPA9",
  },
  {
    title: "Product Designer",
    issuer: "Uxcel",
    org: "Professional Certification",
    date: "Mar 2026",
    credentialUrl: "#",
  },
  {
    title: "Advanced UI Components",
    issuer: "Uxcel",
    org: "Course Certificate",
    date: "Mar 2026",
    credentialUrl: "#",
  },
  {
    title: "Core UI Components",
    issuer: "Uxcel",
    org: "Course Certificate",
    date: "Mar 2026",
    credentialUrl: "#",
  },
  {
    title: "Leadership Mastery",
    issuer: "Uxcel",
    org: "Course Certificate",
    date: "Mar 2026",
    credentialUrl: "#",
  },
  {
    title: "AI Prompts Foundations",
    issuer: "Uxcel",
    org: "Course Certificate",
    date: "Mar 2026",
    credentialUrl: "#",
  },
  {
    title: "Design Terminology",
    issuer: "Uxcel",
    org: "Course Certificate",
    date: "Mar 2026",
    credentialUrl: "#",
  },
  {
    title: "Typography",
    issuer: "Uxcel",
    org: "Course Certificate",
    date: "Mar 2026",
    credentialUrl: "#",
  },
  {
    title: "UX Design Foundations",
    issuer: "Uxcel",
    org: "Course Certificate",
    date: "Mar 2026",
    credentialUrl: "#",
  },
];

export const Certificates = () => {
  useEffect(() => {
    certificates.forEach((cert) => {
      injectStructuredData(generateCertificateSchema(cert));
    });
  }, []);

  return (
    <section id="certificates" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2
       w-[800px] h-[800px] bg-primary/5
       rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />
      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Certifications
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-serif mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Always{" "}
            <span className="font-serif italic font-normal text-white">
              learning and growing.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of courses and certifications I've earned.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certificates.map((cert, idx) => (
            <a
              key={idx}
              href={cert.credentialUrl}
              target="_blank"
              rel="noreferrer"
              className="glass p-6 rounded-2xl animate-fade-in hover:bg-primary/10 transition-all group"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>

              <h3 className="text-lg font-semibold mb-1">{cert.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">
                {cert.issuer} · {cert.org}
              </p>

              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar className="w-3.5 h-3.5" />
                <span>{cert.date}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};