import { Link } from "react-router-dom"

const RecoverPassword = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-background">
      <div className="w-[350px] flex mb-5 p-1">
        <Link to="/" className="font-light opacity-50 flex flex-row flex-nowrap items-center justify-center gap-2">
        <i className="icon fa-solid fa-angle-left" ></i>
        Voltar</Link>
      </div>
      <div className="w-[350px] flex flex-col items-baseline-last text-wrap gap-2 mb-10">
          <h1 className="text-font text-4xl font-normal">Redefinição de senha!</h1>
          <h2 className="text-font text-[16px] font-extralight">Informe um e-mail e enviaremos um link para recuperação da sua senha.</h2>
        </div>
      <form className="flex flex-col gap-10 items-center justify-center">
        <div className="flex flex-col items-center">
            <input className="w-[350px] bg-background border-2 border-backgroundBlue h-[55px] rounded-[10px] p-4 outline-none font-extralight" placeholder="Digite seu E-mail" type="email" name="" id="" required />
          </div>
        <button type="submit" className="bg-backgroundBlue text-background font-light rounded-[5px] w-[350px] h-[50px] py-3 transition ease-in-out hover:bg-opacity-80 duration-500 text-center cursor-pointer">
          Enviar link de recuperação
        </button>
      </form>
    </div>
  )
}

export default RecoverPassword
