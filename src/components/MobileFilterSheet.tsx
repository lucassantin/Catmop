import { Link } from "react-router-dom";
import { X, Search } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { categories } from "@/data/products";

interface MobileFilterSheetProps {
  isOpen: boolean;
  onClose: () => void;
  categorySlug: string | null;
  lineFilter: string | null;
  localSearch: string;
  onSearchChange: (value: string) => void;
  onSearchSubmit: (e: React.FormEvent) => void;
  onToggleLine: (line: string) => void;
  onClearFilters: () => void;
  hasActiveFilters: boolean;
}

const MobileFilterSheet = ({
  isOpen,
  onClose,
  categorySlug,
  lineFilter,
  localSearch,
  onSearchChange,
  onSearchSubmit,
  onToggleLine,
  onClearFilters,
  hasActiveFilters,
}: MobileFilterSheetProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent
        side="bottom"
        className="h-[85vh] rounded-t-2xl p-0 bg-card"
      >
        <SheetHeader className="p-4 border-b border-border sticky top-0 bg-card z-10">
          <div className="flex items-center justify-between">
            <SheetTitle className="font-heading font-bold text-lg">Filtrar e Ordenar</SheetTitle>
            {hasActiveFilters && (
              <button
                onClick={() => {
                  onClearFilters();
                  onClose();
                }}
                className="text-sm text-primary font-medium min-h-[44px] px-3"
              >
                Limpar Tudo
              </button>
            )}
          </div>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto p-4 pb-24">
          {/* Search */}
          <form onSubmit={(e) => { onSearchSubmit(e); onClose(); }} className="mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar por nome ou SKU..."
                value={localSearch}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full bg-secondary border-0 rounded-lg px-4 py-3.5 text-base placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:outline-none pr-12 min-h-[48px]"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-muted-foreground hover:text-primary"
              >
                <Search size={20} />
              </button>
            </div>
          </form>

          {/* Categories */}
          <div className="mb-6">
            <h3 className="font-semibold text-sm uppercase text-muted-foreground mb-3 px-1">
              Categorias
            </h3>
            <div className="space-y-1">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={`/produtos?categoria=${category.slug}`}
                  onClick={onClose}
                  className={`block px-4 py-3.5 rounded-lg text-base font-medium transition-colors min-h-[48px] ${categorySlug === category.slug
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:bg-muted"
                    }`}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Line Filter */}
          <div>
            <h3 className="font-semibold text-sm uppercase text-muted-foreground mb-3 px-1">
              Linha
            </h3>
            <div className="space-y-2">
              <button
                onClick={() => {
                  onToggleLine("profissional");
                  onClose();
                }}
                className={`flex items-center gap-3 w-full px-4 py-3.5 rounded-lg text-base font-medium transition-colors min-h-[48px] ${lineFilter === "profissional"
                  ? "bg-primary/10 text-primary"
                  : "text-foreground hover:bg-muted"
                  }`}
              >
                <span
                  className={`w-5 h-5 rounded-md border-2 flex items-center justify-center ${lineFilter === "profissional"
                    ? "bg-primary border-primary"
                    : "border-border"
                    }`}
                >
                  {lineFilter === "profissional" && (
                    <span className="w-2 h-2 bg-primary-foreground rounded-sm" />
                  )}
                </span>
                Profissional
              </button>
              <button
                onClick={() => {
                  onToggleLine("domestica");
                  onClose();
                }}
                className={`flex items-center gap-3 w-full px-4 py-3.5 rounded-lg text-base font-medium transition-colors min-h-[48px] ${lineFilter === "domestica"
                  ? "bg-primary/10 text-primary"
                  : "text-foreground hover:bg-muted"
                  }`}
              >
                <span
                  className={`w-5 h-5 rounded-md border-2 flex items-center justify-center ${lineFilter === "domestica"
                    ? "bg-primary border-primary"
                    : "border-border"
                    }`}
                >
                  {lineFilter === "domestica" && (
                    <span className="w-2 h-2 bg-primary-foreground rounded-sm" />
                  )}
                </span>
                Doméstica
              </button>
            </div>
          </div>
        </div>

        {/* Apply Button */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-card border-t border-border safe-area-bottom">
          <button
            onClick={onClose}
            className="w-full bg-primary text-primary-foreground font-semibold py-4 rounded-lg text-base min-h-[52px] active:scale-[0.98] transition-transform"
          >
            Ver Resultados
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileFilterSheet;
