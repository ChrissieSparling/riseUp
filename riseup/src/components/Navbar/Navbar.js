import React from "react";
import "../Navbar/navbar.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

const Navbar = (props) => {
  return (
    <nav>
      <div className="containerNav">
        <div className="searchNav">
          <button className="searchNavBtn">Search</button>
          <input className="inputNav" type="text" />
        </div>
        <div className="menuNav">
          <a className="navA is-active" href={props.id==='' ? '/' : `/users/${props.id}`}>
            Home
          </a>
          <a className="navA" href="#">
            About
          </a>
          <a className="navA" href="/horoscope">
            Horoscope
          </a>
          <a className="navA" href="#">
            Stuff
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
  /* <div className="navContainer">
      <div className="nav">
        <div className="topLeft">
          
          <input className="search" placeholder="Search" type="text" />
        
        </div>
        <button onClick={props.logMeOut}>Log Out</button>
        <a className="link" href="#">
          Home
        </a>
        <a className="link" href="#">
          Horoscope
        </a>
        <a className="link" href="#">
          Planner
        </a>
        <a className="link" href="#">
          About
        </a>
        <a className="link" href="#">
          Forums{" "}
        </a>
        <a className="link" href="#">
          Login
        </a>
      </div>
      </div> */
}
