import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import "./SignUpForm.css";
import logoImage from "../../assets/logo.png";
import facebookImage from "../../assets/facebook.png";
import googleImage from "../../assets/google.png";

function SignUpForm() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleLoginClick = () => {
    navigate("/signin"); // Navigate to the SignInForm page
  };

  return (
    <div className="signup-container">
      <div className="left-section">
        <img alt="logo" className="logo" src={logoImage} />
        <div className="text-content">
          <h1>Sign up to</h1>
          <h2>Graphers</h2>
          <p>
            If you already have an account
            <br />
            You can{" "}
            <button className="login-button" onClick={handleLoginClick}>
              Login here!
            </button>
          </p>
        </div>
      </div>
      <div className="right-section">
        <h1>Sign Up</h1>
        <form className="signup-form">
          <input type="email" placeholder="Enter Email" />
          <input type="text" placeholder="Create User name" />
          <input type="tel" placeholder="Contact number" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <button type="submit">Register</button>
        </form>
        <div className="social-login">
          <p>or continue with</p>
          <div className="social-icons">
            <img src={facebookImage} alt="Facebook" />
            <img src={googleImage} alt="Google" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
