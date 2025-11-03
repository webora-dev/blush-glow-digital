import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Controlar scroll do body quando menu mobile abre/fecha
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/servicos", label: "Serviços" },
    { to: "/sobre", label: "Sobre Nós" },
    { to: "/resultados", label: "Resultados" },
    { to: "/contato", label: "Contato" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="font-playfair text-2xl font-bold text-primary-foreground">
            Estética
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors hover:text-primary-foreground ${
                  isActive(link.to) ? "text-primary-foreground" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="bg-primary hover:bg-primary-hover text-primary-foreground rounded-full px-6"
            >
              <Link to="/contato">Agende Agora</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation - Overlay Fullscreen */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-white/95 backdrop-blur-sm md:hidden z-[9999] animate-fade-in"
            style={{ top: 0, left: 0, right: 0, bottom: 0 }}
          >
            {/* Botão Fechar fixo no canto superior direito */}
            <button
              onClick={() => setIsOpen(false)}
              className="fixed top-6 right-4 text-foreground hover:text-primary transition-colors z-[10000]"
              aria-label="Fechar menu"
            >
              <X size={28} />
            </button>

            {/* Menu centralizado */}
            <nav className="flex flex-col items-center justify-center h-full space-y-6 px-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium transition-all duration-300 hover:scale-105 ${
                    isActive(link.to) ? "text-primary-foreground font-semibold" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                asChild
                className="w-64 bg-primary hover:bg-primary-hover text-primary-foreground rounded-full mt-4"
              >
                <Link to="/contato" onClick={() => setIsOpen(false)}>
                  Agende Agora
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
