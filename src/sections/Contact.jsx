import { Mail, Phone, MapPin, Send } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "Big21josh@gmail.com",
    href: "mailto:Big21josh@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+263 (779)525-96",
    href: "tel:+26377952596",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Harare , Zimbabwe",
    href: "https://maps.google.com/?q=Harare,Zimbabwe",
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2
       w-[800px] h-[800px] bg-primary/5
       rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />
      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-serif mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Let's build something{" "}
            <span className="font-serif italic font-normal text-white">
              great together.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-8">

          {/* Left - Contact Info Cards */}
          <div className="md:col-span-2 space-y-4">
            {contactInfo.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="glass flex items-center gap-4 p-5 rounded-2xl animate-fade-in hover:bg-primary/10 hover:text-primary transition-all group"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-all">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">
                    {item.label}
                  </div>
                  <div className="font-medium">{item.value}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Right - Message Form */}
          <div className="md:col-span-3 glass p-8 rounded-3xl glow-border animate-fade-in animation-delay-300">
            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target;
                const name = form.name.value;
                const email = form.email.value;
                const message = form.message.value;
                window.location.href = `mailto:${contactInfo[0].value}?subject=${encodeURIComponent(
                  `Portfolio inquiry from ${name}`
                )}&body=${encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`)}`;
                form.reset();
              }}
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm text-muted-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3 rounded-xl bg-muted/40 border border-border focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-muted-foreground mb-2">
                    Your Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="jane@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-muted/40 border border-border focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-muted/40 border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};