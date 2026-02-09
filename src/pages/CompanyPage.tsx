import { useState } from "react";
import { Link } from "react-router-dom";
import { Award, Users, Target, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import BottomNav from "@/components/BottomNav";
import MobileDrawer from "@/components/MobileDrawer";
import heroIndustrial from "@/assets/banners/hero-industrial.jpg";

const values = [
  {
    icon: Award,
    title: "Qualidade",
    description: "Produtos desenvolvidos com os melhores materiais e rigoroso controle de qualidade.",
  },
  {
    icon: Clock,
    title: "Tradição",
    description: "Mais de 34 anos de experiência no mercado de equipamentos de limpeza profissional.",
  },
  {
    icon: Target,
    title: "Funcionalidade",
    description: "Equipamentos projetados para máxima eficiência e facilidade de uso.",
  },
  {
    icon: Users,
    title: "Atendimento",
    description: "Equipe especializada para orientar na escolha das melhores soluções.",
  },
];

const milestones = [
  { year: "1992", event: "Fundação da Catmop em São Paulo" },
  { year: "2005", event: "Expansão para todo o território nacional" },
  { year: "2010", event: "Lançamento da linha hospitalar" },
  { year: "2015", event: "Certificação ISO 9001" },
  { year: "2020", event: "Inauguração do novo centro de distribuição" },
  { year: "2026", event: "+1000 clientes ativos em todo Brasil" },
];

const CompanyPage = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 lg:pt-[120px] pb-20 lg:pb-0">
        {/* Hero */}
        <div className="relative h-[300px] lg:h-[500px]">
          <img
            src={heroIndustrial}
            alt="Catmop - Sobre a Empresa"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/70" />
          <div className="absolute inset-0 flex items-center">
            <div className="section-container">
              <h1 className="text-2xl lg:text-5xl font-heading font-bold text-background mb-3 lg:mb-4 max-w-2xl">
                Tradição e Inovação em Equipamentos de Limpeza
              </h1>
              <p className="text-sm lg:text-lg text-background/80 max-w-xl">
                Há mais de duas décadas, a Catmop desenvolve soluções completas 
                para limpeza profissional.
              </p>
            </div>
          </div>
        </div>

        {/* About Text */}
        <section className="py-12 lg:py-16">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <span className="badge-category mb-3 lg:mb-4">Nossa História</span>
                <h2 className="section-title mb-4 lg:mb-6">
                  Uma Jornada de Excelência
                </h2>
                <div className="space-y-3 lg:space-y-4 text-sm lg:text-base text-muted-foreground">
                  <p>
                    Fundada em 1992, a Catmop nasceu da visão de oferecer ao mercado brasileiro 
                    equipamentos de limpeza profissional com qualidade internacional e preços 
                    competitivos.
                  </p>
                  <p>
                    Ao longo de mais de três décadas, construímos uma sólida reputação baseada 
                    em produtos duráveis, atendimento personalizado e comprometimento com a 
                    satisfação de nossos clientes.
                  </p>
                  <p>
                    Hoje, somos referência no fornecimento de mops, carros funcionais, baldes 
                    e acessórios para hospitais, indústrias, hotéis e empresas em todo o Brasil.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 lg:gap-6">
                <div className="bg-primary text-primary-foreground p-4 lg:p-6 rounded-xl text-center">
                  <span className="text-2xl lg:text-4xl font-heading font-bold">+34</span>
                  <p className="text-xs lg:text-sm text-primary-foreground/80 mt-1">Anos no mercado</p>
                </div>
                <div className="bg-secondary p-4 lg:p-6 rounded-xl text-center">
                  <span className="text-2xl lg:text-4xl font-heading font-bold text-primary">+1000</span>
                  <p className="text-xs lg:text-sm text-muted-foreground mt-1">Clientes ativos</p>
                </div>
                <div className="bg-secondary p-4 lg:p-6 rounded-xl text-center">
                  <span className="text-2xl lg:text-4xl font-heading font-bold text-primary">+50</span>
                  <p className="text-xs lg:text-sm text-muted-foreground mt-1">Produtos</p>
                </div>
                <div className="bg-accent text-accent-foreground p-4 lg:p-6 rounded-xl text-center">
                  <span className="text-2xl lg:text-4xl font-heading font-bold">100%</span>
                  <p className="text-xs lg:text-sm text-accent-foreground/80 mt-1">Nacional</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-12 lg:py-16 bg-secondary">
          <div className="section-container">
            <div className="text-center mb-8 lg:mb-12">
              <span className="badge-category mb-3 lg:mb-4">Nossos Valores</span>
              <h2 className="section-title">O Que Nos Move</h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
              {values.map((value) => (
                <div key={value.title} className="bg-card p-4 lg:p-6 rounded-xl text-center">
                  <div className="w-10 h-10 lg:w-14 lg:h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3 lg:mb-4">
                    <value.icon size={20} className="text-primary lg:w-7 lg:h-7" />
                  </div>
                  <h3 className="font-heading font-bold text-sm lg:text-lg mb-1 lg:mb-2">{value.title}</h3>
                  <p className="text-xs lg:text-sm text-muted-foreground hidden sm:block">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-12 lg:py-16">
          <div className="section-container">
            <div className="text-center mb-8 lg:mb-12">
              <span className="badge-category mb-3 lg:mb-4">Nossa Trajetória</span>
              <h2 className="section-title">Marcos Importantes</h2>
            </div>

            <div className="max-w-3xl mx-auto">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="flex gap-3 lg:gap-4 mb-6 lg:mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xs lg:text-sm">
                      {milestone.year}
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-0.5 h-full bg-border mt-2" />
                    )}
                  </div>
                  <div className="pt-2 lg:pt-3">
                    <p className="font-medium text-sm lg:text-base">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission, Vision */}
        <section className="py-12 lg:py-16 bg-muted/50">
          <div className="section-container">
            <div className="grid md:grid-cols-2 gap-4 lg:gap-8">
              <div className="bg-card p-6 lg:p-8 rounded-xl border border-border">
                <h3 className="font-heading font-bold text-lg lg:text-xl mb-3 lg:mb-4 text-primary">Missão</h3>
                <p className="text-sm lg:text-base text-muted-foreground">
                  Oferecer soluções completas e inovadoras em equipamentos de limpeza 
                  profissional, contribuindo para ambientes mais limpos, seguros e 
                  saudáveis para todos.
                </p>
              </div>
              <div className="bg-card p-6 lg:p-8 rounded-xl border border-border">
                <h3 className="font-heading font-bold text-lg lg:text-xl mb-3 lg:mb-4 text-primary">Visão</h3>
                <p className="text-sm lg:text-base text-muted-foreground">
                  Ser a principal referência nacional em equipamentos de limpeza 
                  profissional, reconhecida pela qualidade, inovação e excelência 
                  no atendimento.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      
      {/* Desktop Footer */}
      <div className="hidden lg:block">
        <Footer />
      </div>

      {/* Mobile Drawer */}
      <MobileDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />

      {/* Mobile Bottom Nav */}
      <BottomNav onMenuClick={() => setIsDrawerOpen(true)} />
    </div>
  );
};

export default CompanyPage;
