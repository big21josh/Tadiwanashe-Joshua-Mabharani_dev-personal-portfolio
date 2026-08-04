import { Button } from "@/components/Button";

export const AnimatedBorderButton = ({ children = "Download CV", onClick }) => {
  return (
    <Button 
      size="lg" 
      className="relative group bg-transparent border-2 border-primary hover:bg-primary/10 overflow-hidden 
      shadow-[0_0_20px_3px_rgba(139,92,246,0.6)] 
      group-hover:shadow-[0_0_40px_6px_rgba(139,92,246,0.9)] 
      transition-shadow duration-300 delay-300" 
      onClick={onClick}
    >
      {/* Animated border overlay with border glow */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none" 
        viewBox="0 0 240 56" 
        preserveAspectRatio="none"
      >
        <rect 
          x="1" 
          y="1" 
          width="238" 
          height="54" 
          rx="27" 
          ry="27" 
          fill="none" 
          stroke="var(--color-primary)" 
          strokeWidth="2" 
          pathLength="100"
          strokeDasharray="100" 
          strokeDashoffset="100" 
          strokeLinecap="round"
          className="transition-[stroke-dashoffset,filter] duration-700 ease-out group-hover:stroke-dashoffset-0 
          [filter:drop-shadow(0_0_4px_rgba(139,92,246,0.5))] 
          group-hover:[filter:drop-shadow(0_0_12px_rgba(139,92,246,0.9))]" 
        />
      </svg>
      <span className="relative z-10 text-primary group-hover:text-foreground transition-colors whitespace-nowrap drop-shadow-[0_0_6px_rgba(139,92,246,0.5)] group-hover:drop-shadow-[0_0_10px_rgba(139,92,246,0.8)]">
        {children}
      </span>
    </Button>
  );
};