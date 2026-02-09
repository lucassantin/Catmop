import { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import { toast } from "sonner";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const message = `
    Nome: ${formData.name}
    Email: ${formData.email}
    Telefone: ${formData.phone}

    Mensagem:
    ${formData.message}
    `;

    const whatsappUrl = `https://wa.me/551136755729?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");

    toast.success("Redirecionando para o WhatsApp...");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
            Nome Completo *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground 
                       placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary 
                       transition-all duration-200"
            placeholder="Seu nome"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            E-mail *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground 
                       placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary 
                       transition-all duration-200"
            placeholder="seu@email.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
          Telefone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground 
                     placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary 
                     transition-all duration-200"
          placeholder="(11) 9 94762-1792"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
          Mensagem *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground 
                     placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary 
                     transition-all duration-200 resize-none"
          placeholder="Como podemos ajudar? Descreva sua necessidade..."
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={20} className="animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <Send size={20} />
            Enviar Mensagem
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
