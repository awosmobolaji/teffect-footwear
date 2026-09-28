
import { useState } from "react";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="nav-container">

        <a href="#home" className="logo">
          TEFFECT
        </a>

        <div
          className={`nav-links ${
            menuOpen ? "active" : ""
          }`}
        >

          <a href="#home">Home</a>

          <a href="#shop">Shop</a>

          <a href="#collections">Collections</a>

          <a href="#about">About</a>

          <a href="#contact">Contact</a>

          <a
            href="/admin"
            className="admin-nav-link"
          >
            Admin
          </a>

        </div>

        <div className="nav-actions">

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;
