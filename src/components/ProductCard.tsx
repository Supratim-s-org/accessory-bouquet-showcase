import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  featured?: boolean;
}

const ProductCard = ({ id, name, price, originalPrice, image, featured = false }: ProductCardProps) => {
  return (
    <Link to={`/bouquet/${id}`} className="group">
      <Card className="overflow-hidden transition-smooth hover:shadow-elegant hover:-translate-y-1">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-smooth group-hover:scale-105"
          />
          {featured && (
            <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
              Featured
            </Badge>
          )}
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-smooth">
            {name}
          </h3>
          <div className="flex items-center gap-2">
            <p className="text-primary font-bold text-lg">{price}</p>
            {originalPrice && (
              <p className="text-muted-foreground line-through text-sm">{originalPrice}</p>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;