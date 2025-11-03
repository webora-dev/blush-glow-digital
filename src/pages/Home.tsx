import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import heroImage from "@/assets/hero-image.jpg";
import serviceLimpeza from "@/assets/service-limpeza.jpg";
import serviceDepilacao from "@/assets/service-depilacao.jpg";
import serviceMassagem from "@/assets/service-massagem.jpg";

const Home = () => {
  const featuredServices = [
    {
      title: "Limpeza de Pele",
      description: "Tratamento profundo que remove impurezas e renova a pele, deixando-a radiante e saudável.",
      image: serviceLimpeza,
    },
    {
      title: "Depilação a Laser",
      description: "Tecnologia avançada para remoção definitiva de pelos, com resultados duradouros e seguros.",
      image: serviceDepilacao,
    },
    {
      title: "Massagem Relaxante",
      description: "Técnicas especializadas para aliviar tensões, promover bem-estar e relaxamento profundo.",
      image: serviceMassagem,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Clínica de Estética - Ambiente luxuoso e acolhedor"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/40" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl animate-fade-up">
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Realce Sua Beleza Natural
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Tratamentos estéticos personalizados com tecnologia avançada e cuidado excepcional. 
              Descubra o melhor da sua pele em um ambiente acolhedor e luxuoso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary-hover text-primary-foreground rounded-full px-8 text-base"
              >
                <Link to="/contato">Agende Sua Consulta</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary-foreground hover:bg-primary hover:text-white rounded-full px-8 text-base"
              >
                <Link to="/servicos">Conheça Nossos Serviços</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Serviços em Destaque
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Conheça alguns dos nossos tratamentos mais procurados, desenvolvidos para realçar sua beleza
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <ServiceCard
                key={service.title}
                {...service}
                delay={index + 1}
              />
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-up stagger-4">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-secondary text-secondary-foreground hover:bg-secondary hover:text-white rounded-full px-8"
            >
              <Link to="/servicos">Ver Todos os Serviços</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Profissionais Qualificados",
                description: "Equipe especializada com anos de experiência em tratamentos estéticos avançados",
              },
              {
                title: "Tecnologia de Ponta",
                description: "Equipamentos modernos e seguros para resultados eficazes e duradouros",
              },
              {
                title: "Atendimento Personalizado",
                description: "Protocolos individualizados respeitando as necessidades de cada cliente",
              },
            ].map((benefit, index) => (
              <div
                key={benefit.title}
                className={`text-center p-8 rounded-2xl bg-card shadow-soft animate-fade-up stagger-${index + 1}`}
              >
                <h3 className="font-playfair text-2xl font-semibold text-primary-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center animate-fade-up">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Pronta Para se Sentir Ainda Mais Bonita?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Agende sua consulta e descubra o tratamento perfeito para você
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-primary-foreground hover:bg-white/90 rounded-full px-8 text-base shadow-hover"
          >
            <Link to="/contato">Entre em Contato</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
