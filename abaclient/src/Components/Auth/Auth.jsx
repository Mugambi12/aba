import React, { useState } from "react";
import "./Auth.css";

const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleSignInClick = () => {
    setIsSignIn(true);
  };

  const handleSignUpClick = () => {
    setIsSignIn(false);
  };

  return (
    <div className="body-container">
      <div className={`auth-container ${isSignIn ? "" : "active"}`}>
        <div className="form-container sign-up">
          <form>
            <h1>Create Account</h1>
            <div class="social-icons">
              <a href="#" class="icon">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="icon">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="#" class="icon">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="icon">
                <i class="fab fa-google-plus-g"></i>
              </a>
            </div>
            <span>or use your email for registeration</span>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button>Sign Up</button>
          </form>
        </div>

        <div className="form-container sign-in">
          <form>
            <h1>Sign In</h1>
            <div class="social-icons">
              <a href="#" class="icon">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="icon">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="#" class="icon">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="icon">
                <i class="fab fa-google-plus-g"></i>
              </a>
            </div>

            <span>or use your email password</span>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <a href="#">Forget Your Password?</a>
            <button>Sign In</button>
          </form>
        </div>

        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all site features</p>
              <button className="hidden" onClick={handleSignInClick}>
                Sign In
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Hello, Friend!</h1>
              <p>
                Register with your personal details to use all site features
              </p>
              <button className="hidden" onClick={handleSignUpClick}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
