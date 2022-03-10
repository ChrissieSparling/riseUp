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
          <a className="navA is-active" href="#">
            Home
          </a>
          <a className="navA" href="#">
            About
          </a>
          <a className="navA" href="#">
            Horoscope
          </a>
          <a className="navA" href="/crisis">
            Crisis Links
          </a>
          <a className="navA" href="#">
            Login
          </a>
          <a className="navA" href="#">
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
