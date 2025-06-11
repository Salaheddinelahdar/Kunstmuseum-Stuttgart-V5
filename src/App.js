import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HeroCarousel from "./components/HeroCarousel";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import About from "./About";
import Contact from "./Contact";

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  return (
    <div className="flex flex-col min-h-screen bg-[#F9F6F1]">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage === 'about' ? (
        <About />
      ) : currentPage === 'contact' ? (
        <Contact />
      ) : (
        <>
          <HeroCarousel />
          {/* Centered main content headline/desc */}
          <section className="text-center my-10 max-w-2xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-[#8B5E3C]">Explore Unique Pre-Loved Items</h1>
            <p className="mt-4 text-lg text-[#333333]">Welcome to our curated collection of quality second-hand items. Discover great deals on vintage finds and give old goods a new life buy or sell today!</p>
          </section>
            
            <ProductList setCurrentPage={setCurrentPage} />
        </>
      )}
      {currentPage !== 'contact' && <Footer />}
    </div>
  );
}

export default App;
