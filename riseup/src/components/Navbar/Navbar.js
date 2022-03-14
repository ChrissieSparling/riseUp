import { useNavigate } from 'react-router-dom';
import {React, useState, useEffect} from "react";
import useAuth from "../../utils/hooks/useAuth";
import API from '../../utils/API';
import "../Navbar/navbar.css";


// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

const Navbar = (props) => {
  const navigate = useNavigate();
  const {auth, setAuth} = useAuth();
  // const [navUID, setNavUID] = useState('')
  // useEffect(()=>{
  //   setNavUID(props.id);
  // })

const redirect = (e, url) => {
  e.preventDefault();
    const token = localStorage.getItem("token");
    if (token) {

      API.getTokenData(localStorage.getItem('token'))
        .then(data => {
          console.log('data from token check', data);
          setAuth({
            userId: data.userId, 
            userName: data.username, 
            role: data.role, 
            // token: localStorage.getItem('token')
        })
          // setUserId(data.id);
          // setUsername(data.username);
          // setToken(token);
      
        }).then(newdata=>{
          navigate(url);
        })
        
        .catch(err => {
          console.log(err);
        });

    } else {console.log('no token')}
  }

  console.log('this is auth', auth)

  const logMeOut = ()=>{
    localStorage.removeItem("token");
    setAuth({
      userId: '', 
      userName: '', 
      role: '', 
      token: ''})
    // setUserId(0);
    // setUsername("");
    // setToken("");
    console.log('you\'re logged out!')
    navigate('/')
  }
 
  return (
    <nav>
      <div className="containerNav">
        <div className="searchNav">
          <button className="searchNavBtn">Search</button>
          <input className="inputNav" type="text" />
        </div>
        <div className="menuNav">
      {!auth.userName ? 
          <>
            <a className="navA is-active" href='/'>
              Home
            </a>
            <a className="navA" href="/login">
              Login
            </a>
            <a className="navA" href="/signup">
              Sign Up
            </a>
          </>
        : 
          <a className="navA" href="/profile">
            User Home
          </a> 
          }
          <a className="navA" href='/about'>
            About
          </a>
          <a className="navA" href='/horoscope'>
            Horoscope
          </a>
          <a className="navA" href='/crisis'>
            Crisis Links
          </a>
          <a className="navA" onClick={logMeOut}>
            Logout
          </a>
        </div>

        <button className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

// work, family, personal wellness, finacial, relationship, recovery

{
  
}
