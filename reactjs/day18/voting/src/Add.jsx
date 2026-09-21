import { useState } from "react";


export default function Add({value}) {
    const [count, setCount] = useState(0);

    return(
        <>
        <p>{value}: {count}</p>
        <button onClick={()=>setCount(count+1)}>Vote</button>
        </>
    )

}

    