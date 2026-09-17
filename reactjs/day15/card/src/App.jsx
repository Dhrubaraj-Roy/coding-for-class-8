import { useState } from 'react'
import Header from './Header'
import Card from './Card'
import {Provider} from "react-redux"
import stores  from './Store'

function App() {

  return (
    <Provider store={stores}>
    <Header/>  
    <Card></Card>
    </Provider>
  )
}

export default App
