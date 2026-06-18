import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
     
<h1 className="logo">
  <Link to="/">Anjali Homeo Stores</Link>
</h1>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
<Link to="/contact">Contact Us</Link>

        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </nav>
    </header>
  );
}

export default Header;