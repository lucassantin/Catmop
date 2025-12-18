interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  delay?: number;
}

const ProductCard = ({ image, title, description, delay = 0 }: ProductCardProps) => {
  return (
    <div
      className="card-product opacity-0 animate-slide-up"
      style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
    >
      <div className="aspect-square overflow-hidden bg-secondary">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="font-heading font-bold text-xl mb-2 text-card-foreground">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>
        <a
          href="#contato"
          className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-200"
        >
          Solicitar Orçamento
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform"
          >
            <path
              d="M3.33334 8H12.6667M12.6667 8L8 3.33334M12.6667 8L8 12.6667"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
