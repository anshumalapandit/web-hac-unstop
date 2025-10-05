import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote: "The platform transformed how we track and reduce our carbon footprint. The real-time analytics are game-changing.",
    author: "Sarah Mitchell",
    role: "Sustainability Director",
    company: "Global Corp",
  },
  {
    quote: "Finally, a carbon tracking solution that's both comprehensive and easy to use. Our entire team is on board.",
    author: "James Chen",
    role: "Chief Operations Officer",
    company: "EcoTech Industries",
  },
  {
    quote: "We reduced our emissions by 27% in the first year. The insights and recommendations were invaluable.",
    author: "Maria Rodriguez",
    role: "Environmental Manager",
    company: "Future Systems",
  },
];

export const Testimonials = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          videoRef.current?.play();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-20 md:py-32 bg-secondary/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Testimonials Carousel */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-foreground mb-12">
              What Our{" "}
              <span className="font-semibold">Clients Say</span>
            </h2>

            <div className="relative">
              <Quote className="text-accent/20 absolute -top-4 -left-2" size={64} />
              
              <div className="relative z-10 min-h-[280px] flex flex-col justify-between">
                <div>
                  <p className="text-xl md:text-2xl font-light text-foreground mb-8 leading-relaxed">
                    "{testimonials[currentIndex].quote}"
                  </p>
                  
                  <div className="mb-8">
                    <p className="text-foreground font-medium mb-1">
                      {testimonials[currentIndex].author}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {testimonials[currentIndex].role}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-4">
                  <Button
                    onClick={prevTestimonial}
                    variant="outline"
                    size="icon"
                    className="rounded-full hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all"
                  >
                    <ChevronLeft size={20} />
                  </Button>
                  <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-2 rounded-full transition-all ${
                          index === currentIndex
                            ? "w-8 bg-accent"
                            : "w-2 bg-border hover:bg-accent/50"
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                      />
                    ))}
                  </div>
                  <Button
                    onClick={nextTestimonial}
                    variant="outline"
                    size="icon"
                    className="rounded-full hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all"
                  >
                    <ChevronRight size={20} />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Video Section */}
          <div
            className={`relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <video
              ref={videoRef}
              className="w-full h-auto"
              muted
              loop
              playsInline
            >
              <source src="/videos/testimonials.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};
