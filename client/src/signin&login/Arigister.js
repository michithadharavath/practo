// import logo from './logo.svg';
// import "./App.css";
import React, { useState, useEffect, createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../signin&login/Navbar";
import Register from "../signin&login/Register";
import Login from "../signin&login/Login";
import Myprofile from "../signin&login/Myprofile";
import ForgetPassword from "../signin&login/ForgetPassword";

export const store = createContext();

function Arigister() {
  const [message, setMessage] = useState("");
  const [token, setToken] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div>
      {/* <store.Provider value={[token, setToken]}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/myprofile" element={<Myprofile />} />
            <Route path="/forgetpassword" element={<ForgetPassword/>}/>
          </Routes>
        </BrowserRouter>
      </store.Provider> */}
      <Navbar />

      <h1>{message}</h1>
    </div>
  );
}

export default Arigister;
