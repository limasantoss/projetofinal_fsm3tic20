import { useState, useRef } from "react";
import { useApp } from "../context/AppContext";
import FilaAtendimento from "./FilaAtendimento";

export default function PainelTV() {
  const { fila } = useApp();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const painelRef = useRef(null);

  function toggleFullscreen() {
    setIsFullscreen(!isFullscreen);
  }

  if (fila.length === 0) {
    return (
      <div className="flex items-center justify-center h-48 bg-white border rounded shadow text-gray-400 text-lg font-medium">
        Nenhum paciente aguardando.
      </div>
    );
  }

  return (
    <>
      <button
        onClick={toggleFullscreen}
        className="fixed top-4 right-4 z-[9999] bg-blue-300 hover:bg-blue-500 text-blue-900 px-3 py-1 rounded shadow-md transition"
      >
        {isFullscreen ? "Sair da Tela Cheia" : "Tela Cheia"}
      </button>

      <div
        ref={painelRef}
        className={`w-full rounded-lg p-6 overflow-auto ${
          isFullscreen
            ? "fixed top-0 left-0 z-50 h-screen"
            : "min-h-screen relative max-w-6xl mx-auto"
        }`}
        style={{
          background: "linear-gradient(135deg, #d7f0fc 0%, #ffffff 100%)", // azul piscina claro para branco
        }}
      >
        <h2 className="text-4xl font-extrabold mb-8 text-center text-blue-900">
          Painel de Atendimento
        </h2>

        <FilaAtendimento />

        <section className="mb-6">
          <h3 className="text-2xl font-semibold mb-4 text-blue-900 border-b border-blue-300 pb-2">
            Pacientes na Fila
          </h3>

          <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
            {fila.map((p, idx) => {
              let bgColor = "bg-green-50 border-green-300";
              let badgeColor = "bg-green-300 text-green-800";

              if (p.prioridade === "Alta") {
                bgColor = "bg-red-50 border-red-300";
                badgeColor = "bg-red-300 text-red-800";
              } else if (p.prioridade === "Média") {
                bgColor = "bg-yellow-50 border-yellow-300";
                badgeColor = "bg-yellow-300 text-yellow-800";
              }

              return (
                <div
                  key={p.id}
                  className={`border-l-8 rounded-md p-4 shadow-sm transition hover:shadow-md ${bgColor}`}
                  style={{ cursor: "default" }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-semibold text-blue-900">
                      {idx + 1}º - {p.nome}
                    </h4>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${badgeColor}`}
                    >
                      {p.prioridade}
                    </span>
                  </div>
                  <p className="text-sm text-blue-800 mb-1">Senha: {p.senha}</p>
                  <p className="text-blue-700">{p.motivo}</p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}
