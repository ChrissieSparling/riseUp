import React, { useState, useEffect } from "react";
import "../Navbar/navbar.css";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useMediaQuery } from "@mui/material";

const options = [
  {name:"Home", href:"/"},
  {name:"About", href:"/about"},
  {name:"Horoscope", href:"/horoscope"},
  {name:"Crisis Links", href:"/crisis"},
  {name:"Login",href:"/users/login"},
  {name:"Sign Up", href:"/signup"},
  {name:"Logout",href:"/logout"}
];

const ITEM_HEIGHT = 48;

const Navbar = (props) => {
  const isBigScreen = useMediaQuery("(min-width:913px)")
  const [navUID, setNavUID] = useState("");
  useEffect(() => {
    setNavUID(props.id);
  });
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav>
      <div className="containerNav">
        <div className="searchNav">
          <button className="searchNavBtn">Search</button>
          <input className="inputNav" type="text" />
        </div>
        <div className="menuNav">
          <a
            className="navA is-active"
            href={navUID === "" ? "/" : `/users/${navUID}`}
          >
            Home
          </a>
          <a className="navA" href="/about">
            About
          </a>
          <a className="navA" href="/horoscope">
            Horoscope
          </a>
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
    {!isBigScreen?(
      <>
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? "long-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          MenuListProps={{
            "aria-labelledby": "long-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              display: "flex",
              flexDirection: "column",
              maxHeight: ITEM_HEIGHT * 4.5,
            },
            
          }}
        >
          {options.map((option) => (
            <MenuItem
              key={option.name}
              selected={option === "Pyxis"}
              onClick={handleClose}
            >
              <a href={option.href}>
                {option.name} 
              </a>
            </MenuItem>
          ))}
        </Menu>
        </>
    ):null}
      </div>
    </nav>
  );
};

export default Navbar;


