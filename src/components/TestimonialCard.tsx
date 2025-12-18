import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  company: string;
  rating?: number;
  delay?: number;
}

const TestimonialCard = ({ quote, author, company, rating = 5, delay = 0 }: TestimonialCardProps) => {
  return (
    <div
      className="bg-card rounded-2xl p-8 shadow-card opacity-0 animate-slide-up"
      style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
    >
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={18} className="fill-accent text-accent" />
        ))}
      </div>
      <blockquote className="text-card-foreground leading-relaxed mb-6 italic">
        "{quote}"
      </blockquote>
      <div className="border-t border-border pt-4">
        <p className="font-heading font-semibold text-card-foreground">{author}</p>
        <p className="text-muted-foreground text-sm">{company}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
