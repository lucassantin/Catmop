import { Shield, Truck, Headphones, Award } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Durabilidade Superior",
    description: "Produtos fabricados com materiais de alta resistência para uso intensivo.",
  },
  {
    icon: Award,
    title: "Ergonomia Certificada",
    description: "Design ergonômico que reduz a fadiga e aumenta a produtividade.",
  },
  {
    icon: Truck,
    title: "Entrega Rápida",
    description: "Logística eficiente para atender sua demanda no prazo.",
  },
  {
    icon: Headphones,
    title: "Suporte Especializado",
    description: "Equipe técnica disponível para orientação e suporte.",
  },
];

const TrustBadges = () => {
  return (
    <section className="py-12 border-y border-border">
      <div className="section-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <feature.icon size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
