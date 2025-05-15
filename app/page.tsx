import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import SobreMim from "../components/SobreMim";
import Abordagens from "../components/Abordagens";
import Atendimento from "../components/Atendimento";
import Depoimentos from "../components/Depoimentos";
import Contato from "../components/Contato";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col gap-0">
        <HeroSection />
        <SobreMim />
        <Abordagens />
        <Atendimento />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}
