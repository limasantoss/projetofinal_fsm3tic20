import { Link, useLocation } from "react-router-dom";

const links = [
  { to: "/", label: "Cadastro Paciente", icon: "📝" },
  { to: "/triagem", label: "Triagem", icon: "🩺" },
  { to: "/painel-tv", label: "Painel TV", icon: "📺" },
  { to: "/painel-medico", label: "Painel Médico", icon: "👨‍⚕️" },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 bg-blue-900 text-white flex flex-col p-6 min-h-screen">
      <h1 className="text-2xl font-extrabold mb-8 select-none">Painel Recepção</h1>
      <nav className="flex flex-col space-y-3">
        {links.map(({ to, label, icon }) => {
          const isActive = location.pathname === to;
          return (
            <Link
              key={to}
              to={to}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors
                ${isActive ? "bg-blue-700 shadow-lg font-semibold" : "hover:bg-blue-800"}`}
            >
              <span className="text-xl">{icon}</span>
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
