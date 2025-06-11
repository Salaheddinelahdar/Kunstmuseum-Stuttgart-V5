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

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
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
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#8B5E3C] focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
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
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#C19A6B] bg-opacity-95">
          <button
            onClick={() => handleNavClick('home')}
            className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#8B5E3C] hover:bg-opacity-25 ${currentPage === 'home' ? 'bg-[#8B5E3C] bg-opacity-25' : ''}`}
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#8B5E3C] hover:bg-opacity-25 ${currentPage === 'about' ? 'bg-[#8B5E3C] bg-opacity-25' : ''}`}
          >
            About
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#8B5E3C] hover:bg-opacity-25 ${currentPage === 'contact' ? 'bg-[#8B5E3C] bg-opacity-25' : ''}`}
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
