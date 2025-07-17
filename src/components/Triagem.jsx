import { useApp } from "../context/AppContext";

export default function Triagem() {
  const { emTriagem, classificarPaciente } = useApp();

  if (!emTriagem) return (
    <div className="p-4 bg-white border rounded text-center text-gray-500">
      Nenhum paciente aguardando triagem.
    </div>
  );

  return (
    <div className="p-6 bg-white border rounded shadow max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Triagem</h2>
      <p className="mb-4">
        <strong>Paciente:</strong> {emTriagem.nome}
      </p>
      <p className="mb-6">
        <strong>Motivo:</strong> {emTriagem.motivo}
      </p>
      <div className="flex justify-between gap-4">
        <button
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          onClick={() => classificarPaciente("Alta")}
        >
          Prioridade Alta
        </button>
        <button
          className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500"
          onClick={() => classificarPaciente("Média")}
        >
          Prioridade Média
        </button>
        <button
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          onClick={() => classificarPaciente("Normal")}
        >
          Prioridade Normal
        </button>
      </div>
    </div>
  );
}
