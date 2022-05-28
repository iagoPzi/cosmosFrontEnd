import Calendar from "../../assets/calendar.svg";
import Clock from "../../assets/clock.svg";
import Fechar from "../../assets/fechar.svg";

export function NovasAventuras() {
  return (
    <div className="h-[100vh] grid">
      <header className="">
        <div className="mx-3">
          <div className="py-5 container mx-auto flex justify-between items-center">
            <div className="flex flex-wrap gap-5 items-center">
              <h2 className="text-[#5200AB] text-2xl font-bold">
                Nome do Programa
              </h2>
              <div className="flex items-center gap-1">
                <img
                  src={Calendar}
                  alt="Imagem de um calendário"
                  className="h-[2rem]"
                />
                <div className="text-[#5200AB] font-bold text-[.7rem] leading-3">
                  <p>De dd/mm/aaaa</p>
                  <p>Até dd/mm/aaaa</p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <img
                  src={Clock}
                  alt="Imagem de um relógio"
                  className="h-[2rem]"
                />
                <div className="text-[#5200AB] font-bold text-[.7rem] leading-3">
                  <p>
                    X Horas de dedicação
                    <br />
                    por semana
                  </p>
                </div>
              </div>
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
        <div className="container mx-auto h-[25rem] p-2 overflow-auto my-5">
          <p>
            No Programa Mentoria 1, você atuará como mentor(a) voluntário(a) de
            uma organização social que atua na causa da educação ou da saúde.
            Você trabalhará em equipe com outros voluntários da Empresa X para
            apoiar o desenvolvimento da instituição e contribuir para aumentar o
            seu impacto social. Serão realizados encontros semanais de mentoria,
            em que a equipe de mentores aconselhará os líderes da organização
            mentorada em temas relacionados à gestão, como finanças, marketing,
            recursos humanos, estratégia, entre outros. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Quisque cursus ornare dignissim.
            Mauris et consectetur nibh. Sed nec sem ante. Phasellus faucibus
            scelerisque eleifend. Pellentesque sapien sem, elementum et blandit
            id, aliquet id ex. Para se inscrever, clique no botão a seguir.No
            Programa Mentoria 1, você atuará como mentor(a) voluntário(a) de uma
            organização social que atua na causa da educação ou da saúde. Você
            trabalhará em equipe com outros voluntários da Empresa X para apoiar
            o desenvolvimento da instituição e contribuir para aumentar o seu
            impacto social. Serão realizados encontros semanais de mentoria, em
            que a equipe de mentores aconselhará os líderes da organização
            mentorada em temas relacionados à gestão, como finanças, marketing,
            recursos humanos, estratégia, entre outros. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Quisque cursus ornare dignissim.
            Mauris et consectetur nibh. Sed nec sem ante. Phasellus faucibus
            scelerisque eleifend. Pellentesque sapien sem, elementum et blandit
            id, aliquet id ex. Para se inscrever, clique no botão a seguir.
          </p>
        </div>
      </main>

      <div className="container mx-auto flex justify-center self-end mb-5">
        <button className="btn font-semibold">Inscrever-me</button>
      </div>
    </div>
  );
}
