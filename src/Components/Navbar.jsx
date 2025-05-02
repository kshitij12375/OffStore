import "./Navbar.css";
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    < >
      <nav className="flexbox">
        <div id="logo">
          <div>
            <link href="https://fonts.googleapis.com/css2?family=Irish+Grover&display=swap" rel="stylesheet"></link>
            OffStore
          </div>
          <div>
            wear the vibe
          </div>
        </div>
        <div id="search" className="flexbox">
          <input type="text" placeholder="Find Your Styles"></input>
        </div>
        <ul className="flexbox">
          <li><Link to="/" className="linknav">Home</Link></li>
          <li><Link to="/shop" className="linknav">Shop</Link></li>
          <li><Link to="/about" className="linknav">About</Link></li>
          <li><Link to="/cart" className="linknav">Cart</Link></li>
          <li><Link to="/login" className="linknav">Login</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;