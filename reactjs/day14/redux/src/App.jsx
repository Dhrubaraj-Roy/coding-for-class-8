import {useSelector, useDispatch} from "react-redux"
import { Increament, Decrement, Reset } from "./Slicer1"



function App() {


  const count = useSelector((state)=> state.slice1.count)
  const dispatch = useDispatch();

  return (
   <>
   <h2>Counter is : {count}</h2>
   <button onClick={()=>dispatch(Increament())}>Increment</button>
   <button onClick={()=> dispatch(Decrement())}>Decrement</button>
   <button onClick={()=> dispatch(Reset())}>Reset</button>
    </>
  )
}

export default App
