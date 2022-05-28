import Fechar from "../../assets/fechar.svg";

export function FormInscricao1() {
  return (
    <>
      <header className="">
        <div className="mx-3">
          <div className="py-5 container mx-auto flex justify-between items-center">
            <div className="flex flex-wrap items-center flex-col">
              <p className="self-start text-[#6B78AE] text-sm">
                Formulário de Inscrição
              </p>
              <h2 className="text-[#5200AB] text-2xl font-bold">
                Nome do Programa
              </h2>
            </div>

            <div>
              <button className="bg-white">
                <img
                  src={Fechar}
                  alt="Botão de fechar"
                  className="max-h-[5rem]"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="h-[.4rem] bg-gradient-to-r from-[#65BAFA] to-[#9D37F2] "></div>
      </header>

      <main>
        <form>
          <input type="select" placeholder="Opções" className="border-2 rounded-md p-1"/>
          <div>
            <select name="" id="">
                <option value="" disabled>Opções</option>
            </select>
            
          </div>
        </form>
      </main>
    </>
  );
}
