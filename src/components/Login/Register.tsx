import { Eye, EyeClosed } from "phosphor-react";
import { FormEvent, useEffect, useState } from "react";

import CosmosLogo from "../../assets/logoCosmos.svg";
import { api } from "../../services/api";


export function Register() {
  const [ID, setID] = useState(1);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);


  const SubmitForm = (e: FormEvent) => {

   

    if (senha === confirmaSenha) {
      e.preventDefault();
      setID(ID + 1);

      const User = {
        nome,
        email,
        senha
      };

      api.post("/users", User.email);
  

        setNome(""),
        setEmail(""),
        setSenha(""),
        setConfirmaSenha(""),
        setShowPassword(false),
        setShowPassword1(false)
        
    } else {
      e.preventDefault();
      alert("senha errada");
    }
  };

  useEffect(() => {
    api.get("/users").then(response => {
      console.log(response.data);
    });
  }, [])
 

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
              Cadastro para voluntariado
            </h2>
            <form onSubmit={SubmitForm} className="grid gap-5 text-sm">
              <div className="flex flex-col">
                <label htmlFor="Nome" className="self-start">
                  Nome completo
                </label>
                <input
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  id="Nome"
                  placeholder="Nome e sobrenome"
                  className="cadInput"
                />
              </div>

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
                  type={!showPassword ? "text" : "password"}
                  placeholder="Digite sua senha aqui"
                  className="cadInput"
                />
              </div>
              <div className="flex flex-col relative">
                <button
                  type="button"
                  className="text-lg absolute right-2 top-[2.1rem] cursor-pointer text-[#6B78AE]"
                >
                  {showPassword1 ? (
                    <EyeClosed onClick={() => setShowPassword1(false)} />
                  ) : (
                    <Eye onClick={() => setShowPassword1(true)} />
                  )}
                </button>
                <label htmlFor="ConfirmaSenha" className="self-start">
                  Confirme a senha
                </label>
                <input
                  value={confirmaSenha}
                  onChange={(e) => setConfirmaSenha(e.target.value)}
                  id="ConfirmaSenha"
                  type={!showPassword1 ? "text" : "password"}
                  placeholder="Digite sua senha aqui"
                  className="cadInput"
                />
              </div>
              <button className="btn w-full">Criar conta</button>
            </form>

            <div className="mt-2 text-sm text-[#68459E]">
              <h3>
                Já tem conta?{" "}
                <strong>
                  <a href="#">Fazer login</a>
                </strong>
              </h3>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
