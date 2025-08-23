import { Link } from "react-router-dom";
import { Instagram, Phone, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Our Bouquets", href: "/bouquets" },
    { name: "Custom Orders", href: "/custom" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 gradient-primary rounded-full"></div>
              <span className="text-xl font-bold text-foreground">
                MeSun Florisse
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Creating unique, handmade bouquets with accessories, chocolates, and more. 
              Gifts that last longer than flowers.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://instagram.com/_mesunofficial_"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-smooth"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/919875360212"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-smooth"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="tel:+919875360212"
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-smooth"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="mailto:mesunofficial01@gmail.com"
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-smooth"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+919875360212" className="hover:text-primary transition-smooth">
                  +91 98753-60212
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+918100239470" className="hover:text-primary transition-smooth">
                  +91 81002-39470
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:mesunofficial01@gmail.com" className="hover:text-primary transition-smooth">
                  mesunofficial01@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Instagram className="w-4 h-4" />
                <a 
                  href="https://instagram.com/_mesunofficial_" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-smooth"
                >
                  @_mesunofficial_
                </a>
              </div>
            </div>
            <div className="mt-4 text-sm text-muted-foreground">
              <p>Business Hours:</p>
              <p>Mon - Sun: 9:00 AM - 9:00 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 MeSun Florisse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;