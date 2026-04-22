import { useState } from "react";
import { Link } from "react-router-dom";
import User from "./user";
const navStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "1rem 2rem",
  backgroundColor: "#1a1a2e",
  color: "#fff",
};

const linkStyle = {
  color: "#e0e0e0",
  textDecoration: "none",
  marginLeft: "1.5rem",
  fontSize: "1rem",
  fontWeight: 500,
  transition: "color 0.2s",
};

function Navbar() {
  return (
    <nav style={navStyle}>
      <span style={{ fontSize: "1.25rem", fontWeight: 700 }}>MyApp</span>
      <div>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/button" style={linkStyle}>Button</Link>
        <Link to="/form" style={linkStyle}>Signup</Link>
        <Link to="/leaderboard" style={linkStyle}>leaderboard</Link>
      </div>
    </nav>
  );
}


export default Navbar;
