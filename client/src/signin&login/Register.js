import { useState } from "react";
import axios from "axios";

import React from "react";
import "../signin&login/Register.css";
import image1 from "./image/illustration.webp";

function Register() {
  const [data, setdata] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    mobile: "",
    gender: " ",
  });
  const changeHandler = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/register", data).then((res) => alert(res.data));
  };
  return (
    <div>
      <div className="Container d-flex justify-content-evenly flex-wrap  mb-4">
        <div className="RegisterImage">
          <img src={image1} alt="" />
        </div>
        <div className="Reg">
          <div className="d-flex justify-content-between ">
            <div>
              {" "}
              <h2 className="text-secondary">Join Practo</h2>
            </div>
            <div style={{ fontSize: "12px" }}>
              {" "}
              <span className="text-secondary">Are you doctor?</span>
              <span style={{ color: "#f2a82d" }}>Register Here</span>
            </div>
          </div>
          <hr />
          <center className="text-secondary text-start ">
            <form onSubmit={submitHandler} autoComplete="off">
              <h3 className="regheader">Register</h3>
              <div className="form-group my-2">
                <label className="lab-1"> Full Name</label>
                <input type="text" name="username" placeholder="user Name" onChange={changeHandler} className="inp-1" />
              </div>
              <div className="form-group my-2">
                <label className="lab-1"> Email</label>
                <input type="email" name="email" placeholder="Email" onChange={changeHandler} className="inp-1" />
              </div>
              <div className="form-group my-2">
                <label className="lab-1">Password</label>
                <input type="password" name="password" placeholder="Password" onChange={changeHandler} className="inp-1" />
              </div>
              <div className="form-group my-2">
                <label className="lab-1"> Confirm Password</label>
                <input type="password" name="confirmpassword" placeholder="Confirm Password" onChange={changeHandler} className="inp-1" />
              </div>
              <div className="form-group my-2">
                <label className="lab-1"> Mobile Number</label>
                <input type="number" name="mobile" placeholder="Mobile Number" onChange={changeHandler} className="inp-1" />
              </div>
              <br />

              <p style={{ fontSize: "12px" }}>
                {" "}
                <input type="checkbox" />
                Receive relevant offers and promotional communication <br /> from Practo
              </p>
              <p style={{ fontSize: "12px" }}>
                By signing up, I agree to <span className="termcolor">terms</span>
              </p>
              <br />
              <input type="submit" value="Register" className="regBTN" />
            </form>
          </center>
        </div>
      </div>
    </div>
  );
}

export default Register;
