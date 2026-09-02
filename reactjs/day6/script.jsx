import React, {useState} from "react";
import ReactDOM from "react-dom/client";



function Counter() {
    let [count, setCount] = useState(0);

    
    function Increment(){
        count++;
        setCount(count)
        console.log(count);
    }
    function Decreament(){
        count--;
        setCount(count)
        console.log(count);
    }
    return (
        <div className="container">
            <h1>Counter</h1>
            <h2>{count}</h2>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decreament}>Decrement</button>
        </div>
    )
}


ReactDOM.createRoot(document.getElementById("root")).render(<Counter/>);
