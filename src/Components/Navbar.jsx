import "./Navbar.css";
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const a = 2;
  console.log(a);
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
          <li><Link to="/" className="link">Home</Link></li>
          <li><Link to="/shop" className="link">Shop</Link></li>
          <li><Link to="/about" className="link">About</Link></li>
          <li><Link to="/cart" className="link">Cart</Link></li>
          <li><Link to="/login" className="link">Login</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;