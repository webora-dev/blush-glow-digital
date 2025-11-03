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

      {/* Location Section */}
      <section className="py-20" style={{ backgroundColor: '#fef3f7' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Onde Estamos
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Venha nos visitar no coração de Porto Alegre
            </p>
          </div>

          <div className="max-w-5xl mx-auto animate-fade-up stagger-1">
            <div className="rounded-2xl overflow-hidden shadow-hover mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.0932847396824!2d-51.23013!3d-30.0368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951978567f17f28d%3A0x2c2c5272031e658!2sRua%20dos%20Andradas%2C%20Centro%20Hist%C3%B3rico%2C%20Porto%20Alegre%20-%20RS!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Clínica - Rua dos Andradas, Centro Histórico, Porto Alegre - RS"
                aria-label="Mapa mostrando a localização da clínica no Centro Histórico de Porto Alegre"
              />
            </div>

            <div className="text-center bg-white rounded-2xl p-8 shadow-soft">
              <p className="text-muted-foreground mb-4 leading-relaxed">
                <strong className="text-primary-foreground">Endereço:</strong> Rua dos Andradas<br />
                Centro Histórico, Porto Alegre – RS
              </p>
              <Button
                asChild
                size="lg"
                className="bg-secondary hover:bg-secondary-hover text-secondary-foreground rounded-full px-8"
              >
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Rua+dos+Andradas,+Centro+Histórico,+Porto+Alegre+-+RS"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Abrir localização da clínica no Google Maps"
                >
                  Ver no Google Maps
                </a>
              </Button>
            </div>
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
