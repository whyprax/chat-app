import React from "react";
import "../styles.scss";

function Login() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">WeChat</span>
        <span className="title">Log In</span>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Ip</button>
        </form>
        <p>Don't have an account? Register</p>
      </div>
    </div>
  );
}

export default Login;
