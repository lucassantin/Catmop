import { useState } from "react";
import { Link } from "react-router-dom";
import { Trash2, Plus, Minus, ShoppingCart, ArrowLeft, MessageCircle, Send } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useQuote } from "@/contexts/QuoteContext";
import { useToast } from "@/hooks/use-toast";

const QuotePage = () => {
  const { items, updateQuantity, removeItem, clearQuote, getTotal } = useQuote();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    cnpj: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const generateWhatsAppMessage = () => {
    let message = `*Solicitação de Orçamento - Catmop*\n\n`;
    message += `*Dados do Solicitante:*\n`;
    message += `Nome: ${formData.name}\n`;
    if (formData.company) message += `Empresa: ${formData.company}\n`;
    if (formData.cnpj) message += `CNPJ: ${formData.cnpj}\n`;
    message += `E-mail: ${formData.email}\n`;
    message += `Telefone: ${formData.phone}\n\n`;
    
    message += `*Produtos Selecionados:*\n`;
    items.forEach((item) => {
      message += `- ${item.product.name} (${item.product.sku}) - Qtd: ${item.quantity}\n`;
    });
    
    if (formData.message) {
      message += `\n*Observações:*\n${formData.message}`;
    }

    return encodeURIComponent(message);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Preencha os campos obrigatórios",
        description: "Nome, e-mail e telefone são obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    if (items.length === 0) {
      toast({
        title: "Nenhum produto selecionado",
        description: "Adicione produtos ao orçamento antes de enviar.",
        variant: "destructive",
      });
      return;
    }

    const whatsappUrl = `https://wa.me/5511947621792?text=${generateWhatsAppMessage()}`;
    window.open(whatsappUrl, "_blank");
    
    toast({
      title: "Redirecionando para o WhatsApp",
      description: "Complete o envio do orçamento no WhatsApp.",
    });
  };

  const totalItems = getTotal();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-[112px] lg:pt-[120px]">
        {/* Header */}
        <div className="bg-secondary border-b border-border">
          <div className="section-container py-8">
            <Link
              to="/produtos"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-4"
            >
              <ArrowLeft size={16} />
              Continuar comprando
            </Link>
            <h1 className="text-2xl lg:text-3xl font-heading font-bold text-foreground">
              Meu Orçamento
            </h1>
            <p className="text-muted-foreground mt-1">
              {totalItems} {totalItems === 1 ? "item" : "itens"} selecionado{totalItems !== 1 ? "s" : ""}
            </p>
          </div>
        </div>

        <div className="section-container py-8">
          {items.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingCart size={64} className="mx-auto text-muted-foreground/30 mb-4" />
              <h2 className="text-xl font-heading font-bold text-foreground mb-2">
                Seu orçamento está vazio
              </h2>
              <p className="text-muted-foreground mb-6">
                Adicione produtos ao orçamento para solicitar uma cotação.
              </p>
              <Link to="/produtos" className="btn-primary">
                Ver Produtos
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Products List */}
              <div className="lg:col-span-2">
                <div className="bg-card rounded-lg border border-border overflow-hidden">
                  {/* Table Header */}
                  <div className="hidden md:grid md:grid-cols-12 gap-4 px-6 py-4 bg-secondary text-sm font-medium text-muted-foreground">
                    <div className="col-span-6">Produto</div>
                    <div className="col-span-3 text-center">Quantidade</div>
                    <div className="col-span-3 text-right">Ações</div>
                  </div>

                  {/* Items */}
                  <div className="divide-y divide-border">
                    {items.map((item) => (
                      <div key={item.product.id} className="p-4 md:p-6">
                        <div className="md:grid md:grid-cols-12 md:gap-4 md:items-center">
                          {/* Product Info */}
                          <div className="flex gap-4 col-span-6 mb-4 md:mb-0">
                            <div className="w-20 h-20 bg-secondary rounded-lg shrink-0">
                              <img
                                src={item.product.image}
                                alt={item.product.name}
                                className="w-full h-full object-contain p-2"
                              />
                            </div>
                            <div>
                              <span className="badge-sku text-xs">{item.product.sku}</span>
                              <h3 className="font-medium text-foreground mt-1">
                                {item.product.name}
                              </h3>
                              <p className="text-sm text-muted-foreground line-clamp-1">
                                {item.product.shortDescription}
                              </p>
                            </div>
                          </div>

                          {/* Quantity */}
                          <div className="col-span-3 flex justify-center mb-4 md:mb-0">
                            <div className="flex items-center border border-border rounded-md">
                              <button
                                onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                className="p-2 hover:bg-secondary"
                              >
                                <Minus size={16} />
                              </button>
                              <span className="px-4 font-medium">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                className="p-2 hover:bg-secondary"
                              >
                                <Plus size={16} />
                              </button>
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="col-span-3 flex justify-end">
                            <button
                              onClick={() => removeItem(item.product.id)}
                              className="flex items-center gap-2 text-sm text-destructive hover:underline"
                            >
                              <Trash2 size={16} />
                              <span className="hidden sm:inline">Remover</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="px-6 py-4 bg-secondary flex justify-between items-center">
                    <button
                      onClick={clearQuote}
                      className="text-sm text-destructive hover:underline"
                    >
                      Limpar lista
                    </button>
                    <span className="text-sm text-muted-foreground">
                      Total: <strong className="text-foreground">{totalItems} itens</strong>
                    </span>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-1">
                <div className="bg-card rounded-lg border border-border p-6 sticky top-32">
                  <h2 className="font-heading font-bold text-lg mb-6">
                    Solicitar Orçamento
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-4">
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
                        className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
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
                        className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        CNPJ
                      </label>
                      <input
                        type="text"
                        name="cnpj"
                        value={formData.cnpj}
                        onChange={handleInputChange}
                        placeholder="00.000.000/0000-00"
                        className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
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
                        className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Telefone/WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="(11) 99999-9999"
                        className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Observações
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={3}
                        placeholder="Informe detalhes adicionais..."
                        className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full btn-accent flex items-center justify-center gap-2"
                    >
                      <MessageCircle size={18} />
                      Enviar via WhatsApp
                    </button>

                    <p className="text-xs text-muted-foreground text-center">
                      Ao clicar, você será redirecionado para o WhatsApp com os detalhes do orçamento.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default QuotePage;
