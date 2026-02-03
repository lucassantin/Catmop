import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { ShoppingCart, Check, ChevronRight, ArrowLeft, ZoomIn } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import BottomNav from "@/components/BottomNav";
import MobileDrawer from "@/components/MobileDrawer";
import { getProductById, products } from "@/data/products";
import { useQuote } from "@/contexts/QuoteContext";

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || "");
  const { addItem, isInQuote } = useQuote();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"description" | "specs" | "usage">("description");
  const [isZoomed, setIsZoomed] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-16 lg:pt-[120px] pb-20 lg:pb-0">
          <div className="section-container py-16 text-center">
            <h1 className="text-xl lg:text-2xl font-heading font-bold mb-4">Produto não encontrado</h1>
            <Link to="/produtos" className="btn-primary">
              Ver Todos os Produtos
            </Link>
          </div>
        </main>
        <BottomNav onMenuClick={() => setIsDrawerOpen(true)} />
        <MobileDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
      </div>
    );
  }

  const inQuote = isInQuote(product.id);
  const relatedProducts = product.relatedProducts
    .map((relId) => products.find((p) => p.id === relId))
    .filter(Boolean);

  const handleAddToQuote = () => {
    addItem(product, quantity);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 lg:pt-[120px] pb-36 lg:pb-0">
        {/* Breadcrumb */}
        <div className="bg-secondary border-b border-border">
          <div className="section-container py-3 lg:py-4">
            <nav className="flex items-center gap-2 text-xs lg:text-sm overflow-x-auto">
              <Link to="/" className="text-muted-foreground hover:text-primary whitespace-nowrap">
                Home
              </Link>
              <ChevronRight size={12} className="text-muted-foreground shrink-0" />
              <Link to="/produtos" className="text-muted-foreground hover:text-primary whitespace-nowrap">
                Produtos
              </Link>
              <ChevronRight size={12} className="text-muted-foreground shrink-0" />
              <span className="text-foreground font-medium line-clamp-1">
                {product.name}
              </span>
            </nav>
          </div>
        </div>

        <div className="section-container py-4 lg:py-8">
          {/* Back Button */}
          <Link
            to="/produtos"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-4 lg:mb-6 min-h-[44px]"
          >
            <ArrowLeft size={16} />
            Voltar para produtos
          </Link>

          {/* Product Main */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 mb-10 lg:mb-16">
            {/* Image */}
            <div className="relative">
              <div 
                className="aspect-square bg-secondary rounded-xl overflow-hidden cursor-zoom-in"
                onClick={() => setIsZoomed(true)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-4 lg:p-8"
                />
                <button className="absolute bottom-3 right-3 lg:bottom-4 lg:right-4 p-2 bg-card rounded-lg shadow-sm min-w-[44px] min-h-[44px] flex items-center justify-center">
                  <ZoomIn size={20} className="text-muted-foreground" />
                </button>
              </div>
            </div>

            {/* Info */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="badge-sku text-xs lg:text-sm">{product.sku}</span>
                {product.new && (
                  <span className="px-2 py-0.5 bg-accent/10 text-accent text-xs font-medium rounded">
                    Novo
                  </span>
                )}
                <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded capitalize">
                  {product.line}
                </span>
              </div>

              <h1 className="text-xl lg:text-3xl font-heading font-bold text-foreground mb-3 lg:mb-4">
                {product.name}
              </h1>

              <p className="text-sm lg:text-base text-muted-foreground mb-4 lg:mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Specs Preview */}
              <div className="grid grid-cols-2 gap-3 lg:gap-4 p-3 lg:p-4 bg-secondary rounded-lg mb-4 lg:mb-6">
                <div>
                  <span className="text-[10px] lg:text-xs text-muted-foreground uppercase">Material</span>
                  <p className="text-xs lg:text-sm font-medium">{product.specs.material}</p>
                </div>
                <div>
                  <span className="text-[10px] lg:text-xs text-muted-foreground uppercase">Dimensões</span>
                  <p className="text-xs lg:text-sm font-medium">{product.specs.dimensions}</p>
                </div>
                <div>
                  <span className="text-[10px] lg:text-xs text-muted-foreground uppercase">Peso</span>
                  <p className="text-xs lg:text-sm font-medium">{product.specs.weight}</p>
                </div>
                <div>
                  <span className="text-[10px] lg:text-xs text-muted-foreground uppercase">Cores</span>
                  <p className="text-xs lg:text-sm font-medium">{product.specs.colors.join(", ")}</p>
                </div>
              </div>

              {/* Quantity & Add to Quote - Desktop */}
              <div className="hidden lg:flex items-center gap-4 mb-6">
                <div className="flex items-center border border-border rounded-md">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 text-lg font-medium hover:bg-secondary min-w-[44px] min-h-[44px]"
                  >
                    −
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-16 text-center border-x border-border py-2 focus:outline-none"
                    min="1"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 text-lg font-medium hover:bg-secondary min-w-[44px] min-h-[44px]"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleAddToQuote}
                  disabled={inQuote}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-md font-semibold transition-colors ${
                    inQuote
                      ? "bg-accent/10 text-accent cursor-default"
                      : "bg-primary text-primary-foreground hover:bg-primary-dark"
                  }`}
                >
                  {inQuote ? (
                    <>
                      <Check size={20} />
                      Adicionado ao Orçamento
                    </>
                  ) : (
                    <>
                      <ShoppingCart size={20} />
                      Adicionar ao Orçamento
                    </>
                  )}
                </button>
              </div>

              {/* Applications */}
              <div>
                <span className="text-[10px] lg:text-xs text-muted-foreground uppercase">Aplicações</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {product.applications.map((app) => (
                    <span
                      key={app}
                      className="px-2 lg:px-3 py-1 bg-secondary text-xs lg:text-sm rounded-full capitalize"
                    >
                      {app.replace("-", " ")}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-border mb-6 lg:mb-8 overflow-x-auto">
            <div className="flex gap-4 lg:gap-8 min-w-max">
              {[
                { id: "description", label: "Descrição" },
                { id: "specs", label: "Ficha Técnica" },
                { id: "usage", label: "Modo de Uso" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`pb-3 lg:pb-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap min-h-[44px] ${
                    activeTab === tab.id
                      ? "border-primary text-primary"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-10 lg:mb-16">
            {activeTab === "description" && (
              <div className="prose max-w-none">
                <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
                <p className="text-sm lg:text-base text-muted-foreground leading-relaxed mt-4">
                  Este produto faz parte da linha {product.line} da Catmop, desenvolvido para 
                  atender às mais rigorosas exigências de higiene e eficiência em ambientes 
                  profissionais.
                </p>
              </div>
            )}

            {activeTab === "specs" && (
              <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
                <div className="space-y-3 lg:space-y-4">
                  <div className="flex justify-between py-3 border-b border-border">
                    <span className="text-sm text-muted-foreground">Material</span>
                    <span className="text-sm font-medium">{product.specs.material}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-border">
                    <span className="text-sm text-muted-foreground">Dimensões</span>
                    <span className="text-sm font-medium">{product.specs.dimensions}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-border">
                    <span className="text-sm text-muted-foreground">Peso</span>
                    <span className="text-sm font-medium">{product.specs.weight}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-border">
                    <span className="text-sm text-muted-foreground">Cores</span>
                    <span className="text-sm font-medium">{product.specs.colors.join(", ")}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-border">
                    <span className="text-sm text-muted-foreground">SKU</span>
                    <span className="text-sm font-mono font-medium">{product.sku}</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "usage" && (
              <div className="prose max-w-none">
                <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                  Para melhor aproveitamento do produto, siga as recomendações:
                </p>
                <ul className="list-disc list-inside text-sm lg:text-base text-muted-foreground space-y-2 mt-4">
                  <li>Verifique se todos os componentes estão corretamente montados.</li>
                  <li>Para limpeza, utilize movimentos em "S" para maior eficiência.</li>
                  <li>Após o uso, lave bem o refil com água corrente.</li>
                  <li>Armazene em local seco e arejado.</li>
                </ul>
              </div>
            )}
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div>
              <h2 className="section-title mb-4 lg:mb-8">Produtos Relacionados</h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
                {relatedProducts.map((relProduct) => (
                  relProduct && <ProductCard key={relProduct.id} product={relProduct} />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Floating Add to Quote - Mobile */}
        <div className="fixed bottom-[72px] left-0 right-0 bg-card border-t border-border p-3 lg:hidden z-40 safe-area-bottom">
          <div className="flex items-center gap-3">
            <div className="flex items-center border border-border rounded-md">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-2 text-lg font-medium hover:bg-secondary min-w-[44px] min-h-[44px]"
              >
                −
              </button>
              <span className="px-3 font-medium">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-2 text-lg font-medium hover:bg-secondary min-w-[44px] min-h-[44px]"
              >
                +
              </button>
            </div>
            <button
              onClick={handleAddToQuote}
              disabled={inQuote}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-md font-semibold min-h-[48px] ${
                inQuote
                  ? "bg-accent/10 text-accent"
                  : "bg-primary text-primary-foreground active:scale-[0.98]"
              }`}
            >
              {inQuote ? (
                <>
                  <Check size={18} />
                  No Orçamento
                </>
              ) : (
                <>
                  <ShoppingCart size={18} />
                  Adicionar
                </>
              )}
            </button>
          </div>
        </div>

        {/* Image Zoom Modal */}
        {isZoomed && (
          <div
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4 lg:p-8 cursor-zoom-out"
            onClick={() => setIsZoomed(false)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        )}
      </main>
      
      {/* Desktop Footer */}
      <div className="hidden lg:block">
        <Footer />
      </div>

      {/* Mobile Drawer */}
      <MobileDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />

      {/* Mobile Bottom Nav */}
      <BottomNav onMenuClick={() => setIsDrawerOpen(true)} />
    </div>
  );
};

export default ProductDetailPage;
