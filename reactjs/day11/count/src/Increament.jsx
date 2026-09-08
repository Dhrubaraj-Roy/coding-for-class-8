
import SecChild from "./secChild"
export default function Increament({counts, setCounts}){

    return(
        <>
        <h2>Child Count : {counts}</h2>
        <button onClick={()=>setCounts((counts+1))}>Increament</button>
        <h1>hi</h1>
        <SecChild counts={counts} />
        </>
    )

}