import { Award, Users, ShieldCheck } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 lg:py-32 bg-secondary/30">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6">
              Sobre a Catmop
            </div>
            <h2 className="section-title">
              Tradição e Qualidade em{" "}
              <span className="gradient-text">Equipamentos de Limpeza</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              A Catmop é uma empresa brasileira com anos de tradição no mercado de 
              equipamentos e acessórios de limpeza. Nosso compromisso é oferecer produtos 
              de alta qualidade que facilitem o dia a dia de profissionais de limpeza, 
              empresas e residências.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Fabricamos e distribuímos uma linha completa de mops, esfregões, refis, 
              cabos e acessórios, sempre buscando inovação e durabilidade. Nossos produtos 
              são desenvolvidos para atender às necessidades de diversos ambientes: 
              hospitais, clínicas, escritórios, indústrias e residências.
            </p>

            {/* Values */}
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground mb-1">Qualidade</h4>
                  <p className="text-muted-foreground text-sm">Produtos de alto padrão</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground mb-1">Atendimento</h4>
                  <p className="text-muted-foreground text-sm">Suporte profissional</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground mb-1">Tradição</h4>
                  <p className="text-muted-foreground text-sm">Experiência comprovada</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary/5 rounded-3xl transform rotate-3" />
            <div className="relative bg-card rounded-3xl p-8 shadow-card">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-secondary rounded-2xl p-6 text-center">
                  <p className="text-4xl font-heading font-bold text-primary mb-2">20+</p>
                  <p className="text-muted-foreground">Anos no Mercado</p>
                </div>
                <div className="bg-secondary rounded-2xl p-6 text-center">
                  <p className="text-4xl font-heading font-bold text-primary mb-2">500+</p>
                  <p className="text-muted-foreground">Clientes Ativos</p>
                </div>
                <div className="bg-secondary rounded-2xl p-6 text-center">
                  <p className="text-4xl font-heading font-bold text-primary mb-2">50+</p>
                  <p className="text-muted-foreground">Produtos</p>
                </div>
                <div className="bg-secondary rounded-2xl p-6 text-center">
                  <p className="text-4xl font-heading font-bold text-primary mb-2">100%</p>
                  <p className="text-muted-foreground">Compromisso</p>
                </div>
              </div>
              <div className="mt-6 p-6 bg-primary/10 rounded-2xl">
                <p className="text-foreground font-medium text-center italic">
                  "Nossa missão é proporcionar soluções de limpeza que fazem a diferença 
                  no dia a dia de nossos clientes."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
