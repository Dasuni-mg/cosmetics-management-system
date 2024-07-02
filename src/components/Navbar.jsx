import React, { useState, useEffect } from 'react';
import { FaBars, FaXmark } from 'react-icons/fa6';

import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
// import Saloha from '../assests/saloha';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { link: 'Home', path: 'home' },
    { link: 'About us', path: 'about' },
    { link: 'Our Service', path: 'services' },
    { link: 'Our Products', path: 'products' },
    { link: 'Contact us', path: 'contact' },
  ];

  return (
    <header className="w-full h-50 bg-white md:bg-transparent fixed top-0 left-0 right-0 z-50">
      <nav
        className={`py-4 lg:px-10 px-4 ${
          isSticky
            ? 'sticky top-0 left-0 right-0 border-b bg-white duration-300'
            : ''
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <RouterLink to="/" className="text-2xl font-semibold flex items-center space-x-3">
            {/* <img src={Saloha} alt="SA.LO.HA" className="w-14 inline-block" /> */}
            <span className="text-logo">SA.LO.HA</span>
          </RouterLink>

          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <ScrollLink
                to={path}
                key={path}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="block text-base text-logo hover:text-brandPrimary cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                {link}
              </ScrollLink>
            ))}
          </ul>

          <div className="space-x-12 hidden lg:flex items-center">
            <RouterLink to="/login" className="hidden lg:flex items-center text-brandPrimary hover:text-gray-900">
              Login
            </RouterLink>
            <RouterLink to="/signup" className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGray">
              Sign Up
            </RouterLink>
          </div>

          <div className="block md:hidden">
            <button
              onClick={toggleMenu}
              className="text-neutralDGray focus:outline-none focus:neutralGray"
            >
              {isMenuOpen ? <FaXmark className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <ul className="md:hidden mt-4 py-4 bg-brandPrimary space-y-4">
            {navItems.map(({ link, path }) => (
              <ScrollLink
                key={path}
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="block text-base pl-5 text-white hover:text-gray-500 cursor-pointer"
                onClick={toggleMenu}
              >
                {link}
              </ScrollLink>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
