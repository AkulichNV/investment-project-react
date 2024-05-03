import { useState } from "react";

import Results from "./components/Results"
import UserInput from "./components/UserInput"

function App() {
  const [ userInput, setUserInput ] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  function handleChange(inputIndentifier, newValue) {
    setUserInput((prevUserInput) => {
        return {
            ...prevUserInput,
            [inputIndentifier]: newValue
        }
    })
}

  return (
    <>
      <UserInput onChangeInput={handleChange} userInput={userInput}/>
      <Results />
    </>    
  )
}

export default App
