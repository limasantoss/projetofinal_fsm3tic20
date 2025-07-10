import { useApp } from "../context/AppContext";

export default function Triagem() {
  const { emTriagem, classificarPaciente } = useApp();

  if (!emTriagem) return null;

  return (
    <div className="p-4 bg-white border rounded mb-4">
      <h2 className="font-bold mb-2">Triagem</h2>
      <p className="mb-2">Paciente: <b>{emTriagem.nome}</b></p>
      <div className="flex gap-2">
        <button className="bg-red-500 text-white px-3 py-1 rounded" onClick={() => classificarPaciente("Alta")}>
          Prioridade Alta
        </button>
        <button className="bg-yellow-500 text-white px-3 py-1 rounded" onClick={() => classificarPaciente("Média")}>
          Prioridade Média
        </button>
        <button className="bg-green-500 text-white px-3 py-1 rounded" onClick={() => classificarPaciente("Normal")}>
          Prioridade Normal
        </button>
      </div>
    </div>
  );
}