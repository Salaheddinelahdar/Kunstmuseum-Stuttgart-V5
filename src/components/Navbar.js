import React from "react";

function Navbar({ currentPage, setCurrentPage }) {
  return (
    <nav className="bg-[#C19A6B] shadow-lg sticky top-0 z-50 rounded-b-xl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between h-16 items-center">
          <div className="text-2xl font-extrabold text-white tracking-wide drop-shadow-lg cursor-pointer" onClick={() => setCurrentPage('home')}>Kunstmuseum Stuttgart</div>
          <div className="space-x-8">
            <button
              className={`text-white/90 hover:text-[#8B5E3C] font-medium transition-colors ${currentPage === 'home' ? 'underline' : ''}`}
              onClick={() => setCurrentPage('home')}
            >
              Home
            </button>
            <button
              className={`text-white/90 hover:text-[#8B5E3C] font-medium transition-colors ${currentPage === 'about' ? 'underline' : ''}`}
              onClick={() => setCurrentPage('about')}
            >
              About
            </button>
            <button
              className={`text-white/90 hover:text-[#8B5E3C] font-medium transition-colors ${currentPage === 'contact' ? 'underline' : ''}`}
              onClick={() => setCurrentPage('contact')}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
