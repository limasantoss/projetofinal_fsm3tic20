import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext.jsx';

import './styles/App.css';
import Sidebar from './components/Sidebar.jsx';
import CadastroPaciente from './components/CadastroPaciente.jsx';
import Triagem from './components/Triagem.jsx';
import PainelTV from './components/PainelTV.jsx';
import PainelMedico from './components/PainelMedico.jsx';
import ModoNoturno from './components/ModoNoturno.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <div className="flex h-screen bg-gray-100 dark:bg-gray-900 dark:text-white min-h-screen">
          <Sidebar />
          <ModoNoturno />
          <main className="flex-1 p-4 overflow-auto">
            <Routes>
              <Route path="/" element={<CadastroPaciente />} />
              <Route path="/triagem" element={<Triagem />} />
              <Route path="/painel-tv" element={<PainelTV />} />
              <Route path="/painel-medico" element={<PainelMedico />} />
            </Routes>
          </main>
        </div>
      </AppProvider>
    </BrowserRouter>
  );
}
