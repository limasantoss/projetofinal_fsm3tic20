import { createContext, useContext, useState } from "react";

// CONTEXT
const AppContext = createContext();

export function AppProvider({ children }) {
  const [pacientes, setPacientes] = useState([]);
  const [emTriagem, setEmTriagem] = useState(null);

  // Função para cadastrar paciente
  function cadastrarPaciente(nome, motivo) {
    const senha = (pacientes.length + 1).toString().padStart(3, "0");
    const paciente = {
      id: Date.now(),
      nome,
      motivo,
      senha,
      prioridade: null,
      status: "aguardando-triagem",
    };
    setPacientes([...pacientes, paciente]);
    setEmTriagem(paciente);
  }

  // Função para aplicar triagem
  function classificarPaciente(prioridade) {
    if (!emTriagem) return;
    setPacientes((pacs) =>
      pacs.map((p) =>
        p.id === emTriagem.id ? { ...p, prioridade, status: "em-fila" } : p
      )
    );
    setEmTriagem(null);
  }

  // Pacientes em fila (após triagem)
  const fila = pacientes.filter((p) => p.status === "em-fila");

  // Função para iniciar atendimento
  function iniciarAtendimento(id) {
    setPacientes((pacs) =>
      pacs.map((p) =>
        p.id === id ? { ...p, status: "em-atendimento" } : p
      )
    );
  }

  // Função para finalizar atendimento
  function finalizarAtendimento(id) {
    setPacientes((pacs) =>
      pacs.filter((p) => p.id !== id)
    );
  }

  // Pacientes em atendimento
  const emAtendimento = pacientes.filter((p) => p.status === "em-atendimento");

  return (
    <AppContext.Provider
      value={{
        pacientes,
        emTriagem,
        cadastrarPaciente,
        classificarPaciente,
        fila,
        emAtendimento,
        iniciarAtendimento,
        finalizarAtendimento,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}