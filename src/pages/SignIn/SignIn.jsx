import React from 'react';
import SPManpowerImg from '../../assets/images/SPMapower_img2.webp';
import './SignIn.css';
import Navbar from '../../components/Navbar/Navbar';

const SignIn = () => {
  return (
    <div>
      <Navbar />
      <div className="login-container">
        <div className="login-form">
          <h1 className="login-title">Welcome to SP Manpower!</h1>
          <p>Please sign-in to your account.</p>
          <form className='form-container'>
            <div className="form-group">
              <input type="email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <input type="password" placeholder="Password" required />
            </div>
            <div className="form-group">
              <a href="#" className="forgot-password">Forgot Password?</a>
            </div>
            <button type="submit" className="login-button">SIGN IN</button>
          </form>
          <p className="register-link">
            New on our platform? <a href="#">Create an account</a>
          </p>
          {/* <div className="social-login">
            <a href="#" className="social-icon">F</a>
            <a href="#" className="social-icon">T</a>
            <a href="#" className="social-icon">G</a>
            <a href="#" className="social-icon">GH</a>
          </div> */}
        </div>
        <div className="login-image">
          <img className='sp-manpower-img' src={SPManpowerImg} />
        </div>
      </div>
    </div>
  );
}

export default SignIn;



