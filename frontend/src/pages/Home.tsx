import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Apple, Heart, TrendingUp, Users, ChefHat, Calendar } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import heroImage from "@/assets/hero-nutrition.jpg";

const Home = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Saúde em Primeiro Lugar",
      description: "Receitas e planos desenvolvidos por nutricionistas especializados.",
    },
    {
      icon: Apple,
      title: "Alimentação Balanceada",
      description: "Aprenda a equilibrar macronutrientes para atingir seus objetivos.",
    },
    {
      icon: TrendingUp,
      title: "Acompanhamento Real",
      description: "Monitore seu progresso e alcance suas metas de forma sustentável.",
    },
    {
      icon: Users,
      title: "Comunidade Ativa",
      description: "Faça parte de uma comunidade que valoriza a saúde e bem-estar.",
    },
  ];

  const features = [
    {
      icon: ChefHat,
      title: "Receitas Saudáveis",
      description: "Centenas de receitas deliciosas e nutritivas.",
      link: "/receitas",
    },
    {
      icon: Calendar,
      title: "Plano Personalizado",
      description: "Crie e acompanhe seu plano alimentar diário.",
      link: "/plano-alimentar",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-soft">
          <div className="container mx-auto px-4 py-20 md:py-28">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Transforme sua vida com{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-primary">
                    nutrição inteligente
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-lg">
                  Descubra receitas saudáveis, crie planos alimentares personalizados e alcance seus objetivos de bem-estar com acompanhamento profissional.
                </p>
                <div className="flex flex-wrap gap-4">
                  <NavLink to="/login">
                    <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                      Começar Gratuitamente
                    </Button>
                  </NavLink>
                  <NavLink to="/receitas">
                    <Button size="lg" variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                      Explorar Receitas
                    </Button>
                  </NavLink>
                </div>
              </div>
              <div className="relative animate-fade-in">
                <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-3xl blur-3xl"></div>
                <img
                  src={heroImage}
                  alt="Alimentos saudáveis e nutritivos"
                  className="relative rounded-3xl shadow-soft w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Por que escolher o NutriVida?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Oferecemos tudo que você precisa para uma jornada de saúde bem-sucedida
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="pt-6 space-y-4">
                    <div className="inline-flex p-4 rounded-2xl bg-accent">
                      <benefit.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg text-foreground">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-accent/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Recursos Principais
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ferramentas poderosas para sua jornada nutricional
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mx-auto">
              {features.map((feature, index) => (
                <Card key={index} className="group hover:shadow-soft transition-all duration-300 hover:-translate-y-1 h-full">
                  <CardContent className="pt-6 space-y-6 h-full flex flex-col">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 p-3 rounded-xl bg-gradient-primary">
                        <feature.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-xl text-foreground mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                    <NavLink to={feature.link} className="block mt-auto">
                      <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        Explorar
                      </Button>
                    </NavLink>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
                Pronto para começar sua transformação?
              </h2>
              <p className="text-lg text-primary-foreground/90">
                Junte-se a milhares de pessoas que já transformaram suas vidas com o NutriVida
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <NavLink to="/cadastro">
                  <Button size="lg" variant="secondary" className="bg-card hover:bg-card/90">
                    Criar Conta Gratuita
                  </Button>
                </NavLink>
                <NavLink to="/contato">
                  <Button size="lg" variant="outline" className="border-primary-foreground text-black hover:bg-primary-foreground hover:bg-card/90">
                    Fale Conosco
                  </Button>
                </NavLink>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;