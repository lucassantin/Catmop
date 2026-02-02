import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="section-container text-center">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary-foreground mb-4">
          Pronto para Equipar sua Operação?
        </h2>
        <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
          Solicite um orçamento personalizado e descubra as melhores soluções 
          em equipamentos de limpeza para sua empresa.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/orcamento"
            className="btn-accent flex items-center gap-2"
          >
            Solicitar Orçamento
            <ArrowRight size={18} />
          </Link>
          <a
            href="https://wa.link/vqt47a"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-primary-foreground text-primary font-semibold rounded-md hover:opacity-90 transition-opacity"
          >
            <MessageCircle size={18} />
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
