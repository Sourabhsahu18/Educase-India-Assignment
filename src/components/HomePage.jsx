import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HomePage.css";

// Welcome Component
const Welcome = () => {
  const navigate = useNavigate(); // Initialize navigation

  return (
    <div className="welcome-container">
      <div className="welcome-content">
        {/* Title */}
        <h1 className="welcome-title">Welcome to PopX</h1>
        {/* Description Text */}
        <p className="welcome-text">
          Lorem ipsum dolor sit amet,
          <br /> consectetur adipiscing elit.
        </p>

        {/* Button to navigate to Signup Page */}
        <button
          className="create-account-btn"
          onClick={() => navigate("/signup")}
        >
          Create Account
        </button>

        {/* Button to navigate to Login Page */}
        <button className="login-btn" onClick={() => navigate("/login")}>
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

// Exporting the component
export default Welcome;
