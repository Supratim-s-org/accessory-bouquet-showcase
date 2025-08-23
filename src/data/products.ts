export interface Product {
  id: string;
  name: string;
  price: string;
  originalPrice?: string; // For discount logic
  image: string;
  gallery: string[];
  description: string;
  contents: string[];
  dimensions?: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: "chocolate-lovers-dream",
    name: "The Chocolate Lover's Dream",
    price: "₹1,099",
    originalPrice: "₹1,299",
    image: "/src/assets/chocolate-lovers-dream.jpg",
    gallery: [
      "/src/assets/chocolate-lovers-dream.jpg",
      "/api/placeholder/400/300",
      "/api/placeholder/400/300"
    ],
    description: "A decadent bouquet for the chocolate enthusiast, featuring premium chocolates and elegant accessories in rich brown and gold tones.",
    contents: [
      "5 Premium Dairy Milk Chocolates",
      "2 Ferrero Rocher",
      "1 Gold Pearl Hair Clip",
      "3 Satin Scrunchies",
      "1 Mini Clutch Purse",
      "Decorative Ribbons"
    ],
    dimensions: "Approx. 15 inches tall",
    featured: true
  },
  {
    id: "silver-glam-clutcher",
    name: "The Silver Glam Clutcher",
    price: "₹1,399",
    originalPrice: "₹1,599",
    image: "/src/assets/silver-glam-clutcher.jpg",
    gallery: [
      "/src/assets/silver-glam-clutcher.jpg",
      "/api/placeholder/400/300",
      "/api/placeholder/400/300"
    ],
    description: "Sophisticated silver-themed bouquet with luxurious accessories perfect for special occasions and elegant gifting.",
    contents: [
      "1 Silver Clutch Bag",
      "4 Pearl Hair Clips",
      "2 Metallic Scrunchies",
      "3 Kit Kat Chocolates",
      "1 Small Mirror Compact",
      "Silver Ribbon Accents"
    ],
    dimensions: "Approx. 18 inches tall",
    featured: true
  },
  {
    id: "pastel-princess",
    name: "The Pastel Princess",
    price: "₹999",
    image: "/src/assets/pastel-princess.jpg",
    gallery: [
      "/src/assets/pastel-princess.jpg",
      "/api/placeholder/400/300",
      "/api/placeholder/400/300"
    ],
    description: "Sweet and delicate bouquet in soft pastel colors, perfect for birthdays and celebrating special moments with friends.",
    contents: [
      "4 Assorted Chocolates",
      "3 Pastel Hair Clips",
      "2 Silk Scrunchies",
      "1 Small Makeup Pouch",
      "Pastel Ribbon Decoration"
    ],
    dimensions: "Approx. 12 inches tall",
    featured: false
  },
  {
    id: "rose-gold-elegance",
    name: "Rose Gold Elegance",
    price: "₹1,799",
    image: "/api/placeholder/400/300",
    gallery: [
      "/api/placeholder/400/300",
      "/api/placeholder/400/300",
      "/api/placeholder/400/300"
    ],
    description: "Ultimate luxury bouquet featuring rose gold accessories and premium treats for the most discerning recipients.",
    contents: [
      "1 Rose Gold Clutch",
      "6 Premium Chocolates",
      "4 Rose Gold Hair Accessories",
      "3 Velvet Scrunchies",
      "1 Jewelry Box",
      "Premium Wrapping"
    ],
    dimensions: "Approx. 20 inches tall",
    featured: true
  },
  {
    id: "birthday-surprise",
    name: "Birthday Surprise Special",
    price: "₹1,399",
    image: "/api/placeholder/400/300",
    gallery: [
      "/api/placeholder/400/300",
      "/api/placeholder/400/300",
      "/api/placeholder/400/300"
    ],
    description: "Vibrant and fun bouquet designed specifically for birthday celebrations with colorful accessories and sweet treats.",
    contents: [
      "5 Mixed Chocolates",
      "1 Colorful Hair Clip Set",
      "2 Fun Scrunchies",
      "1 Birthday-themed Clutch",
      "Confetti Ribbons",
      "Mini Birthday Card"
    ],
    dimensions: "Approx. 16 inches tall",
    featured: false
  },
  {
    id: "minimalist-chic",
    name: "Minimalist Chic",
    price: "₹899",
    image: "/api/placeholder/400/300",
    gallery: [
      "/api/placeholder/400/300",
      "/api/placeholder/400/300",
      "/api/placeholder/400/300"
    ],
    description: "Clean, modern bouquet with neutral tones and essential accessories for those who appreciate understated elegance.",
    contents: [
      "3 Quality Chocolates",
      "2 Neutral Hair Clips",
      "1 Simple Clutch",
      "2 Basic Scrunchies",
      "Minimalist Wrapping"
    ],
    dimensions: "Approx. 10 inches tall",
    featured: false
  }
];