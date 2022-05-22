import { useState } from "react"

import { CompanyCode } from "./components/CompanyCode"
import { GenderSelection } from "./components/GenderSelection"
import { UserBirthday } from "./components/UserBirthday"
import { UserCEP } from "./components/UserCEP"
import { Welcome } from "./components/Welcome"
import { GlobalStyle } from "./GlobalStyle"

export function App() {

  type PageTypes = 'Welcome' | 'GenderSelection' | 'UserCEP' | 'UserBirthday' | 'CompanyCode' ;
  const [pager, setPager] = useState<PageTypes>('Welcome');

  const [genderSelect, setGenderSelect] = useState('');
  const [userCEP, setUserCEP] = useState('');
  const [companyCode, setCompanyCode] = useState('');

  const [userDay, setUserDay] = useState(1);
  const [userMonth, setUserMonth] = useState(1);
  const [userYear, setUserYear] = useState(1990);
  
  const Birthday = {
    userDay, userMonth, userYear
  }


  const UserData = {
    Gender: genderSelect,
    CEP: userCEP,
    Birthday: Birthday,
    CompanyCode: companyCode
  }

  function User(){
    alert('Dados do Usuário' + '\n' + '\n' +
    'Gênero: ' + UserData.Gender + '\n' + 
    'CEP: ' + UserData.CEP + '\n' + 
    'Data de Nascimento: ' + UserData.Birthday.userDay + '/' + UserData.Birthday.userMonth + '/' + UserData.Birthday.userYear +  '\n' + 
    'Código da Empresa: ' + UserData.CompanyCode)
  }
  

  console.log(UserData.Gender)
  return (
    <>

      { pager === 'Welcome' ? (<Welcome 
      ForwardPage={() => setPager('GenderSelection')}/>
      ) : (
        <>
        {pager === 'GenderSelection' ? (<GenderSelection 
        BackPage={() => setPager('Welcome')}
        ForwardPage={() => setPager('UserCEP')}
        GenderSelect={(Gender:string) => setGenderSelect(Gender)}/>
        ) : (
          <>
            { pager === 'UserCEP' ? (<UserCEP 
            BackPage={() => setPager('GenderSelection')}
            ForwardPage={() => setPager('UserBirthday')}
            UserCEP={(CEP:string) => setUserCEP(CEP)}
            />
            ) : (
                <>
                  { pager === 'UserBirthday' ? (<UserBirthday 
                  BackPage={() => setPager('UserCEP')}
                  ForwardPage={() => setPager('CompanyCode')}
                  UserDay={(Day:Number) => setUserDay(Number(Day))}
                  UserMonth={(Month:Number) => setUserMonth(Number(Month))}
                  UserYear={(Year:Number) => setUserYear(Number(Year))}
                  />) : (
                    <CompanyCode 
                    BackPage={() => setPager('UserBirthday')}
                    CompanyCode={(code:string) => setCompanyCode(code)}
                    UserData={User}
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


