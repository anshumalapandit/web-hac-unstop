import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowUp, Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  {
    title: "Managed portfolio carbon footprint",
    unit: "tCO₂e",
    value: "45,048",
    change: "+16%",
    trend: "up",
    fromYear: "from 2019",
    data: [
      { year: "2022", value: 45048, max: 65198706 },
      { year: "2021", value: 14111, max: 65198706 },
      { year: "2020", value: 32813, max: 65198706 },
      { year: "2019", value: 38673, max: 65198706 },
    ],
  },
  {
    title: "Managed portfolio energy intensity",
    unit: "kWh/m²",
    value: "123",
    change: "22%",
    trend: "down",
    fromYear: "from 2019",
    data: [
      { year: "2022", value: 123, max: 157 },
      { year: "2021", value: 128, max: 157 },
      { year: "2020", value: 135, max: 157 },
      { year: "2019", value: 157, max: 157 },
    ],
  },
  {
    title: "Managed portfolio energy consumption",
    unit: "kWh",
    value: "47,790,662",
    change: "27%",
    trend: "down",
    fromYear: "from 2019",
    data: [
      { year: "2022", value: 47790662, max: 65198706 },
      { year: "2021", value: 49324077, max: 65198706 },
      { year: "2020", value: 48784205, max: 65198706 },
      { year: "2019", value: 65198706, max: 65198706 },
    ],
  },
];

export const Statistics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="impact"
      ref={sectionRef}
      className="py-20 md:py-32 bg-[#e8e5e1]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.title}
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              {/* Header */}
              <div className="mb-6">
                <h3 className="text-[#5a5048] text-sm md:text-base font-light mb-8 leading-relaxed">
                  {stat.title}
                </h3>
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-[#5a5048] text-4xl md:text-5xl font-light tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-[#5a5048] text-sm font-light">
                    {stat.unit}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  {stat.trend === "up" ? (
                    <ArrowUp className="text-[#8a7a68]" size={16} />
                  ) : (
                    <ArrowDown className="text-[#8a7a68]" size={16} />
                  )}
                  <span className="text-[#8a7a68] font-light">
                    {stat.change}
                  </span>
                  <span className="text-[#9a8a78] font-light text-xs">
                    {stat.fromYear}
                  </span>
                </div>
              </div>

              {/* Chart */}
              <div className="space-y-4 mb-8">
                {stat.data.map((item) => {
                  const percentage = (item.value / item.max) * 100;
                  return (
                    <div key={item.year} className="space-y-2">
                      <div className="flex justify-between items-baseline">
                        <span className="text-[#8a7a68] text-sm font-light">
                          {item.year}
                        </span>
                        <span className="text-[#5a5048] text-sm font-light">
                          {item.value.toLocaleString()}
                        </span>
                      </div>
                      <div className="h-2 bg-[#d0cbc4] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#8a7a68] rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: isVisible ? `${percentage}%` : "0%",
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Action Button */}
              <Button
                variant="ghost"
                className="text-[#5a5048] hover:text-[#3a3028] hover:bg-transparent p-0 h-auto font-light group"
              >
                {index === 0 ? (
                  <>
                    See full breakdown of carbon footprint
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </>
                ) : (
                  <>
                    Download the data
                    <Download className="ml-2 group-hover:translate-y-1 transition-transform" size={18} />
                  </>
                )}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
