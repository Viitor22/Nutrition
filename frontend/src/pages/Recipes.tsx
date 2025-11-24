import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import RecipeCard from "@/components/recipes/RecipeCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import recipe1 from "@/assets/recipe-1.jpg";
import recipe2 from "@/assets/recipe-2.jpg";
import recipe3 from "@/assets/recipe-3.jpg";

const Recipes = () => {
  const recipes = [
    {
      image: recipe1,
      title: "Bowl de Quinoa com Frango Grelhado",
      description: "Uma refeição completa e balanceada com proteínas de qualidade, carboidratos complexos e vegetais frescos.",
      calories: 450,
      prepTime: "25 min",
      category: "Almoço",
    },
    {
      image: recipe2,
      title: "Salmão com Vegetais Assados",
      description: "Rico em ômega-3 e antioxidantes, perfeito para uma alimentação saudável e saborosa.",
      calories: 520,
      prepTime: "30 min",
      category: "Jantar",
    },
    {
      image: recipe3,
      title: "Parfait de Iogurte Grego",
      description: "Café da manhã nutritivo com probióticos, frutas frescas e granola caseira.",
      calories: 320,
      prepTime: "10 min",
      category: "Café da Manhã",
    },
    {
      image: recipe1,
      title: "Salada Caesar Proteica",
      description: "Versão saudável do clássico, com frango grelhado e molho light caseiro.",
      calories: 380,
      prepTime: "20 min",
      category: "Almoço",
    },
    {
      image: recipe2,
      title: "Wrap Integral de Atum",
      description: "Lanche rápido e nutritivo, ideal para manter a energia durante o dia.",
      calories: 290,
      prepTime: "15 min",
      category: "Lanche",
    },
    {
      image: recipe3,
      title: "Smoothie Verde Energizante",
      description: "Combinação perfeita de frutas, vegetais e proteínas para começar bem o dia.",
      calories: 210,
      prepTime: "5 min",
      category: "Bebida",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-soft py-16 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Receitas Saudáveis
              </h1>
              <p className="text-lg text-muted-foreground">
                Descubra receitas deliciosas e nutritivas para cada momento do seu dia
              </p>
              
              {/* Search Bar */}
              <div className="flex gap-2 max-w-xl mx-auto">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Buscar receitas..." 
                    className="pl-10"
                  />
                </div>
                <Button className="bg-gradient-primary hover:opacity-90">
                  Buscar
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Recipes Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recipes.map((recipe, index) => (
                <RecipeCard key={index} {...recipe} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Recipes;