import { useState, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Filter, X, Grid, List, ChevronDown, Search } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products, categories, searchProducts } from "@/data/products";

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  
  const categorySlug = searchParams.get("categoria");
  const subSlug = searchParams.get("sub");
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

    if (subSlug) {
      result = result.filter((p) => p.subcategory === subSlug);
    }

    if (lineFilter) {
      result = result.filter((p) => p.line === lineFilter);
    }

    return result;
  }, [categorySlug, subSlug, searchQuery, lineFilter]);

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

  const hasActiveFilters = categorySlug || subSlug || searchQuery || lineFilter;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-[112px] lg:pt-[120px]">
        {/* Breadcrumb */}
        <div className="bg-secondary border-b border-border">
          <div className="section-container py-4">
            <nav className="flex items-center gap-2 text-sm">
              <Link to="/" className="text-muted-foreground hover:text-primary">
                Home
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-foreground font-medium">
                {currentCategory ? currentCategory.name : "Todos os Produtos"}
              </span>
            </nav>
          </div>
        </div>

        <div className="section-container py-8">
          <div className="flex flex-col lg:flex-row gap-8">
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
                          className={`block py-1.5 text-sm transition-colors ${
                            categorySlug === category.slug
                              ? "text-primary font-medium"
                              : "text-foreground hover:text-primary"
                          }`}
                        >
                          {category.name}
                        </Link>
                        {categorySlug === category.slug && (
                          <ul className="ml-4 mt-1 space-y-1">
                            {category.subcategories.map((sub) => (
                              <li key={sub.id}>
                                <Link
                                  to={`/produtos?categoria=${category.slug}&sub=${sub.slug}`}
                                  className={`block py-1 text-sm transition-colors ${
                                    subSlug === sub.slug
                                      ? "text-primary font-medium"
                                      : "text-muted-foreground hover:text-primary"
                                  }`}
                                >
                                  {sub.name}
                                </Link>
                              </li>
                            ))}
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
                      className={`flex items-center gap-2 w-full py-1.5 text-sm transition-colors ${
                        lineFilter === "profissional"
                          ? "text-primary font-medium"
                          : "text-foreground hover:text-primary"
                      }`}
                    >
                      <span
                        className={`w-4 h-4 rounded border ${
                          lineFilter === "profissional"
                            ? "bg-primary border-primary"
                            : "border-border"
                        }`}
                      />
                      Profissional
                    </button>
                    <button
                      onClick={() => toggleLine("domestica")}
                      className={`flex items-center gap-2 w-full py-1.5 text-sm transition-colors ${
                        lineFilter === "domestica"
                          ? "text-primary font-medium"
                          : "text-foreground hover:text-primary"
                      }`}
                    >
                      <span
                        className={`w-4 h-4 rounded border ${
                          lineFilter === "domestica"
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

            {/* Mobile Filter Button */}
            <div className="lg:hidden flex items-center justify-between mb-4">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="flex items-center gap-2 px-4 py-2 border border-border rounded-md text-sm font-medium"
              >
                <Filter size={16} />
                Filtros
                {hasActiveFilters && (
                  <span className="w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                    !
                  </span>
                )}
              </button>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded ${viewMode === "grid" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}
                >
                  <Grid size={18} />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded ${viewMode === "list" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}
                >
                  <List size={18} />
                </button>
              </div>
            </div>

            {/* Mobile Sidebar */}
            {isSidebarOpen && (
              <div className="fixed inset-0 z-50 lg:hidden">
                <div className="absolute inset-0 bg-foreground/50" onClick={() => setIsSidebarOpen(false)} />
                <div className="absolute left-0 top-0 bottom-0 w-80 bg-card p-6 overflow-y-auto animate-slide-up">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="font-heading font-bold text-lg">Filtros</h2>
                    <button onClick={() => setIsSidebarOpen(false)}>
                      <X size={24} />
                    </button>
                  </div>
                  {/* Mobile filter content - same as desktop */}
                  <form onSubmit={(e) => { handleSearch(e); setIsSidebarOpen(false); }} className="mb-6">
                    <input
                      type="text"
                      placeholder="Buscar..."
                      value={localSearch}
                      onChange={(e) => setLocalSearch(e.target.value)}
                      className="input-search"
                    />
                  </form>
                  <div className="space-y-4">
                    {categories.map((category) => (
                      <Link
                        key={category.id}
                        to={`/produtos?categoria=${category.slug}`}
                        onClick={() => setIsSidebarOpen(false)}
                        className="block py-2 text-foreground hover:text-primary"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Products Grid */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h1 className="text-2xl font-heading font-bold text-foreground">
                    {currentCategory ? currentCategory.name : "Todos os Produtos"}
                  </h1>
                  <p className="text-sm text-muted-foreground mt-1">
                    {filteredProducts.length} produto{filteredProducts.length !== 1 ? "s" : ""} encontrado{filteredProducts.length !== 1 ? "s" : ""}
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
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  {searchQuery && (
                    <span className="flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      Busca: "{searchQuery}"
                      <button onClick={() => { 
                        const newParams = new URLSearchParams(searchParams);
                        newParams.delete("busca");
                        setSearchParams(newParams);
                        setLocalSearch("");
                      }}>
                        <X size={14} />
                      </button>
                    </span>
                  )}
                  {currentCategory && (
                    <span className="flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {currentCategory.name}
                      <button onClick={() => {
                        const newParams = new URLSearchParams(searchParams);
                        newParams.delete("categoria");
                        newParams.delete("sub");
                        setSearchParams(newParams);
                      }}>
                        <X size={14} />
                      </button>
                    </span>
                  )}
                  {lineFilter && (
                    <span className="flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {lineFilter === "profissional" ? "Profissional" : "Doméstica"}
                      <button onClick={() => toggleLine(lineFilter)}>
                        <X size={14} />
                      </button>
                    </span>
                  )}
                </div>
              )}

              {filteredProducts.length > 0 ? (
                <div className={viewMode === "grid" 
                  ? "grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6" 
                  : "space-y-4"
                }>
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-muted-foreground mb-4">
                    Nenhum produto encontrado com os filtros selecionados.
                  </p>
                  <button
                    onClick={clearFilters}
                    className="btn-primary"
                  >
                    Limpar Filtros
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;
