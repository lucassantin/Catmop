import { Shield, Zap, HeartHandshake, Truck, Award, Headphones } from "lucide-react";
import AdvantageCard from "../AdvantageCard";

const advantages = [
  {
    icon: <Shield size={28} />,
    title: "Alta Durabilidade",
    description:
      "Produtos fabricados com materiais de primeira qualidade, garantindo resistência e longa vida útil.",
  },
  {
    icon: <Zap size={28} />,
    title: "Eficiência na Limpeza",
    description:
      "Tecnologia e design pensados para proporcionar uma limpeza mais rápida e eficiente.",
  },
  {
    icon: <HeartHandshake size={28} />,
    title: "Atendimento Personalizado",
    description:
      "Equipe especializada para entender suas necessidades e oferecer as melhores soluções.",
  },
  {
    icon: <Truck size={28} />,
    title: "Entrega em Todo Brasil",
    description:
      "Logística eficiente para entregar seus produtos em qualquer lugar do país.",
  },
  {
    icon: <Award size={28} />,
    title: "Garantia de Qualidade",
    description:
      "Todos os nossos produtos passam por rigoroso controle de qualidade antes da entrega.",
  },
  {
    icon: <Headphones size={28} />,
    title: "Suporte Técnico",
    description:
      "Assistência completa para dúvidas, orçamentos e pós-venda com agilidade.",
  },
];

const AdvantagesSection = () => {
  return (
    <section id="vantagens" className="py-20 lg:py-32 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6">
            Por Que Escolher a Catmop?
          </div>
          <h2 className="section-title">
            Vantagens de Trabalhar{" "}
            <span className="gradient-text">Conosco</span>
          </h2>
          <p className="section-subtitle">
            Oferecemos mais do que produtos: oferecemos soluções completas 
            com qualidade, tradição e compromisso com nossos clientes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <AdvantageCard
              key={advantage.title}
              icon={advantage.icon}
              title={advantage.title}
              description={advantage.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
