import { useApp } from "../context/AppContext";

export default function PainelTV() {
  const { fila } = useApp();

  if (fila.length === 0) {
    return <div className="bg-white border rounded p-4 mb-4 text-center text-gray-400">Nenhum paciente aguardando.</div>
  }

  return (
    <div>
      {fila.map((p, idx) => (
        <div key={p.id} className={`border rounded p-4 mb-2 ${
          p.prioridade === 'Alta' ? 'bg-red-100 border-red-500' :
          p.prioridade === 'Média' ? 'bg-yellow-100 border-yellow-500' : 'bg-green-100 border-green-500'
        }`}>
          <h2 className="font-bold">{idx + 1}º - {p.nome}</h2>
          <p className="text-sm">Senha: {p.senha}</p>
          <p>{p.motivo}</p>
          <span className={`px-2 py-1 rounded text-xs text-white ${
            p.prioridade === 'Alta' ? 'bg-red-500' :
            p.prioridade === 'Média' ? 'bg-yellow-500' : 'bg-green-500'
          }`}>
            {p.prioridade}
          </span>
        </div>
      ))}
    </div>
  );
}