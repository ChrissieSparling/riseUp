import React from "react";
import "../Navbar/navbar.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="navContainer">
      <div className="nav">
        <div className="topLeft">
          {/* <FontAwesomeIcon className="searchIcon" icon={faMagnifyingGlass} /> */}
          <input className="search" placeholder="Search" type="text" />
        
          {/* <img src="#" alt="profile" className="logoImg" /> */}
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
    </div>
  );
};

export default Navbar;
