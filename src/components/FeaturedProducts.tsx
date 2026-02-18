import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import primeiro from "@/assets/anuncios/anuncio rh 2016 ok.jpg";
import segundo from "@/assets/anuncios/anuncio rh 2019_page-0001.jpg";

const banners = [
  {
    id: 1,
    image: primeiro,
    alt: "Catmop Equipamentos Essenciais",
    link: "/produtos/limpeza"
  },
  {
    id: 2,
    image: segundo,
    alt: "Ciclo da Desinfecção",
    link: "/produtos/hospitalar"
  }
];

interface FeaturedBannersProps {
  title?: string;
}

const FeaturedBanners = ({ title = "Destaques" }: FeaturedBannersProps) => {
  if (banners.length === 0) return null;

  return (
    <section className="py-12 bg-white">
      <div className="section-container">
        {/* Cabeçalho minimalista com link de 'Ver Todos' */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="section-title text-2xl font-bold text-gray-800">{title}</h2>
          <Link
            to="/produtos"
            className="flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            Ver Produtos
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Grid ajustado para 2 colunas para destacar mais os banners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {banners.map((banner) => (
            <Link 
              key={banner.id} 
              to={banner.link}
              className="group block overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden w-full h-full">
                <img 
                  src={banner.image} 
                  alt={banner.alt}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                
                {/* Overlay sutil apenas para indicar clique (sem texto) */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBanners;