import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { Menu, X, Leaf } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Início" },
    { to: "/receitas", label: "Receitas" },
    { to: "/plano-alimentar", label: "Plano Alimentar" },
    { to: "/contato", label: "Contato" },
    { to: "/profile", label: "Perfil" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
              <Leaf className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">NutriVida</span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                activeClassName="text-primary font-semibold"
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden md:block">
            <NavLink to="/login">
              <Button className="bg-gradient-primary hover:opacity-90">
                Começar Agora
              </Button>
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:bg-accent rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden border-t border-border py-4 space-y-2 animate-fade-in">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="block px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground rounded-md transition-colors"
                activeClassName="bg-accent/50 text-primary font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <div className="px-4 pt-2">
              <NavLink to="/login">
                <Button className="w-full bg-gradient-primary hover:opacity-90">
                  Começar Agora
                </Button>
              </NavLink>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
