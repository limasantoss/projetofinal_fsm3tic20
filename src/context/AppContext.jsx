import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [pacientes, setPacientes] = useState(() => {
    const salvos = localStorage.getItem("pacientes");
    return salvos ? JSON.parse(salvos) : [];
  });

  const [emTriagem, setEmTriagem] = useState(() => {
    const salvo = localStorage.getItem("emTriagem");
    return salvo ? JSON.parse(salvo) : null;
  });

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  useEffect(() => {
    localStorage.setItem("emTriagem", JSON.stringify(emTriagem));
  }, [emTriagem]);

  function cadastrarPaciente(nome, motivo) {
    const senha = (pacientes.length + 1).toString().padStart(3, "0");
    const paciente = {
      id: Date.now(),
      nome,
      motivo,
      senha,
      prioridade: null,
      status: "aguardando-triagem",
      horario: new Date().toLocaleTimeString(),
    };
    setPacientes([...pacientes, paciente]);
    setEmTriagem(paciente);
  }

  function classificarPaciente(prioridade) {
    if (!emTriagem) return;
    setPacientes((pacs) =>
      pacs.map((p) =>
        p.id === emTriagem.id ? { ...p, prioridade, status: "em-fila" } : p
      )
    );
    setEmTriagem(null);
  }

  const fila = pacientes.filter((p) => p.status === "em-fila");

  function iniciarAtendimento(id) {
    setPacientes((pacs) =>
      pacs.map((p) =>
        p.id === id ? { ...p, status: "em-atendimento" } : p
      )
    );
  }

  function finalizarAtendimento(id) {
    setPacientes((pacs) => pacs.filter((p) => p.id !== id));
  }

  const emAtendimento = pacientes.filter((p) => p.status === "em-atendimento");

  return (
    <AppContext.Provider
      value={{
        pacientes,
        setPacientes,
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
