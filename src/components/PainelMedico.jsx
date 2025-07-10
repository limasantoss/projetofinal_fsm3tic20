import { useApp } from "../context/AppContext";

export default function PainelMedico() {
  const { fila, emAtendimento, iniciarAtendimento, finalizarAtendimento } = useApp();

  return (
    <div className="p-4 bg-white border rounded mb-4">
      <h2 className="font-bold mb-2">Painel do Médico</h2>
      <div className="mb-3">
        <div className="font-semibold mb-1">Aguardando:</div>
        {fila.length === 0 && <p className="text-gray-400 text-sm">Nenhum paciente aguardando.</p>}
        {fila.map(p => (
          <div key={p.id} className="flex items-center gap-2 border-b py-1">
            <span className="font-medium">{p.senha} - {p.nome} ({p.prioridade})</span>
            <button className="ml-2 bg-blue-500 text-white rounded px-2 py-1 text-xs" onClick={() => iniciarAtendimento(p.id)}>
              Iniciar Atendimento
            </button>
          </div>
        ))}
      </div>
      <div>
        <div className="font-semibold mb-1">Em atendimento:</div>
        {emAtendimento.length === 0 && <p className="text-gray-400 text-sm">Nenhum paciente em atendimento.</p>}
        {emAtendimento.map(p => (
          <div key={p.id} className="flex items-center gap-2 border-b py-1">
            <span className="font-medium">{p.senha} - {p.nome} ({p.prioridade})</span>
            <button className="ml-2 bg-red-500 text-white rounded px-2 py-1 text-xs" onClick={() => finalizarAtendimento(p.id)}>
              Finalizar Atendimento
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}