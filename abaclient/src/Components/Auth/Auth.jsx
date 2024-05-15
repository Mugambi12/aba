import { useState } from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../../assets/image3.png";
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
    <div className="auth-container-fluid">
      <img
        src={backgroundImage}
        alt="Background"
        className="background-image"
      />
      <div
        className={`auth-container zoomin-element ${isSignIn ? "" : "active"}`}
      >
        <div className="form-container form-sign-up">
          <form>
            <h1>Create Account</h1>
            <div className="social-icons">
              <a href="#" className="icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="icon">
                <i className="fab fa-google-plus-g"></i>
              </a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button>Sign Up</button>
          </form>
        </div>

        <div className="form-container form-sign-in">
          <form>
            <h1>Sign In</h1>
            <div className="social-icons">
              <a href="#" className="icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="icon">
                <i className="fab fa-google-plus-g"></i>
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

              <Link to="/" className="back-home-link">
                Go back Home
              </Link>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Hello, Friend!</h1>
              <p>
                Register with your personal details to use all site features
              </p>
              <button className="hidden" onClick={handleSignUpClick}>
                Sign Up
              </button>

              <Link to="/" className="back-home-link">
                Go back Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
