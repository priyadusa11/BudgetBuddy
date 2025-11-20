import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import Profile from "../pages/Profile";
function Header() {
  return (

    <header className="header">
       <br></br>
      <div className="logo-section">
        <img src="/images/logo2.png" alt="BudgetBuddy Logo" className="logo-img" />
        <span className="logo-text">BudgetBuddy</span>
      </div>
      <br></br>
      <br></br>
      <nav className="nav">
        <Link to="/dashboard/home" className="btn">Home</Link>
        <Link to="/dashboard/about" className="btn">About</Link>
        <Link to="/dashboard" className="btn">Dashboard</Link>
        <Link to="/login" className="btn">Login</Link>
        <Link to="/signup" className="btn">Signup</Link>
        
      </nav>
    </header>
  );
}

export default Header;
