import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Instagram, Phone, Mail, Clock, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: <Instagram className="w-8 h-8" />,
      title: "Instagram DM",
      description: "The fastest way to reach us! We're most active on Instagram.",
      action: "Message @_mesunofficial_",
      href: "https://instagram.com/_mesunofficial_",
      primary: true
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "WhatsApp",
      description: "Chat with us on WhatsApp for quick orders and responses.",
      action: "WhatsApp +91 98753-60212",
      href: "https://wa.me/919875360212",
      primary: true
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Phone Call",
      description: "Call us directly for immediate assistance.",
      action: "Call +91 81002-39470",
      href: "tel:+918100239470",
      primary: true
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email",
      description: "For detailed inquiries or custom order discussions.",
      action: "mesunofficial01@gmail.com",
      href: "mailto:mesunofficial01@gmail.com",
      primary: false
    }
  ];

  const faqs = [
    {
      question: "What's the typical order processing time?",
      answer: "Most bouquets are completed within 24-48 hours. Custom orders may take 2-3 days depending on complexity."
    },
    {
      question: "Do you offer delivery?",
      answer: "Yes! We offer delivery within the city. Delivery charges and areas covered will be discussed when you place your order."
    },
    {
      question: "Can I see the bouquet before delivery?",
      answer: "Absolutely! We'll send you photos of the completed bouquet for approval before delivery or pickup."
    },
    {
      question: "What if I need a bouquet urgently?",
      answer: "Contact us immediately! We often accommodate same-day orders for our pre-designed bouquets, subject to availability."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Create Something <span className="text-primary">Beautiful Together</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Have questions? Ready to order? Want to discuss a custom creation? 
            We'd love to hear from you and help bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            How to Reach Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {contactMethods.map((method, index) => (
              <Card 
                key={index} 
                className={`text-center hover:shadow-elegant transition-smooth ${
                  method.primary ? 'border-primary/30 shadow-soft' : ''
                }`}
              >
                <CardHeader>
                  <div className={`mx-auto mb-4 ${method.primary ? 'text-primary' : 'text-muted-foreground'}`}>
                    {method.icon}
                  </div>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{method.description}</p>
                  <Button 
                    asChild 
                    variant={method.primary ? "hero" : "soft"}
                    className="w-full"
                  >
                    <a 
                      href={method.href} 
                      target={method.href.includes('instagram') ? '_blank' : undefined}
                      rel={method.href.includes('instagram') ? 'noopener noreferrer' : undefined}
                    >
                      {method.action}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Business Info */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Business Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="w-6 h-6 mr-3 text-primary" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Sunday</span>
                    <span className="font-medium">9:00 AM - 9:00 PM</span>
                  </div>
                  <div className="pt-3 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      <MessageCircle className="w-4 h-4 inline mr-1" />
                      Response time: Usually within 2-4 hours during business hours
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Service Area */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="w-6 h-6 mr-3 text-primary" />
                    Service Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-medium mb-1">Delivery Available</p>
                    <p className="text-muted-foreground text-sm">Within city limits - charges apply</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Pickup Option</p>
                    <p className="text-muted-foreground text-sm">Convenient pickup location provided upon order</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Custom Orders</p>
                    <p className="text-muted-foreground text-sm">Available with 2-3 days advance notice</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="hover:shadow-soft transition-smooth">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you want to order from our collection or create something custom, 
            we're here to help make your gifting dreams come true.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="lg">
              <a href="https://instagram.com/_mesunofficial_" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 mr-2" />
                Message Us on Instagram
              </a>
            </Button>
            <Button asChild variant="soft" size="lg">
              <a href="https://wa.me/919875360212" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;