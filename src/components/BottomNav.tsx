import { Link, useLocation } from "react-router-dom";
import { Home, Package, ShoppingCart, Menu } from "lucide-react";
import { useQuote } from "@/contexts/QuoteContext";

interface BottomNavProps {
  onMenuClick: () => void;
}

const BottomNav = ({ onMenuClick }: BottomNavProps) => {
  const location = useLocation();
  const { getTotal } = useQuote();
  const itemCount = getTotal();

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const navItems = [
    { path: "/", icon: Home, label: "Início" },
    { path: "/produtos", icon: Package, label: "Catálogo" },
    { path: "/orcamento", icon: ShoppingCart, label: "Orçamento", badge: itemCount },
    { path: "menu", icon: Menu, label: "Menu", isButton: true },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-card border-t border-border safe-area-bottom">
      <div className="flex items-stretch justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = !item.isButton && isActive(item.path);

          if (item.isButton) {
            return (
              <button
                key={item.path}
                onClick={onMenuClick}
                className="flex flex-col items-center justify-center gap-1 py-3 px-4 min-h-[56px] flex-1 transition-colors text-muted-foreground active:bg-muted"
              >
                <Icon size={22} />
                <span className="text-[10px] font-medium">{item.label}</span>
              </button>
            );
          }

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`relative flex flex-col items-center justify-center gap-1 py-3 px-4 min-h-[56px] flex-1 transition-colors ${
                active 
                  ? "text-primary" 
                  : "text-muted-foreground active:bg-muted"
              }`}
            >
              <div className="relative">
                <Icon size={22} />
                {item.badge && item.badge > 0 && (
                  <span className="absolute -top-2 -right-3 min-w-[18px] h-[18px] bg-destructive text-destructive-foreground text-[10px] font-bold rounded-full flex items-center justify-center px-1">
                    {item.badge}
                  </span>
                )}
              </div>
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
