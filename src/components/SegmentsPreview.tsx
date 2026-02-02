import { Link } from "react-router-dom";
import { ArrowRight, Hospital, Factory, Building, BedDouble } from "lucide-react";
import { segments } from "@/data/products";
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

const SegmentsPreview = () => {
  return (
    <section className="py-16 bg-muted/50">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="badge-category mb-4">Soluções por Segmento</span>
          <h2 className="section-title mb-3">Atendemos Diversos Setores</h2>
          <p className="section-subtitle">
            Soluções personalizadas para cada tipo de ambiente e necessidade
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {segments.map((segment) => {
            const Icon = iconMap[segment.icon] || Hospital;
            const image = imageMap[segment.slug] || heroCorporativo;
            
            return (
              <Link
                key={segment.id}
                to={`/segmentos?seg=${segment.slug}`}
                className="group relative overflow-hidden rounded-xl aspect-[4/3]"
              >
                <img
                  src={image}
                  alt={segment.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                      <Icon size={20} className="text-primary-foreground" />
                    </div>
                    <h3 className="font-heading font-bold text-background text-lg">
                      {segment.name}
                    </h3>
                  </div>
                  <p className="text-background/70 text-sm line-clamp-2 mb-3">
                    {segment.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm text-primary font-medium group-hover:gap-2 transition-all">
                    Ver Soluções
                    <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SegmentsPreview;
