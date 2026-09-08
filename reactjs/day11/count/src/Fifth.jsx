import { useContext } from "react";
import { GlobalConext } from "./Global";


export default function Fifth(){
    const data = useContext(GlobalConext);
    return <h2>I am {data} from old global</h2>

}