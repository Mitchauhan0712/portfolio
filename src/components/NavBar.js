import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "skills" },
    { id: 4, link: "portfolio" },
    { id: 5, link: "experience" },
    { id: 6, link: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/80 backdrop-blur-lg shadow-soft' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              to="home" 
              smooth 
              duration={500}
              className="text-2xl font-bold font-poppins text-secondary-900 hover:text-primary-600 transition-colors duration-300 cursor-pointer"
            >
              Mit Chauhan
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ul className="flex space-x-8">
              {links.map(({ id, link }) => (
                <li key={id}>
                  <Link
                    to={link}
                    smooth
                    duration={500}
                    className="text-secondary-700 hover:text-primary-600 px-3 py-2 text-sm font-medium capitalize cursor-pointer transition-all duration-300 relative group"
                  >
                    {link}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setNav(!nav)}
              className="text-secondary-700 hover:text-primary-600 focus:outline-none focus:text-primary-600 transition-colors duration-300"
            >
              {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {nav && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-lg shadow-medium">
            {links.map(({ id, link }) => (
              <Link
                key={id}
                to={link}
                smooth
                duration={500}
                onClick={() => setNav(false)}
                className="text-secondary-700 hover:text-primary-600 block px-3 py-2 text-base font-medium capitalize cursor-pointer transition-colors duration-300"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
