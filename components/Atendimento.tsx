import { MapPinIcon, VideoCameraIcon, ClockIcon, GlobeAltIcon } from "@heroicons/react/24/outline";

export default function Atendimento() {
  return (
    <section id="atendimento" className="py-12 px-4 max-w-3xl mx-auto scroll-mt-20">
      <h2 className="text-2xl font-semibold text-primary mb-8 text-center">Atendimento</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="card flex flex-col gap-2">
          <div className="flex items-center gap-2 mb-1">
            <VideoCameraIcon className="w-6 h-6 text-accent-1" />
            <span className="font-semibold text-lg text-primary">Modalidades</span>
          </div>
          <span className="text-gray-700">Online e Presencial</span>
        </div>
        <div className="card flex flex-col gap-2">
          <div className="flex items-center gap-2 mb-1">
            <GlobeAltIcon className="w-6 h-6 text-accent-3" />
            <span className="font-semibold text-lg text-primary">Idiomas</span>
          </div>
          <span className="text-gray-700">Português</span>
        </div>
        <div className="card flex flex-col gap-2">
          <div className="flex items-center gap-2 mb-1">
            <ClockIcon className="w-6 h-6 text-accent-2" />
            <span className="font-semibold text-lg text-primary">Duração/Frequência</span>
          </div>
          <span className="text-gray-700">Sessões de 50 minutos, semanais</span>
        </div>
        <div className="card flex flex-col gap-2">
          <div className="flex items-center gap-2 mb-1">
            <MapPinIcon className="w-6 h-6 text-accent-4" />
            <span className="font-semibold text-lg text-primary">Localização</span>
          </div>
          <span className="text-gray-700">Consultório Bem Viver, Centro - Cidade/UF</span>
        </div>
      </div>
    </section>
  );
} 