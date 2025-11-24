import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MacroCard from "@/components/nutrition/MacroCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Flame, Drumstick, Wheat, Droplet, Calendar, Plus } from "lucide-react";

const MealPlan = () => {
  const macros = [
    { title: "Calorias", current: 1450, goal: 2000, unit: "kcal", icon: Flame, color: "bg-orange-100 text-orange-600" },
    { title: "Proteínas", current: 85, goal: 150, unit: "g", icon: Drumstick, color: "bg-red-100 text-red-600" },
    { title: "Carboidratos", current: 160, goal: 220, unit: "g", icon: Wheat, color: "bg-amber-100 text-amber-600" },
    { title: "Gorduras", current: 45, goal: 70, unit: "g", icon: Droplet, color: "bg-blue-100 text-blue-600" },
  ];

  const meals = {
    "cafe-manha": [
      { name: "Ovos mexidos com espinafre", calories: 250, time: "08:00" },
      { name: "Torrada integral com abacate", calories: 180, time: "08:15" },
    ],
    "almoco": [
      { name: "Peito de frango grelhado", calories: 320, time: "12:30" },
      { name: "Arroz integral", calories: 150, time: "12:30" },
      { name: "Salada verde", calories: 50, time: "12:30" },
    ],
    "lanche": [
      { name: "Iogurte grego com frutas", calories: 200, time: "16:00" },
    ],
    "jantar": [
      { name: "Salmão grelhado", calories: 250, time: "19:30" },
      { name: "Batata doce assada", calories: 130, time: "19:30" },
    ],
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-soft py-12 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h1 className="text-4xl font-bold text-foreground mb-2">
                    Plano Alimentar
                  </h1>
                  <p className="text-muted-foreground">
                    Acompanhe suas metas diárias e mantenha-se no caminho certo
                  </p>
                </div>
                <Button className="bg-gradient-primary hover:opacity-90">
                  <Calendar className="mr-2 h-4 w-4" />
                  Hoje
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Macros Overview */}
        <section className="py-8 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Resumo Diário
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {macros.map((macro, index) => (
                  <MacroCard key={index} {...macro} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Meals Section */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-foreground">
                  Refeições do Dia
                </h2>
                <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                  <Plus className="mr-2 h-4 w-4" />
                  Adicionar Refeição
                </Button>
              </div>

              <Tabs defaultValue="cafe-manha" className="space-y-6">
                <TabsList className="grid w-full grid-cols-4 bg-accent">
                  <TabsTrigger value="cafe-manha">Café da Manhã</TabsTrigger>
                  <TabsTrigger value="almoco">Almoço</TabsTrigger>
                  <TabsTrigger value="lanche">Lanche</TabsTrigger>
                  <TabsTrigger value="jantar">Jantar</TabsTrigger>
                </TabsList>

                {Object.entries(meals).map(([key, mealList]) => (
                  <TabsContent key={key} value={key} className="space-y-4">
                    {mealList.map((meal, index) => (
                      <Card key={index} className="hover:shadow-card transition-shadow">
                        <CardHeader className="pb-3">
                          <div className="flex items-center justify-between">
                            <div>
                              <CardTitle className="text-lg">{meal.name}</CardTitle>
                              <CardDescription>{meal.time}</CardDescription>
                            </div>
                            <div className="flex items-center gap-1 text-sm font-medium">
                              <Flame className="h-4 w-4 text-primary" />
                              <span>{meal.calories} kcal</span>
                            </div>
                          </div>
                        </CardHeader>
                      </Card>
                    ))}
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="py-12 bg-accent/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-primary border-0 text-primary-foreground">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">Dica do Dia</h3>
                      <p className="text-primary-foreground/90">
                        Beba pelo menos 2 litros de água ao longo do dia para manter seu corpo hidratado e auxiliar no metabolismo.
                      </p>
                    </div>
                    <Button variant="secondary" size="lg">
                      Ver Mais Dicas
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MealPlan;