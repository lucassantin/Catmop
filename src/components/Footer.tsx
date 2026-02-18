import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { categories } from "@/data/products";
import logoImg from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/90">
      {/* Main Footer */}
      <div className="section-container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src={logoImg} alt="Catmop" className="h-10 w-auto rounded" />
              <span className="font-heading font-bold text-xl text-background">
                Catmop
              </span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Há mais de 34 anos desenvolvendo soluções em equipamentos de limpeza 
              profissional para os mais diversos segmentos do mercado.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-5">Produtos</h3>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link
                    to={`/produtos?categoria=${category.slug}`}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Institutional */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-5">Institucional</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/empresa" className="text-background/70 hover:text-primary transition-colors text-sm">
                  A Empresa
                </Link>
              </li>
              <li>
                <Link to="/segmentos" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Segmentos
                </Link>
              </li>
              {/*<li>
                <Link to="/materiais" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Materiais de Apoio
                </Link>
              </li>*/}
              <li>
                <Link to="/contato" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Seja um Distribuidor
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Fale Conosco
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-5">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span className="text-background/70 text-sm">
                  Rua General Góis Monteiro, 103 - São Paulo<br />
                  Brasil
                </span>
              </li>
              <li>
                <a
                  href="https://wa.link/vqt47a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors text-sm"
                >
                  <Phone size={18} className="text-primary shrink-0" />
                  (11) 9 4762-1792
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@catmop.com.br"
                  className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors text-sm"
                >
                  <Mail size={18} className="text-primary shrink-0" />
                  catmop@catmop.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="section-container py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Catmop. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-background/50 hover:text-background transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-background/50 hover:text-background transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
