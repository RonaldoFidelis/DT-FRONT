import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

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
    <form onSubmit={handleRegister}>
      <h2>Cadastro</h2>
      <input type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Registrar</button>
    </form>
  )
}

export default Register
