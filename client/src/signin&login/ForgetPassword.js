import React from "react";
import "../signin&login/ForgetPassword.css";
function ForgetPassword() {
  return (
    <div className="forget">
      <center>
        <h2 className="text-secondary">Forgot Password</h2>
        <hr />
        <p className="text-secondary text-start" style={{ fontSize: "12px" }}>
          Provide us the email id/ mobile of your practo account and we will send you an email/otp with instructions to reset your password.
        </p>
        <form>
          <label htmlFor="email" className="text-secondary  p-2 text-start">
            Email/Username
          </label>
          <br />
          <input type="email" name="email" id="email" placeholder="Email/Username" />
          <br />
          <input type="submit" value="Send me instruction" className="ForgetBTN" />
        </form>
      </center>
    </div>
  );
}

export default ForgetPassword;
