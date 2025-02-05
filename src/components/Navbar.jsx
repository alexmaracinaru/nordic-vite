import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Logo from "../images/logo.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-beige px-6 py-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img src={Logo} alt="Nordic Compass Logo" className="w-12 h-12" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-12 text-navy">
          <li>
            <HashLink
              smooth
              to="/#vision"
              className="hover:text-primary uppercase"
            >
              Vision
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              to="/#programs"
              className="hover:text-primary uppercase"
            >
              Programs
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              to="/#about"
              className="hover:text-primary uppercase"
            >
              About Us
            </HashLink>
          </li>
          <li>
            <Link to="/contact" className="hover:text-primary uppercase">
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Donate Button */}
        <a
          href="https://buymeacoffee.com/nordic.compass"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex bg-primary text-beige pl-6 pr-4 py-2 rounded-lg items-center space-x-2 hover:bg-red-600 transition-colors duration-300 uppercase font-sans"
        >
          <span>Donate</span>
          <div className="flex items-center justify-center w-6 h-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 15l6-6m0 0l-6 0m6 0l0 6"
              />
            </svg>
          </div>
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="block md:hidden text-navy focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-lightMuted rounded-3xl">
          <ul className="flex flex-col space-y-4 px-6 py-4 text-navy">
            <li>
              <HashLink
                smooth
                to="/#vision"
                className="hover:text-primary uppercase block"
                onClick={() => setIsMenuOpen(false)}
              >
                Vision
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="/#programs"
                className="hover:text-primary uppercase block"
                onClick={() => setIsMenuOpen(false)}
              >
                Programs
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="/#about"
                className="hover:text-primary uppercase block"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </HashLink>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-primary uppercase block"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <a
                href="https://buymeacoffee.com/nordic.compass"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-beige px-6 py-2 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors duration-300 uppercase font-sans"
              >
                Donate
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
