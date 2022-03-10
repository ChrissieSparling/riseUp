import {React, useState} from "react";

import "../Login/login.css";


function Login(props) {
  const [newUser, setNewUser] = useState(false);

  const handleNewUser = (e) => {
    e.preventDefault();
    if (e.target.id === "login") {
      setNewUser(false);
    } else {
      setNewUser(true);
    }
  };


  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="img">
            <div className="container-image">
              {/* <img src="#" alt="profile" className="logo-img" /> */}
            </div>
          </div>
          <div>
            <h1>Login</h1>
            <div className="email-input">
              <input type="text" 
              placeholder="username" 
              onChange={props.handleInputChange}
              value={props.loginInfo.username}
              name="username"
              className="input-field input" />
            </div>
            <div>
              <input
                type="password"
                onChange={props.handleInputChange}
                value={props.loginInfo.password}
                placeholder="password"
                name="password"
                className="input-field input"
              />
            </div>

            <div className="login-btn">
              <button className="btnLogSign"
              onClick={props.handleLogin}
              type="submit">Login</button>
            </div>

            <p className="links">
              <a href="#">Forgot Password</a>
              <br />
              <a href="/" id="sign-up" onClick={handleNewUser}>Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
