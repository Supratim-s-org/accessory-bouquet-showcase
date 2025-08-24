import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Sparkles, Gift, Users } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Made with Love",
      description: "Every bouquet is handcrafted with care and attention to detail, ensuring each gift is as special as the person receiving it."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Unique Creativity",
      description: "We believe in thinking outside the box, creating one-of-a-kind arrangements that you won't find anywhere else."
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Lasting Memories",
      description: "Unlike traditional flowers, our accessory bouquets are keepsakes that recipients can treasure and use long after the occasion."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Personal Touch",
      description: "We work closely with each customer to understand their vision and create something truly meaningful."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Our Story of <span className="text-primary">Creative Gifting</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                MeSun Florisse was born from a simple idea: what if gifts could be both beautiful 
                and practical? What if we could create arrangements that last longer than flowers 
                and bring joy every time they're used?
              </p>
              <Button asChild variant="hero" size="lg">
                <Link to="/bouquets">Explore Our Creations</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-elegant">
                <img
                  src="/bts.jpg"
                  alt="Behind the scenes at MeSun Florisse"
                  className="w-full h-full object-cover aspect-square"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 gradient-soft rounded-full opacity-60"></div>
              <div className="absolute -top-6 -right-6 w-16 h-16 gradient-primary rounded-full opacity-40"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Why We Do What We Do
            </h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Traditional flower bouquets are beautiful, but they fade. We wanted to create something different – 
              gifts that combine the visual appeal of floral arrangements with the practicality of everyday accessories. 
              Each bouquet tells a story and serves as a lasting reminder of special moments and the people who care.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-soft transition-smooth">
                  <CardContent className="p-6">
                    <div className="text-primary mb-4 flex justify-center">
                      {value.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-1">
                <div className="aspect-square rounded-xl overflow-hidden shadow-elegant">
                  <img
                    src="/founders.jpg"
                    alt="Founder of MeSun Florisse"
                    className="w-full h-full object-cover aspect-square"
                  />
                </div>
              </div>
              <div className="lg:col-span-2">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Meet the Creator
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    "As college students, we were always looking for unique ways to express ourselves and share 
                    joy with our friends. We loved the idea of giving flowers, but we were frustrated by how 
                    quickly they would wilt and be forgotten."
                  </p>
                  <p>
                    "That's when the idea struck us – what if we could arrange everyday accessories and treats 
                    in the same beautiful way as flowers? The result would be something that not only looks 
                    stunning but also provides lasting value to the recipient."
                  </p>
                  <p>
                    "Every bouquet we create is a labor of love, designed to bring joy not just in the moment 
                    of receiving, but every time the accessories are used. It's gifting with purpose, and that's 
                    what drives us every day."
                  </p>
                </div>
                <div className="mt-6">
                  <p className="font-semibold text-foreground">- Founders, MeSun Florisse</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Promise */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Our Promise to You
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-primary/20">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Quality Materials</h3>
                  <p className="text-muted-foreground">
                    We carefully select each accessory and treat, ensuring everything meets our high standards for quality and beauty.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-secondary/20">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Personal Attention</h3>
                  <p className="text-muted-foreground">
                    Every bouquet is handcrafted with personal attention, ensuring each creation is unique and special.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-accent/20">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Gift className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Lasting Joy</h3>
                  <p className="text-muted-foreground">
                    Our bouquets are designed to bring happiness that extends far beyond the initial gifting moment.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12">
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;