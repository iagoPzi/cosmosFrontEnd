
import { ArrowLeft } from "phosphor-react";
import styled from "styled-components";

import astronauta from '../assets/astronauta.png'

// styled

const Container = styled.div`
    height: 100vh;
    background: url('../assets/bgCadastro.png');

    display: flex;
    justify-content: center;

    .blocoGenero{
        width: 25rem;
        height: 25rem;
        
        justify-content: center;
        gap: 1.25rem;

        border-radius: 1rem;

        background: #0000002b;
        backdrop-filter: blur(50px);
    }

    strong{
            font-size: 1.5rem;
            font-weight: 600;
        }

    button{
            
            background: var(--purple-500);
            width: 100%;
            padding: 0.5rem;
            border-radius: 0.5rem;
            transition: background .2s;

            &:hover{
                background: #642BBB;
            }
        }
`
// styled

interface GenderSelectionProps{
    ToggleWelcomeActive: () => void
}

export function GenderSelection(props: GenderSelectionProps){
    return(
        <>

            <Container className="gap-[8rem]">
                <span 
                className="cursor-pointer absolute top-10 left-10 bg-[#00000034] p-3 rounded-full backdrop-blur-md"
                onClick={props.ToggleWelcomeActive}
                >
                <ArrowLeft size={20} className="text-white"/>
                </span>
                <img className="h-[30rem] self-end" src={astronauta} alt="" />

                <div className="blocoGenero flex flex-col text-center text-white self-center p-10 ">

                    <strong>Com qual gênero você se identifica?</strong>
                    <p>Utilizaremos esses dados para mapear o público da nossa plataforma!</p>
                    <button type="button">Feminino</button>
                    <button type="button">Masculino</button>
                    <button type="button">Outro</button>
                </div>
            </Container>
        
        </>

    );
}