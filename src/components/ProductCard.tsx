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
        <div className="aspect-square overflow-hidden bg-secondary p-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>
      
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="badge-sku">{product.sku}</span>
          {product.new && (
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-accent/10 text-accent">
              Novo
            </span>
          )}
        </div>
        
        <Link to={`/produto/${product.id}`}>
          <h3 className="font-heading font-semibold text-foreground mb-1 line-clamp-2 hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {product.shortDescription}
        </p>
        
        <div className="flex gap-2">
          <Link
            to={`/produto/${product.id}`}
            className="flex-1 text-center px-3 py-2 text-sm font-medium border border-border rounded-md hover:border-primary hover:text-primary transition-colors"
          >
            Ver Detalhes
          </Link>
          <button
            onClick={() => addItem(product)}
            disabled={inQuote}
            className={`flex items-center justify-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              inQuote
                ? "bg-accent/10 text-accent cursor-default"
                : "bg-primary text-primary-foreground hover:bg-primary-dark"
            }`}
          >
            {inQuote ? (
              <>
                <Check size={16} />
                <span className="hidden sm:inline">Adicionado</span>
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
