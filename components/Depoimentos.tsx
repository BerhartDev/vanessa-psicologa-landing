const depoimentos = [
  {
    nome: "A.P.",
    texto: "A Vanessa me ajudou a enxergar a vida de outra forma. O acolhimento e profissionalismo fizeram toda diferença no meu processo.",
  },
  {
    nome: "M.R.",
    texto: "Me senti muito confortável desde a primeira sessão. Recomendo para todos que buscam autoconhecimento.",
  },
  {
    nome: "L.S.",
    texto: "O atendimento online foi essencial para mim. Vanessa é uma excelente profissional!",
  },
];

export default function Depoimentos() {
  return (
    <section className="py-12 bg-blue-50" id="depoimentos">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl font-bold text-blue-900 mb-8 text-center">Depoimentos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {depoimentos.map((dep, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
              <p className="text-gray-700 italic mb-4">“{dep.texto}”</p>
              <span className="font-semibold text-blue-800">{dep.nome}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 