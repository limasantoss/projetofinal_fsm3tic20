export default function LegendaPrioridades() {
  return (
    <div className="mt-4 bg-white p-2 rounded text-xs border">
      <b>Legenda:</b>
      <span className="ml-2 text-red-600"> Alta</span>  {/* Lembrar de colocar algo para identificar  ex : alta colocar uma bola vermelha  */}
      <span className="ml-2 text-yellow-600"> Média</span>
      <span className="ml-2 text-green-600"> Normal</span>
    </div>
  );
}