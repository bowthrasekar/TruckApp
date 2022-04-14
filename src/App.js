import React, { useState } from "react";
import {BrowserRouter,
  Routes,
  Route,} from "react-router-dom"
import Dashboard from "./Component/Dashboard";
import Login from "./Component/Login";


function App() { 
  return(
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login />} />
      <Route path="Login" element={<Login />} />
       <Route path="Dashboard" element={<Dashboard />} /> 
    </Routes>
  </BrowserRouter>
  ) 
}

export default App;