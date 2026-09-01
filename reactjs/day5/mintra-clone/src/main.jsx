import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Component/Header.jsx";
import { CardList } from "./Component/Card.jsx";
import arr from "./utils/dummy.jsx";
import PriceBtn, {FilterBtn} from "./Component/PriceBtn.jsx";

function App() {
  const [A, setA] = useState(arr);

  const sortByPrice = () => {
    const sortedProducts = [...A].sort((a, b) => a.price - b.price);
    setA(sortedProducts);
  };

  const above1999 = () => {
    const filteredProducts = arr.filter((item) => item.price > 1999);
    setA(filteredProducts);
  };

  return (
    <>
      <Header />
      <div className="p-btn">
        <PriceBtn onSort={sortByPrice} />
        <FilterBtn onFilter={above1999}/>
      </div>
      
      <div className="content">
        <CardList arrData={A} />
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);