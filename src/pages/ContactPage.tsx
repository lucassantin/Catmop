import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    type: "orcamento",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Preencha os campos obrigatórios",
        variant: "destructive",
      });
      return;
    }

    // Generate WhatsApp message
    let message = `*Contato via Site - Catmop*\n\n`;
    message += `*Tipo:* ${formData.type === "orcamento" ? "Solicitação de Orçamento" : formData.type === "distribuidor" ? "Seja um Distribuidor" : "Dúvida/Suporte"}\n\n`;
    message += `*Nome:* ${formData.name}\n`;
    if (formData.company) message += `*Empresa:* ${formData.company}\n`;
    message += `*E-mail:* ${formData.email}\n`;
    if (formData.phone) message += `*Telefone:* ${formData.phone}\n`;
    if (formData.subject) message += `*Assunto:* ${formData.subject}\n`;
    message += `\n*Mensagem:*\n${formData.message}`;

    const whatsappUrl = `https://wa.me/5511947621792?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Redirecionando para o WhatsApp",
      description: "Complete o envio da mensagem no WhatsApp.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-[112px] lg:pt-[120px]">
        {/* Header */}
        <div className="bg-primary">
          <div className="section-container py-16">
            <h1 className="text-3xl lg:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Entre em Contato
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl">
              Estamos prontos para atender você. Solicite um orçamento, tire suas 
              dúvidas ou saiba como se tornar um distribuidor Catmop.
            </p>
          </div>
        </div>

        <section className="py-16">
          <div className="section-container">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-1">
                <h2 className="font-heading font-bold text-xl mb-6">
                  Informações de Contato
                </h2>

                <div className="space-y-6">
                  <a
                    href="https://wa.link/vqt47a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 bg-accent/10 rounded-lg hover:bg-accent/20 transition-colors"
                  >
                    <MessageCircle size={24} className="text-accent shrink-0" />
                    <div>
                      <h3 className="font-semibold">WhatsApp</h3>
                      <p className="text-muted-foreground">(11) 9 4762-1792</p>
                      <span className="text-xs text-accent">Resposta rápida</span>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-4 bg-secondary rounded-lg">
                    <Phone size={24} className="text-primary shrink-0" />
                    <div>
                      <h3 className="font-semibold">Telefone</h3>
                      <p className="text-muted-foreground">(11) 9 4762-1792</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-secondary rounded-lg">
                    <Mail size={24} className="text-primary shrink-0" />
                    <div>
                      <h3 className="font-semibold">E-mail</h3>
                      <p className="text-muted-foreground">contato@catmop.com.br</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-secondary rounded-lg">
                    <MapPin size={24} className="text-primary shrink-0" />
                    <div>
                      <h3 className="font-semibold">Endereço</h3>
                      <p className="text-muted-foreground">São Paulo - SP, Brasil</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-secondary rounded-lg">
                    <Clock size={24} className="text-primary shrink-0" />
                    <div>
                      <h3 className="font-semibold">Horário de Atendimento</h3>
                      <p className="text-muted-foreground">
                        Segunda a Sexta: 8h às 18h<br />
                        Sábado: 8h às 12h
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-card border border-border rounded-xl p-8">
                  <h2 className="font-heading font-bold text-xl mb-6">
                    Envie sua Mensagem
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Contact Type */}
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Tipo de Contato
                      </label>
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { value: "orcamento", label: "Orçamento" },
                          { value: "distribuidor", label: "Distribuidor" },
                          { value: "suporte", label: "Suporte" },
                        ].map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => setFormData((prev) => ({ ...prev, type: option.value }))}
                            className={`py-2 px-4 rounded-md text-sm font-medium border transition-colors ${
                              formData.type === option.value
                                ? "bg-primary text-primary-foreground border-primary"
                                : "border-border hover:border-primary"
                            }`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Nome *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          E-mail *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Telefone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="(11) 99999-9999"
                          className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Empresa
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Assunto
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Ex: Orçamento para linha hospitalar"
                        className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Mensagem *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        placeholder="Descreva sua solicitação..."
                        className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full btn-accent flex items-center justify-center gap-2"
                    >
                      <Send size={18} />
                      Enviar via WhatsApp
                    </button>

                    <p className="text-xs text-muted-foreground text-center">
                      Ao enviar, você será redirecionado para o WhatsApp para completar o contato.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
