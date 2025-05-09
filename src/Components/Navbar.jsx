import "./Navbar.css";
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (err) {
      console.error('Logout failed', err);
    }
  };

  return (
    <>
      <nav className="flexbox">
        <div id="logo">
          <div>
            <link href="https://fonts.googleapis.com/css2?family=Irish+Grover&display=swap" rel="stylesheet"></link>
            OffStore
          </div>
          <div>wear the vibe</div>
        </div>

        <div id="search" className="flexbox">
          <input type="text" placeholder="Find Your Styles" />
        </div>

        <ul className="flexbox">
          <li><Link to="/" className="linknav">Home</Link></li>
          <li><Link to="/shop" className="linknav">Shop</Link></li>
          <li><Link to="/about" className="linknav">About</Link></li>
          <li><Link to="/cart" className="linknav">Cart</Link></li>
          {user ? (
            <li>
              <button className="logout-button" onClick={handleLogout}>
              <i class="fa-solid fa-arrow-right-from-bracket"></i>{/* Font Awesome Logout Icon */}
            </button>
            </li>
          ) : (
            <li><Link to="/login" className="linknav">Login</Link></li>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
