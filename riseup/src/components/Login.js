import React from "react";
import "../css/login.css";
// import '../css/login.css';

import logoImg from "../images/20210930_101003.jpg";
// import ReactDOM from "react-dom";

function Login() {
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="img">
            <div className="container-image">
              <img src={logoImg} alt="profile" className="logo-img" />
            </div>
          </div>
          <div>
            <h1>Login</h1>
            <div className="email-input">
              <input type="text" 
              placeholder="email" 
              className="input-field" />
            </div>
            <div>
              <input
                type="text"
                placeholder="password"
                className="input-field"
              />
            </div>

            <div className="login-btn">
              <button>login</button>
            </div>

            <p className="links">
              <a href="#">Forgot Password</a>
              <br />
              <a href="#">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
