import { useState } from "react";

import { ArrowLeft } from "phosphor-react";
import styled from "styled-components";


const Container = styled.div``

interface UserCEPProps{
    BackPage: () => void,
    ForwardPage: () => void,
    UserCEP: (CEP:string) => void
}



export function UserCEP(props: UserCEPProps){

    const [userCEP, setUserCEP] = useState('');


    function SetUserCEP(){
        props.ForwardPage();
        props.UserCEP(userCEP)
    }

    return(

        <Container className="bg-no-repeat bg-[url('./assets/bgNave.png')] h-[100vh] flex justify-center items-center text-white text-center relative bg-right bg-cover">

                <button 
                onClick={props.BackPage}
                className="cursor-pointer absolute top-10 left-10 bg-[#00000034] p-3 rounded-full backdrop-blur-md hover:bg-[#642BBB] transition-colors focus:bg-[#642BBB] ">
                <ArrowLeft size={20} className="text-white"/>
                </button>
            
            <div className="w-[28rem] h-[20rem] backdrop-blur-md bg-[#00000013]  rounded-lg flex flex-col justify-center items-center p-7 gap-2 m-10">
                <strong className="text-[1.5rem] mb-5">Onde a sua nave está<br/>estacionada?</strong>
                <div className="flex flex-col w-full">
                    <p className="text-[.8rem] self-start">Digite seu CEP</p>

                    <input placeholder="00.000-000" 
                    value={userCEP}
                    onChange={(e) => setUserCEP(e.target.value)}
                    className="p-2 rounded-md text-black" />
                </div>
                <button type="button" 
                onClick={SetUserCEP}
                className="bg-[#7A40D3] rounded-md transition-colors hover:bg-[#642BBB] focus:bg-[#642BBB] w-full h-[2.5rem] mt-5">Entrar na nave</button>
            </div>

        </Container>
    );
}