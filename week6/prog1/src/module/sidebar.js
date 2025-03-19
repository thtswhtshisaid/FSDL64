// src/module/Sidebar.js
import React from 'react';
import './style/sidebar.css'; // Import the sidebar CSS file

function Sidebar() {
  return (
    <div className="Sidebar">
      <ul className="sidebar-list">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;
