import { useState } from "react";
import { Link } from "react-router-dom"
import useEmailValidation from "../hook/useEmailValidation";
import PopUpMessage from "../components/PopupMessage";
import { useRecoverPassword } from "../hook/useFetch";

const RecoverPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState('');
  const [submit, setSubmit] = useState(false)
  const validateEmail = useEmailValidation();

  const showMessage = (msg, type = 'success') => {
    setMessage(msg);
    setMessageType(type);
    setTimeout(() => setMessage(null), 5000);
  };

  const { mutate } = useRecoverPassword();

  const handleRecoverPassword = async (e) => {
    e.preventDefault();
    setSubmit(true);

    if (!validateEmail(email)) {
      showMessage('E-mail inválido.', 'error');
      setSubmit(false);
      return;
    }

    mutate(
      { email },
      {
        onSuccess: (data) => {
          showMessage(data, 'success');
          setEmail('');
          setSubmit(false);
        },
        onError: (error) => {
          showMessage(error.message || 'Usuário não identificado', 'error');
          setSubmit(false);
        },
      }
    );
  };


  return (
    <div className="flex bg-background">
      <PopUpMessage message={message} type={messageType} />
      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <div className="w-[350px] flex mb-5 p-1">
          <Link to="/" className="font-light opacity-50 flex flex-row flex-nowrap items-center justify-center gap-2">
            <i className="icon fa-solid fa-angle-left" ></i>
            Voltar</Link>
        </div>
        <div className="w-[350px] flex flex-col items-baseline-last text-wrap gap-2 mb-10">
          <h1 className="text-font text-4xl font-normal">Redefinir senha!</h1>
          <h2 className="text-font text-[16px] font-extralight">Informe um e-mail e enviaremos um link para redefinir a sua senha.</h2>
        </div>
        <form onSubmit={handleRecoverPassword} className="flex flex-col gap-10 items-center justify-center">
          <div className="flex flex-col items-center">
            <input
              placeholder="Digite seu E-mail"
              type="email" required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={submit}
              className={`w-[350px] border-2 h-[55px] rounded-[10px] p-4 outline-none transition-colors duration-500 ease-in-out  ${submit
                ? 'border-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-background font-extralight border-backgroundBlue'
                }`}
            />
          </div>
          <button
            disabled={submit}
            type="submit"
            className={`w-[350px] h-[50px] py-3 rounded-[5px] text-background font-light transition ease-in-out duration-500 text-center  ${submit
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-backgroundBlue cursor-pointer'
              }`}>
            {submit ? 'Aguarde...' : 'Enviar link de recuperação'}
          </button>
        </form>
      </div>
    </div>

  )
}

export default RecoverPassword
