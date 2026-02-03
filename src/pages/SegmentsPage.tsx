import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Hospital, Factory, Building, BedDouble, ArrowRight, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import BottomNav from "@/components/BottomNav";
import MobileDrawer from "@/components/MobileDrawer";
import { segments, getProductById } from "@/data/products";
import heroHospitalar from "@/assets/banners/hero-hospitalar.jpg";
import heroIndustrial from "@/assets/banners/hero-industrial.jpg";
import heroCorporativo from "@/assets/banners/hero-corporativo.jpg";

const iconMap: Record<string, React.ElementType> = {
  Hospital,
  Factory,
  Building,
  BedDouble,
};

const imageMap: Record<string, string> = {
  hospitalar: heroHospitalar,
  industrial: heroIndustrial,
  corporativo: heroCorporativo,
  hotelaria: heroCorporativo,
};

const benefits: Record<string, string[]> = {
  hospitalar: [
    "Controle de infecções hospitalares",
    "Materiais de fácil higienização",
    "Codificação por cores para diferentes áreas",
    "Certificações de qualidade",
  ],
  industrial: [
    "Alta resistência a produtos químicos",
    "Equipamentos para grandes áreas",
    "Durabilidade para uso intensivo",
    "Soluções para pisos industriais",
  ],
  corporativo: [
    "Design discreto e elegante",
    "Operação silenciosa",
    "Fácil manuseio e armazenamento",
    "Custo-benefício otimizado",
  ],
  hotelaria: [
    "Carros funcionais compactos",
    "Acabamento premium",
    "Operação silenciosa",
    "Soluções para quartos e áreas comuns",
  ],
};

const SegmentsPage = () => {
  const [searchParams] = useSearchParams();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const selectedSlug = searchParams.get("seg");
  
  const selectedSegment = selectedSlug 
    ? segments.find((s) => s.slug === selectedSlug) 
    : null;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 lg:pt-[120px] pb-20 lg:pb-0">
        {/* Hero */}
        <div className="relative h-[200px] lg:h-[400px]">
          <div className="absolute inset-0 bg-primary" />
          <div className="absolute inset-0 flex items-center">
            <div className="section-container text-center">
              <h1 className="text-2xl lg:text-5xl font-heading font-bold text-primary-foreground mb-2 lg:mb-4">
                Soluções por Segmento
              </h1>
              <p className="text-sm lg:text-lg text-primary-foreground/80 max-w-2xl mx-auto">
                Desenvolvemos soluções personalizadas para cada tipo de ambiente.
              </p>
            </div>
          </div>
        </div>

        {/* Segments Grid or Detail */}
        {selectedSegment ? (
          <div>
            {/* Segment Detail */}
            <section className="relative py-12 lg:py-20">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-10"
                style={{ backgroundImage: `url(${imageMap[selectedSegment.slug]})` }}
              />
              <div className="section-container relative">
                <Link
                  to="/segmentos"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6 lg:mb-8 min-h-[44px]"
                >
                  ← Voltar para segmentos
                </Link>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  <div>
                    <div className="flex items-center gap-3 lg:gap-4 mb-4 lg:mb-6">
                      {(() => {
                        const Icon = iconMap[selectedSegment.icon] || Hospital;
                        return (
                          <div className="w-12 h-12 lg:w-16 lg:h-16 bg-primary rounded-xl flex items-center justify-center">
                            <Icon size={24} className="text-primary-foreground lg:w-8 lg:h-8" />
                          </div>
                        );
                      })()}
                      <h2 className="text-2xl lg:text-4xl font-heading font-bold">
                        {selectedSegment.name}
                      </h2>
                    </div>
                    <p className="text-base lg:text-lg text-muted-foreground mb-6 lg:mb-8">
                      {selectedSegment.description}
                    </p>

                    <h3 className="font-heading font-semibold text-base lg:text-lg mb-3 lg:mb-4">
                      Benefícios para {selectedSegment.name}
                    </h3>
                    <ul className="space-y-2 lg:space-y-3 mb-6 lg:mb-8">
                      {benefits[selectedSegment.slug]?.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-3">
                          <Check size={18} className="text-accent shrink-0 mt-0.5" />
                          <span className="text-sm lg:text-base">{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    <Link to="/orcamento" className="btn-accent inline-flex items-center gap-2">
                      Solicitar Orçamento
                      <ArrowRight size={18} />
                    </Link>
                  </div>

                  <div className="rounded-xl overflow-hidden shadow-lg order-first lg:order-last">
                    <img
                      src={imageMap[selectedSegment.slug]}
                      alt={selectedSegment.name}
                      className="w-full h-[200px] lg:h-[400px] object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Recommended Products */}
            <section className="py-12 lg:py-16 bg-secondary">
              <div className="section-container">
                <h3 className="section-title mb-6 lg:mb-8">
                  Produtos Recomendados
                </h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
                  {selectedSegment.recommendedProducts.map((productId) => {
                    const product = getProductById(productId);
                    return product ? (
                      <ProductCard key={product.id} product={product} />
                    ) : null;
                  })}
                </div>
              </div>
            </section>
          </div>
        ) : (
          <section className="py-8 lg:py-16">
            <div className="section-container">
              <div className="grid md:grid-cols-2 gap-4 lg:gap-8">
                {segments.map((segment) => {
                  const Icon = iconMap[segment.icon] || Hospital;
                  const image = imageMap[segment.slug] || heroCorporativo;

                  return (
                    <Link
                      key={segment.id}
                      to={`/segmentos?seg=${segment.slug}`}
                      className="group relative overflow-hidden rounded-xl aspect-[16/10] lg:aspect-[2/1]"
                    >
                      <img
                        src={image}
                        alt={segment.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent" />
                      <div className="absolute inset-0 flex flex-col justify-end p-4 lg:p-8">
                        <div className="flex items-center gap-3 lg:gap-4 mb-2 lg:mb-3">
                          <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary rounded-lg flex items-center justify-center">
                            <Icon size={20} className="text-primary-foreground lg:w-6 lg:h-6" />
                          </div>
                          <h3 className="font-heading font-bold text-background text-lg lg:text-2xl">
                            {segment.name}
                          </h3>
                        </div>
                        <p className="text-sm lg:text-base text-background/80 mb-3 lg:mb-4 max-w-lg line-clamp-2">
                          {segment.description}
                        </p>
                        <span className="inline-flex items-center gap-2 text-primary text-sm lg:text-base font-medium group-hover:gap-3 transition-all">
                          Ver Soluções
                          <ArrowRight size={16} />
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}
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

export default SegmentsPage;
