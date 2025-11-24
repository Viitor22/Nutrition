import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Flame } from "lucide-react";

interface RecipeCardProps {
  image: string;
  title: string;
  description: string;
  calories: number;
  prepTime: string;
  category: string;
}

const RecipeCard = ({ image, title, description, calories, prepTime, category }: RecipeCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden aspect-video">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
        />
        <Badge className="absolute top-3 right-3 bg-card/90 backdrop-blur-sm text-foreground border-border">
          {category}
        </Badge>
      </div>
      <CardHeader>
        <CardTitle className="text-xl group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Flame className="h-4 w-4 text-primary" />
            <span>{calories} kcal</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4 text-primary" />
            <span>{prepTime}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full hover:bg-primary hover:text-primary-foreground transition-colors">
          Ver Receita
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RecipeCard;