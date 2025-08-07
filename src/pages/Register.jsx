import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import PopupMessage from "../components/PopupMessage";
import useEmailValidation from "../hook/useEmailValidation";
import useNameValidation from "../hook/useNameValidation";
import usePasswordValidation from "../hook/usePasswordValidation";
import { useRegister } from "../hook/useFetch";

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const validateEmail = useEmailValidation();
  const validateName = useNameValidation();
  const validatePassword = usePasswordValidation();
  const { mutate, isLoading } = useRegister();

  const showMessage = (msg, type = 'success') => {
    setMessage(msg);
    setMessageType(type);
    setTimeout(() => setMessage(null), 4000);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (!validateEmail(email)) {
      showMessage('E-mail inválido.', 'error');
      return;
    }
    if (!validateName(name)) {
      showMessage('Nome inválido: mínimo 11 caracteres e não pode ser repetido.', 'error');
      return;
    }
    if (!validatePassword(password)) {
      showMessage('Senha inválida: mínimo 11 caracteres.', 'error');
      return;
    }

    mutate(
      { name, email, password },
      {
        onSuccess: () => {
          showMessage('Usuário cadastrado com sucesso! Redirecionando...', 'success');
          setName('');
          setEmail('');
          setPassword('');
          setSubmitted(false);
          setTimeout(() => navigate('/'), 3000);
        },
        onError: (error) => {
          showMessage(error.message || 'Erro ao cadastrar usuario', 'error');
          console.error('Error => ', error.message);
        }
      });
  };

  // Definir classes dinamicamente
  const getInputClass = (isValid) =>
    `w-[350px] bg-background border-2 h-[55px] rounded-[10px] p-4 outline-none font-extralight ${
      submitted && !isValid ? 'border-red-500' : 'border-backgroundBlue'
    }`;

  return (
    <div className="flex bg-background">
      <PopupMessage message={message} type={messageType} />

      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <div className="w-[350px] flex mb-5 p-1">
          <Link to="/" className="font-light opacity-50 flex flex-row items-center gap-2">
            <i className="icon fa-solid fa-angle-left"></i>Voltar
          </Link>
        </div>

        <div className="w-[350px] flex flex-col gap-2 mb-10">
          <h1 className="text-font text-4xl font-normal">Cria conta!</h1>
          <h2 className="text-font text-[16px] font-extralight">
            Ao final do cadastro, a senha será enviada para o seu e-mail.
          </h2>
        </div>

        <form onSubmit={handleRegister} className="flex flex-col gap-10 items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <input
              disabled={isLoading}
              onChange={(e) => setName(e.target.value)}
              value={name}
              className={getInputClass(validateName(name))}
              placeholder="Nome de usuário"
              type="text"
              required
            />
            <input
              disabled={isLoading}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className={`w-[350px] bg-background border-2 h-[55px] rounded-[10px] p-4 outline-none font-extralight ${
                submitted && !validateEmail(email) ? 'border-red-500' : 'border-backgroundBlue'
              }`}
              placeholder="Digite seu e-mail"
              type="email"
              required
            />
            <input
              disabled={isLoading}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className={getInputClass(validatePassword(password))}
              placeholder="Digite sua senha"
              type="password"
              required
            />
          </div>

          <button
            disabled={isLoading}
            type="submit"
            className="bg-backgroundBlue text-background font-light rounded-[5px] w-[350px] h-[50px] py-3 transition ease-in-out hover:bg-opacity-80 duration-500 text-center cursor-pointer"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
