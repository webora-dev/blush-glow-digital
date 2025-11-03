import ServiceCard from "@/components/ServiceCard";
import serviceLimpeza from "@/assets/service-limpeza.jpg";
import serviceDepilacao from "@/assets/service-depilacao.jpg";
import serviceMassagem from "@/assets/service-massagem.jpg";
import serviceHidratacao from "@/assets/service-hidratacao.jpg";
import serviceSkinbooster from "@/assets/service-skinbooster.jpg";
import serviceBotox from "@/assets/service-botox.jpg";

const Services = () => {
  const services = [
    {
      title: "Limpeza de Pele",
      description: "Tratamento profundo que remove impurezas, cravos e células mortas. Inclui extração, esfoliação e hidratação, deixando sua pele renovada e radiante.",
      image: serviceLimpeza,
    },
    {
      title: "Depilação a Laser",
      description: "Tecnologia de última geração para remoção definitiva de pelos indesejados. Procedimento seguro, eficaz e com resultados duradouros em poucas sessões.",
      image: serviceDepilacao,
    },
    {
      title: "Massagem Relaxante",
      description: "Técnicas especializadas de massoterapia para aliviar tensões musculares, reduzir estresse e promover bem-estar físico e mental.",
      image: serviceMassagem,
    },
    {
      title: "Hidratação Facial",
      description: "Tratamento intensivo que repõe a umidade natural da pele com ativos de alta performance. Ideal para peles desidratadas e sensíveis.",
      image: serviceHidratacao,
    },
    {
      title: "Skinbooster",
      description: "Técnica de bioestimulação que promove hidratação profunda e melhora a qualidade da pele de dentro para fora, com ácido hialurônico injetável.",
      image: serviceSkinbooster,
    },
    {
      title: "Botox",
      description: "Aplicação de toxina botulínica para suavizar linhas de expressão e prevenir o envelhecimento. Resultados naturais e rejuvenescedores.",
      image: serviceBotox,
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="py-16 bg-gradient-soft">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-up">
            Nossos Serviços
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-up stagger-1">
            Oferecemos uma ampla gama de tratamentos estéticos faciais e corporais, 
            desenvolvidos para realçar sua beleza natural e promover bem-estar completo
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                {...service}
                delay={index + 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Como Funciona
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Nosso processo é simples e pensado para proporcionar a melhor experiência
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Consulta Inicial",
                description: "Avaliação personalizada das suas necessidades e objetivos",
              },
              {
                step: "02",
                title: "Planejamento",
                description: "Criação de um protocolo de tratamento específico para você",
              },
              {
                step: "03",
                title: "Tratamento",
                description: "Aplicação do procedimento com técnicas modernas e seguras",
              },
              {
                step: "04",
                title: "Acompanhamento",
                description: "Suporte contínuo para garantir os melhores resultados",
              },
            ].map((step, index) => (
              <div
                key={step.step}
                className={`text-center p-6 animate-fade-up stagger-${index + 1}`}
              >
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                  <span className="font-playfair text-2xl font-bold text-primary-foreground">
                    {step.step}
                  </span>
                </div>
                <h3 className="font-playfair text-xl font-semibold text-primary-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
