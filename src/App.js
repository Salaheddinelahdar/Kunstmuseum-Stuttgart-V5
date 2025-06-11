import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import About from './About';
import Contact from './Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Handle body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  // Close menu when navigating
  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [currentPage]);

  return (
    <div className="flex flex-col min-h-screen bg-[#F9F6F1] text-[#333333] overflow-x-hidden">
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      
      <main className="flex-grow">
        {currentPage === 'about' ? (
          <About />
        ) : currentPage === 'contact' ? (
          <Contact />
        ) : (
          <>
            <HeroCarousel />
            
            {/* Centered main content headline/desc */}
            <section className="text-center py-8 sm:py-12 md:py-16 px-4 sm:px-6">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-4 md:mb-6">
                  Explore Unique Pre-Loved Items
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-[#5A3E36] max-w-3xl mx-auto leading-relaxed">
                  Welcome to our curated collection of quality second-hand items. 
                  Discover great deals on vintage finds and give old goods a new life. 
                  Buy or sell today!
                </p>
              </div>
            </section>
            
            <div className="pb-12 sm:pb-16 md:pb-20">
              <ProductList setCurrentPage={setCurrentPage} />
            </div>
          </>
        )}
      </main>
      
      {currentPage !== 'contact' && <Footer />}
      
      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </div>
  );
}

export default App;
