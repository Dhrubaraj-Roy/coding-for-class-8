import { useState } from 'react'
import {BrowserRouter, Route, Routes, Link} from 'react-router';
import Contact from './Contact';
import Home from './Home';
import Dashboard from './Dashboard';
import Default from './Default';
import Hello from './Hello';
import Hi from './Hi';

function App() {

  return (
   <>
   <BrowserRouter>
   <nav>
    <Link to={"/"}>Home</Link>
    <Link to={"/Contact"}>Contact</Link>
    <Link to={"/Dashboard"}>Dashboard</Link>
   </nav>
   <Routes>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/Contact" element={<Contact></Contact>}></Route>
    <Route path="/Dashboard" element={<Dashboard></Dashboard>}>
      <Route index element={<Default></Default>}></Route>
      <Route path='Hello' element={<Hello></Hello>}></Route>
      <Route path='Hi' element={<Hi></Hi>}></Route>
    </Route>

   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
