import logoCosmos from "../../assets/logotipoCosmos.svg";

export function NewEmail() {
  return (
    <>
      <div className="h-[100vh]">
        <div className="absolute top-3 left-3">
          <img src={logoCosmos} alt="logotipo Cosmos" />
        </div>
        <div className="h-full text-center flex flex-col justify-center items-center w-full gap-10 px-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold">Atualize os seus dados</h2>
            <p className="text-sm">Seu e-mail antigo: [email@email.com]</p>
          </div>

          <form className="flex flex-col items-center w-full gap-8">
            <div className="flex flex-col w-full max-w-[384px] items-center">
              <label className="self-start text-sm">Email atualizado</label>
              <input
                type="text"
                placeholder="exemplo@email.com"
                className="text-sm cadInput max-w-[384px] w-full"
              />
            </div>
            <button className="btn w-full">Atualizar</button>
          </form>
        </div>
      </div>
    </>
  );
}
