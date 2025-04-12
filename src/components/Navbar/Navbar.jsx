import React from "react";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FiMoon } from "react-icons/fi";
import { HiOutlineShoppingCart } from "react-icons/hi2";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-container">
        <div className="logo">Shopify</div>
        <div className="search-bar">
          <input type="text" placeholder="Search for a product..." />
          <button className="search-btn">
            <IoSearch />
          </button>
        </div>
        <div className="nav-right-side">
          <div>
            <Link to="/products">Products</Link>
          </div>
          <div>
            <Link to="/categories">Categories</Link>
          </div>
          <button className="login-btn">
            <FaUser />
            Login
          </button>
          <button>
            <HiOutlineShoppingCart />
          </button>
          <button>
            <FiMoon />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
