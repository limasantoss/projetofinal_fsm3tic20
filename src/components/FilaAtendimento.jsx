import { useApp } from "../context/AppContext";
import LegendaPrioridades from "./LegendaPrioridades";

export default function FilaAtendimento() {
  const { fila } = useApp();

  const alta = fila.filter(p => p.prioridade === "Alta").length;
  const media = fila.filter(p => p.prioridade === "Média").length;
  const normal = fila.filter(p => p.prioridade === "Normal").length;

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-6">
      <div className="bg-white border p-6 rounded-lg w-44 text-center shadow">
        <h2 className="text-3xl font-bold">{fila.length}</h2>
        <p className="text-gray-700 mt-1">Pacientes na Fila</p>
      </div>
      <div className="bg-red-100 border border-red-500 p-6 rounded-lg w-44 text-center shadow">
        <h2 className="text-3xl font-bold text-red-600">{alta}</h2>
        <p className="text-red-700 mt-1">Prioridade Alta</p>
      </div>
      <div className="bg-yellow-100 border border-yellow-500 p-6 rounded-lg w-44 text-center shadow">
        <h2 className="text-3xl font-bold text-yellow-600">{media}</h2>
        <p className="text-yellow-700 mt-1">Prioridade Média</p>
      </div>
      <div className="bg-green-100 border border-green-500 p-6 rounded-lg w-44 text-center shadow">
        <h2 className="text-3xl font-bold text-green-600">{normal}</h2>
        <p className="text-green-700 mt-1">Prioridade Normal</p>
      </div>
      <div className="bg-gray-100 border p-6 rounded-lg w-44 text-center shadow flex flex-col justify-center">
        <h2 className="text-2xl font-semibold mb-2">Legenda</h2>
        <p className="text-gray-600 mb-4">Prioridades dos Pacientes</p>
        <LegendaPrioridades />
      </div>
    </div>
  );
}
