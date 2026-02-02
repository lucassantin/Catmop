import { Link } from "react-router-dom";
import { Download, FileText, Image, Video, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
  const handleDownload = (materialId: number) => {
    // In a real implementation, this would trigger a download
    alert(`Download iniciado para o material #${materialId}. Em uma implementação real, o arquivo seria baixado.`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-[112px] lg:pt-[120px]">
        {/* Header */}
        <div className="bg-primary">
          <div className="section-container py-16">
            <h1 className="text-3xl lg:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Materiais de Apoio
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl">
              Baixe catálogos, fichas técnicas e materiais promocionais para 
              conhecer melhor nossos produtos e apoiar suas vendas.
            </p>
          </div>
        </div>

        {/* Materials Grid */}
        <section className="py-16">
          <div className="section-container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {materials.map((material) => (
                <div
                  key={material.id}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-card-hover transition-shadow"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <material.icon size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-1">
                        {material.title}
                      </h3>
                      <span className="text-xs text-muted-foreground uppercase">
                        {material.type.toUpperCase()} • {material.size}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {material.description}
                  </p>
                  <button
                    onClick={() => handleDownload(material.id)}
                    className="w-full flex items-center justify-center gap-2 py-2 border border-border rounded-md text-sm font-medium hover:bg-secondary transition-colors"
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
        <section className="py-16 bg-secondary">
          <div className="section-container text-center">
            <h2 className="section-title mb-4">Precisa de Material Personalizado?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Entre em contato conosco para solicitar materiais específicos, 
              apresentações personalizadas ou informações adicionais sobre nossos produtos.
            </p>
            <Link to="/contato" className="btn-primary inline-flex items-center gap-2">
              Fale Conosco
              <ExternalLink size={18} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MaterialsPage;
