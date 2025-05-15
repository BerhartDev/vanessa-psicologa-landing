import { EnvelopeIcon, PhoneIcon, ChatBubbleLeftRightIcon, MapPinIcon, ClockIcon } from "@heroicons/react/24/outline";

export default function Contato() {
  return (
    <section id="contato" className="py-12 px-4 max-w-3xl mx-auto scroll-mt-20">
      <h2 className="text-2xl font-semibold text-primary mb-8 text-center">Contato</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="card flex flex-col gap-2">
          <div className="flex items-center gap-2 mb-1">
            <PhoneIcon className="w-6 h-6 text-accent-1" />
            <span className="font-semibold text-lg text-primary">Telefone</span>
          </div>
          <a href="tel:+5500000000000" className="text-gray-700 hover:text-primary transition-colors">
            (00) 00000-0000
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
        <div className="card flex flex-col gap-2">
          <div className="flex items-center gap-2 mb-1">
            <MapPinIcon className="w-6 h-6 text-accent-2" />
            <span className="font-semibold text-lg text-primary">Endereço</span>
          </div>
          <span className="text-gray-700">Consultório Bem Viver, Centro - Cidade/UF</span>
        </div>
        <div className="card flex flex-col gap-2">
          <div className="flex items-center gap-2 mb-1">
            <ClockIcon className="w-6 h-6 text-accent-4" />
            <span className="font-semibold text-lg text-primary">Horário de Atendimento</span>
          </div>
          <span className="text-gray-700">Segunda a Sexta, 8h às 18h</span>
        </div>
      </div>
    </section>
  );
} 