import { ReactNode } from "react";

interface AdvantageCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const AdvantageCard = ({ icon, title, description, delay = 0 }: AdvantageCardProps) => {
  return (
    <div
      className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 opacity-0 animate-slide-up"
      style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
    >
      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
        {icon}
      </div>
      <h3 className="font-heading font-bold text-xl mb-3 text-card-foreground">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default AdvantageCard;
