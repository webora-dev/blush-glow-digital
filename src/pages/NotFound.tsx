import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", window.location.pathname);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-soft px-4">
      <div className="text-center max-w-2xl mx-auto animate-fade-up">
        <div className="mb-8">
          <h1 className="font-playfair text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Página Não Encontrada
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Ops! A página que você procura não existe ou foi movida.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary-hover text-primary-foreground rounded-full"
          >
            <Link to="/">
              <Home className="w-5 h-5 mr-2" />
              Voltar ao Início
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-secondary text-secondary-foreground hover:bg-secondary hover:text-white rounded-full"
            onClick={() => window.history.back()}
          >
            <button>
              <ArrowLeft className="w-5 h-5 mr-2" />
              Página Anterior
            </button>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
