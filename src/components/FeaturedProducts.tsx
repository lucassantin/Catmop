import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { getFeaturedProducts, getNewProducts } from "@/data/products";
import { ArrowRight } from "lucide-react";

interface FeaturedProductsProps {
  title?: string;
  showNew?: boolean;
}

const FeaturedProducts = ({ title = "Produtos em Destaque", showNew = false }: FeaturedProductsProps) => {
  const products = showNew ? getNewProducts() : getFeaturedProducts();

  if (products.length === 0) return null;

  return (
    <section className="py-16">
      <div className="section-container">
        <div className="flex items-center justify-between mb-8">
          <h2 className="section-title">{title}</h2>
          <Link
            to="/produtos"
            className="hidden sm:flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            Ver Todos
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="sm:hidden text-center mt-8">
          <Link
            to="/produtos"
            className="inline-flex items-center gap-2 text-primary font-medium"
          >
            Ver Todos os Produtos
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
