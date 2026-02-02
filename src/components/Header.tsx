import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, ShoppingCart, ChevronDown, Phone } from "lucide-react";
import { categories } from "@/data/products";
import { useQuote } from "@/contexts/QuoteContext";
import logoImg from "@/assets/logo.jpg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    setIsMobileMenuOpen(false);
    setIsProductsOpen(false);
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
    { href: "/materiais", label: "Materiais de Apoio" },
    { href: "/contato", label: "Contato" },
  ];

  const itemCount = getTotal();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/98 backdrop-blur-md shadow-card py-2"
          : "bg-card py-3"
      }`}
    >
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground text-sm py-2 hidden lg:block">
        <div className="section-container flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a 
              href="https://wa.link/vqt47a"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Phone size={14} />
              <span>(11) 9 4762-1792</span>
            </a>
            <span className="text-primary-foreground/60">|</span>
            <span>contato@catmop.com.br</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/contato" className="hover:underline">Seja um Distribuidor</Link>
          </div>
        </div>
      </div>

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
            {/* Search */}
            <div ref={searchRef} className="relative hidden md:block">
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

            {/* Quote Cart */}
            <Link
              to="/orcamento"
              className="relative flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-md font-medium text-sm hover:opacity-90 transition-opacity"
            >
              <ShoppingCart size={18} />
              <span className="hidden sm:inline">Meu Orçamento</span>
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-destructive text-destructive-foreground text-xs font-bold rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-slide-down border-t border-border pt-4">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="mb-4">
              <input
                type="text"
                placeholder="Buscar produtos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-search w-full"
              />
            </form>

            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <div key={link.href}>
                  {link.hasDropdown ? (
                    <>
                      <button
                        onClick={() => setIsProductsOpen(!isProductsOpen)}
                        className="flex items-center justify-between w-full px-4 py-3 text-foreground font-medium rounded-md hover:bg-secondary"
                      >
                        {link.label}
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${isProductsOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      {isProductsOpen && (
                        <div className="ml-4 mt-1 space-y-1 animate-slide-down">
                          {categories.map((category) => (
                            <Link
                              key={category.id}
                              to={`/produtos?categoria=${category.slug}`}
                              className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {category.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={link.href}
                      className={`block px-4 py-3 font-medium rounded-md ${
                        location.pathname === link.href
                          ? "text-primary bg-primary/5"
                          : "text-foreground hover:bg-secondary"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            <div className="mt-4 pt-4 border-t border-border">
              <a
                href="https://wa.link/vqt47a"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-muted-foreground"
              >
                <Phone size={16} />
                <span>(11) 9 4762-1792</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
