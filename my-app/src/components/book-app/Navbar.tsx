import React, { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const sideNavRef = useRef<HTMLHeadingElement>(null);
  const openNavbar = () => {
    sideNavRef.current?.focus();
    setToggle(!toggle);
  }
  const closeNavbar = () => {
    setToggle(false);
  }

  return (
    <>
    <span className="hamburger-btn" 
      onClick={openNavbar}>&#9776; open
    </span>
    <div 
      tabIndex={0} onBlur={closeNavbar}
      ref={sideNavRef}
      className={`sidenav ${toggle ? "open" : "close"}`}
      >
    <span className="closebtn" onClick={closeNavbar}>&times;</span>
        <Link to="/" >
            Book app
        </Link>
        <Link to="/neflixapp">
            Netflix app
        </Link>
        <Link to="/tinderApp">
            Tinder App
        </Link>
      </div>
    </>
  );
}

export default Navbar;