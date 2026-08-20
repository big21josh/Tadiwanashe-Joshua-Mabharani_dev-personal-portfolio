import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
   { href: "#about", label: "About" },
   { href: "#projects", label: "Projects" },
   { href: "#experience", label: "Experience" },
   { href: "#testimonials", label: "Testimonials" },
   { href: "#certificates", label: "Certificates" },
];

export const Navbar = () => {
   const [isMobileMenuOpen, setIsMobileOpen] = useState(false);
   const [isScrolled, setIsScrolled] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         setIsScrolled(window.scrollY > 50);
      };
      window.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   return (
      <header className={`fixed top-0 left-0 right-0 transition-all duration-200 ${isScrolled ? "glass-strong py-3 shadow-lg" : "bg-transparent py-5"} z-50`}>
         <nav className="container mx-auto px-6 flex items-center justify-between">
            <a href="#" className="text-xl font-bold tracking-tight hover:text-primary">
               TJM<span className="text-primary">.</span>
            </a>

            {/*Desktop Nav*/}
            <div className="hidden md:flex items-center gap-1">
               <div className="glass rounded-full px-2 py-1 flex items-center gap-1 ">
                  {navLinks.map((link, index) => (
                     <a
                        href={link.href}
                        key={index}
                        className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface transition-colors"
                     >
                        {link.label}
                     </a>
                  ))}
               </div>
            </div>

            {/* CTA Button*/}
            <div className="hidden md:block">
               <Button 
                  size="sm" 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
               >
                  Contact Me
               </Button>
            </div>

            {/*Mobile Menu Button - faster icon rotate*/}
            <button
               className="md:hidden p-2 text-foreground cursor-pointer z-50 transition-transform duration-200"
               onClick={() => setIsMobileOpen((prev) => !prev)}
            >
               <div className={`transition-transform duration-200 ${isMobileMenuOpen ? 'rotate-90' : 'rotate-0'}`}>
                  {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
               </div>
            </button>
         </nav>

         {/*Mobile Menu - FAST SLIDE + FADE*/}
         <div 
            className={`md:hidden fixed inset-0 top-[72px] z-40 transition-all duration-200 ease-out ${
               isMobileMenuOpen 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 -translate-y-4 pointer-events-none'
            }`}
         >
            {/* Backdrop blur */}
            <div 
               className="absolute inset-0 bg-background/80 backdrop-blur-xl transition-opacity duration-200"
               onClick={() => setIsMobileOpen(false)}
            />
            
            {/* Menu content */}
            <div className="relative container mx-auto px-6 py-8 flex flex-col gap-6
                            bg-gradient-to-b from-background/95 via-background/90 to-background/95
                            border-t border-primary/20
                            shadow-[0_-10px_40px_-10px_rgba(139,92,246,0.3)]">
               
               {navLinks.map((link, index) => (
                  <a
                     href={link.href}
                     key={index}
                     style={{ transitionDelay: `${index * 50}ms` }}
                     className={`text-xl font-medium text-muted-foreground hover:text-primary 
                                py-3 border-b border-border/10 hover:border-primary/30
                                transition-all duration-200 ${
                                   isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                                }`}
                     onClick={() => setIsMobileOpen(false)}
                  >
                     {link.label}
                  </a>
               ))}
               
               <Button 
                  style={{ transitionDelay: '200ms' }}
                  className={`mt-4 w-full shadow-[0_0_20px_2px_rgba(139,92,246,0.4)] hover:shadow-[0_0_30px_4px_rgba(139,92,246,0.6)]
                              transition-all duration-200 ${
                                isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                              }`}
                  onClick={() => {
                     document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                     setIsMobileOpen(false);
                  }}
               >
                  Contact Me
               </Button>
            </div>
         </div>
      </header>
   );
};