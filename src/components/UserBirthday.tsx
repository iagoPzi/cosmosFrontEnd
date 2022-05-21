import { FormEvent, useState } from "react";

import { ArrowLeft } from "phosphor-react";
import styled from "styled-components";


const Container = styled.div``

interface UserBirthdayProps{
    BackPage: () => void,
    ForwardPage: () => void
}

export function UserBirthday(props:UserBirthdayProps){

    const [userDay, setUserDay] = useState(0);
    const [userMonth, setUserMonth] = useState(0);
    const [userYear, setUserYear] = useState(0);

    function submitBirthday(event: FormEvent){
        event.preventDefault();
        const UserBirthdayDate = ({
            userDay, userMonth, userYear
        })
        console.log(UserBirthdayDate)
    }

    return(
        <>
            <Container className="relative h-[100vh] bg-[url('./assets/bgTerra.png')] flex justify-center items-center text-white">
                
                <button 
                onClick={props.BackPage}
                className="cursor-pointer absolute top-10 left-10 bg-[#00000034] p-3 rounded-full backdrop-blur-md hover:bg-[#642BBB] transition-colors">
                <ArrowLeft size={20} className="text-white"/>
                </button>

                <div className="w-[50rem] h-[27rem] backdrop-blur-md bg-[#00000013] flex flex-col justify-center items-center gap-10">
                    <div className="text-center">
                    <strong className="font-black text-[1.5rem]">Data de chegada na Terra</strong>
                    <p className="font-normal text-[1.25rem]">Nos conte sua data de nascimento ;)</p>
                    </div>

                    <form onSubmit={submitBirthday} className="flex gap-5 flex-col items-center">
                        <div className="flex gap-5">
                            <div className="flex flex-col">
                                <label className="text-sm mb-1">Dia</label>
                                <select value={userDay} onChange={e => setUserDay(Number(e.target.value))}
                                className="w-[10rem] py-2 px-3 rounded-sm text-black">
                                    
                                    { Object.entries(optionsDays).map((item) => {
                                        return(
                                            <option  key={item[0]} value={item[0]}>{item[1]}</option>
                                        );
                                    }) }
                                </select>
                            </div>

                            <div className="flex flex-col">
                                <label className="text-sm mb-1">Mês</label>
                                <select value={userMonth} onChange={e => setUserMonth(Number(e.target.value))} className="w-[10rem] py-2 px-3 text-black rounded-sm">
                                    { Object.entries(optionsMonth).map((item) => {
                                        
                                        return(
                                            <option key={item[0]} value={item[0]}>{item[1]}</option>
                                        );
                                    }) }
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <label className="text-sm mb-1">Ano</label>
                                <select value={userYear}
                                onChange={e => setUserYear(Number(e.target.value))} 
                                className="w-[10rem] py-2 px-3 text-black rounded-sm ">
                                    { Object.entries(optionsYears).map((item) => {
                                        
                                        return(
                                            <option key={item[0]} value={item[0]}>{item[1]}</option>
                                        );
                                    }) }
                                </select>
                            </div>
                        </div>
                        <button type="submit" onClick={props.ForwardPage}
                        className="bg-[#7A40D3] rounded-md hover:bg-[#642BBB] w-[24rem] h-[2.5rem] mt-5">Pousar</button>
                    </form>

                </div>

            </Container>
        
        </>
    );
}

const optionsDays = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    11: 11,
    12: 12,
    13: 13,
    14: 14,
    15: 15,
    16: 16,
    17: 17,
    18: 18,
    19: 19,
    20: 20,
    21: 21,
    22: 22,
    23: 23,
    24: 24,
    25: 25,
    26: 26,
    27: 27,
    28: 28,
    29: 29,
    30: 30,
    31: 31
}

const optionsMonth = {
    1:'janeiro',
    2: 'Fevereiro',
    3: 'Março',
    4: 'Abril',
    5: 'Maio',
    6: 'Junho',
    7: 'Julho',
    8: 'Agosto',
    9: 'Setembro',
    10: 'Outubro',
    11: 'Novembro',
    12: 'Dezembro',
}

const optionsYears = {
    1990: 1990,
    1991: 1991,
    1992: 1992,
    1993: 1993,
    1994: 1994,
    1995: 1995,
    1996: 1996,
    1997: 1997,
    1998: 1998,
    1999: 1999,
    2000: 2000,
    2001: 2001,
    2002: 2002,
    2003: 2003,
    2004: 2004,
    2005: 2005,
    2006: 2006,
    2007: 2007,
    2008: 2008,
    2009: 2009,
    2010: 2010,
    2011: 2011,
    2012: 2012,
    2013: 2013,
    2014: 2014,
    2015: 2015,
    2016: 2016,
    2017: 2017,
    2018: 2018,
    2019: 2019,
    2020: 2020,
    2021: 2021,
    2022: 2022
    
}