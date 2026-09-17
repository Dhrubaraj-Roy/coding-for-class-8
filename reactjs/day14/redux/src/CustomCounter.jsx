import { useDispatch } from "react-redux"
import { CustomInc } from "./Slicer1"
import { useState } from "react"

export default function CustomCounter(){
    const [number, setNum] = useState("");
    const dispatch = useDispatch();

    function handleClick(){
        dispatch(CustomInc(Number(number)));
        setNum("");

        
        
    }


    return(
        <>
        <input type="number" value={number} onChange={(e)=> setNum(e.target.value)}></input>
        <button onClick={handleClick}>Submit</button>
        </>
    )

}