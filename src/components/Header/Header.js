import React from "react";
import "../Header/header.css";
import logoImg from "../../assets/images/riseup.png";

const Header = () => {
  return (
    <div>
      <header className="header">
        <a href="/">
          <img className="photoHeader" src={logoImg} alt="rise up" />
        </a>
      </header>
    </div>
  );
};

export default Header;
