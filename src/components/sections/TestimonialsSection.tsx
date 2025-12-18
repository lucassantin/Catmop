import TestimonialCard from "../TestimonialCard";

const testimonials = [
  {
    quote:
      "Os mops da Catmop são os melhores que já utilizamos. A durabilidade e qualidade dos materiais fazem toda a diferença no nosso dia a dia.",
    author: "Maria Silva",
    company: "Hospital São Lucas",
    rating: 5,
  },
  {
    quote:
      "Atendimento excelente e produtos de primeira qualidade. A Catmop é nossa parceira há mais de 5 anos e sempre nos surpreende.",
    author: "Carlos Oliveira",
    company: "Limpeza Express Ltda",
    rating: 5,
  },
  {
    quote:
      "Recomendo a Catmop para qualquer empresa que busca equipamentos de limpeza profissional. Qualidade e preço justo.",
    author: "Ana Costa",
    company: "Edifício Comercial Plaza",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="section-container">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6">
            Depoimentos
          </div>
          <h2 className="section-title">
            O Que Nossos{" "}
            <span className="gradient-text">Clientes Dizem</span>
          </h2>
          <p className="section-subtitle">
            A satisfação dos nossos clientes é a nossa maior motivação. 
            Veja o que eles têm a dizer sobre nossos produtos e serviços.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.author}
              quote={testimonial.quote}
              author={testimonial.author}
              company={testimonial.company}
              rating={testimonial.rating}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
