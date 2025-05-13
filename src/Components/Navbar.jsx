import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import './Navbar.css';
import { FaSearch, FaShoppingCart, FaSignOutAlt, FaBars, FaTimes, FaHome, FaStore, FaInfoCircle, FaUser } from 'react-icons/fa';

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0); // This would typically come from your cart state
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // Example: Load cart count from localStorage or your state management
    // This is just a placeholder - replace with your actual cart logic
    const loadCartCount = () => {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        try {
          const cartItems = JSON.parse(savedCart);
          setCartCount(cartItems.length);
        } catch (error) {
          console.error('Error loading cart:', error);
        }
      }
    };

    loadCartCount();
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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo-container">
          <h1 className="logo-text">OffStore</h1>
          <p className="logo-tagline">wear the vibe</p>
        </Link>

        <div className="search-container">
          <FaSearch className="search-icon" />
          <input 
            type="text" 
            className="search-input" 
            placeholder="Find Your Styles" 
          />
        </div>

        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <li>
            <Link to="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
              <FaHome className="d-none d-md-inline me-1" /> Home
            </Link>
          </li>
          <li>
            <Link to="/shop" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
              <FaStore className="d-none d-md-inline me-1" /> Shop
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
              <FaInfoCircle className="d-none d-md-inline me-1" /> About
            </Link>
          </li>
          <li>
            <Link to="/cart" className="nav-link cart-link" onClick={() => setMobileMenuOpen(false)}>
              <FaShoppingCart className="d-none d-md-inline me-1" /> Cart
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </Link>
          </li>
          
          {user ? (
            <li>
              <button className="logout-btn" onClick={handleLogout}>
                <FaSignOutAlt /> <span className="d-none d-md-inline">Logout</span>
              </button>
            </li>
          ) : (
            <li>
              <Link to="/login" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                <FaUser className="d-none d-md-inline me-1" /> Login
              </Link>
            </li>
          )}
        </ul>

        {mobileMenuOpen && (
          <div className="search-container mobile">
            <FaSearch className="search-icon" />
            <input 
              type="text" 
              className="search-input" 
              placeholder="Find Your Styles" 
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;