import { FiSearch } from "react-icons/fi";
import "../styles/Navbar.css";

const navLinks = [
  { name: "Collections", href: "#" },
  { name: "Feature", href: "#" },
  { name: "FAQ", href: "#" },
];

export default function Navbar() {
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

        {navLinks.map((link, index) => (
          <a key={index} className="nav-link" href={link.href}>
            {link.name}
          </a>
        ))}

        <button className="wallet-btn">Select Wallet</button>
      </div>
    </header>
  );
}