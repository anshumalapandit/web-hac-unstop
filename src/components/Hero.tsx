import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-secondary/20">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${50 + scrollY * 0.05}% ${50 + scrollY * 0.03}%, hsl(var(--gradient-start)) 0%, transparent 50%)`,
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground mb-6 animate-fade-in"
            style={{
              transform: `translateY(${scrollY * 0.3}px)`,
            }}
          >
            Measure, Track &{" "}
            <span className="font-semibold bg-gradient-to-r from-[hsl(var(--gradient-start))] via-[hsl(var(--gradient-mid))] to-[hsl(var(--gradient-end))] bg-clip-text text-transparent">
              Reduce Carbon
            </span>
          </h1>
          
          <p
            className="text-lg sm:text-xl md:text-2xl font-light text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up"
            style={{
              animationDelay: "0.2s",
              opacity: 0,
              animationFillMode: "forwards",
            }}
          >
            Enterprise-grade carbon tracking and portfolio management for sustainable businesses
          </p>
          
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
            style={{
              animationDelay: "0.4s",
              opacity: 0,
              animationFillMode: "forwards",
            }}
          >
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg hover:scale-105 transition-transform"
            >
              Start Tracking
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:bg-secondary px-8 py-6 text-lg hover:scale-105 transition-transform"
            >
              View Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <ChevronDown className="text-muted-foreground" size={32} />
      </div>
    </section>
  );
};
