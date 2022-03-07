import React from "react";
import "../Navbar/navbar.css";
// import navImg from "./images/20210930_100350.jpg";

const Navbar = () => {
  return (
    <div>
      <div className="nav">
      <div className='topLeft'>
        {/* <i className="fa-solid fa-magnifying-glass navSearchIcon"></i> */}
      <img src= "#" alt="profile" className="logoImg" />
        </div>
        <a className="link" href="#">
          Home
        </a>
        <a className="link" href="#">
          test2
        </a>
        <a className="link" href="#">
          
        </a>
        <a className="link" href="#">
          About
        </a>
        <a className="link" href="#">
          Forums        </a>
        <a className="link" href="#">
          Login
        </a>
        
      </div>
    </div>
  );
};

export default Navbar;
