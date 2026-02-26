import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "../ContactForm";

const ContactSection = () => {
  return (
    <section id="contato" className="py-20 lg:py-32 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6">
            Entre em Contato
          </div>
          <h2 className="section-title">
            Solicite Seu{" "}
            <span className="gradient-text">Orçamento</span>
          </h2>
          <p className="section-subtitle">
            Entre em contato conosco para tirar dúvidas, solicitar orçamentos 
            ou conhecer melhor nossos produtos. Estamos prontos para atendê-lo!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <h3 className="font-heading font-bold text-xl mb-6 text-card-foreground">
                Informações de Contato
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary" size={22} />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground mb-1">Telefone</p>
                    <a
                      href="https://wa.link/vqt47a"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      (11) 9 94762-1792
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="text-primary" size={22} />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground mb-1">E-mail</p>
                    <a
                      href="mailto:catmop@catmop.com.br"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      catmop@catmop.com.br
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary" size={22} />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground mb-1">Endereço</p>
                    <p className="text-muted-foreground">Rua General Góis Monteiro, 103 - São Paulo</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="text-primary" size={22} />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground mb-1">Horário</p>
                    <p className="text-muted-foreground">Seg - Sex: 8h às 18h</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
              <h4 className="font-heading font-bold text-xl mb-3">
                Precisa de Ajuda?
              </h4>
              <p className="opacity-90 mb-4">
                Nossa equipe está pronta para ajudá-lo a encontrar os 
                melhores produtos para sua necessidade.
              </p>
              <a
                href="https://wa.link/vqt47a"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-background text-foreground font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                <Phone size={18} />
                Ligar Agora
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <h3 className="font-heading font-bold text-xl mb-6 text-card-foreground">
                Envie sua Mensagem
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
