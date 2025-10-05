import { useEffect, useRef, useState } from "react";

export const ShowcaseWork = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section
      id="work"
      ref={sectionRef}
      className="py-20 md:py-32 bg-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-foreground mb-4">
            Our Work in{" "}
            <span className="font-semibold">Action</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real projects, real impact - see how we help businesses achieve their sustainability goals
          </p>
        </div>

        <div
          className={`max-w-6xl mx-auto transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
            <video
              ref={videoRef}
              className="w-full h-auto"
              muted
              loop
              playsInline
            >
              <source src="/videos/showcase-work.mp4" type="video/mp4" />
            </video>
            
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-12">
              <p className="text-white text-lg md:text-xl font-light">
                Explore our portfolio
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
