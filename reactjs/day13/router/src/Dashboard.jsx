import { Outlet } from "react-router"

export default function Dashboard(){
    return(
        <>
            <h2>Helloooo I am Dashboard</h2>
            <Outlet></Outlet>
        </>
        )
}