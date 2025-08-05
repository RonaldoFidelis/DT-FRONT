import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div className="flex bg-background">
      {/*Tela de login*/}
      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <div className=" flex flex-col items-center gap-1 mb-14">
          <h1 className="text-font text-2xl font-normal">LOGIN</h1>
          <h2 className="text-font text-lg font-light">Faça seu login</h2>
        </div>

        <form action="#" method="post" className="flex flex-col">
          {/*Inputs*/}
          <div className=" flex flex-col gap-1">
            <div className="flex flex-col gap-5 items-center">
              <input className="w-[350px] bg-background border-2 border-backgroundBlue md:w-[400px] h-[55px] rounded-[10px] p-4 outline-none font-extralight" placeholder="Digite seu E-mail" type="email" name="" id="" required />
              <input className="w-[350px] bg-background border-2 border-backgroundBlue md:w-[400px] h-[55px] rounded-[10px] p-4 outline-none font-extralight" placeholder="Digite sua Senha" type="password" name="" id="" required />
            </div>
            <div className="flex">
              <a className="ml-auto text-xs font-extralight transition hover:text-backgroundBlue duration-300" href="#">
                Esqueci minha senha
              </a>
            </div>
          </div>
          {/*BTN*/}
          <div className="flex flex-col gap-1 mt-14 items-center">
            <Link to="/" className="bg-backgroundBlue text-background font-light rounded-[5px] w-[150px] h-[45px] py-3 transition ease-in-out hover:bg-opacity-80 duration-500 text-center">Login</Link>
            <span className="font-extralight text-xs transition hover:text-backgroundBlue duration-300">
              <Link to="*">Solicite cadastro</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
