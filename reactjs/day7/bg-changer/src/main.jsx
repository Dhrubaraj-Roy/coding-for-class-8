import ReactDOM from "react-dom/client";
import React from "react";
import { useState } from "react";
function Main() {  
  const [color, setColor] = useState("black");
  document.body.style.backgroundColor = color;  
  return (
    <>
      <h1>Background Changer</h1>
      <div className="btn">
        <button className="red btn" onClick={() => setColor("red")}>Red</button>
        <button className="green btn" onClick={() => setColor("green")}>Green</button>
        <button className="blue btn" onClick={() => setColor("blue")}>Blue</button>
        <button className="yellow btn" onClick={() => setColor("yellow")}>Yellow</button>
        <button className="purple btn" onClick={() => setColor("purple")}>Purple</button>
      </div>
    </>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<Main />);