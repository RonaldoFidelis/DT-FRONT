import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:8080/api/auth/register', { email, password })
      alert('Usuário registrado com sucesso!')
      navigate('/')
    } catch (e) {
      alert(`${e}: Erro ao tentar se registrar`)
    }
  }
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-background">
      <div className="w-[350px] flex mb-5 p-1">
        <Link to="/" className="font-light opacity-50 flex flex-row flex-nowrap items-center justify-center gap-2">
          <i className="icon fa-solid fa-angle-left" ></i>
          Voltar</Link>
      </div>
      <div className="w-[350px] flex flex-col items-baseline-last text-wrap gap-2 mb-10">
        <h1 className="text-font text-4xl font-normal">Cria conta!</h1>
        <h2 className="text-font text-[16px] font-extralight">Ao final do cadastro, a senha será enviada para o seu e-mail.</h2>
      </div>
      <form onSubmit={handleRegister} className="flex flex-col gap-10 items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <input onChange={(e) => setEmail(e.target.value)} className="w-[350px] bg-background border-2 border-backgroundBlue h-[55px] rounded-[10px] p-4 outline-none font-extralight" placeholder="Nome de usuário" type="text" name="" id="" required />

          <input onChange={(e) => setEmail(e.target.value)} className="w-[350px] bg-background border-2 border-backgroundBlue h-[55px] rounded-[10px] p-4 outline-none font-extralight" placeholder="Digite seu e-mail" type="email" name="" id="" required />

          <input onChange={(e) => setPassword(e.target.value)} className="w-[350px] bg-background border-2 border-backgroundBlue h-[55px] rounded-[10px] p-4 outline-none font-extralight" placeholder="Digite sua senha" type="password" name="" id="" required />
        </div>
        <button type="submit" className="bg-backgroundBlue text-background font-light rounded-[5px] w-[350px] h-[50px] py-3 transition ease-in-out hover:bg-opacity-80 duration-500 text-center cursor-pointer">
          Cadastrar
        </button>
      </form>
    </div>
  )
}

export default Register
