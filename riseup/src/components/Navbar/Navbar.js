import {React, useState, useEffect} from "react";
import "../Navbar/navbar.css";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

const Navbar = (props) => {
  const [navUID, setNavUID] = useState('')
  useEffect(()=>{
    setNavUID(props.id);
  })
 
  return (
    <nav>
      <div className="containerNav">
        <div className="searchNav">
          <button className="searchNavBtn">Search</button>
          <input className="inputNav" type="text" />
        </div>
        <div className="menuNav">
          <a className="navA is-active" href={navUID==='' ? '/' : `/users/${navUID}`}>
            Home
          </a>
          <a className="navA" href="/about">
            About
          </a>
          <a className="navA" href="/horoscope">
            Horoscope
          </a>
          {/* <a className="navA" href="/horoscope">
            Care List
          </a> */}
          <a className="navA" href="/crisis">
            Crisis Links
          </a>
          <a className="navA" href="/users/login">
            Login
          </a>
          <a className="navA" href="/signup">
            Sign Up
          </a>
          <a className="navA" onClick={props.logMeOut}>
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
