import { useState, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Filter, X, Grid, List, Search, SlidersHorizontal } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import MobileFilterSheet from "@/components/MobileFilterSheet";
import BottomNav from "@/components/BottomNav";
import MobileDrawer from "@/components/MobileDrawer";
import { products, categories, searchProducts } from "@/data/products";

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const categorySlug = searchParams.get("categoria");
  const searchQuery = searchParams.get("busca") || "";
  const lineFilter = searchParams.get("linha");

  const [localSearch, setLocalSearch] = useState(searchQuery);

  const filteredProducts = useMemo(() => {
    let result = products;

    if (searchQuery) {
      result = searchProducts(searchQuery);
    }

    if (categorySlug) {
      result = result.filter((p) => p.category === categorySlug);
    }

    if (lineFilter) {
      result = result.filter((p) => p.line === lineFilter);
    }

    return result;
  }, [categorySlug, searchQuery, lineFilter]);

  const currentCategory = categories.find((c) => c.slug === categorySlug);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const newParams = new URLSearchParams(searchParams);
    if (localSearch) {
      newParams.set("busca", localSearch);
    } else {
      newParams.delete("busca");
    }
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams({});
    setLocalSearch("");
  };

  const toggleLine = (line: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (lineFilter === line) {
      newParams.delete("linha");
    } else {
      newParams.set("linha", line);
    }
    setSearchParams(newParams);
  };

  const hasActiveFilters = !!(categorySlug || searchQuery || lineFilter);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 lg:pt-[120px] pb-20 lg:pb-0">
        {/* Breadcrumb */}
        <div className="bg-secondary border-b border-border">
          <div className="section-container py-3 lg:py-4">
            <nav className="flex items-center gap-2 text-sm">
              <Link to="/" className="text-muted-foreground hover:text-primary">
                Home
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-foreground font-medium">
                {currentCategory ? currentCategory.name : "Produtos"}
              </span>
            </nav>
          </div>
        </div>

        <div className="section-container py-4 lg:py-8">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Sidebar Filters - Desktop */}
            <aside className="hidden lg:block w-64 shrink-0">
              <div className="filter-sidebar sticky top-32">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-heading font-bold text-lg">Filtros</h2>
                  {hasActiveFilters && (
                    <button
                      onClick={clearFilters}
                      className="text-sm text-primary hover:underline"
                    >
                      Limpar
                    </button>
                  )}
                </div>

                {/* Search */}
                <form onSubmit={handleSearch} className="mb-6">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Buscar por nome ou SKU..."
                      value={localSearch}
                      onChange={(e) => setLocalSearch(e.target.value)}
                      className="input-search pr-10"
                    />
                    <button
                      type="submit"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary"
                    >
                      <Search size={18} />
                    </button>
                  </div>
                </form>

                {/* Categories */}
                <div className="mb-6">
                  <h3 className="font-semibold text-sm uppercase text-muted-foreground mb-3">
                    Categorias
                  </h3>
                  <ul className="space-y-2">
                    {categories.map((category) => (
                      <li key={category.id}>
                        <Link
                          to={`/produtos?categoria=${category.slug}`}
                          className={`block py-1.5 text-sm transition-colors ${categorySlug === category.slug
                            ? "text-primary font-medium"
                            : "text-foreground hover:text-primary"
                            }`}
                        >
                          {category.name}
                        </Link>
                        {categorySlug === category.slug && (
                          <ul className="ml-4 mt-1 space-y-1">
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Line Filter */}
                <div>
                  <h3 className="font-semibold text-sm uppercase text-muted-foreground mb-3">
                    Linha
                  </h3>
                  <div className="space-y-2">
                    <button
                      onClick={() => toggleLine("profissional")}
                      className={`flex items-center gap-2 w-full py-1.5 text-sm transition-colors ${lineFilter === "profissional"
                        ? "text-primary font-medium"
                        : "text-foreground hover:text-primary"
                        }`}
                    >
                      <span
                        className={`w-4 h-4 rounded border ${lineFilter === "profissional"
                          ? "bg-primary border-primary"
                          : "border-border"
                          }`}
                      />
                      Profissional
                    </button>
                    <button
                      onClick={() => toggleLine("domestica")}
                      className={`flex items-center gap-2 w-full py-1.5 text-sm transition-colors ${lineFilter === "domestica"
                        ? "text-primary font-medium"
                        : "text-foreground hover:text-primary"
                        }`}
                    >
                      <span
                        className={`w-4 h-4 rounded border ${lineFilter === "domestica"
                          ? "bg-primary border-primary"
                          : "border-border"
                          }`}
                      />
                      Doméstica
                    </button>
                  </div>
                </div>
              </div>
            </aside>

            {/* Mobile Filter Button - Fixed at top */}
            <div className="lg:hidden sticky top-16 z-30 -mx-4 px-4 py-3 bg-background border-b border-border">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsFilterOpen(true)}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-secondary rounded-lg text-sm font-medium min-h-[48px] active:bg-muted transition-colors"
                >
                  <SlidersHorizontal size={18} />
                  Filtrar e Ordenar
                  {hasActiveFilters && (
                    <span className="w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center ml-1">
                      !
                    </span>
                  )}
                </button>
                <div className="flex items-center border border-border rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-3 min-w-[44px] min-h-[44px] flex items-center justify-center ${viewMode === "grid" ? "bg-primary text-primary-foreground" : "text-muted-foreground bg-card"
                      }`}
                  >
                    <Grid size={18} />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-3 min-w-[44px] min-h-[44px] flex items-center justify-center ${viewMode === "list" ? "bg-primary text-primary-foreground" : "text-muted-foreground bg-card"
                      }`}
                  >
                    <List size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-4 lg:mb-6">
                <div>
                  <h1 className="text-xl lg:text-2xl font-heading font-bold text-foreground">
                    {currentCategory ? currentCategory.name : "Todos os Produtos"}
                  </h1>
                  <p className="text-sm text-muted-foreground mt-1">
                    {filteredProducts.length} produto{filteredProducts.length !== 1 ? "s" : ""}
                  </p>
                </div>
                <div className="hidden lg:flex items-center gap-2">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded ${viewMode === "grid" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-secondary"}`}
                  >
                    <Grid size={18} />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded ${viewMode === "list" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-secondary"}`}
                  >
                    <List size={18} />
                  </button>
                </div>
              </div>

              {/* Active Filters */}
              {hasActiveFilters && (
                <div className="flex flex-wrap items-center gap-2 mb-4 lg:mb-6">
                  {searchQuery && (
                    <span className="flex items-center gap-1 px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm">
                      "{searchQuery}"
                      <button
                        onClick={() => {
                          const newParams = new URLSearchParams(searchParams);
                          newParams.delete("busca");
                          setSearchParams(newParams);
                          setLocalSearch("");
                        }}
                        className="ml-1 p-0.5 hover:bg-primary/20 rounded-full"
                      >
                        <X size={14} />
                      </button>
                    </span>
                  )}
                  {currentCategory && (
                    <span className="flex items-center gap-1 px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm">
                      {currentCategory.name}
                      <button
                        onClick={() => {
                          const newParams = new URLSearchParams(searchParams);
                          newParams.delete("categoria");
                          setSearchParams(newParams);
                        }}
                        className="ml-1 p-0.5 hover:bg-primary/20 rounded-full"
                      >
                        <X size={14} />
                      </button>
                    </span>
                  )}
                  {lineFilter && (
                    <span className="flex items-center gap-1 px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm">
                      {lineFilter === "profissional" ? "Profissional" : "Doméstica"}
                      <button
                        onClick={() => toggleLine(lineFilter)}
                        className="ml-1 p-0.5 hover:bg-primary/20 rounded-full"
                      >
                        <X size={14} />
                      </button>
                    </span>
                  )}
                </div>
              )}

              {filteredProducts.length > 0 ? (
                <div className={viewMode === "grid"
                  ? "grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6"
                  : "space-y-3 lg:space-y-4"
                }>
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 lg:py-16">
                  <p className="text-muted-foreground mb-4">
                    Nenhum produto encontrado.
                  </p>
                  <button
                    onClick={clearFilters}
                    className="btn-primary min-h-[48px]"
                  >
                    Limpar Filtros
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Desktop Footer */}
      <div className="hidden lg:block">
        <Footer />
      </div>

      {/* Mobile Filter Sheet */}
      <MobileFilterSheet
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        categorySlug={categorySlug}
        lineFilter={lineFilter}
        localSearch={localSearch}
        onSearchChange={setLocalSearch}
        onSearchSubmit={handleSearch}
        onToggleLine={toggleLine}
        onClearFilters={clearFilters}
        hasActiveFilters={hasActiveFilters}
      />

      {/* Mobile Drawer */}
      <MobileDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />

      {/* Mobile Bottom Nav */}
      <BottomNav onMenuClick={() => setIsDrawerOpen(true)} />
    </div>
  );
};

export default ProductsPage;
