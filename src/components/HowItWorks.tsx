import { Card, CardContent } from "@/components/ui/card";
import { Eye, MessageCircle, Truck } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Eye className="w-12 h-12" />,
      title: "Browse Our Designs",
      description: "Explore our beautiful collection or dream up your own unique creation",
      color: "primary"
    },
    {
      icon: <MessageCircle className="w-12 h-12" />,
      title: "Contact Us",
      description: "Reach out via Instagram DM or phone call to place your order",
      color: "secondary"
    },
    {
      icon: <Truck className="w-12 h-12" />,
      title: "We Deliver Joy",
      description: "We craft your bouquet with love and deliver your unique gift",
      color: "accent"
    }
  ];

  return (
    <section className="py-16 bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Getting your perfect bouquet is simple and personal. Here's how we make it happen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="text-center hover:shadow-elegant transition-smooth h-full">
                <CardContent className="p-8">
                  <div className="relative">
                    {/* Step Number */}
                    <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    
                    {/* Icon */}
                    <div className={`text-${step.color} mb-6 flex justify-center`}>
                      {step.icon}
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              {/* Arrow Connector */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-0.5 bg-primary/30"></div>
                  <div className="absolute -right-1 -top-1 w-2 h-2 bg-primary/30 rotate-45"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;