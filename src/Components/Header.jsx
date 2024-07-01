import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <div className="container">
       
        <Link to="/" className="navbar-brand text-dark">
          Ecommerce Site
        </Link>

      
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

      
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link text-dark">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link text-dark">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/user-login" className="nav-link text-dark">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="nav-link text-dark">
                Signup
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
