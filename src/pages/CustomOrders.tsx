import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Instagram, Phone, Sparkles, Heart, Gift, MessageCircle } from "lucide-react";

const CustomOrders = () => {
  const steps = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Get Inspired",
      description: "Browse our gallery for ideas or dream up something completely unique"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Choose Your Base",
      description: "Select from our range of clips, clutchers, pouches, or other accessories"
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Add Your Fillers",
      description: "Pick chocolates, scrunchies, or other special items to complete your bouquet"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Contact Us",
      description: "Share your vision and budget with us, and we'll bring it to life!"
    }
  ];

  const customOptions = [
    {
      category: "Base Accessories",
      items: ["Hair Clips & Pins", "Clutch Bags", "Makeup Pouches", "Jewelry Boxes", "Phone Accessories"]
    },
    {
      category: "Sweet Treats",
      items: ["Premium Chocolates", "Candy Selection", "Cookies", "Macarons", "Custom Sweets"]
    },
    {
      category: "Hair Accessories",
      items: ["Satin Scrunchies", "Silk Scarves", "Hair Bands", "Hair Ties", "Decorative Pins"]
    },
    {
      category: "Special Touches",
      items: ["Perfume Samples", "Lip Balms", "Mini Candles", "Keychains", "Personal Notes"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Create Your Own <span className="text-primary">Perfect Bouquet</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Have a specific vision in mind? We love bringing unique ideas to life! 
            Our custom bouquets are tailored to your preferences, budget, and the special person you're gifting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="lg">
              <a href="https://instagram.com/_mesunofficial_" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 mr-2" />
                DM Us Your Ideas
              </a>
            </Button>
            <Button asChild variant="soft" size="lg">
              <a href="https://wa.me/919875360212" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp to Discuss
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            How Custom Orders Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="text-center relative hover:shadow-elegant transition-smooth">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                </div>
                <CardHeader className="pt-12">
                  <div className="text-primary mx-auto mb-4">
                    {step.icon}
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Options */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Endless Possibilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {customOptions.map((option, index) => (
              <Card key={index} className="hover:shadow-soft transition-smooth">
                <CardHeader>
                  <CardTitle className="text-primary">{option.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {option.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Contact */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-elegant">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl md:text-3xl">Ready to Start Creating?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="text-center">
                  <p className="text-lg text-muted-foreground mb-6">
                    Custom bouquet pricing starts from <span className="text-primary font-bold">₹800</span> and 
                    varies based on your choice of accessories and treats. We'll work within your budget to 
                    create something beautiful!
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="border-primary/20">
                    <CardContent className="p-6 text-center">
                      <Instagram className="w-12 h-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Instagram DM</h3>
                      <p className="text-muted-foreground mb-4">
                        Send us your ideas, inspiration photos, and budget range
                      </p>
                      <Button asChild variant="hero" className="w-full">
                        <a href="https://instagram.com/_mesunofficial_" target="_blank" rel="noopener noreferrer">
                          Message @_mesunofficial_
                        </a>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-primary/20">
                    <CardContent className="p-6 text-center">
                      <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
                      <p className="text-muted-foreground mb-4">
                        Chat with us directly for quick responses
                      </p>
                      <Button asChild variant="soft" className="w-full">
                        <a href="https://wa.me/919875360212" target="_blank" rel="noopener noreferrer">
                          WhatsApp +91 98753-60212
                        </a>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-secondary/20">
                    <CardContent className="p-6 text-center">
                      <Phone className="w-12 h-12 text-secondary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Phone Call</h3>
                      <p className="text-muted-foreground mb-4">
                        Discuss your vision directly with our team
                      </p>
                      <Button asChild variant="outline" className="w-full">
                        <a href="tel:+918100239470">
                          Call +91 81002-39470
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                <div className="text-center text-sm text-muted-foreground">
                  <p>
                    <strong>Business Hours:</strong> Monday - Sunday, 9:00 AM - 9:00 PM<br />
                    Response time: Usually within 2-4 hours during business hours
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomOrders;