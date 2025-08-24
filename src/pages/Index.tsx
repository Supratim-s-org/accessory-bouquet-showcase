import HeroSection from "@/components/HeroSection";
import FeaturedBouquets from "@/components/FeaturedBouquets";
import HowItWorks from "@/components/HowItWorks";
import InstagramShowcase from "@/components/InstagramShowcase";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedBouquets />
      <HowItWorks />
      <InstagramShowcase />
    </div>
  );
};

export default Index;
