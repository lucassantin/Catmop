import heroImage from "@/assets/hero-cleaning.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-secondary/50" />

      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ================= CONTENT ================= */}
          <div>
            {/* Badge */}
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6 animate-fade-in">
              Qualidade e Tradição em Limpeza
            </div>

            {/* Title */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight mb-6 opacity-0 animate-slide-up delay-100"
              style={{ animationFillMode: "forwards" }}
            >
              Equipamentos Essenciais para{" "}
              <span className="gradient-text">Limpeza Profissional</span>
            </h1>

            {/* Description */}
            <p
              className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl opacity-0 animate-slide-up delay-200"
              style={{ animationFillMode: "forwards" }}
            >
              Soluções completas em mops, refis e acessórios para limpeza eficiente
              e duradoura. Qualidade comprovada para ambientes domésticos e comerciais.
            </p>

            {/* IMAGE — MOBILE ONLY (EXATAMENTE ACIMA DO BOTÃO) */}
            <div
              className="lg:hidden mb-8 opacity-0 animate-slide-up delay-300"
              style={{ animationFillMode: "forwards" }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-2xl" />
                <img
                  src={heroImage}
                  alt="Equipamentos de limpeza profissional Catmop"
                  className="relative w-full rounded-2xl shadow-2xl"
                />
              </div>
            </div>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-4 opacity-0 animate-slide-up delay-400"
              style={{ animationFillMode: "forwards" }}
            >
              <a href="#contato" className="btn-accent text-lg">
                Solicitar Orçamento
              </a>
              <a href="#produtos" className="btn-outline text-lg">
                Ver Produtos
              </a>
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-border opacity-0 animate-slide-up delay-500"
              style={{ animationFillMode: "forwards" }}
            >
              <div>
                <p className="text-3xl sm:text-4xl font-heading font-bold text-primary">
                  20+
                </p>
                <p className="text-muted-foreground text-sm mt-1">
                  Anos de Experiência
                </p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-heading font-bold text-primary">
                  500+
                </p>
                <p className="text-muted-foreground text-sm mt-1">
                  Clientes Satisfeitos
                </p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-heading font-bold text-primary">
                  50+
                </p>
                <p className="text-muted-foreground text-sm mt-1">
                  Produtos
                </p>
              </div>
            </div>
          </div>

          {/* ================= IMAGE — DESKTOP ONLY ================= */}
          <div
            className="hidden lg:block opacity-0 animate-slide-in-right delay-300"
            style={{ animationFillMode: "forwards" }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-2xl" />
              <img
                src={heroImage}
                alt="Equipamentos de limpeza profissional Catmop"
                className="relative w-full rounded-2xl shadow-2xl"
                loading="eager"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
