import { useState } from "react";
import { useApp } from "../context/AppContext";

export default function CadastroPaciente() {
  const { cadastrarPaciente, emTriagem } = useApp();
  const [nome, setNome] = useState("");
  const [motivo, setMotivo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (nome && motivo && !emTriagem) {
      cadastrarPaciente(nome, motivo);
      setNome("");
      setMotivo("");
    }
  }

  return (
    <div className="p-4 bg-white border rounded mb-4 shadow">
      <h2 className="font-bold mb-2">Cadastro de Paciente</h2>
      <form onSubmit={handleSubmit} className="flex gap-2 flex-col sm:flex-row">
        <input
          className="border p-2 rounded flex-1"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          className="border p-2 rounded flex-1"
          placeholder="Motivo"
          value={motivo}
          onChange={(e) => setMotivo(e.target.value)}
        />
        <button
          className={`px-4 rounded text-white ${
            !nome || !motivo || emTriagem
              ? "bg-blue-300 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
          type="submit"
          disabled={!nome || !motivo || emTriagem}
        >
          Cadastrar
        </button>
      </form>
      {emTriagem && (
        <p className="text-xs text-red-500 mt-2">
          Realize a triagem do paciente atual antes de cadastrar outro.
        </p>
      )}
    </div>
  );
}
