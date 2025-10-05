import { useEffect, useRef, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Settings } from "lucide-react";

const brands = [
  { id: "ecorp", name: "ECorp", color: "from-teal-400 to-cyan-500" },
  { id: "icorp", name: "ICorp", color: "from-orange-400 to-yellow-500" },
  { id: "agency", name: "The Agency", color: "from-red-500 to-pink-500" },
];

export const BrandKits = () => {
  const [selectedBrands, setSelectedBrands] = useState(["agency"]);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleBrand = (brandId: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brandId)
        ? prev.filter((id) => id !== brandId)
        : [...prev, brandId]
    );
  };

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div
            className={`text-center mb-12 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-foreground mb-4">
              Manage Your{" "}
              <span className="font-semibold">Brand Portfolio</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Track carbon emissions across all your brand entities
            </p>
          </div>

          <div
            className={`relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[hsl(var(--gradient-start))] via-[hsl(var(--gradient-mid))] to-[hsl(var(--gradient-end))] bg-[length:200%_200%] animate-gradient-shift transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            {/* Inner container with dark background */}
            <div className="relative bg-[#1a1a1a] rounded-2xl p-6 md:p-8 shadow-2xl">
              <h3 className="text-white text-xl md:text-2xl font-light mb-6">
                Brand Kits
              </h3>

              <div className="space-y-4">
                {brands.map((brand, index) => (
                  <div
                    key={brand.id}
                    className={`group flex items-center justify-between p-4 md:p-5 bg-[#2a2a2a] hover:bg-[#333] rounded-xl border border-[#3a3a3a] hover:border-[#4a4a4a] transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                    }`}
                    style={{
                      transitionDelay: `${(index + 3) * 100}ms`,
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <Checkbox
                        checked={selectedBrands.includes(brand.id)}
                        onCheckedChange={() => toggleBrand(brand.id)}
                        className="border-white/20 data-[state=checked]:bg-accent data-[state=checked]:border-accent"
                      />
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-full bg-gradient-to-br ${brand.color} shadow-lg`}
                        />
                        <span className="text-white font-medium text-base md:text-lg">
                          {brand.name}
                        </span>
                      </div>
                    </div>

                    <button
                      className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                      aria-label="Settings"
                    >
                      <Settings className="text-white/60 hover:text-white transition-colors" size={20} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
