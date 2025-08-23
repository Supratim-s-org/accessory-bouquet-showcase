import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProductCard from "./ProductCard";
import { products } from "@/data/products";
import featuredImage from "@/assets/featured-bouquets.jpg";

const FeaturedBouquets = () => {
  const featuredProducts = products.filter(product => product.featured).slice(0, 3);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured <span className="text-primary">Bouquets</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular and stunning creations, each carefully crafted 
            to create lasting memories.
          </p>
        </div>

        {/* Featured Image */}
        <div className="mb-12">
          <div className="relative rounded-2xl overflow-hidden shadow-elegant max-w-4xl mx-auto">
            <img
              src={featuredImage}
              alt="Collection of featured bouquets"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Our Signature Collection</h3>
              <p className="text-lg opacity-90">Handpicked favorites that never go out of style</p>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              featured={product.featured}
            />
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="hero" size="lg">
            <Link to="/bouquets">View All Bouquets</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBouquets;