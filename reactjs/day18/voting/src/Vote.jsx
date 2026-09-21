import { useState } from "react"

export default function Count({language, count}) {

    const [vote, setVote] = useState(0)

     
    return (
        <>  
        <p>{language} Vote is :  {vote}</p>
        <button onClick={() => setVote(vote + 1)}>Vote</button>
        </>
    )
}