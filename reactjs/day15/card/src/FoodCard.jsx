import { useState } from "react"
import {useDispatch} from "react-redux";
import { addIteam, removeIteam } from "./Slice2";


export default function FoodCard({ value }){
    const [incard, setCard] = useState(false);

    const dispatch = useDispatch();

    function handleClick(){
        if(incard){
            dispatch(removeIteam())
            setCard(false)
        }
        else{
            dispatch(addIteam())
            setCard(true);
        }
    }
    return(
        <>
        <h3>{value.food}</h3>
        <h3>{value.Price}</h3>
        <button onClick={handleClick}>{incard?"Remvoe":"Add"}</button>
        </>
    )
}