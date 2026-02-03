import { Link } from "react-router-dom";
import { ShoppingCart, Check } from "lucide-react";
import { useQuote } from "@/contexts/QuoteContext";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem, isInQuote } = useQuote();
  const inQuote = isInQuote(product.id);

  return (
    <div className="product-card group">
      <Link to={`/produto/${product.id}`} className="block">
        <div className="aspect-square overflow-hidden bg-secondary p-2 lg:p-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>
      
      <div className="p-3 lg:p-4">
        <div className="flex items-center gap-1.5 lg:gap-2 mb-1.5 lg:mb-2">
          <span className="badge-sku text-[10px] lg:text-xs">{product.sku}</span>
          {product.new && (
            <span className="inline-flex items-center px-1.5 lg:px-2 py-0.5 rounded text-[10px] lg:text-xs font-medium bg-accent/10 text-accent">
              Novo
            </span>
          )}
        </div>
        
        <Link to={`/produto/${product.id}`}>
          <h3 className="font-heading font-semibold text-foreground mb-1 line-clamp-2 hover:text-primary transition-colors text-sm lg:text-base leading-tight">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-xs lg:text-sm text-muted-foreground mb-3 lg:mb-4 line-clamp-2 hidden sm:block">
          {product.shortDescription}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-2">
          <Link
            to={`/produto/${product.id}`}
            className="flex-1 text-center px-3 py-2.5 lg:py-2 text-xs lg:text-sm font-medium border border-border rounded-md hover:border-primary hover:text-primary transition-colors min-h-[44px] flex items-center justify-center"
          >
            Ver Detalhes
          </Link>
          <button
            onClick={() => addItem(product)}
            disabled={inQuote}
            className={`flex items-center justify-center gap-1.5 px-3 py-2.5 lg:py-2 rounded-md text-xs lg:text-sm font-medium transition-colors min-h-[44px] ${
              inQuote
                ? "bg-accent/10 text-accent cursor-default"
                : "bg-primary text-primary-foreground hover:bg-primary-dark active:scale-[0.98]"
            }`}
          >
            {inQuote ? (
              <>
                <Check size={16} />
                <span className="sm:inline">Ok</span>
              </>
            ) : (
              <>
                <ShoppingCart size={16} />
                <span className="hidden sm:inline">Adicionar</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
