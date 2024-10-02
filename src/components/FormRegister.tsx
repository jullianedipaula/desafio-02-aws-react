import { FiUser } from "react-icons/fi";
import { CiAt } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { MdOutlinePassword } from "react-icons/md";

export default function FormRegister() {
  return (
    <form className="bg-primary shadow-2xl w-80 rounded-lg">
      <h1 className="flex justify-center mt-8 mb-6 pt-8 mx-11 items-center font-semibold text-4xl">
        Crie seu herói
      </h1>
      <div className="relative mb-4 mx-6">
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary">
          <FiUser />
        </span>
        <input
          type="text"
          id="name"
          placeholder="Nome Completo"
          className="block w-full pl-10 pr-4 py-2 my-2 bg-gray-light rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>
      <div className="relative mb-4 mx-6">
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary">
          <CiAt />
        </span>
        <input
          type="email"
          id="email"
          placeholder="E-mail"
          className="block w-full pl-10 pr-4 py-2 my-2 bg-gray-light rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>
      <div className="relative mb-4 mx-6">
        <div className="relative">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary">
            <CiLock />
          </span>
          <input
            type="password"
            id="password"
            placeholder="Senha"
            className="block w-full pl-10 pr-4 py-2 my-2 bg-gray-light rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
      </div>
      <div className="relative mb-4 mx-6">
        <div className="relative">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary">
            <MdOutlinePassword />
          </span>
          <input
            type="password"
            id="confirm-password"
            placeholder="Confirme a senha"
            className="block w-full pl-10 pr-4 py-2 my-2 bg-gray-light rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
      </div>
      <button
        type="submit"
        className="bg-secondary font-bold text-2xl text-primary border-2 flex items-center justify-center border-secondary w-72  h-11 rounded-md mx-4 hover:bg-primary hover:text-secondary hover:border-secondary transition-colors"
      >
        Cadastrar
      </button>

      <span className="flex items-center justify-center mt-3 pb-8 font-normal text-xs">
        Já tem uma conta?{" "}
        <a
          href="#"
          className="text-secondary hover:text-primary transition-colors"
        >
          Clique aqui!
        </a>
      </span>
    </form>
  )
}
