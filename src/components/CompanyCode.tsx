import { ArrowLeft } from "phosphor-react";
import { useState } from "react";
import styled from "styled-components";
import bandeira from "../assets/bandeira.png";

const Container = styled.div`
    font-size: 1.25rem;
`
interface CompanyCodeProps{
    BackPage: () => void,
    CompanyCode:(code:string) => void,
    UserData: () => void
}

export function CompanyCode(props:CompanyCodeProps){

    const [companyCode, setCompanyCode] = useState('');

    function SubmitPousar(){
        props.CompanyCode(companyCode),
        props.UserData()
    }
    return (
        
        <>
            <Container className="bg-[url('./assets/bgCadastro.png')] h-[100vh] flex justify-center items-center text-white">

                <button 
                onClick={props.BackPage}
                className="cursor-pointer absolute top-10 left-10 bg-[#00000034] p-3 rounded-full backdrop-blur-md hover:bg-[#642BBB] transition-colors">
                <ArrowLeft size={20} className="text-white"/>
                </button>

                <div className="backdrop-blur-md bg-[#00000013] w-[28rem] h-[30rem] flex flex-col text-center justify-center gap-[2rem] p-[2rem] rounded-xl mt-[-4rem]">
                    <strong className="text-2xl">Digite o código da empresa em que você trabalha</strong>
                    <p>Esse código foi enviado para você no mesmo e-mail em que a empresa divulgou o programa de voluntariado</p>

                    <form className="flex flex-col">
                        <label className="text-sm self-start">Digite o código da empresa</label>
                        <input placeholder="C-" className="w-full p-2 rounded-md text-black"
                        value={companyCode}
                        onChange={e => setCompanyCode(e.target.value)}/>
                    </form>

                    <button type="button" 
                    onClick={SubmitPousar}
                    className="w-full bg-[#7A40D3] rounded-md hover:bg-[#642BBB] transition-colors p-2">Ir até a Terra</button>
                </div>

                <span className="self-end pb-10">
                    <img src={bandeira} alt="Imagem de uma bandeira"
                    className=" h-[32rem]" />
                </span>
                
            </Container>
        </>
    );
}