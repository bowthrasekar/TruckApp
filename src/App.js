import React, { useState } from "react";
import {BrowserRouter,
  Routes,
  Route,} from "react-router-dom"
import Dashboard from "./Component/Dashboard";
import Login from "./Component/Login";
import Checkfare from "./Component/Checkfare";
import Invoice from "./Component/Invoice";
import Register from "./Component/Register"
function App() { 
  return(
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login />} />
      <Route path="Login" element={<Login />} />
       <Route path="Dashboard" element={<Dashboard />} /> 
       <Route path="Checkfare" element={<Checkfare />} /> 
       <Route path="invoice" element={ <Invoice />} />
       <Route path="Register"element={<Register/>}/>
        
    </Routes>
  </BrowserRouter>
  ) 
}

export default App;