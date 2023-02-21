import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Book Reviewer</h1>
      <div className="links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink
          className="signin-button"
          to="signin"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          Sign in
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
