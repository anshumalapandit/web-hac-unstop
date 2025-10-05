import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { FeaturesServices } from "@/components/FeaturesServices";
import { BrandKits } from "@/components/BrandKits";
import { Statistics } from "@/components/Statistics";
import { ShowcaseWork } from "@/components/ShowcaseWork";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <FeaturesServices />
      <BrandKits />
      <Statistics />
      <ShowcaseWork />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
