import { useState } from "react"
import Add from "./Add"


function App() {
  const [languages, setLanguages] = useState(['TS', 'JS', 'JAVA']);


  function handleAddLanguage() {
    setLanguages(['C++',...languages]);
  }

  return (
    <>
      <div style={{display: "flex", gap: "10px", justifyContent: "center", alignItems: "center", padding: "10px"}}>
        {languages.map((value, index) => (
          <Add key={value} value={value}></Add>
        ))}
      </div>


      <button onClick={handleAddLanguage}>Add language</button>

    </>
  )

  
}

export default App
