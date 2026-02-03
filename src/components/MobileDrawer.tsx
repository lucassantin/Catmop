import { Link, useLocation } from "react-router-dom";
import { X, ChevronRight, Phone, Mail, MapPin } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { categories } from "@/data/products";
import logoImg from "@/assets/logo.jpg";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileDrawer = ({ isOpen, onClose }: MobileDrawerProps) => {
  const location = useLocation();

  const navLinks = [
    { href: "/", label: "Início" },
    { href: "/empresa", label: "A Empresa" },
    { href: "/segmentos", label: "Segmentos" },
    { href: "/materiais", label: "Materiais de Apoio" },
    { href: "/contato", label: "Contato" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent 
        side="left" 
        className="w-[85vw] max-w-[320px] p-0 bg-card border-r border-border"
      >
        {/* Header */}
        <SheetHeader className="p-4 border-b border-border">
          <div className="flex items-center gap-3">
            <img src={logoImg} alt="Catmop" className="h-10 w-auto rounded" />
            <SheetTitle className="font-heading font-bold text-lg">Catmop</SheetTitle>
          </div>
        </SheetHeader>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto">
          <nav className="p-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={onClose}
                className={`flex items-center justify-between px-4 py-3.5 rounded-lg text-base font-medium transition-colors min-h-[48px] ${
                  isActive(link.href)
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
                <ChevronRight size={18} className="text-muted-foreground" />
              </Link>
            ))}
          </nav>

          {/* Products Section */}
          <div className="border-t border-border mt-2 pt-2 px-2">
            <p className="px-4 py-2 text-xs font-semibold uppercase text-muted-foreground tracking-wider">
              Produtos
            </p>
            <Link
              to="/produtos"
              onClick={onClose}
              className={`flex items-center justify-between px-4 py-3.5 rounded-lg text-base font-medium transition-colors min-h-[48px] ${
                location.pathname === "/produtos" && !location.search
                  ? "bg-primary/10 text-primary"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              Ver Todos os Produtos
              <ChevronRight size={18} className="text-muted-foreground" />
            </Link>
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/produtos?categoria=${category.slug}`}
                onClick={onClose}
                className="flex items-center justify-between px-4 py-3 rounded-lg text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-colors min-h-[44px]"
              >
                {category.name}
                <ChevronRight size={16} className="text-muted-foreground/50" />
              </Link>
            ))}
          </div>
        </div>

        {/* Footer Contact */}
        <div className="border-t border-border p-4 space-y-3 bg-muted/30">
          <a
            href="https://wa.link/vqt47a"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors min-h-[44px]"
          >
            <Phone size={16} />
            <span>(11) 9 4762-1792</span>
          </a>
          <a
            href="mailto:contato@catmop.com.br"
            className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors min-h-[44px]"
          >
            <Mail size={16} />
            <span>contato@catmop.com.br</span>
          </a>
          <div className="flex items-start gap-3 text-sm text-muted-foreground">
            <MapPin size={16} className="shrink-0 mt-0.5" />
            <span>São Paulo – SP</span>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileDrawer;
