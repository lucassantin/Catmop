import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingCart, ChevronDown, Phone } from "lucide-react";
import { categories } from "@/data/products";
import { useQuote } from "@/contexts/QuoteContext";
import logoImg from "@/assets/logo.jpg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { getTotal } = useQuote();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsProductsOpen(false);
    setIsSearchOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/produtos?busca=${encodeURIComponent(searchQuery)}`;
    }
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/empresa", label: "A Empresa" },
    { href: "/produtos", label: "Produtos", hasDropdown: true },
    { href: "/segmentos", label: "Segmentos" },
    //{ href: "/materiais", label: "Materiais de Apoio" },
    { href: "/contato", label: "Contato" },
  ];

  const itemCount = getTotal();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card shadow-card py-2"
          : "bg-card py-3"
      }`}
    >
      

      <div className="section-container">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img src={logoImg} alt="Catmop" className="h-10 w-auto rounded" />
            <span className="font-heading font-bold text-xl text-foreground hidden sm:block">
              Catmop
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.href} className="relative group">
                {link.hasDropdown ? (
                  <button
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                      location.pathname.startsWith("/produtos")
                        ? "text-primary bg-primary/5"
                        : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                    }`}
                    onMouseEnter={() => setIsProductsOpen(true)}
                    onMouseLeave={() => setIsProductsOpen(false)}
                  >
                    {link.label}
                    <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
                  </button>
                ) : (
                  <Link
                    to={link.href}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                      location.pathname === link.href
                        ? "text-primary bg-primary/5"
                        : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                )}

                {/* Mega Menu */}
                {link.hasDropdown && (
                  <div
                    className={`absolute top-full left-0 pt-2 ${
                      isProductsOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    } transition-all duration-200`}
                    onMouseEnter={() => setIsProductsOpen(true)}
                    onMouseLeave={() => setIsProductsOpen(false)}
                  >
                    <div className="bg-card rounded-lg shadow-lg border border-border p-6 min-w-[500px] grid grid-cols-2 gap-6">
                      {categories.map((category) => (
                        <div key={category.id}>
                          <Link
                            to={`/produtos?categoria=${category.slug}`}
                            className="font-semibold text-foreground hover:text-primary transition-colors"
                          >
                            {category.name}
                          </Link>
                          <ul className="mt-2 space-y-1">
                            {category.subcategories.map((sub) => (
                              <li key={sub.id}>
                                <Link
                                  to={`/produtos?categoria=${category.slug}&sub=${sub.slug}`}
                                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                  {sub.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      <div className="col-span-2 pt-4 border-t border-border">
                        <Link
                          to="/produtos"
                          className="text-sm font-medium text-primary hover:underline"
                        >
                          Ver Todos os Produtos →
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Mobile Search Button */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="lg:hidden p-2 rounded-md text-muted-foreground hover:text-primary min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Buscar"
            >
              <Search size={22} />
            </button>

            {/* Desktop Search */}
            <div ref={searchRef} className="relative hidden lg:block">
              {isSearchOpen ? (
                <form onSubmit={handleSearch} className="animate-fade-in">
                  <input
                    type="text"
                    placeholder="Buscar por nome ou código..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="input-search w-64"
                    autoFocus
                  />
                </form>
              ) : (
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors"
                  aria-label="Buscar"
                >
                  <Search size={20} />
                </button>
              )}
            </div>

            {/* Quote Cart - Desktop only */}
            <Link
              to="/orcamento"
              className="relative hidden lg:flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-md font-medium text-sm hover:opacity-90 transition-opacity"
            >
              <ShoppingCart size={18} />
              <span>Meu Orçamento</span>
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-destructive text-destructive-foreground text-xs font-bold rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="lg:hidden px-4 pb-3 animate-slide-down">
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Buscar produtos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-search w-full"
                autoFocus
              />
            </form>
          </div>
        )}

      </div>
    </header>
  );
};

export default Header;
