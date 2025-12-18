import ProductCard from "../ProductCard";
import productMop from "@/assets/product-mop.jpg";
import productRefil from "@/assets/product-refil.jpg";
import productCabo from "@/assets/product-cabo.jpg";
import productPa from "@/assets/product-pa.jpg";

const products = [
  {
    image: productMop,
    title: "Mops e Esfregões",
    description:
      "Linha completa de mops profissionais para todos os tipos de piso. Ideais para limpeza doméstica e comercial.",
  },
  {
    image: productRefil,
    title: "Refis para Mop",
    description:
      "Refis de alta qualidade em microfibra e algodão. Durabilidade e eficiência na limpeza.",
  },
  {
    image: productCabo,
    title: "Cabos para Mop",
    description:
      "Cabos ergonômicos em alumínio e aço. Resistentes e confortáveis para uso prolongado.",
  },
  {
    image: productPa,
    title: "Pás e Acessórios",
    description:
      "Pás automáticas, baldes e acessórios completos para uma limpeza eficiente e organizada.",
  },
];

const ProductsSection = () => {
  return (
    <section id="produtos" className="py-20 lg:py-32">
      <div className="section-container">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6">
            Nossos Produtos
          </div>
          <h2 className="section-title">
            Soluções Completas em{" "}
            <span className="gradient-text">Equipamentos de Limpeza</span>
          </h2>
          <p className="section-subtitle">
            Conheça nossa linha de produtos desenvolvidos com qualidade e 
            tecnologia para atender às suas necessidades de limpeza.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={product.title}
              image={product.image}
              title={product.title}
              description={product.description}
              delay={index * 100}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contato" className="btn-primary">
            Solicitar Catálogo Completo
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
