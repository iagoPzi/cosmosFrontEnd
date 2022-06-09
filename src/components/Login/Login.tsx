import { Eye, EyeClosed } from "phosphor-react";
import { FormEvent, useState } from "react";

import CosmosLogo from "../../assets/logoCosmos.svg";

export function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [showPassword, setShowPassword] = useState(false);


  return (
    <>
      <main className="h-[100vh] md:flex justify-between">
        <div className=" bg-bottom bg-[url('./assets/Planetas/bgLogin.jpg')] flex-[60%] bg-no-repeat  bg-purple-600 flex justify-center items-center mb-5 md:mb-0">
          <div className="container bg-[#00000034] rounded-2xl backdrop-blur-md p-10 w-fit m-16">
            <img
              src={CosmosLogo}
              alt="Logo Cosmos"
              className="h-[7rem] min-w-[15rem]"
            />
          </div>
        </div>

        <div className="bg-[#F9FAFF] flex-[40%] flex justify-center items-center">
          <div className="container text-center px-24">
            <h2 className="text-[#68459E] font-bold text-xl mb-4">
            Faça o seu login
            </h2>
            <form className="grid gap-5 text-sm">

              <div className="flex flex-col">
                <label htmlFor="Email" className="self-start">
                  Email
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="Email"
                  type="email"
                  placeholder="nome@email.com.br"
                  className="cadInput"
                />
              </div>
              <div className="flex flex-col relative">
                <button
                  type="button"
                  className="text-lg absolute right-2 top-[2.1rem] cursor-pointer text-[#6B78AE]"
                >
                  {showPassword ? (
                    <EyeClosed onClick={() => setShowPassword(false)} />
                  ) : (
                    <Eye onClick={() => setShowPassword(true)} />
                  )}
                </button>
                <label htmlFor="Senha" className="self-start">
                  Senha
                </label>
                <input
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  id="Senha"
                  type={showPassword ? "text" : "password"}
                  placeholder="Digite sua senha aqui"
                  className="cadInput"
                />
                <a href="#" className="text-[#A26AF8] self-end text-xs mt-2">Esqueci a minha senha</a>
              </div>
              <button type="button" className="btn w-full font-bold">Entrar</button>
            </form>

            <div className="mt-2 text-sm text-[#68459E]">
              <h3>
              Ainda não tem uma conta?
                <strong>
                  <a href="#"> Cadastre-se</a>
                </strong>
              </h3>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
