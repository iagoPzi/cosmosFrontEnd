import styled from 'styled-components';
import satelite from '../assets/satelite.png'



interface WelcomeProps{
    ForwardPage: (page:any) => void
}

export function Welcome(props: WelcomeProps) {
    return(
        <>
        <Container className="bg-[url('./assets/bgEspaco.png')]">
            <div className="blocoMensagem">
                    <strong>Bem-vindo(a), Cosmonauta!</strong>
                <div>
                    
                    <p>No Cosmos, pessoas e organizações se unem para aprender e fazer o bem, por meio de programas de voluntariado.</p>

                    <p>Antes de começarmos, precisamos saber um pouco mais sobre você.</p>

                    <button onClick={props.ForwardPage} type="button">Começar</button>
                </div>
            </div>
            <img src={satelite} alt="Ima" />
            
            
        </Container>
        </>
    );
}


//STYLED


const Container = styled.div`
    height: 100vh;
    color: #fff;

    display: flex;
    justify-content: center;
    align-items: center;

    text-align: center;

    

    .blocoMensagem{
        width: 50rem;
        height: 32rem;
        background: #0000002b;
        backdrop-filter: blur(50px);
        
        font-size:1.25rem;

        display: grid;
        align-content: center;
        //padding: 0 10rem 0px 10rem;

        border-radius: 1rem;

        div{
            padding: 0 10rem 0px 10rem;
        }
        
        strong{
            font-size: 2.5rem;
            font-weight: 600;
            padding-bottom: 2rem;
        }

        p{
            padding-bottom: 1.25rem;
        }

        button{
            margin-top: 2rem;
            background: var(--purple-500);
            width: 100%;
            padding: 0.5rem;
            border-radius: 0.5rem;
            transition: background .2s;

            &:hover{
                background: #642BBB;
            }
        }
    }

    img{
        margin-left: -8rem;
        margin-top:-7rem;
        z-index: 1;
    }
    
    `
//STYLED