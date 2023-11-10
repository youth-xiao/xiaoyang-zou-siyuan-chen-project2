import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../style/Navbar.css";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => setDropdown((prevState) => !prevState);

  useEffect(() => {
    const closeDropdownOnOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdown(false);
      }
    };

    document.addEventListener("mousedown", closeDropdownOnOutsideClick);

    return () => {
      document.removeEventListener("mousedown", closeDropdownOnOutsideClick);
    };
  }, []);

  return (
    <nav>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item dropdown" ref={dropdownRef}>
          <button
            type="button"
            className="nav-link dropdown-toggle"
            onClick={toggleDropdown}
          >
            Game
          </button>
          {dropdown && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/game/normal" className="dropdown-item">
                  Normal
                </Link>
              </li>
              <li>
                <Link to="/game/hard" className="dropdown-item">
                  Hard
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li className="nav-item">
          <Link to="/rules" className="nav-link">
            Rules
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
