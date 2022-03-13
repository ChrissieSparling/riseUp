import React, {useState, useEffect} from "react";
import "../Navbar/navbar.css";
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const options = [
  'Home',
  'About',
  'Horoscope',
  'Crisis Links',
  'Login',
  'Sign Up',
  'Logout',
];

const ITEM_HEIGHT = 48;

const Navbar = (props) => {
  const [navUID, setNavUID] = useState('')
  useEffect(()=>{
    setNavUID(props.id);
  })
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
          <a className="navA is-active" href={navUID==='' ? '/' : `/users/${navUID}`}>
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

        <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>

        {/* <button className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </button> */}
      </div>
    </nav>
  );
};

export default Navbar;


