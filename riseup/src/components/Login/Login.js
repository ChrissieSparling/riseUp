import {React, useState} from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import useAuth from "../../utils/hooks/useAuth";
import API from "../../utils/API";

import "../Login/login.css";


function Login() {
  const {setAuth} = useAuth();
  // console.log(setAuth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/profile';

  const [username, setUsername] = useState("");
  // const [userId, setUserId] = useState(0);
  // const [token, setToken] = useState("");
  const [loginInfo, setLoginInfo] = useState({
    username: '',
    password: ''
  })

  const handleLoginInputChange = e=>{
    console.log(e.target.name,e.target.value)
    setLoginInfo({
      ...loginInfo,
      [e.target.name]:e.target.value
    })
  }

  async function handleLogin (e){
    e.preventDefault()
  console.log('login info', loginInfo)
    API.login(loginInfo.username,loginInfo.password)
      .then(data => {
        console.log(data);
        if(data.accessToken){
          const userId = data?.id;
          const userName = data?.username
          const token = data?.accessToken;
          const role = data?.role;
          setAuth({userId, userName, role, token})
          console.log('auth info', userId, userName, role, token)

          localStorage.setItem("token", data.accessToken);
          setLoginInfo({
            username: '',
            password: ''
          })

          navigate(from, {replace: true});

 
        } else {alert('Your username or password was incorrect!')}
      }).catch(err=>{
        console.log(err);
      });
  };

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
              onChange={handleLoginInputChange}
              value={loginInfo.username}
              name="username"
              className="input-field inputLogin" />
            </div>
            <div>
              <input
                type="password"
                onChange={handleLoginInputChange}
                value={loginInfo.password}
                placeholder="password"
                name="password"
                className="input-field inputLogin"
              />
            </div>

            <div className="login-btn">
              <button className="btnLogSign"
              onClick={handleLogin}
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
