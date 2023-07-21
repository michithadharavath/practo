import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React from "react";
// import { store } from "../signin&login/Arigister";
import "../signin&login/Login.css";
import { MyContext } from "../context/CommonContext";
import image1 from "./image/illustration.webp";
function Login() {
  const { token, setToken } = useContext(MyContext);
  const [data, setdata] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const changeHandler = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/login", data).then((res) => {
      setToken(res.data);
      console.log(res.data);
      navigate("/myprofile");
    });
  };

  return (
    <div>
      <div className="Container d-flex justify-content-evenly flex-wrap  mb-4 text-start">
        <div className="RegisterImage1">
          <img src={image1} alt="" />
        </div>
        <div className="log">
          <center>
            <form onSubmit={submitHandler} autoComplete="off">
              <h3 className="regheader  text-secondary">Login</h3>
              <hr />
              <label className="lab-1  text-secondary p-3 "> EmailId</label>
              <input type="email" name="email" placeholder="Email" onChange={changeHandler} className="inp-1  text-secondary" />
              <br />
              <label className="lab-1  text-secondary p-3 ">Password</label>
              <input type="password" name="password" placeholder="Password" onChange={changeHandler} className="inp-1 " />
              <div className="d-flex justify-content-between  text-start">
                <div>
                  {" "}
                  <h2 className="text-secondary p-1  " style={{ fontSize: "12px" }}>
                    <input type="checkbox" />
                    Remember me for 30days
                  </h2>
                </div>
                <div style={{ fontSize: "12px" }}>
                  {" "}
                  <span style={{ color: "#13bef0" }}>ForgetPassword</span>
                </div>
              </div>

              <p style={{ fontSize: "12px" }} className="text-start  text-secondary p-1  ">
                {" "}
                <input type="checkbox" />
                Login With Password
              </p>
              <input type="submit" value="Login" className="LoginBTN" />
            </form>
          </center>
        </div>
      </div>
    </div>
  );
}

export default Login;
