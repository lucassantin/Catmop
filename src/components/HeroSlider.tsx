import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight, Download } from "lucide-react";
import heroHospitalar from "@/assets/banners/hero-hospitalar.jpg";
import heroIndustrial from "@/assets/banners/hero-industrial.jpg";
import heroCorporativo from "@/assets/banners/hero-corporativo.jpg";

const slides = [
  {
    id: 1,
    image: heroHospitalar,
    title: "Soluções Completas para Ambientes Hospitalares",
    subtitle: "Equipamentos certificados para máxima higienização e controle de infecções",
    cta: { label: "Ver Linha Hospitalar", href: "/segmentos?seg=hospitalar" },
  },
  {
    id: 2,
    image: heroIndustrial,
    title: "Limpeza Profissional para Grandes Áreas",
    subtitle: "Mops, carros funcionais e acessórios de alta performance para indústrias",
    cta: { label: "Conheça Nossos Produtos", href: "/produtos" },
  },
  {
    id: 3,
    image: heroCorporativo,
    title: "Eficiência e Discrição para Ambientes Corporativos",
    subtitle: "Soluções silenciosas e elegantes para escritórios e prédios comerciais",
    cta: { label: "Solicitar Orçamento", href: "/orcamento" },
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative h-[600px] lg:h-[700px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="absolute inset-0 bg-foreground/60" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center">
            <div className="section-container">
              <div className="max-w-2xl animate-slide-up">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-background mb-4 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-lg sm:text-xl text-background/80 mb-8">
                  {slide.subtitle}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to={slide.cta.href}
                    className="btn-accent flex items-center gap-2"
                  >
                    {slide.cta.label}
                    <ArrowRight size={18} />
                  </Link>
                  <Link
                    to="/materiais"
                    className="flex items-center gap-2 px-6 py-3 border-2 border-background/30 text-background font-semibold rounded-md hover:bg-background/10 transition-colors"
                  >
                    <Download size={18} />
                    Baixar Catálogo PDF
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/20 backdrop-blur-sm rounded-full flex items-center justify-center text-background hover:bg-background/30 transition-colors"
        aria-label="Slide anterior"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/20 backdrop-blur-sm rounded-full flex items-center justify-center text-background hover:bg-background/30 transition-colors"
        aria-label="Próximo slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-background w-8"
                : "bg-background/40 hover:bg-background/60"
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
