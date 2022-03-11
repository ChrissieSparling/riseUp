import {React, useState} from "react";
import { useNavigate } from "react-router-dom";

import "../Login/login.css";


function Login(props) {
  let navigate = useNavigate();

  return (
    <div className="mainLogin">
      <div className="sub-main-login">
        <div>
          <div className="img">
            <div className="container-image">
              {/* <img src="#" alt="profile" className="logo-img" /> */}
            </div>
          </div>
          <div>
            <h1 className="loginTitle">Login</h1>
            <div className="email-input">
              <input type="text" 
              placeholder="username" 
              onChange={props.handleInputChange}
              value={props.loginInfo.username}
              name="username"
              className="input-field inputLogin" />
            </div>
            <div>
              <input
                type="password"
                onChange={props.handleInputChange}
                value={props.loginInfo.password}
                placeholder="password"
                name="password"
                className="input-field inputLogin"
              />
            </div>

            <div className="login-btn">
              <button className="btnLogSign"
              onClick={props.handleLogin}
              type="submit">Login</button>
            </div>

            <p className="linksLogin">
              <a href="#">Forgot Password</a>
              New Here?
              <a href="/signup" id="sign-up">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
