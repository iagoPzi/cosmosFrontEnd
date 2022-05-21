import { useState } from "react"

import { CompanyCode } from "./components/CompanyCode"
import { GenderSelection } from "./components/GenderSelection"
import { UserBirthday } from "./components/UserBirthday"
import { UserCEP } from "./components/UserCEP"
import { Welcome } from "./components/Welcome"
import { GlobalStyle } from "./GlobalStyle"

export function App() {

  const [isWelcomeActive, setIsWelcomeActive] = useState(true);
  const [isGenderSelect, setIsGenderSelect] = useState(false);

  type PageTypes = 'Welcome' | 'GenderSelection' | 'UserCEP' | 'UserBirthday' | 'CompanyCode' ;
  const [pager, setPager] = useState<PageTypes>('Welcome');
  


  return (
    <>
      {/* { isWelcomeActive ? (<Welcome ToggleWelcomeActive={() => setIsWelcomeActive(!isWelcomeActive)}/> )
      : (
        <>
          {!isGenderSelect ? (<GenderSelection ToggleWelcomeActive={() => setIsWelcomeActive(!isWelcomeActive)}
          ToggleGenderActive={() => setIsGenderSelect(!isGenderSelect)}/>)
          : (<UserCEP ToggleGenderActive={() => setIsGenderSelect(!isGenderSelect)} />)
          }
        </>
      )} */}

      { pager === 'Welcome' ? (<Welcome 
      ForwardPage={() => setPager('GenderSelection')}/>
      ) : (
        <>
        {pager === 'GenderSelection' ? (<GenderSelection 
        BackPage={() => setPager('Welcome')}
        ForwardPage={() => setPager('UserCEP')}/>
        ) : (
          <>
            { pager === 'UserCEP' ? (<UserCEP 
            BackPage={() => setPager('GenderSelection')}
            ForwardPage={() => setPager('UserBirthday')} />
            ) : (
                <>
                  { pager === 'UserBirthday' ? (<UserBirthday 
                  BackPage={() => setPager('UserCEP')}
                  ForwardPage={() => setPager('CompanyCode')}
                  />) : (
                    <CompanyCode 
                    BackPage={() => setPager('UserBirthday')}
                    ForwardPage={() => setPager('CompanyCode')}
                    />
                  )}
                </>
            )
            }
          </>
        )}
        </>
        )
      
      }


      

      <GlobalStyle />
    </>
  )
}


