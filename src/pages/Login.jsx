import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useEmailValidation from "../hook/useEmailValidation";
import PopUpMessage from "../components/PopupMessage";
import { useLogin } from "../hook/useFetch";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState('');
  const validateEmail = useEmailValidation();
  const navigate = useNavigate();

  const showMessage = (msg, type = 'success') => {
    setMessage(msg);
    setMessageType(type);
    setTimeout(() => setMessage(null), 4000);
  };

  const { mutate, isLoading } = useLogin();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      showMessage('E-mail inválido.', 'error');
      return;
    }

    mutate(
      { email, password }, {
      onSuccess: () => {
        showMessage('Login realizado com sucesso', 'success');
        setEmail('');
        setPassword('');
        navigate('/dashboard');
      },
      onError:(error) => {
        showMessage(error.message || 'Erro ao tentar logar', 'error');
        console.error('Erro ao fazer login:', error.message);
      }
    });
  };

  return (
    <div className="flex bg-background">
      <PopUpMessage message={message} type={messageType} />

      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <div className=" flex flex-col items-center gap-1 mb-14">
          <h1 className="text-font text-2xl font-light">LOGIN</h1>
          <h2 className="text-font text-lg font-extralight">Faça seu login</h2>
        </div>
        <form onSubmit={handleLogin} className="flex flex-col">
          <div className=" flex flex-col gap-1">
            <div className="flex flex-col gap-5 items-center">
              <input
                className="w-[350px] bg-background border-2 border-backgroundBlue md:w-[400px] h-[55px] rounded-[10px] p-4 outline-none font-extralight"
                placeholder="Digite seu E-mail"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
              />
              <input
                className="w-[350px] bg-background border-2 border-backgroundBlue md:w-[400px] h-[55px] rounded-[10px] p-4 outline-none font-extralight"
                placeholder="Digite sua Senha"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
              />
            </div>
            <div className="flex">
              <Link to="/recover" className="ml-auto text-xs font-extralight transition hover:text-backgroundBlue duration-300">
                Esqueci minha senha
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-1 mt-14 items-center">
            <button
              type="submit"
              className="bg-backgroundBlue text-background font-light rounded-[5px] w-[150px] h-[45px] py-3 transition ease-in-out hover:bg-opacity-80 duration-500 text-center cursor-pointer"
              disabled={isLoading}
            >
              {isLoading ? 'Entrando...' : 'Login'}
            </button>
            <span className="font-extralight text-xs transition hover:text-backgroundBlue duration-300">
              <Link to="/register">Cadastrar</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login
