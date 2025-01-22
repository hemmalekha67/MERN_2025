import React from 'react';
import { Link } from 'react-router-dom';
import'../../css/Signup.css';
const Signup = () => {
  return (
    <div className="form-container">
      <h2>Signup</h2>
      <form>
        <label htmlFor="signup-email">Email:</label>
        <input type="email" id="signup-email" name="signup-email" required />
        <label htmlFor="signup-password">Password:</label>
        <input type="password" id="signup-password" name="signup-password" required />
        <button type="submit" className="signup-button">Signup</button>
      </form>
      <p className="switch-link">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};
export default Signup;