import { React, useState } from "react";
import "../Login/login.css";
import API from "../../utils/API"
import useAuth from '../../utils/hooks/useAuth'
import { useNavigate } from 'react-router-dom'

function SignUp(props) {
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();
  const [username, setUsername] = useState("");
  const [usernameShow, setUsernameShow] = useState('none');
  const [passwordShow, setPasswordShow] = useState('none');
  const [firstNameShow, setFirstNameShow] = useState('none');
  const [lastNameShow, setLastNameShow] = useState('none');
  const [emailShow, setEmailShow] = useState('none');
  const [birthdayShow, setBirthdayShow] = useState('none');
  const [zipCodeShow, setZipCodeShow] = useState('none');
  const [newUser, setNewUser] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    role: 'paidUser',
    email: '',
    birthday: '',
    zipCode: '',
  });
  const [userId, setUserId] = useState(0);
  const [token, setToken] = useState("");



  const handlePostUser = (e) => {
    console.log(newUser)
    e.preventDefault();
    if (!newUser.username) {
      setUsernameShow('inline')
      return
    }
    if (!newUser.firstName) {
      setFirstNameShow('inline')
      return
    }
    if (!newUser.lastName) {
      setLastNameShow('inline')
      return
    }
    if (!newUser.email) {
      setEmailShow('inline')
      return
    }
    if (!newUser.birthday) {
      setBirthdayShow('inline')
      return
    }
    if (!newUser.zipCode) {
      setZipCodeShow('inline')
      return
    }
    if (!newUser.password) {
      setPasswordShow('inline')
      return
    }
    // if (!newUser.password) {
    //   setPasswordShow('inline')
    //   return
    // }
    if (newUser.username !== '' && newUser.password !== '' && newUser.firstName !== '' && newUser.lastName !== '' && newUser.email !== '' && newUser.birthday !== '' && newUser.zipCode !== '') {
      API.signUp(newUser)
        .then((newData) => {
          if (newData.id) {
            console.log(newData)
            setUserId(newData.id);
            setUsername(newData.username);
            setToken(newData.accessToken);
            localStorage.setItem("token", newData.accessToken);
            navigate(`/login`)
          } else {
            alert('Your request was not successful. \nPlease check the form and try again.');
            console.log('front end post req prob:', newData)
            return
          }
        })
        .catch(err => {
          alert('Sorry! Our bad, there was a problem.');
          console.log('there was an error', err)
          return
        })
    }
  };

  const handleCollectUser = e => {
    console.log(e.target.name, e.target.value)
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value
    })
  }



  return (

    <div className="mainSign">
      <div className="sub-main-sign">
        <div>
          <div>
            <form onSubmit={handlePostUser}>
              <h1 className="signTitle">Sign Up</h1>

              <div className="email-input">
                <div className="form-alert-box">
                  <input
                    type="text"
                    placeholder="first name"
                    className="input-field inputSign"
                    required
                    name='firstName'
                    onChange={handleCollectUser}
                  />
                  <p className="form-alert" style={{ display: `${firstNameShow}` }}>This field is required. Please enter your first name.</p>
                </div>
              </div>
              <div className="email-input">
                <div className="form-alert-box">
                  <input
                    type="text"
                    placeholder="last name"
                    className="input-field inputSign"
                    required
                    name='lastName'
                    onChange={handleCollectUser}
                  />
                  <p className="form-alert" style={{ display: `${lastNameShow}` }}>This field is required. Please enter your last name.</p>
                </div>
              </div>

              <div className="email-input">
                <div className="form-alert-box">
                  <input
                    type="date"
                    placeholder="birthday"
                    className="input-field inputSign"
                    required
                    name='birthday'
                    onChange={handleCollectUser}
                  />
                  <p className="form-alert" style={{ display: `${birthdayShow}` }}>This field is required. Please enter your birthday.</p>
                </div>
              </div>
              <div className="email-input">
                <div className="form-alert-box">
                  <input
                    type="text"
                    placeholder="zip code"
                    className="input-field inputSign"
                    required
                    name='zipCode'
                    onChange={handleCollectUser}
                  />
                  <p className="form-alert" style={{ display: `${zipCodeShow}` }}>This field is required. Please enter your zip code.</p>
                </div>
              </div>

              <div className="email-input">
                <div className="form-alert-box">
                  <input
                    type="text"
                    placeholder="email"
                    className="input-field inputSign"
                    required
                    name='email'
                    onChange={handleCollectUser}
                  />
                  <p className="form-alert" style={{ display: `${emailShow}` }}>This field is required. Please enter your email.</p>
                </div>
              </div>
              <div className="email-input">
                <div className="form-alert-box">
                  <input
                    type="text"
                    placeholder="user name"
                    className="input-field inputSign"
                    required
                    name='username'
                    onChange={handleCollectUser}
                  />
                  <p className="form-alert" style={{ display: `${usernameShow}` }}>This field is required. Please pick a username.</p>
                </div>
              </div>
              <div className="email-input">
                <div className="form-alert-box">
                  <input
                    type="password"
                    placeholder="password"
                    className="input-field inputSign"
                    required
                    name='password'
                    onChange={handleCollectUser}
                  />
                  <p className="form-alert" style={{ display: `${passwordShow}` }}>This field is required. Please choose a password.</p>
                </div>
              </div>
              {/* <div className="email-input">
                <input
                  type="text"
                  className="input-field inputSign"
                  placeholder="role"
                  required
                  name='role'
                  onChange={props.handleCollectUser}
                />
              </div> */}
              <label>
                <input type="checkbox" className="checkbox"></input>I have read and agreed to the
                <a href="/terms" className='checkboxLinks'>Terms of Service </a>and <a href="/privacy" className='checkboxLinks'>Privacy</a>
              </label>
              {/* <div className="form-alert-box">
                <p className="form-alert" style={{ display: `${usernameShow}` }}>This field is required. Please provide a valid username.</p>
              </div> */}

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
