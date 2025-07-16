import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react'; 

export default function ModoNoturno() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="fixed bottom-4 right-4 z-50 p-2 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 transition"
      aria-label="Alternar modo escuro"
    >
      {dark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
