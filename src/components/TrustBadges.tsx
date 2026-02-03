import { Shield, Truck, Headphones, Award } from "lucide-react";
import { motion, Variants } from "framer-motion"; // 1. Adicione Variants aqui

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

// 2. Adicione a tipagem : Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// 3. Adicione a tipagem : Variants
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const TrustBadges = () => {
  return (
    <section className="py-16 bg-background border-y border-border/50">
      <div className="section-container px-4 md:px-6">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-14 h-14 mb-4 bg-primary/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <feature.icon size={28} className="text-primary" />
              </div>
              
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                {feature.title}
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBadges;