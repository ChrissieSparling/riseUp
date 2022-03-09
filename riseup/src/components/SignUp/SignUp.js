import { React, useState } from "react";
import "../Login/login.css";

function SignUp(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [user, setUser] = useState({});

  // const buildUser = async (e) => {
  //   e.preventDefault();
  //   const newUser = await setUser({
  //     firstName,
  //     lastName,
  //     username,
  //     password,
  //     role,
  //     email,
  //     birthday,
  //     zipCode,
  //   });
  //   // setUser(newUser);
  //   if (user.firstName) {
  //     console.log("==========user", user);
  //   } else {
  //     alert("no new user");
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3005/users/new", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        username: username,
        password: password,
        role: role,
        email: email,
        birthday: birthday,
        zipCode: zipCode,
      }),
    })
      .then((data) => data.json())
      .then((newData) => console.log(newData));
  };

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
            <form onSubmit={handleSubmit}>
              <h1 className="signTitle">Sign Up</h1>

              <div className="email-input">
                <input
                  type="text"
                  placeholder="first name"
                  className="input-field input"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="email-input">
                <input
                  type="text"
                  placeholder="
                last name"
                  className="input-field input"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              <div className="email-input">
                <input
                  type="text"
                  placeholder="birthday"
                  className="input-field input"
                  required
                  value={birthday}
                  onChange={(e) => setBirthday(e.target.value)}
                />
              </div>
              <div className="email-input">
                <input
                  type="text"
                  placeholder="zip code"
                  className="input-field input"
                  required
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                />
              </div>

              <div className="email-input">
                <input
                  type="text"
                  placeholder="email"
                  className="input-field input"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="email-input">
                <input
                  type="text"
                  placeholder="user name"
                  className="input-field input"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="email-input">
                <input
                  type="text"
                  placeholder="password"
                  className="input-field input"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="email-input">
                <input
                  type="text"
                  className="input-field input"
                  placeholder="role"
                  required
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
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
              <a href="/" id='login' onClick={props.handleNewUser}>Login</a>
              <br />
              <a href="/">Home</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
