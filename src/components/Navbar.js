import React, { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

function Navbar({ currentPage, setCurrentPage, isMobileMenuOpen, setIsMobileMenuOpen }) {
  // Use the isMobileMenuOpen prop instead of local state
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Add event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll, { passive: true });
    };
  }, [scrolled, setScrolled]);

  const handleNavClick = (page, e) => {
    e.preventDefault();
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const toggleMobileMenu = (e) => {
    e.stopPropagation();
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`bg-[#C19A6B] shadow-lg sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-0'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div 
            className="text-xl md:text-2xl font-extrabold text-white tracking-wide cursor-pointer hover:opacity-90 transition-opacity" 
            onClick={() => handleNavClick('home')}
          >
            Kunstmuseum Stuttgart
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            <button
              className={`text-white/90 hover:text-[#8B5E3C] font-medium transition-colors text-sm md:text-base ${currentPage === 'home' ? 'underline' : ''}`}
              onClick={() => handleNavClick('home')}
            >
              Home
            </button>
            <button
              className={`text-white/90 hover:text-[#8B5E3C] font-medium transition-colors text-sm md:text-base ${currentPage === 'about' ? 'underline' : ''}`}
              onClick={() => handleNavClick('about')}
            >
              About
            </button>
            <button
              className={`text-white/90 hover:text-[#8B5E3C] font-medium transition-colors text-sm md:text-base ${currentPage === 'contact' ? 'underline' : ''}`}
              onClick={() => handleNavClick('contact')}
            >
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-[#8B5E3C] hover:bg-opacity-25 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-haspopup="true"
            >
              <span className="sr-only">
                {isMobileMenuOpen ? 'Close main menu' : 'Open main menu'}
              </span>
              {isMobileMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`fixed inset-0 z-40 transition-all duration-300 ease-in-out transform ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden`}
      >
        {/* Overlay */}
        <div 
          className={`fixed inset-0 bg-black transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        ></div>
        
        {/* Menu content */}
        <div className="relative z-50 bg-[#C19A6B] shadow-xl w-4/5 max-w-sm h-full overflow-y-auto transition-transform duration-300 ease-in-out">
          <div className="flex justify-between items-center p-4 border-b border-[#8B5E3C]">
            <span className="text-white font-semibold">Menu</span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white hover:text-[#8B5E3C] focus:outline-none"
              aria-label="Close menu"
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          
          <nav className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            <button
              onClick={(e) => handleNavClick('home', e)}
              className={`block w-full text-left px-3 py-3 rounded-md text-base font-medium text-white hover:bg-[#8B5E3C] hover:bg-opacity-25 transition-colors ${
                currentPage === 'home' ? 'bg-[#8B5E3C] bg-opacity-25' : ''
              }`}
            >
              Home
            </button>
            <button
              onClick={(e) => handleNavClick('about', e)}
              className={`block w-full text-left px-3 py-3 rounded-md text-base font-medium text-white hover:bg-[#8B5E3C] hover:bg-opacity-25 transition-colors ${
                currentPage === 'about' ? 'bg-[#8B5E3C] bg-opacity-25' : ''
              }`}
            >
              About
            </button>
            <button
              onClick={(e) => handleNavClick('contact', e)}
              className={`block w-full text-left px-3 py-3 rounded-md text-base font-medium text-white hover:bg-[#8B5E3C] hover:bg-opacity-25 transition-colors ${
                currentPage === 'contact' ? 'bg-[#8B5E3C] bg-opacity-25' : ''
              }`}
            >
              Contact
            </button>
          </nav>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
