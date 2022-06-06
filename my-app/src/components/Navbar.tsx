import React from 'react';
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
// import "./Navbar.css";

function Navbar() {
  return (
    
      
    <div >
        <Link to="/" >
            Home
        </Link>
        <Link to="/login" >
            Login
        </Link>
        <Link to="/register">
            Register
        </Link>
        <Link to="/contact">
            Contact
        </Link>
    </div>
      
  );
}

export default Navbar;