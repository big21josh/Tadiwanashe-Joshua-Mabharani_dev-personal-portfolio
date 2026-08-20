import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Testimonials } from "@/sections/Testimonials";
import { Certificates } from "@/sections/Certificates";
import { Contact } from "@/sections/Contact";
import { Navbar } from "@/layout/Navbar"; 

function App() {
 return(
   <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar/>
      <main role="main">
       <Hero />
       <About />
       <Projects />
       <Experience />
       <Testimonials />
       <Certificates />
       <Contact />
      </main>
      <footer role="contentinfo" className="border-t border-border py-8 px-6">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Tadiwanashe Joshua Mabharani. All rights reserved.</p>
        </div>
      </footer>
    </div>
  ); 
}

export default App;