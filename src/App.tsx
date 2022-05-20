import { useState } from "react"
import { CompanyCode } from "./components/CompanyCode"
import { GenderSelection } from "./components/GenderSelection"
import { Welcome } from "./components/Welcome"
import { GlobalStyle } from "./GlobalStyle"

export function App() {

  const [isWelcomeActive, setIsWelcomeActive] = useState(true)

  function ToggleWelcomeActive(){
    setIsWelcomeActive(!isWelcomeActive)
  }

  return (
    <>
      {/* { isWelcomeActive ? <Welcome ToggleWelcomeActive={ToggleWelcomeActive}/> : <GenderSelection ToggleWelcomeActive={ToggleWelcomeActive}/> } */}

      <CompanyCode />

      <GlobalStyle />
    </>
  )
}


