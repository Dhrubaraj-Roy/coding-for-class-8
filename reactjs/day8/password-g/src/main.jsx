import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";

function PasswordGenerator() {

  const [password, setPassword] = useState("");
  const [len, setLen] = useState(6);
  const [num, setNum] = useState(false);
  const [ch, setCha] = useState(false);


  const GenaretePassword = useCallback(()=>{
    let str = "abcdefghijklmnopqrstwxzyABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(num)
        str+="1234567890";
      if(ch)
        str+="!@#$%^&*()}{|";

    let pass = "";
    for(let i=0; i<len; i++){
      pass+= str[Math.floor(Math.random()* str.length)]; 
    }

    setPassword(pass);

  },[len, num, ch])

  useEffect(()=>{
    GenaretePassword()
  },[GenaretePassword]);

  return (
    <div className="App">
      <h1>{password}</h1>
      <div className="fun">
        <input  type="range" min="5" max="20" value={len} onChange={(e)=>setLen(e.target.value)}></input>
        <p>Length of {len}</p>
        <input type="checkbox" defaultChecked={num} onChange={()=>setNum(!num)}></input>
        <label>Number</label>
        <input type="checkbox" defaultChecked={ch}  onChange={()=>setCha(!ch)}></input>
        <label>Character</label>

      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<PasswordGenerator />);