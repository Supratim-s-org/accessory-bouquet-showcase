import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Instagram, Phone, ArrowLeft, Check, MessageCircle } from "lucide-react";

const BouquetDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Bouquet Not Found</h1>
          <Link to="/bouquets">
            <Button>Back to Bouquets</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to="/bouquets" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-smooth">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Bouquets
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-xl shadow-elegant">
              <img
                src={product.gallery[currentImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.featured && (
                <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                  Featured
                </Badge>
              )}
            </div>
            
            {/* Thumbnail Gallery */}
            <div className="flex space-x-2 overflow-x-auto">
              {product.gallery.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-smooth ${
                    currentImageIndex === index 
                      ? "border-primary" 
                      : "border-transparent hover:border-muted"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {product.name}
              </h1>
              <div className="flex items-center gap-3 mb-4">
                <p className="text-2xl font-bold text-primary">
                  {product.price}
                </p>
                {product.originalPrice && (
                  <p className="text-xl text-muted-foreground line-through">
                    {product.originalPrice}
                  </p>
                )}
              </div>
              <p className="text-muted-foreground text-lg">
                {product.description}
              </p>
            </div>

            {/* What's Inside */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Check className="w-5 h-5 mr-2 text-primary" />
                  What's Inside
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {product.contents.map((item, index) => (
                    <li key={index} className="flex items-center text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
                {product.dimensions && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      <strong>Dimensions:</strong> {product.dimensions}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Call to Action */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Ready to Order?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <Button asChild variant="hero" size="lg" className="w-full">
                  <a href="https://instagram.com/_mesunofficial_" target="_blank" rel="noopener noreferrer">
                    <Instagram className="w-5 h-5 mr-2" />
                    Order on Instagram
                  </a>
                </Button>
                <Button asChild variant="soft" size="lg" className="w-full">
                  <a href="https://wa.me/919875360212" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Order
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full">
                  <a href="tel:+918100239470">
                    <Phone className="w-5 h-5 mr-2" />
                    Call to Order
                  </a>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground text-center">
                Contact us with this product name to place your order
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BouquetDetail;