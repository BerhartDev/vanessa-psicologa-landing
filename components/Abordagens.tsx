import { UserGroupIcon, HeartIcon, DevicePhoneMobileIcon, UserIcon } from "@heroicons/react/24/outline";

const abordagens = [
  {
    icon: <UserIcon className="w-8 h-8 text-accent-3" />,
    title: "Terapia Individual",
    desc: "Atendimento personalizado para adultos e adolescentes.",
  },
  {
    icon: <HeartIcon className="w-8 h-8 text-accent-1" />,
    title: "Ansiedade e Depressão",
    desc: "Apoio especializado para lidar com emoções e desafios.",
  },
  {
    icon: <UserGroupIcon className="w-8 h-8 text-accent-4" />,
    title: "Terapia para Mulheres",
    desc: "Espaço seguro para questões femininas e autoconhecimento.",
  },
  {
    icon: <DevicePhoneMobileIcon className="w-8 h-8 text-accent-2" />,
    title: "Atendimento Online",
    desc: "Conforto e praticidade para sua rotina, onde estiver.",
  },
];

export default function Abordagens() {
  return (
    <section id="abordagens" className="py-12 bg-background/50 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-primary mb-8 text-center">Áreas de Atuação</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {abordagens.map((item, i) => (
            <div key={i} className="card flex flex-col items-center text-center">
              {item.icon}
              <h3 className="font-semibold text-lg text-primary mt-2 mb-1">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 