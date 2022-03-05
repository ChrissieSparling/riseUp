import React from "react";
import "../css/login.css";

function SignUp() {
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="img">
            <div className="container-image">
              {/* <img src={logoImg} alt="profile" className="logo-img" /> */}
            </div>
          </div>
          <div>
            <h1>Sign Up</h1>
            
            <div>
              <input
                type="text"
                placeholder="first name"
                className="input-field"
              />
            </div>
            <div className="email-input">
              <input
                type="text"
                placeholder="
                last name"
                className="input-field"
              />
            </div>
           
            <div className="email-input">
              <input
                type="text"
                placeholder="birthday"
                className="input-field"
              />
            </div>
            <div className="email-input">
              <input
                type="text"
                placeholder="zip code"
                className="input-field"
              />
            </div>
            
            <div className="email-input">
              <input type="text" placeholder="email" className="input-field" />
            </div>
            <div className="email-input">
              <input
                type="text"
                placeholder="user name"
                className="input-field"
              />
            </div>
            <div className="email-input">
              <input
                type="text"
                placeholder="password"
                className="input-field"
              />
            </div>
            <div className="email-input">
              <input
                type="text"
                placeholder="confirm password"
                className="input-field"
              />
            </div>

            <div className="login-btn">
              <button>Sign Up</button>
            </div>

            <p className="links">
              <a href="#">login</a>
              <br />
              <a href="#">home</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
