// src/module/Header.js
import React from 'react';
import './style/header.css'; // Make sure you have a CSS file for styles

function Header() {
  return (
    <header className="Header">
      <div className="logo">MyLogo</div>
      <button className="login-button">Login</button>
    </header>
  );
}

export default Header;
