import aboutImage from "@/assets/about-clinic.jpg";

const About = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="py-16 bg-gradient-soft">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-up">
            Sobre Nós
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-up stagger-1">
            Conheça nossa história, valores e o que nos torna referência em estética
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-fade-up">
              <img
                src={aboutImage}
                alt="Interior da clínica de estética"
                className="w-full h-auto rounded-2xl shadow-hover"
              />
            </div>
            <div className="space-y-6 animate-fade-up stagger-1">
              <h2 className="font-playfair text-4xl font-bold text-primary-foreground">
                Nossa História
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Nossa clínica nasceu do desejo de oferecer tratamentos estéticos de excelência, 
                combinando tecnologia avançada com um atendimento humanizado e acolhedor. 
                Acreditamos que beleza e bem-estar caminham juntos, e cada cliente merece 
                uma experiência única e transformadora.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Com anos de experiência no mercado, nos consolidamos como referência em 
                tratamentos faciais e corporais, sempre priorizando a segurança, eficácia 
                e satisfação de nossos clientes.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="py-16 bg-muted rounded-3xl px-8 mb-20">
            <h2 className="font-playfair text-4xl font-bold text-primary-foreground text-center mb-12 animate-fade-up">
              Nossos Valores
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Excelência",
                  description: "Compromisso com a qualidade em cada procedimento, utilizando as melhores técnicas e produtos do mercado.",
                },
                {
                  title: "Ética",
                  description: "Transparência e honestidade em todas as nossas relações, priorizando sempre o bem-estar do cliente.",
                },
                {
                  title: "Inovação",
                  description: "Investimento contínuo em tecnologia e atualização profissional para oferecer os tratamentos mais modernos.",
                },
              ].map((value, index) => (
                <div
                  key={value.title}
                  className={`text-center p-6 bg-card rounded-2xl shadow-soft animate-fade-up stagger-${index + 1}`}
                >
                  <h3 className="font-playfair text-2xl font-semibold text-primary-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team */}
          <div>
            <h2 className="font-playfair text-4xl font-bold text-primary-foreground text-center mb-6 animate-fade-up">
              Nossa Equipe
            </h2>
            <p className="text-center text-muted-foreground text-lg max-w-3xl mx-auto mb-12 animate-fade-up stagger-1">
              Profissionais altamente qualificados e apaixonados pelo que fazem
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  name: "Dra. Ana Silva",
                  role: "Esteticista e Dermatologista",
                  description: "Especialista em tratamentos faciais com mais de 15 anos de experiência. Formada pela USP com pós-graduação em dermatologia estética.",
                },
                {
                  name: "Juliana Costa",
                  role: "Terapeuta Corporal",
                  description: "Especializada em massoterapia e drenagem linfática. Certificada em técnicas avançadas de tratamento corporal.",
                },
              ].map((member, index) => (
                <div
                  key={member.name}
                  className={`p-8 bg-card rounded-2xl shadow-soft animate-fade-up stagger-${index + 2}`}
                >
                  <h3 className="font-playfair text-2xl font-semibold text-primary-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="text-secondary-foreground font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center animate-fade-up">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Nossa Missão
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Proporcionar experiências transformadoras através de tratamentos estéticos de excelência, 
            promovendo autoestima, confiança e bem-estar para todas as pessoas que nos confiam sua beleza
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
