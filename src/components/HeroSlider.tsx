import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import heroHospitalar from "@/assets/banners/hero-hosp.png";
import heroIndustrial from "@/assets/banners/hero-ind-mop.png";
import heroCorporativo from "@/assets/banners/hero-corporativo.jpg";

const slides = [
  {
    id: 1,
    image: heroHospitalar,
    title: "Soluções Completas para Pisos Hospitalares",
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

  // Reinicia o autoplay quando o slide muda manualmente
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentSlide]);

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
    <section className="relative h-[650px] lg:h-[750px] w-full overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        {slides.map((slide, index) => (
          index === currentSlide && (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0"
            >
              {/* Imagem de Fundo */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              
              {/* Overlay Gradiente: Escuro na esquerda, transparente na direita */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />

              {/* Conteúdo */}
              <div className="absolute inset-0 flex items-center">
                <div className="section-container px-4 md:px-8 w-full">
                  <motion.div 
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { 
                        opacity: 1, 
                        x: 0,
                        transition: { staggerChildren: 0.2, delayChildren: 0.3 }
                      }
                    }}
                    className="max-w-3xl"
                  >
                    {/* Título */}
                    <motion.h1 
                      variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                      className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight tracking-tight"
                    >
                      {slide.title}
                    </motion.h1>

                    {/* Subtítulo */}
                    <motion.p 
                      variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                      className="text-lg md:text-xl text-gray-200 mb-10 max-w-xl font-light"
                    >
                      {slide.subtitle}
                    </motion.p>

                    {/* Botões - AQUI ESTÁ O REDESIGN */}
                    <motion.div 
                      variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                      className="flex flex-col sm:flex-row gap-4"
                    >
                      {/* Botão Primário: Sólido e Vibrante */}
                      <Link
                        to={slide.cta.href}
                        className="group flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full shadow-lg shadow-primary/25 hover:bg-primary/90 hover:scale-105 transition-all duration-300"
                      >
                        {slide.cta.label}
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                      </Link>

                      {/* Botão Secundário: Glassmorphism (Vidro) */}
                      {/*<Link
                        to="/materiais"
                        className="group flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium rounded-full hover:bg-white/20 hover:border-white/40 transition-all duration-300"
                      >
                        <Download size={20} className="group-hover:translate-y-1 transition-transform" />
                        Baixar Catálogo
                      </Link>*/}
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Setas de Navegação - Estilo Minimalista */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 border border-white/20 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 group"
        aria-label="Slide anterior"
      >
        <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 border border-white/20 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 group"
        aria-label="Próximo slide"
      >
        <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* Indicadores (Dots) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              index === currentSlide
                ? "bg-white w-8 opacity-100"
                : "bg-white/40 w-2 hover:bg-white/60"
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;