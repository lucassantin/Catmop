import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-xl">C</span>
              </div>
              <span className="font-heading font-bold text-2xl text-background">
                Catmop
              </span>
            </a>
            <p className="text-background/70 mb-6 leading-relaxed">
              Soluções em equipamentos e acessórios de limpeza profissional. 
              Qualidade e tradição para deixar seus ambientes impecáveis.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {[
                { href: "#home", label: "Home" },
                { href: "#produtos", label: "Produtos" },
                { href: "#sobre", label: "Sobre Nós" },
                { href: "#vantagens", label: "Vantagens" },
                { href: "#contato", label: "Contato" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Produtos</h4>
            <ul className="space-y-3">
              {[
                "Mops e Esfregões",
                "Refis para Mop",
                "Cabos para Mop",
                "Pás Automáticas",
                "Acessórios de Limpeza",
              ].map((product) => (
                <li key={product}>
                  <a
                    href="#produtos"
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-background/70">
                  São Paulo - SP, Brasil
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-primary flex-shrink-0" />
                <a
                  href="tel:+551199999999"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  (11) 9999-9999
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-primary flex-shrink-0" />
                <a
                  href="mailto:contato@catmop.com.br"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  contato@catmop.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-background/10">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © {currentYear} Catmop. Todos os direitos reservados.
            </p>
            <p className="text-background/60 text-sm">
              Equipamentos e Acessórios de Limpeza Profissional
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
