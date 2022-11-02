import React from "react";
import "../styles.scss";

function Register() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">WeChat</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="Display Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="file" id="file" style={{ display: "none" }} />
          <label htmlFor="file">
            <img
              src="https://raw.githubusercontent.com/safak/youtube2022/react-chat/src/img/addAvatar.png"
              alt="uploadImage"
            />
            <span>Add an avatar</span>
          </label>
          <button>Sign Up</button>
        </form>
        <p>Already have an account? Log In</p>
      </div>
    </div>
  );
}

export default Register;
