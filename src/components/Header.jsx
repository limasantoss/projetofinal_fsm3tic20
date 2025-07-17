import dayjs from 'dayjs';

export default function Header() {
  const now = dayjs();
  return (
    <div className="flex justify-between items-center bg-blue-900 text-white p-2 rounded mb-4">
      <span> Recepção</span>
      <span>{now.format('DD/MM/YYYY')}</span>  {/*lembrar de colocar o horario tbm */}
    </div>
  );
}