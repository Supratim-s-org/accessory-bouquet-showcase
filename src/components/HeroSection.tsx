import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bouquet.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center gradient-hero">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Gifts That Last{" "}
              <span className="text-primary">Longer Than Flowers</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg">
              Handmade bouquets with accessories, chocolates, and more. 
              Create unforgettable moments with our unique gift arrangements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="hero" size="lg">
                <Link to="/bouquets">View Our Bouquets</Link>
              </Button>
              <Button asChild variant="soft" size="lg">
                <Link to="/custom">Custom Orders</Link>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={heroImage}
                alt="Beautiful handmade accessory bouquet"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 gradient-soft rounded-full opacity-60"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 gradient-primary rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;