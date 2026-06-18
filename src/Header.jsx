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
        <NavLink to="/Services" className="nav-link">
          Services
        </NavLink>
        <NavLink to="/Contact" className="nav-link">
          Contact Us
        </NavLink>
        <NavLink to="/Login" className="nav-link">
          Login
        </NavLink>
        <NavLink to="/Signup" className="nav-link">
          Signup
        </NavLink>
      </nav>
    </header>
  );
}