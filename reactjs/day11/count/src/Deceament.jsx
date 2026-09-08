

export default function Decreament(props){

    return(
        <>
        <button onClick={()=>props.setCounts((props.counts-1))}>Decreament</button>
        </>
    )

}