import { Link } from "react-router-dom";
import { ArrowRight, Droplets, Container, Truck, Wrench, Maximize } from "lucide-react";
import { categories } from "@/data/products";

const iconMap: Record<string, React.ElementType> = {
  Droplets,
  Container,
  Truck,
  Wrench,
  Maximize,
};

const CategoryCards = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title mb-3">Navegue por Categoria</h2>
          <p className="section-subtitle">
            Encontre rapidamente os equipamentos ideais para sua operação
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category) => {
            const Icon = iconMap[category.icon] || Droplets;
            return (
              <Link
                key={category.id}
                to={`/produtos?categoria=${category.slug}`}
                className="group bg-card rounded-lg p-6 text-center hover:shadow-card-hover transition-all hover:-translate-y-1"
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon size={28} className="text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-1 text-sm lg:text-base">
                  {category.name}
                </h3>
                <p className="text-xs text-muted-foreground hidden lg:block">
                  {category.subcategories.length} subcategorias
                </p>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/produtos"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            Ver Catálogo Completo
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoryCards;
