//import Sidebar from './components/Sidebar.jsx';
import Header from './components/Header.jsx';
import CadastroPaciente from './components/CadastroPaciente.jsx';
import Triagem from './components/Triagem.jsx';
import FilaAtendimento from './components/FilaAtendimento.jsx';
import PainelTV from './components/PainelTV.jsx';
import PainelMedico from './components/PainelMedico.jsx';
import LegendaPrioridades from './components/LegendaPrioridades.jsx';
import { AppProvider } from './context/AppContext.jsx';

export default function App() {
  return (
    <AppProvider>
      <div className="flex h-screen bg-gray-100">
        <main className="flex-1 p-4">
          <Header />
          <CadastroPaciente />
          <Triagem />
          <FilaAtendimento />
          <PainelTV />
          <PainelMedico />
          <LegendaPrioridades />
        </main>
      </div>
    </AppProvider>
  );
}