import { React, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "../../utils/hooks/useAuth";
import API from "../../utils/API";

import "../Login/login.css";


function Login() {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/profile';

  const [usernameShow, setUsernameShow] = useState('none');
  const [passwordShow, setPasswordShow] = useState('none');
  const [username, setUsername] = useState("");
  const [loginInfo, setLoginInfo] = useState({
    username: '',
    password: ''
  })

  const handleLoginInputChange = e => {
    console.log(e.target.name, e.target.value)
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value
    })
  }

  async function handleLogin(e) {
    if(!loginInfo.username && !loginInfo.password){
      setUsernameShow('inline')
      setPasswordShow('inline')
      return
    }
    if (!loginInfo.username) {
      setUsernameShow('inline')
      return
    }
    if (!loginInfo.password) {
      setPasswordShow('inline')
      return
    }
    if (loginInfo.username!=='' && loginInfo.password!=='') {
      console.log('login info', loginInfo)
      API.login(loginInfo.username, loginInfo.password)
        .then(data => {
          console.log(data);
          if (data.accessToken) {
            const userId = data?.id;
            const userName = data?.username
            const token = data?.accessToken;
            const role = data?.role;
            setAuth({ userId, userName, role, token })
            console.log('auth info', userId, userName, role, token)
            localStorage.setItem("token", data.accessToken);
            setLoginInfo({
              username: '',
              password: ''
            })
            navigate(from, { replace: true });
          } else { alert('Your username or password was incorrect!') }
        }).catch(err => {
          console.log(err);
        });
    }
  };

  return (
    <div className="mainLogin">
      <div className="sub-main-login">
        <div>
          <div className="img">
            <div className="container-image">
            </div>
          </div>
          <div>
            <h1 className="loginTitle">Login</h1>
            <div className="email-input">
              <div className="form-alert-box">
                <input type="text"
                  required
                  placeholder="username"
                  onChange={handleLoginInputChange}
                  value={loginInfo.username}
                  name="username"
                  className="input-field inputLogin" />
                <p className="form-alert" style={{ display: `${usernameShow}` }}>This field is required. Please provide a valid username.</p>
              </div>
            </div>
            <div>
              <div className="form-alert-box">
                <input
                  type="password"
                  required
                  onChange={handleLoginInputChange}
                  value={loginInfo.password}
                  placeholder="password"
                  name="password"
                  className="input-field inputLogin"
                />
                <p className="form-alert" style={{ display: `${passwordShow}` }}>This field is required. Please enter your password.</p>
              </div>
            </div>

            <div className="login-btn">
              <button className="btnLogSign"
                onClick={handleLogin}
                type="submit">Login</button>
            </div>

            <p className="linksLogin">
              {/* <a href="#">Forgot Password</a> */}
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
