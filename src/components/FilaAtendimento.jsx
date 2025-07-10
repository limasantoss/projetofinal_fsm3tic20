import { useApp } from "../context/AppContext";

export default function FilaAtendimento() {
  const { fila } = useApp();
  const alta = fila.filter(p => p.prioridade === "Alta").length;
  const media = fila.filter(p => p.prioridade === "Média").length;
  const normal = fila.filter(p => p.prioridade === "Normal").length;

  return (
    <div className="flex justify-around mb-4">
      <div className="bg-white border p-4 rounded w-1/4 text-center">
        <h2 className="text-2xl font-bold">{fila.length}</h2>
        <p>Pacientes na Fila</p>
      </div>
      <div className="bg-red-100 border border-red-500 p-4 rounded w-1/4 text-center">
        <h2 className="text-2xl font-bold text-red-600">{alta}</h2>
        <p>Prioridade Alta</p>
      </div>
      <div className="bg-yellow-100 border border-yellow-500 p-4 rounded w-1/4 text-center">
        <h2 className="text-2xl font-bold text-yellow-600">{media}</h2>
        <p>Prioridade Média</p>
      </div>
      <div className="bg-green-100 border border-green-500 p-4 rounded w-1/4 text-center">
        <h2 className="text-2xl font-bold text-green-600">{normal}</h2>
        <p>Prioridade Normal</p>
      </div>
    </div>
  );
}