import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-8 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-semibold mb-2">Vanessa Joia</p>
        <p className="text-sm mb-4">Psicóloga | CRP 00/00000</p>
        <p className="text-sm">© {new Date().getFullYear()} Todos os direitos reservados</p>
      </div>
    </footer>
  );
} 