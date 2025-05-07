import React from "react";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FiMoon } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-container">
        <div className="logo">
          <Link to="/">Shopify</Link>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search for a product..." />
          <button className="search-btn">
            <IoSearch />
          </button>
        </div>
        <div className="nav-right-side">
          <div>
            <Link to="/products" className="link">
              Products
            </Link>
          </div>
          <div>
            <Link to="/categories" className="link">
              Categories
            </Link>
          </div>
          <button className="login-btn light-black">
            <FaUser />
            <span className="text">Login</span>
          </button>
          <button className="right-side-icon light-black">
            <IoCartOutline />
          </button>
          <button className="right-side-icon">
            <FiMoon />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
