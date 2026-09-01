import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Component/Header.jsx";
import Card from "./Component/Card.jsx";
import arr from "./utils/dummy.jsx"; 

function App() {
  return(
    <>
    <Header />
    <div className="content">
      
      {arr.map((item, index) => (
        <Card key={index} imgSrc={item.imgSrc} title={item.title} description={item.description} />
      ))}
      
    </div>
    </>
    
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);