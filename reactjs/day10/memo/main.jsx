// import { useCallback, useEffect, useMemo, useState } from "react"
// import {createRoot} from "react-dom/client"


// // function Fibbonnaci(n){
// //     if(n<=1){
// //         return n
// //     }
// //     return Fibbonnaci(n-1)+ Fibbonnaci(n-2);
// // }

// function App(){
//     const [count, setCount] = useState(0);
//     const [number, setNumber] = useState("");
//     // const [result, setResult] = useState(null);




//     //useing useCallback
//     const Fibbonnaci = useCallback((n)=>{
//         if(n<=1){
//             return n
//         }
//     return Fibbonnaci(n-1)+ Fibbonnaci(n-2);
//     },[])

   
//     const result = useMemo(()=>Fibbonnaci(number), [number]);
//     // useEffect(()=>{
//     //     setResult(Fibbonnaci(number))
//     // }, [number]);

//     return(
//        <>
//        <h2>Count: {count}</h2>
//        <button onClick={(()=> setCount(count+1))}>Increament</button>
//        <button onClick={(()=> setCount(count-1))}>Decreament</button>

//        <h2>Fibbonnaci number is : {result}</h2>
//        <input type="number" value={number} onChange={((e)=> setNumber(e.target.value))} />

//        </>
//     )

// }

// createRoot(document.getElementById("root")).render(<App/>)



// let moeny = 0;
// function App(){
//     const [count, setCount] = useState(0);
//     let money = useRef(0);
    
  
   
//     return(
//        <>
//        <h2>Count: {count}</h2>
//        <button onClick={(()=> setCount(count+1))}>Increament</button>
//        <button onClick={(()=> setCount(count-1))}>Decreament</button>

//        <h2>money : {money .current}</h2>
//        <button onClick={(()=> {money .current = money .current+1 
//         console.log(money .current)
//        })}>Increament</button>
//        <button onClick={(()=> money .current = money .current-1)}>Decreament</button>

       

//        </>
//     )

// }

// createRoot(document.getElementById("root")).render(<App/>)
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import {createRoot} from "react-dom/client"


function App(){
    const [time, setTime] = useState(0);
    const intervalRef = useRef(null);
    // const [isRunning, setIsRunning] = useState(false);
    function start(){
        if(intervalRef.current==null){
            intervalRef.current =  setInterval(() => {
            setTime((prevTime=>prevTime+1));
            
            }, 1000);
        // setIsRunning(true);

        }
        
 
    }
    function stop(){
        if(intervalRef.current!=0){
            clearInterval(intervalRef.current);
            intervalRef.current = null;
            // setIsRunning(false);
            intervalRef.current==null;
        }
        
    }
    function reset(){
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setTime(0);

    }

    
  
   
    return(
       <>
       <div className="container">
        <h2>Timer: {time}</h2>
        <button onClick={start}>Start</button>
       <button  onClick={stop}>Stop</button>
       <button  onClick={reset}>Reset</button>
       </div>
       </>
    )

}

createRoot(document.getElementById("root")).render(<App/>)