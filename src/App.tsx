import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { Cadastro } from "./components/Cadastro/Cadastro";
import { Login } from "./components/Login/Login";
import { NewEmail } from "./components/Login/NewEmail";
import { NewEmailOK } from "./components/Login/NewEmailOK";
import { Register } from "./components/Login/Register";
import { RegisterSuccess } from "./components/Login/RegisterSuccess";
import { GlobalStyle } from "./GlobalStyle";

export function App() {
  return (
    <>
      <Register />
      {/* <Login/>
      <RegisterSuccess />
      <NewEmailOK />
      <NewEmail /> */}
      <GlobalStyle />
    </>
  );
}
