import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import resultLimpezaBefore from "@/assets/result-limpeza-before.jpg";
import resultLimpezaAfter from "@/assets/result-limpeza-after.jpg";
import resultHidratacaoBefore from "@/assets/result-hidratacao-before.jpg";
import resultHidratacaoAfter from "@/assets/result-hidratacao-after.jpg";
import resultAntiageBefore from "@/assets/result-antiage-before.jpg";
import resultAntiageAfter from "@/assets/result-antiage-after.jpg";
import resultSkinboosterBefore from "@/assets/result-skinbooster-before.jpg";
import resultSkinboosterAfter from "@/assets/result-skinbooster-after.jpg";
import resultModeladoraBefore from "@/assets/result-modeladora-before.jpg";
import resultModeladoraAfter from "@/assets/result-modeladora-after.jpg";
import resultPeelingBefore from "@/assets/result-peeling-before.jpg";
import resultPeelingAfter from "@/assets/result-peeling-after.jpg";

const Results = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const results = [
    {
      title: "Limpeza de Pele Profunda",
      before: resultLimpezaBefore,
      after: resultLimpezaAfter,
      description: "Resultado após 3 sessões de limpeza profunda",
    },
    {
      title: "Hidratação Facial",
      before: resultHidratacaoBefore,
      after: resultHidratacaoAfter,
      description: "Pele visivelmente mais luminosa e hidratada",
    },
    {
      title: "Tratamento Anti-idade",
      before: resultAntiageBefore,
      after: resultAntiageAfter,
      description: "Redução visível de linhas de expressão",
    },
    {
      title: "Skinbooster",
      before: resultSkinboosterBefore,
      after: resultSkinboosterAfter,
      description: "Resultado após bioestimulação com ácido hialurônico",
    },
    {
      title: "Massagem Modeladora",
      before: resultModeladoraBefore,
      after: resultModeladoraAfter,
      description: "Contorno corporal aprimorado",
    },
    {
      title: "Peeling Químico",
      before: resultPeelingBefore,
      after: resultPeelingAfter,
      description: "Renovação completa da textura da pele",
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="py-16 bg-gradient-soft">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-up">
            Nossos Resultados
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-up stagger-1">
            Veja as transformações reais de nossos clientes. Resultados que falam por si
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {results.map((result, index) => (
              <Card
                key={index}
                className={`hover-lift overflow-hidden border-0 shadow-soft cursor-pointer animate-fade-up stagger-${(index % 6) + 1}`}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={result.before}
                    alt={`${result.title} - Antes`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                      activeIndex === index ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <img
                    src={result.after}
                    alt={`${result.title} - Depois`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                      activeIndex === index ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-xs font-medium text-foreground">
                      {activeIndex === index ? "Depois" : "Antes"}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-playfair text-xl font-semibold text-primary-foreground mb-2">
                    {result.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{result.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              O Que Dizem Nossos Clientes
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Depoimentos reais de pessoas que confiaram em nosso trabalho
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Mariana Santos",
                service: "Limpeza de Pele",
                text: "Resultado incrível! Minha pele nunca esteve tão bonita e saudável. A equipe é super atenciosa e profissional.",
                rating: 5,
              },
              {
                name: "Juliana Oliveira",
                service: "Botox",
                text: "Fiquei impressionada com o resultado natural. Parece que voltei 10 anos no tempo! Recomendo muito.",
                rating: 5,
              },
              {
                name: "Camila Rodrigues",
                service: "Massagem",
                text: "Além do tratamento excelente, o ambiente é super acolhedor. Saio de lá renovada e relaxada!",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className={`border-0 shadow-soft animate-fade-up stagger-${index + 1}`}
              >
                <CardContent className="p-6">
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-secondary text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-semibold text-primary-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.service}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Results;
