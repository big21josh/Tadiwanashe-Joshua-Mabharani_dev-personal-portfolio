import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const PLACEHOLDER_AVATAR = "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23E5E7EB'/%3E%3Ccircle cx='50' cy='40' r='18' fill='%239CA3AF'/%3E%3Cpath d='M50 62c-22 0-32 14-32 24v14h64V86c0-10-10-24-32-24z' fill='%239CA3AF'/%3E%3C/svg%3E";

const testimonials = [
   {
      quote: "Joshua Mabharani is a hardworking and diligent individual who gives his best in everything he does. He has a can-do attitude and a strong desire to learn and grow. He believes that no task is beyond his reach if he does not know how to do something, he is willing to learn, adapt, and ultimately deliver results. ",
      author: "Zvikomborero Tetena",
      role: "Lead Front End Developer",
      avatar: PLACEHOLDER_AVATAR
   },
   {
      quote: "Working with Joshua was a game-changer for our project. He delivered above and beyond what we expected.",
      author: "Vincent Mugondora",
      role: "FullStack Developer, Software engineering instructor,Uncommon.org",
      avatar: PLACEHOLDER_AVATAR
   },
   {
      quote: "Joshua is a good prompt engineer, he is always willing to learn and adapt to new technologies. He is a great team player and always willing to help others.",
      author: "Roselyn",
      role: "digital marketing instructor, @uncommon.org",
      avatar: PLACEHOLDER_AVATAR
   },
   {
      quote: "Joshua is a hardworking student who completes his assignments on time and always delivers good results.",
      author: "Vincent Mugondora",
      role: "Software Engineering Instructor, @uncommon.org",
      avatar: PLACEHOLDER_AVATAR
   },
{
    quote: "Success Is Only Determined By The Success Of The Successor. This is how my brother Joshua is",
    author: "Mecer Tinashe",
      role: "Designer",
      avatar: PLACEHOLDER_AVATAR

}
];






export const Testimonials = () => {
   const [activeldx, setActiveldx]=useState(0);

   const next =() => {
       setActiveldx((prev)=>(prev + 1)% testimonials.length);

   }

    const previous =() => {
      setActiveldx((prev)=>(prev- 1 + testimonials.length)% testimonials.length);
   }
   return (
      <section
         id="testimonials"
         className="py-32 relative overflow-hidden"
      >
         <div className="absolute top-1/2 left-1/2
       w-[800px] h-[800px] bg-primary/5
       rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
         />
         <div
            className="container mx-auto
       px-6 relative z-10"
         >

            {/* Section Header */}
            <div className="text-center max-w-3xl
             mx-auto mb-16"
            >
               <span
                  className="text-secondary-foreground
                text-sm font-medium tracking-wider 
                uppercase animate-fade-in"
               >
                  What People Say
               </span>
               <h2
                  className="text-4xl md:text-5xl
                 font-bold font-serif mt-4 mb-6 animate-fade-in
                animation-delay-100 text-secondary-foreground"
               >
                  Kind words from{" "}
                  <span className="font-serif italic
                   font-normal text-white"
                  >
                     amazing people.
                  </span>
               </h2>
            </div>

            {/* Testimonials Carousel*/}
            <div className="max-w-4xl mx-auto">
               <div className="relative">
                  {/* Main Testimonial*/}
                  <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
                     <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                        <Quote className="w-6 h-6 text-primary-foreground" />
                     </div>

                     <blockquote className="text-xl md:text-2xl font-medium leading-relaxed md-8 pt-4">
                        "{testimonials[activeldx].quote}"
                     </blockquote>

                     <div className="flex items-center gap-4">
                        <img
                           src={testimonials[activeldx].avatar}
                           alt={testimonials[activeldx].author}
                           className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                        />
                        <div className="flex items-center gap-4">
                           <div className="font-semibold">
                              {testimonials[activeldx].author}</div>
                           <div className="text-sm text-muted-foreground">
                              {testimonials[activeldx].role}
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Testimonials Navigation */}
                  <div className="flex items-center justify-center gap-4 mt-8">
                     <button className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all" onClick={previous}>
                       <ChevronLeft/> 
                     </button>

                     <div className="flex gap-2">
                        {testimonials.map((_, idx) =>(
                           <button 
                           onClick={()=> setActiveldx(idx)}
                           className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              idx===activeldx
                              ? "w-8 bg-primary"
                              :"bg-muted-foreground/30 hover:bg-muted-foreground/50"
                           }`}
                        />
                        ))}
                     </div>

                     <button className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all" onClick={next}>
                       <ChevronRight/> 
                     </button>
                  </div>
               </div>
            </div>

         </div>
      </section>
   );


};