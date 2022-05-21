
import { useState } from "react";

import { ArrowLeft, CaretLeft, Check, Plus } from "phosphor-react";
import styled from "styled-components";

import astronauta from '../assets/astronauta.png'



interface GenderSelectionProps{
    BackPage: () => void,
    ForwardPage: () => void
}


export function GenderSelection(props: GenderSelectionProps){

    const [genderSelect, setGenderSelect] = useState('');
    const [otherGenderActive, setOtherGenderActive] = useState(true);
    
    return(
        <>

            <Container className="gap-[8rem] bg-[url('./assets/bgCadastro.png')] bg-bottom flex-wrap-reverse">
                <button 
                className="cursor-pointer absolute top-10 left-10 bg-[#00000034] p-3 rounded-full backdrop-blur-md hover:bg-[#642BBB] focus:bg-[#642BBB] transition-colors"
                onClick={props.BackPage}
                >
                <ArrowLeft size={20} className="text-white"/>
                </button>
                <img className="max-h-[30rem] self-start" src={astronauta} alt="" />

                <div className="blocoGenero flex flex-col text-center text-white self-center p-10 ">

                    <strong>Com qual gênero você se identifica?</strong>
                    <p>Utilizaremos esses dados para mapear o público da nossa plataforma!</p>
                    <RadioBox onClick={() => setGenderSelect('Feminino')} 
                    className="focus:bg-[#6a11f0]" type="button">Feminino</RadioBox>

                    <RadioBox onClick={() => setGenderSelect('Masculino')} 
                    className="focus:bg-[#6a11f0]" type="button">Masculino</RadioBox>
                    
                    {otherGenderActive ? <RadioBox onClick={() => setOtherGenderActive(!otherGenderActive)}className="focus:bg-[#642BBB]" type="button">Outro</RadioBox> :
                    <div className="flex items-center gap-3">
                        <button type="button" onClick={() => setOtherGenderActive(!otherGenderActive)}
                        className="bg-[#7A40D3] rounded-md transition-colors hover:bg-[#642BBB] focus:bg-[#642BBB] p-1"><CaretLeft size={32} /></button>

                        <input value={genderSelect}
                         onChange={(e => setGenderSelect(e.target.value))}
                         placeholder="Qual seu gênero?" 
                        className="p-2 rounded-md text-black w-full" />


                    </div>
                    }

                    <button type="button" 
                    onClick={props.ForwardPage}
                    className="bg-[#7A40D3] rounded-md transition-colors hover:bg-[#642BBB] focus:bg-[#642BBB] w-28 self-center p-2">Próximo</button>
                </div>
            </Container>
        
        </>

    );
}

// styled

const Container = styled.div`
    height: 100vh;

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

`

const RadioBox = styled.button`
    background: var(--purple-500);
    width: 100%;
    padding: 0.5rem;
    border-radius: 0.5rem;
    transition: background .2s;

    &:hover{
        background: #642BBB;
    }
`
// styled