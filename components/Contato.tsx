import { EnvelopeIcon, PhoneIcon, ChatBubbleLeftRightIcon, MapPinIcon, ClockIcon } from "@heroicons/react/24/outline";

export default function Contato() {
  return (
    <section id="contato" className="py-12 px-4 max-w-3xl mx-auto scroll-mt-20">
      <h2 className="text-2xl font-semibold text-primary mb-8 text-center">Contato</h2>
      
      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
        <div className="card flex flex-col gap-2">
          <div className="flex items-center gap-2 mb-1">
            <PhoneIcon className="w-6 h-6 text-accent-1" />
            <span className="font-semibold text-lg text-primary">Telefone</span>
          </div>
          <a href="tel:+5500000000000" className="text-gray-700 hover:text-primary transition-colors">
            (21) 96432-2020
          </a>
        </div>
        <div className="card flex flex-col gap-2">
          <div className="flex items-center gap-2 mb-1">
            <EnvelopeIcon className="w-6 h-6 text-accent-3" />
            <span className="font-semibold text-lg text-primary">E-mail</span>
          </div>
          <a href="mailto:contato@vanessajoia.com.br" className="text-gray-700 hover:text-primary transition-colors">
            contato@vanessajoia.com.br
          </a>
        </div>
      </div>

      {/* Contact Form */}
      <form className="card p-6 space-y-6">
        <h3 className="text-xl font-semibold text-primary mb-6">Envie sua mensagem</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nome completo
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-1 focus:border-accent-1 outline-none transition-colors"
              placeholder="Seu nome"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-1 focus:border-accent-1 outline-none transition-colors"
              placeholder="seu@email.com"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Telefone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-1 focus:border-accent-1 outline-none transition-colors"
              placeholder="(00) 00000-0000"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
              Assunto
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-1 focus:border-accent-1 outline-none transition-colors"
              placeholder="Assunto da mensagem"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Mensagem
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-1 focus:border-accent-1 outline-none transition-colors resize-none"
            placeholder="Digite sua mensagem aqui..."
          />
        </div>

        <button
          type="submit"
          className="w-full md:w-auto px-8 py-3 bg-accent-1 text-white font-semibold rounded-lg hover:bg-accent-2 transition-colors duration-300 focus:ring-2 focus:ring-accent-1 focus:ring-offset-2"
        >
          Enviar mensagem
        </button>
      </form>
    </section>
  );
} 