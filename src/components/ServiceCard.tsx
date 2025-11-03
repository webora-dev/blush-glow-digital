import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  delay?: number;
}

const ServiceCard = ({ title, description, image, delay = 0 }: ServiceCardProps) => {
  return (
    <Card
      className={`hover-lift border-0 shadow-soft overflow-hidden animate-fade-up stagger-${delay}`}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={`Serviço de ${title}`}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <CardContent className="p-6">
        <h3 className="font-playfair text-2xl font-semibold text-primary-foreground mb-3">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{description}</p>
        <Button
          asChild
          variant="outline"
          className="w-full border-primary text-primary-foreground hover:bg-primary hover:text-white rounded-full"
        >
          <Link to="/contato">Agendar</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
