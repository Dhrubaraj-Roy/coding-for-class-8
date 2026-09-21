import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FetchData } from "./slicer1";
import CoinCard from "./CoinCard";
export default function CreateCoin() {
  const dispatch = useDispatch();
  const {data, loading, error} = useSelector((state) => state.slicer1);
  useEffect(()=>{
    dispatch(FetchData(20))
  }, [])





  if(loading){
    <h2>Data is loading</h2>
  }
  if(error){
    <h2>Error has occured</h2>
  }

  return (
    <>
    <div style={{display:"flex" , flexWrap:"wrap", justifyContent:'center'}}>
      {data.map((value)=><CoinCard key={value.id} coin={value} />)}
    </div>
    
    </>
  )
}

