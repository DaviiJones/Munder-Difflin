import React from "react";
import "./NavBar.css"
const NavBar = () => {
    return (
      <nav className="navbar">
        <div className="navbar-links">
          <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    );
  };
  
  export default NavBar;
