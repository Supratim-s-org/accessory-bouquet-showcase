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
    id: "florisse-grande",
    name: "Florisse Grande",
    price: "₹1,099",
    originalPrice: "₹1,299",
    image: "/src/assets/pic1.jpg",
    gallery: [
      "/src/assets/pic1.jpg"
      
    ],
    description: "A whimsical bouquet featuring an assortment of stylish claw clips and vibrant artificial gypsy flowers, perfect for adding a touch of bohemian charm.",
    contents: [
      "Assorted Claw Clips (various sizes and colors)",
      "Artificial Gypsy Flowers (mix of colors)",
      "Decorative Ribbons",
      "Mini Hair Scrunchies",
      "Premium Wrapping"
    ],
    dimensions: "Approx. 20 inches tall",
    featured: true
  },
  {
    id: "petals-and-pearls",
    name: "Petals & Pearls",
    price: "₹1,399",
    originalPrice: "₹1,599",
    image: "/src/assets/pic2.jpg",
    gallery: [
      "/src/assets/pic2.jpg"
    ],
    description: "A dazzling bouquet featuring an eclectic mix of stylish earrings, vibrant artificial gypsy flowers, and trendy claw clips, perfect for a unique and fashionable statement.",
    contents: [
      "Assorted Earrings (hoops, studs, dangles)",
      "Artificial Gypsy Flowers (various colors)",
      "Stylish Claw Clips (different sizes and designs)",
      "Decorative Ribbons"
    ],
    dimensions: "Approx. 16 inches tall",
    featured: true
  },
  {
    id: "choco-blooms",
    name: "Choco Blooms",
    price: "₹999",
    originalPrice: "₹1,299",
    image: "/src/assets/pic3.jpg",
    gallery: [
      "/src/assets/pic3.jpg",
    ],
    description: "A delightful bouquet featuring an array of gourmet chocolates, perfect for satisfying any sweet tooth and celebrating special moments.",
    contents: [
      "Assorted Gourmet Chocolates",
      "Chocolate Truffles",
      "Chocolate Bars",
      "Decorative Ribbons",
      "Artificial Flowers"
    ],
    dimensions: "Approx. 21 inches tall",
    featured: false
  },
  {
    id: "clip-florals",
    name: "Clip Florals",
    price: "₹1,799",
    originalPrice: "₹1,299",
    image: "/src/assets/pic4.jpg",
    gallery: [
      "/src/assets/pic4.jpg"
    ],
    description: "A charming, smaller version of our luxurious Florisse Grande bouquet, featuring elegant rose gold accessories and delightful treats.",
    contents: [
      "Assorted Claw Clips (various sizes and colors)",
      "Artificial Gypsy Flowers (mix of colors)",
      "Decorative Ribbons",
      "Mini Hair Scrunchies"
    ],
    dimensions: "Approx. 14 inches tall",
    featured: true
  },
  {
    id: "clippie-blooms",
    name: "Clippie Blooms", 
    price: "₹1,399",
    originalPrice: "₹1,299",
    image: "/src/assets/pic5.jpg",
    gallery: [
      "/src/assets/pic5.jpg"
    ],
    description: "A charming large bouquet featuring an assortment of stylish hair clips and delicate artificial flowers, perfect for adding a touch of elegance to any outfit.",
    contents: [
      "Assorted Hair Clips (various sizes and designs)",
      "Artificial Flowers (mix of types and colors)",
      "Decorative Ribbons",
      "Premium Wrapping"
    ],
    dimensions: "Approx. 20 inches tall",
    featured: true
  },
  {
    id: "minimalist-chic",
    name: "Minimalist Chic",
    price: "₹899",
    originalPrice: "₹1,299",
    image: "/src/assets/pic6.jpg",
    gallery: [
      "/src/assets/pic6.jpg"
    ],
    description: "Clean, modern and minimalist bouquet with neutral tones and essential accessories for those who appreciate understated elegance.",
    contents: [
      "Assorted Hair Clips (various sizes and designs)",
      "Artificial Flowers (mix of types and colors)",
      "Decorative Ribbons",
      "Minimalist Wrapping"
    ],
    dimensions: "Approx. 12 inches tall",
    featured: false
  }
];