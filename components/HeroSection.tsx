import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center pt-32 pb-12 bg-background" id="hero">
      <div className="w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-accent-1 shadow-lg">
        <Image 
          src="/vanessa-psicologa-landing/profile.jpg" 
          alt="Foto da Psicóloga Vanessa Joia" 
          width={128} 
          height={128} 
        />
      </div>
      <h1 className="text-3xl sm:text-4xl font-semibold text-primary mb-2">Cuidar da mente é um ato de coragem.</h1>
      <p className="text-gray-700 mb-6 max-w-md">Acolhimento, escuta e transformação para o seu bem-estar emocional.</p>
      <a href="#contato" className="btn-primary">Agendar consulta</a>
    </section>
  );
} 