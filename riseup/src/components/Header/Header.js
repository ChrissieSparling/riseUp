import React from 'react'
import "../Header/header.css"
import logoImg  from '../../assets/images/riseup.png'

const Header = () => {
  return (
    <div>
      <header className="header">
      <img className="photo" src={logoImg} alt="rise up" />
    </header>
    </div>
  )
}

export default Header