// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter, Routes , Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Data from "./pages/Barang";
import Add from "./pages/tambah";
import Edit from "./pages/edit";
import Detail from "./pages/detail";
import LandingPage from "./component/Landing-page"
import Customer from "./customer/Customer"


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/barang" element={<Data/>} /> 
        <Route path="/tambah" element={<Add/>} />
        <Route path="/edit/:id" element={<Edit/>} />
        <Route path="/detail" element={<Detail/>} />
        <Route path="/landing-page" element={<LandingPage/>} />
        <Route path="/customer" element={<Customer/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
