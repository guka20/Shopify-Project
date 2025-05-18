import React, { useContext } from "react";
import "./AuthModal.css";
import { FaUnlock, FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

import { IoIosClose } from "react-icons/io";
import { IsAuthModalOpenContext } from "@/contexts/AuthModalContext";

const AuthModal = () => {
  const { setIsAuthModalOpen } = useContext(IsAuthModalOpenContext);
  return (
    <div className="dark-background-screen">
      <div className="modal-container">
        <button className="close-btn" onClick={() => setIsAuthModalOpen(false)}>
          <IoIosClose />
        </button>
        <p className="modal-title">
          <FaUnlock />
          <span>Login</span>
          <FaUnlock />
        </p>
        <div className="input-place">
          <FaUser className="input-icon" />
          <input
            type="text"
            className="modal-input"
            placeholder="Your username here... "
          />
        </div>
        <div className="input-place">
          <RiLockPasswordFill className="input-icon" />
          <input
            type="password"
            className="modal-input"
            placeholder="Your password here... "
          />
        </div>
        <button className="login-btn">Submit</button>
        <p className="register">
          No account? <a href="#">Register</a>
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
