import {useSelector} from "react-redux"
export default function header(){

    const count = useSelector((state) => state.slice2.count)
    return(
        <>
        <div>
            <h2>Swigy</h2>
            <h2>Card:[{count}] </h2>
        </div>
        </>
    )
}