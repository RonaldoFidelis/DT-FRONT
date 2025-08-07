import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const name = sessionStorage.getItem('user-name');
    setUserName(name || 'usuário');
  }, []);

  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/');
  }

  return (
    <div className='flex bg-background w-screen h-screen'>
      <header className='bg-backgroundBlue text-fontLight fixed w-full flex items-center justify-between py-4 px-4 z-20'>
        <h1 className='text-2xl'>
          Olá! {userName}
        </h1>
        <nav className='flex flex-row text-fontLight'>
          <button
            onClick={handleLogout}
            className='cursor-pointer text-[24px]'>
            Logout
          </button>
        </nav>
      </header>
      <main>

      </main>
    </div>
  )
}

export default Dashboard
