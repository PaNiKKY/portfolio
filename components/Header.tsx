import React, { useState, useEffect } from 'react';
import { NAV_LINKS, PERSONAL_INFO } from '../constants';
import type { NavLink } from '../types';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-lg border-b border-gray-800/50' : 'bg-transparent'}`}>
      <nav className="max-w-screen-xl mx-auto px-6 sm:px-12 lg:px-16 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-xl font-bold text-white transition-colors hover:text-sky-400">
            {PERSONAL_INFO.name}
          </a>
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link: NavLink) => (
              <a key={link.name} href={link.href} className="text-gray-300 hover:text-sky-400 transition-colors duration-300">
                {link.name}
              </a>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4 bg-gray-900 rounded-lg p-4">
            {NAV_LINKS.map((link: NavLink) => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="block py-2 text-gray-300 hover:text-sky-400 transition-colors duration-300">
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;