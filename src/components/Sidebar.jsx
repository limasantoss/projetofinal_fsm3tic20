export default function Sidebar() {
  return (
    <div className="w-60 bg-blue-900 text-white flex flex-col space-y-2 p-4">
      <h1 className="text-xl font-bold mb-4">Painel Recepção</h1>
      <span className="bg-blue-700 p-2 rounded text-center">Painel da TV</span>
      <span className="bg-blue-700 p-2 rounded text-center">Painel do Médico</span>
      <span className="bg-blue-700 p-2 rounded text-center">Atendimento</span>
      <span className="bg-blue-700 p-2 rounded text-center">Triagem</span>
    </div>
  );
}