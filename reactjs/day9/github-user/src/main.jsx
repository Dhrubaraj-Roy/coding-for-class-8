import { createRoot } from 'react-dom/client'
import Header from './Component/Header'
import Body from './Component/Body'
import './index.css'

function GithubProfile(){
  return(
    <>
    <Header/>
    <Body/>
    </>
    
  )

}

createRoot(document.getElementById('root')).render(<GithubProfile/>)
