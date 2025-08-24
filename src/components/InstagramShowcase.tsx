import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Instagram, ExternalLink } from "lucide-react";

const InstagramShowcase = () => {
  // Mock Instagram posts - in a real app, you'd fetch these from Instagram API
  const instagramPosts = [
    {
      id: 1,
      image: "/api/placeholder/300/300",
      caption: "Custom bouquet for a special birthday surprise! 🎉",
      likes: 45
    },
    {
      id: 2,
      image: "/api/placeholder/300/300",
      caption: "Rose gold elegance at its finest ✨",
      likes: 38
    },
    {
      id: 3,
      image: "/api/placeholder/300/300",
      caption: "Pastel perfection for a sweet celebration 💕",
      likes: 52
    },
    {
      id: 4,
      image: "/api/placeholder/300/300",
      caption: "Behind the scenes of our creative process 🎨",
      likes: 29
    },
    {
      id: 5,
      image: "/api/placeholder/300/300",
      caption: "Another happy customer with their unique gift! 💝",
      likes: 67
    },
    {
      id: 6,
      image: "/api/placeholder/300/300",
      caption: "Silver glam collection ready for delivery ✨",
      likes: 41
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Instagram className="w-8 h-8 text-primary mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Follow Our <span className="text-primary">Journey</span>
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            Get inspired by our latest creations and see what our happy customers are saying!
          </p>
          <Button asChild variant="hero">
            <a href="https://instagram.com/_mesunofficial_" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5 mr-2" />
              Follow @_mesunofficial_
            </a>
          </Button>
        </div>

        {/* Instagram Grid */}
        {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {instagramPosts.map((post) => (
            <Card key={post.id} className="group overflow-hidden hover:shadow-elegant transition-smooth">
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={post.image}
                  alt="Instagram post"
                  className="w-full h-full object-cover aspect-square transition-smooth group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-smooth flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="text-white text-center">
                    <ExternalLink className="w-6 h-6 mx-auto mb-2" />
                    <div className="flex items-center justify-center">
                      <Instagram className="w-4 h-4 mr-1" />
                      <span className="text-sm">{post.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div> */}

        {/* Social Proof */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto gradient-soft">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Join Our Growing Community
              </h3>
              <p className="text-muted-foreground mb-6">
                Over 500+ happy customers have chosen our unique bouquets for their special moments. 
                See their joy and get inspired for your next gift!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="hero">
                  <a href="https://instagram.com/_mesunofficial_" target="_blank" rel="noopener noreferrer">
                    View More on Instagram
                  </a>
                </Button>
                <Button asChild variant="soft">
                  <a href="tel:+918100239470">
                    Order Your Bouquet
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InstagramShowcase;