import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogsContext } from '../context/LogsContext';
import { useLog } from '../hook/useLog';
import TableLogs from '../components/TableLogs';

const Dashboard = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [loading, setLoading] = useState(true);
  const {logs} = useContext(LogsContext);
  const { loadLogs } = useLog();

  useEffect(() => {
    const name = sessionStorage.getItem('user-name');
    setUserName(name || 'usuário');
    loadLogs().finally(() => setLoading(false));
  }, [loadLogs]);

  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/');
  };

  return (
    <div className="flex h-screen bg-background">
      <header className="bg-backgroundBlue text-fontLight fixed w-full flex items-center justify-between py-4 px-4 z-20">
        <h1 className="text-2xl">Olá! {userName}</h1>
        <nav className="flex flex-row text-fontLight">
          <button onClick={handleLogout} className="cursor-pointer text-[24px]">
            Logout
          </button>
        </nav>
      </header>
      <main className="mt-24 px-4 w-full">
        <h2 className="text-xl text-font font-semibold mb-4">
          Histórico de Logs Enviados: {logs.length}
        </h2>

        {loading ? (
          <p className="text-xl text-font">Carregando...</p>
        ) : (
          <TableLogs logs={logs} onReload={loadLogs} />
        )}
      </main>
    </div>
  );
};

export default Dashboard;
