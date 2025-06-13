import React, { useState, useEffect } from 'react';

function Navbar({ currentPage, setCurrentPage }) {
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



  return (
    <nav className={`bg-[#8B5E3C] shadow-lg sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-0'}`}>
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
              className={`text-white/90 hover:text-[#F9F6F1] hover:bg-[#A67C52] px-3 py-2 rounded-md font-medium transition-colors text-sm md:text-base ${
                currentPage === 'home' ? 'bg-[#A67C52] text-white' : ''
              }`}
              onClick={(e) => handleNavClick('home', e)}
            >
              Home
            </button>
          </div>


        </div>
      </div>


    </nav>
  );
}

export default Navbar;
