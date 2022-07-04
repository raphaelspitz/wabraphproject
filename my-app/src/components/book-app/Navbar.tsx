import React from 'react';
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
// import "./Navbar.css";

function Navbar() {
  return (
    <div className="mb-5 d-flex justify-content-center">
        <Link to="/" >
            Book app
        </Link>
        <Link className="ml-4" to="/neflixapp">
            Netflix app
        </Link>
        <Link className="ml-4" to="/tinderApp">
            Tinder App
        </Link>
    </div>
  );
}

export default Navbar;