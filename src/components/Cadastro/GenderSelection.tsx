
import { useState } from "react";

import { ArrowLeft, CaretLeft, Check, Plus } from "phosphor-react";
import styled from "styled-components";

import astronauta from '../../assets/astronauta.png'
import { Link, useNavigate } from "react-router-dom";



interface GenderSelectionProps{
    GenderSelect: (Gender:string) => void
}


export function GenderSelection(props: GenderSelectionProps){
    const navigate = useNavigate();

    const [genderSelect, setGenderSelect] = useState('');
    const [otherGenderActive, setOtherGenderActive] = useState(true);
    
    function OtherGenderSelect(){
        props.GenderSelect(genderSelect)
        navigate('/birthday');
    }

    return(
        <>

            <Container className="bg-[url('./assets/bgCadastro.png')] bg-bottom h-[100vh]">
                
                <Link to={'/'}>
                <button 
                className="cursor-pointer bg-[#00000034] p-2 rounded-full backdrop-blur-md hover:bg-[#642BBB] focus:bg-[#642BBB] transition-colors text-sm md:text-[1.5rem] md:absolute md:top-20
                md:left-16"
                >
                <ArrowLeft className="text-white"/>
                </button>
                </Link>

                <div className="h-[93vh] flex flex-wrap justify-center items-center md:h-full md:gap-[5rem]">


                    <div className="bg-[#00000034] gap-2 rounded-md backdrop-blur-md flex flex-col text-center text-white text-sm p-2
                    md:text-[1.25rem] md:leading-7 font-[100] md:order-1 md:gap-6 md:p-10 md:mt-[-5rem]">

                        <strong className="font-[900] md:text-[1.5rem] ">Com qual gênero você<br />se identifica?</strong>

                        <p>Utilizaremos esses dados para mapear<br />o público da nossa plataforma!</p>

                        <RadioBox onClick={() => setGenderSelect('Feminino')} 
                        className="focus:bg-[#6a11f0]" type="button">Feminino</RadioBox>

                        <RadioBox onClick={() => setGenderSelect('Masculino')} 
                        className="focus:bg-[#6a11f0]" type="button">Masculino</RadioBox>
                        
                        {otherGenderActive ? <RadioBox onClick={() => setOtherGenderActive(!otherGenderActive)}className="focus:bg-[#642BBB]" type="button">Outro</RadioBox> :
                        <div className="flex items-center gap-1 md:gap-3">
                            <button type="button" onClick={() => setOtherGenderActive(!otherGenderActive)}
                            className="bg-[#7A40D3] rounded-md transition-colors hover:bg-[#642BBB] focus:bg-[#642BBB] p-1 md:text-[2.2rem]"><CaretLeft /></button>

                            <input value={genderSelect}
                            onChange={(e => setGenderSelect(e.target.value))}
                            placeholder="Qual seu gênero?" 
                            className="p-2 rounded-md text-black w-full" />


                        </div>
                        }

                        <button type="button" 
                        onClick={OtherGenderSelect}
                        className="bg-[#7A40D3] rounded-md transition-colors hover:bg-[#642BBB] focus:bg-[#642BBB] w-full self-center p-2">Próximo</button>
                    </div>

                        <img className="h-[12rem] self-end md:h-[30rem] 
                        md:order-0"
                        src={astronauta} alt="Imagem de um astronauta" />

                </div>
            </Container>
        
        </>

    );
}

// styled

const Container = styled.div`
    
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