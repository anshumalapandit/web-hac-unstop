import { useEffect, useRef, useState } from "react";
import { Zap, BarChart3, Shield, Globe } from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Track your carbon footprint with live data and comprehensive reporting",
  },
  {
    icon: Globe,
    title: "Global Standards",
    description: "Aligned with international carbon accounting frameworks and protocols",
  },
  {
    icon: Shield,
    title: "Verified Data",
    description: "Enterprise-grade security with third-party verification and auditing",
  },
  {
    icon: Zap,
    title: "Automated Tracking",
    description: "Seamless integration with your existing systems and workflows",
  },
];

export const FeaturesServices = () => {
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
      id="services"
      ref={sectionRef}
      className="py-20 md:py-32 bg-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Video Section */}
          <div
            className={`relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <video
              ref={videoRef}
              className="w-full h-auto"
              muted
              loop
              playsInline
            >
              <source src="/videos/features-services.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Features Grid */}
          <div className="space-y-8">
            <div
              className={`transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-foreground mb-4">
                Comprehensive{" "}
                <span className="font-semibold">Carbon Solutions</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Everything you need to measure, manage, and reduce your environmental impact
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`group p-6 rounded-xl bg-card border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{
                    transitionDelay: `${(index + 2) * 100}ms`,
                  }}
                >
                  <feature.icon className="w-10 h-10 text-accent mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
