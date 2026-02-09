import { useState } from "react";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import "../styles/Navbar.css";

const navLinks = [
  { name: "Collections", href: "#" },
  { name: "Feature", href: "#" },
  { name: "FAQ", href: "#" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleToggle = () => setMenuOpen((prev) => !prev);
  const handleClose = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-section">
        <div className="logo">
          Psycho<span>Art</span>
        </div>

        <div className="search">
          <FiSearch className="search-icon" />
          <input type="text" placeholder="Search items and collections" />
        </div>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navLinks.map((link, index) => (
            <a
              key={index}
              className="nav-link"
              href={link.href}
              onClick={handleClose}
            >
              {link.name}
            </a>
          ))}
          <a href="#" className="wallet-btn" onClick={handleClose}>
            Select Wallet
          </a>
        </nav>

        <button
          className="menu-toggle"
          onClick={handleToggle}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
      {menuOpen && <div className="nav-overlay" onClick={handleClose}></div>}
    </header>
  );
}
