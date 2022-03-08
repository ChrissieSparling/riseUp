import {React, useState} from "react";
// import { useHistory } from "react-router-dom"
import "../Login/login.css";
// import '../css/login.css';

// import logoImg from "../images/20210930_101003.jpg";
// import ReactDOM from "react-dom";

function Login(props) {
  const [user, setUser] = useState({});
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [uname, setUname] = useState('');
  const [pass, setPass] = useState('');

  // let history=useHistory();

  const handleUNameChange = (e) => {
    e.preventDefault();
    setUname(e.target.value);
  }

  const handlePassChange = (e) => {
    e.preventDefault();
    setPass(e.target.value)
  }

  // const handleLogOut = e => {
  //   e.preventDefault();
  //   localStorage.removeItem('token')
  //   setIsLoggedIn(false);
    // makeAllFalse();
  // }

  async function handleSubmit (e){
    e.preventDefault()
    console.log('the button was clicked')
    console.log('==========uname', uname)
    console.log('==========password', pass)
    // const {uname, pass} = document.forms[0]
    try{
      if(uname && pass){
        const result = await fetch('http://localhost:3005/users/login',{
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({username: uname, password: pass}),
        })
        console.log('result',result)
        if(result.ok){
          // history.push('/posts')
          const currUser = await result.json();
          console.log('yay, you\'re logged in!!!!!!!!', currUser)
          localStorage.setItem('token', currUser.accessToken)
  
          props.handleLoggedIn();
          setUser(currUser);
          document.location.replace("/posts");

        } else {alert('Your username/password combination was incorrect')}
      } else {
        alert('Fill out both username and password');
        return;
      }
      // else if (!pass){
      //   setErrorMessages({ name: "pass", message: errors.pass });
      // } else {
      //   setErrorMessages({ name: "uname", message: errors.uname });
      // }
    } catch (err) {
      console.log('There was a problem: ', err)
      alert('there was an error: ', err)
    }
  }


  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="img">
            <div className="container-image">
              <img src="#" alt="profile" className="logo-img" />
            </div>
          </div>
          <div>
            <h1>Login</h1>
            <div className="email-input">
              <input type="text" 
              placeholder="username" 
              onChange={handleUNameChange}
              value={uname}
              className="input-field input" />
            </div>
            <div>
              <input
                type="password"
                onChange={handlePassChange}
                value={pass}
                placeholder="password"
                className="input-field input"
              />
            </div>

            <div className="login-btn">
              <button className="btnLogSign"
              onClick={handleSubmit}
              type="submit">Login</button>
            </div>

            <p className="links">
              <a href="#">Forgot Password</a>
              <br />
              <a href="/" onClick={props.handleNewUser}>Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
