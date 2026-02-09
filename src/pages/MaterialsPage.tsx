import { useState } from "react";
import { Link } from "react-router-dom";
import { Download, FileText, Image, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import MobileDrawer from "@/components/MobileDrawer";

const materials = [
  {
    id: 1,
    type: "pdf",
    title: "Catálogo Completo 2024",
    description: "Catálogo com toda a linha de produtos Catmop, especificações técnicas e códigos.",
    size: "12.5 MB",
    icon: FileText,
  },
  {
    id: 2,
    type: "pdf",
    title: "Linha Hospitalar",
    description: "Catálogo especializado com produtos para ambientes hospitalares e clínicos.",
    size: "4.2 MB",
    icon: FileText,
  },
  {
    id: 3,
    type: "pdf",
    title: "Fichas Técnicas - Mops",
    description: "Especificações detalhadas de toda a linha de mops profissionais.",
    size: "2.8 MB",
    icon: FileText,
  },
  {
    id: 4,
    type: "pdf",
    title: "Fichas Técnicas - Carros Funcionais",
    description: "Especificações detalhadas dos carros funcionais e acessórios.",
    size: "3.1 MB",
    icon: FileText,
  },
  {
    id: 5,
    type: "pdf",
    title: "Manual de Boas Práticas",
    description: "Guia completo de boas práticas para limpeza profissional.",
    size: "1.5 MB",
    icon: FileText,
  },
  {
    id: 6,
    type: "images",
    title: "Banco de Imagens",
    description: "Imagens em alta resolução dos produtos para uso comercial.",
    size: "ZIP - 45 MB",
    icon: Image,
  },
];

const MaterialsPage = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDownload = (materialId: number) => {
    alert(`Download iniciado para o material #${materialId}. Em uma implementação real, o arquivo seria baixado.`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 lg:pt-[120px] pb-20 lg:pb-0">
        {/* Header */}
        {/*<div className="bg-primary">
          <div className="section-container py-10 lg:py-16">
            <h1 className="text-2xl lg:text-4xl font-heading font-bold text-primary-foreground mb-2 lg:mb-4">
              Materiais de Apoio
            </h1>
            <p className="text-sm lg:text-lg text-primary-foreground/80 max-w-2xl">
              Baixe catálogos, fichas técnicas e materiais promocionais para 
              conhecer melhor nossos produtos.
            </p>
          </div>
        </div>*/}

        {/* Materials Grid */}
        <section className="py-8 lg:py-16">
          <div className="section-container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {materials.map((material) => (
                <div
                  key={material.id}
                  className="bg-card border border-border rounded-xl p-4 lg:p-6 hover:shadow-card-hover transition-shadow"
                >
                  <div className="flex items-start gap-3 lg:gap-4 mb-3 lg:mb-4">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <material.icon size={20} className="text-primary lg:w-6 lg:h-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-heading font-semibold text-foreground mb-1 text-sm lg:text-base line-clamp-2">
                        {material.title}
                      </h3>
                      <span className="text-[10px] lg:text-xs text-muted-foreground uppercase">
                        {material.type.toUpperCase()} • {material.size}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs lg:text-sm text-muted-foreground mb-4 line-clamp-2">
                    {material.description}
                  </p>
                  <button
                    onClick={() => handleDownload(material.id)}
                    className="w-full flex items-center justify-center gap-2 py-3 lg:py-2 border border-border rounded-md text-sm font-medium hover:bg-secondary transition-colors min-h-[44px]"
                  >
                    <Download size={16} />
                    Baixar
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Request Custom Material */}
        <section className="py-10 lg:py-16 bg-secondary">
          <div className="section-container text-center">
            <h2 className="section-title mb-3 lg:mb-4">Precisa de Material Personalizado?</h2>
            <p className="text-sm lg:text-base text-muted-foreground mb-6 lg:mb-8 max-w-xl mx-auto">
              Entre em contato para solicitar materiais específicos ou 
              informações adicionais sobre nossos produtos.
            </p>
            <Link to="/contato" className="btn-primary inline-flex items-center gap-2">
              Fale Conosco
              <ExternalLink size={18} />
            </Link>
          </div>
        </section>
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

export default MaterialsPage;
