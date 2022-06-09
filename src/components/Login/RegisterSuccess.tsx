import logoCosmos from "../../assets/logotipoCosmos.svg";

export function RegisterSuccess() {
  return (
    <>
      <div className="h-[100vh] flex flex-col">
        <div className="absolute top-3 left-3">
          <img src={logoCosmos} alt="logotipo Cosmos" />
        </div>
        <div className="h-full flex flex-col justify-center items-center gap-10 md:gap-20 text-center px-7">
          <div className="flex flex-col gap-3">
            <h2 className="font-bold text-2xl">Você finalizou seu cadastro!</h2>

            <p className="text-lg">
              Verifique sua conta pelo link que enviamos para o<br />
              e-mail [email@email.com] e depois faça seu login
            </p>
          </div>

          <button type="button" className="btn w-full">
            Fazer login
          </button>

          <div className="flex flex-col text-[#6F5597] gap-4 text-sm">
            <p className="text-xs text-[#443F4D]">
              Caso não tenha recebido o link, verifique sua caixa
              <br />
              de spam e veja se o email fornecido está correto
            </p>
            <div className="flex flex-col md:flex-row gap-5">
              <a href="#">Enviar novo link de confirmação</a>
              <a href="#">Trocar email</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
