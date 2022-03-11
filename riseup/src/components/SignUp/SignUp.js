import { React, useState } from "react";
import "../Login/login.css";
// import {useNavigate} from "react-router-dom";

function SignUp(props) {
  return (
    <div className="mainSign">
      <div className="sub-main-sign">
        <div>
          <div>
            <form onSubmit={props.handlePostUser}>
              <h1 className="signTitle">Sign Up</h1>

              <div className="email-input">
                <input
                  type="text"
                  placeholder="first name"
                  className="input-field inputSign"
                  required
                  name='firstName'
                  onChange={props.handleCollectUser}
                />
              </div>
              <div className="email-input">
                <input
                  type="text"
                  placeholder="
                last name"
                  className="input-field inputSign"
                  required
                  name='lastName'
                  onChange={props.handleCollectUser}
                />
              </div>

              <div className="email-input">
                <input
                  type="date"
                  placeholder="birthday"
                  className="input-field inputSign"
                  required
                  name='birthday'
                  onChange={props.handleCollectUser}
                />
              </div>
              <div className="email-input">
                <input
                  type="text"
                  placeholder="zip code"
                  className="input-field inputSign"
                  required
                  name='zipCode'
                  onChange={props.handleCollectUser}
                />
              </div>

              <div className="email-input">
                <input
                  type="text"
                  placeholder="email"
                  className="input-field inputSign"
                  required
                  name='email'
                  onChange={props.handleCollectUser}
                />
              </div>
              <div className="email-input">
                <input
                  type="text"
                  placeholder="user name"
                  className="input-field inputSign"
                  required
                  name='username'
                  onChange={props.handleCollectUser}
                />
              </div>
              <div className="email-input">
                <input
                  type="text"
                  placeholder="password"
                  className="input-field inputSign"
                  required
                  name='password'
                  onChange={props.handleCollectUser}
                />
              </div>
              <div className="email-input">
                <input
                  type="text"
                  className="input-field inputSign"
                  placeholder="role"
                  required
                  name='role'
                  onChange={props.handleCollectUser}
                />
              </div>
              <label>
                <input type="checkbox"  className="checkbox"></input>I have read and agreed to the 
                <a href="#" className='checkboxLinks'>Terms of Service </a>and <a href="#" className='checkboxLinks'>Privacy</a>
              </label>
              <div className="login-btn">
                <button className="btnLogSign">Sign Up</button>
              </div>
            </form>

            <p className="links">
              Already have an account?
              <a href="/users/login" id='login'>Login</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
