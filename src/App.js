import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import Dashboard from "./Component/Dashboard";
import Login from "./Component/Login";
import Checkfare from "./Component/Checkfare";
import Invoice from "./Component/Invoice";
import Register from "./Component/Register";
import Profile from "./Component/Profile";
import Orders from "./Component/Orders";
import OrdersDetails from "./Component/OrderDetails";
import TrackOrders from "./Component/TrackOrders";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="Login" element={<Login />} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="Checkfare" element={<Checkfare />} />
        <Route path="Invoice" element={<Invoice />} />
        <Route path="Register" element={<Register />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="Orders" element={<Orders />} />
        <Route path="OrdersDetails" element={<OrdersDetails />} />
        <Route path="TrackOrders" element={<TrackOrders />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;