import React from "react";
import "../Navbar/navbar.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav>
      <div className="container">
      <h1>heather</h1>
      <div className="menu">
        <a href="#" className="is-active">
          Home
        </a>
        <a href="#">About</a>
        <a href="#">Horoscope</a>
        <a href="#">To Do List</a>
        <a href="#">Login</a>
        <a href="#">Smerthing</a>
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
