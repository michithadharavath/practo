import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../signin&login/Navbar.css";
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <ul>
          <Link to="/register">
            <li>Register</li>
          </Link>
          <Link to="/login">
            <li>Login</li>
          </Link>
          <Link to="/ForgetPassword">
            <li>ForgetPassword</li>
          </Link>
          <Link to="/Myprofile">
            <li>Myprofile</li>
          </Link>
        </ul>
      </div>
    );
  }
}
