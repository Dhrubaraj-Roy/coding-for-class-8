import { createRoot } from 'react-dom/client'
import Increament from './Increament';
 import { useState } from 'react';
import { GlobalConext } from './Global';
import Fifth from './Fifth';

function App(){
    const [count, setCount] = useState(0);


  return(
    <>
      <Fifth></Fifth>
      <GlobalConext.Provider value={{countG:count, setCountG:setCount}}>
        
      <h2>Parent  </h2>
      <Increament counts={count} setCounts={setCount}/>
      </GlobalConext.Provider>
      
    </>

  )
  


}
createRoot(document.getElementById('root')).render(<App/>)
