import { Link } from "react-router-dom";
import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-playfair text-2xl font-bold text-primary-foreground mb-4">
              Estética
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Realçando sua beleza natural com cuidado e expertise.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary-foreground hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary-foreground hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-playfair text-lg font-semibold text-primary-foreground mb-4">
              Navegação
            </h4>
            <ul className="space-y-2">
              {["Home", "Serviços", "Sobre Nós", "Resultados", "Contato"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-sm text-muted-foreground hover:text-primary-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-playfair text-lg font-semibold text-primary-foreground mb-4">
              Serviços
            </h4>
            <ul className="space-y-2">
              {["Limpeza de Pele", "Depilação a Laser", "Massagem", "Hidratação Facial", "Skinbooster", "Botox"].map(
                (service) => (
                  <li key={service}>
                    <Link
                      to="/servicos"
                      className="text-sm text-muted-foreground hover:text-primary-foreground transition-colors"
                    >
                      {service}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-playfair text-lg font-semibold text-primary-foreground mb-4">
              Contato
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>Rua dos Andradas<br />Centro Histórico, Porto Alegre – RS</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone size={18} />
                <a href="tel:+5511999999999" className="hover:text-primary-foreground transition-colors">
                  (11) 99999-9999
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail size={18} />
                <a
                  href="mailto:contato@clinica.com"
                  className="hover:text-primary-foreground transition-colors"
                >
                  contato@clinica.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Clínica de Estética. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
