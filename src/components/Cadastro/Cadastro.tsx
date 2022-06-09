import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { CompanyCode } from "./CompanyCode";
import { GenderSelection } from "./GenderSelection";
import { UserBirthday } from "./UserBirthday";
import { UserCEP } from "./UserCEP";
import { Welcome } from "./Welcome";
import { GlobalStyle } from "../../GlobalStyle";

export function Cadastro() {
  const [genderSelect, setGenderSelect] = useState("");
  const [userCEP, setUserCEP] = useState("");
  const [companyCode, setCompanyCode] = useState("");

  const [userDay, setUserDay] = useState(1);
  const [userMonth, setUserMonth] = useState(1);
  const [userYear, setUserYear] = useState(1990);

  const Birthday = {
    userDay,
    userMonth,
    userYear,
  };

  const UserData = {
    Gender: genderSelect,
    CEP: userCEP,
    Birthday: Birthday,
    CompanyCode: companyCode,
  };

  function User() {
    alert(
      "Dados do Usuário" +
        "\n" +
        "\n" +
        "Gênero: " +
        UserData.Gender +
        "\n" +
        "CEP: " +
        UserData.CEP +
        "\n" +
        "Data de Nascimento: " +
        UserData.Birthday.userDay +
        "/" +
        UserData.Birthday.userMonth +
        "/" +
        UserData.Birthday.userYear +
        "\n" +
        "Código da Empresa: " +
        UserData.CompanyCode
    );
  }

  console.log(UserData.Gender);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />}></Route>
        </Routes>
        <Routes>
          <Route
            path="/gender"
            element={
              <GenderSelection
                GenderSelect={(Gender: string) => setGenderSelect(Gender)}
              />
            }
          ></Route>
        </Routes>
        <Routes>
          <Route
            path="/cep"
            element={<UserCEP UserCEP={(CEP: string) => setUserCEP(CEP)} />}
          ></Route>
        </Routes>
        <Routes>
          <Route
            path="/birthday"
            element={
              <UserBirthday
                UserDay={(Day: Number) => setUserDay(Number(Day))}
                UserMonth={(Month: Number) => setUserMonth(Number(Month))}
                UserYear={(Year: Number) => setUserYear(Number(Year))}
              />
            }
          ></Route>
        </Routes>
        <Routes>
          <Route
            path="/companycode"
            element={
              <CompanyCode
                CompanyCode={(code: string) => setCompanyCode(code)}
                UserData={User}
              />
            }
          ></Route>
        </Routes>
      </Router>

      <GlobalStyle />
    </>
  );
}
