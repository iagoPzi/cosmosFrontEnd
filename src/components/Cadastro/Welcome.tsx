import styled from 'styled-components';
import satelite from '../../assets/satelite.png'



interface WelcomeProps{
    ForwardPage: (page:any) => void
}

export function Welcome(props: WelcomeProps) {
    return(
        <>
        <Container className="h-[100vh] bg-[url('./assets/bgEspaco.png')] flex flex-col text-white justify-center items-center md:flex-row">
            <div className="bg-[#0000002f] p-3 py-5 rounded-md backdrop-blur-[8px] m-5 text-center flex flex-col gap-5 items-center text-sm h-fit 
            md:text-[1.25rem] md:leading-7 md:gap-9 md:p-[5rem]">
                    <strong className="text-base md:text-[2.5rem]">Bem-vindo(a), Cosmonauta!</strong>
                
                    
                    <p>No Cosmos, pessoas e organizações se<br />unem para aprender e fazer o bem, por<br />meio de programas de voluntariado.</p>

                    <p>Antes de começarmos, precisamos saber<br />um pouco mais sobre você.</p>

                    <button onClick={props.ForwardPage} type="button"
                    className="bg-[#7A40D3] rounded-md transition-colors hover:bg-[#642BBB] focus:bg-[#642BBB] w-fit p-2 px-10">Começar</button>
                
            </div>
            <img src={satelite} alt="Imagem de um satélite"
            className="z-10 h-[11rem] self-center md:h-[25rem] md:ml-[-10rem] md:mt-[-10rem]" />
            
            
        </Container>
        </>
    );
}


//STYLED


const Container = styled.div`
    
    
    `
//STYLED