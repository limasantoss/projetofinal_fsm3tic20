import { useApp } from "../context/AppContext";
import { useState, useEffect } from "react";

export default function PainelMedico() {
  const {
    fila,
    emAtendimento,
    iniciarAtendimento,
    finalizarAtendimento,
  } = useApp();

  const senhaAcesso = "1234"; // Senha de acesso para o painel
  const [senha, setSenha] = useState("");
  const [acesso, setAcesso] = useState(false);

  const handleAcesso = () => {
    if (senha === senhaAcesso) {
      setAcesso(true);
    } else {
      alert("Senha incorreta. Tente novamente.");
      setSenha("");
    }

  };

  if (!acesso) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-md w-80">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Acesso ao Painel</h2>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Digite a senha de acesso"
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
          <button
            onClick={handleAcesso}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
          >
            Acessar Painel
          </button>
        </div>
      </div>
    );
  }
  
  
  if (acesso){
    return (
      <div className="p-6 bg-white border border-blue-200 rounded-xl shadow-lg max-w-4xl mx-auto mt-6">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">
          Painel do Médico
        </h2>

        <section className="mb-8">
          <h3 className="text-xl font-semibold text-blue-700 mb-3 border-b border-blue-200 pb-1">
            Pacientes Aguardando
          </h3>
          {fila.length === 0 ? (
            <p className="text-gray-400 italic">Nenhum paciente aguardando.</p>
          ) : (
            <div className="space-y-2">
              {fila.map((p) => (
                <div
                  key={p.id}
                  className="flex items-center justify-between bg-blue-50 border border-blue-200 rounded p-3"
                >
                  <div className="text-blue-900 font-medium">
                    {p.senha} - {p.nome}{" "}
                    <span
                      className={`ml-2 text-sm px-2 py-0.5 rounded-full ${
                        p.prioridade === "Alta"
                          ? "bg-red-100 text-red-700"
                          : p.prioridade === "Média"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {p.prioridade}
                    </span>
                  </div>
                  <button
                    className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-1.5 rounded shadow"
                    onClick={() => iniciarAtendimento(p.id)}
                  >
                    Iniciar Atendimento
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>

        <section>
          <h3 className="text-xl font-semibold text-blue-700 mb-3 border-b border-blue-200 pb-1">
            Em Atendimento
          </h3>
          {emAtendimento.length === 0 ? (
            <p className="text-gray-400 italic">Nenhum paciente em atendimento.</p>
          ) : (
            <div className="space-y-2">
              {emAtendimento.map((p) => (
                <div
                  key={p.id}
                  className="flex items-center justify-between bg-green-50 border border-green-200 rounded p-3"
                >
                  <div className="text-green-900 font-medium">
                    {p.senha} - {p.nome}{" "}
                    <span
                      className={`ml-2 text-sm px-2 py-0.5 rounded-full ${
                        p.prioridade === "Alta"
                          ? "bg-red-100 text-red-700"
                          : p.prioridade === "Média"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {p.prioridade}
                    </span>
                  </div>
                  <button
                    className="bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-4 py-1.5 rounded shadow"
                    onClick={() => finalizarAtendimento(p.id)}
                  >
                    Finalizar Atendimento
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
  );
}
}

