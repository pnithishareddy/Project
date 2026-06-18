import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-brand">
        <h1>Anjali Homeo Stores</h1>
      </div>

      <nav className="site-nav">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/services" className="nav-link">
          Services
        </NavLink>
        <NavLink to="/contact" className="nav-link">
          Contact Us
        </NavLink>
        <NavLink to="/login" className="nav-link">
          Login
        </NavLink>
        <NavLink to="/signup" className="nav-link signup-link">
          Signup
        </NavLink>
      </nav>
    </header>
  );
}