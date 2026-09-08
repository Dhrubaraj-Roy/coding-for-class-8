
import { useContext } from "react"
import { GlobalConext } from "./Global"
export default function SecChild(){
    const { countG, setCountG } = useContext(GlobalConext)

    return(
        <>
        <h2>Sec - Child Count : {countG}</h2>
        </>
    )

}