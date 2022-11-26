import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };

  return (
    <>
      <nav className="nav">
        <NavLink style={navLinkStyles} to="/"></NavLink>
        <NavLink style={navLinkStyles} to="/employees"></NavLink>
        <NavLink style={navLinkStyles} to="login"></NavLink>
      </nav>
    </>
  );
}
