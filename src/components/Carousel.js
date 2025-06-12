import React, { useEffect, useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1920&q=90",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=90",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1920&q=90",
];

function Carousel() {
  const [current, setCurrent] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Handle search functionality here
      console.log('Searching for:', searchQuery);
      // You can add your search logic or navigation here
    }
  };

  return (
    <div className="w-full">
      <div className="relative w-full h-64 md:h-[32rem] bg-[#F9F6F1] flex items-center justify-center rounded-xl shadow-lg mt-4 overflow-hidden">
        {/* Background Image */}
        <img
          src={images[current]}
          alt="slider"
          className="absolute inset-0 w-full h-full object-cover transition-all duration-1000"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="w-full max-w-2xl px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-6 drop-shadow-lg">
              Discover Amazing Products
            </h2>
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-4 pl-6 pr-14 rounded-full bg-white bg-opacity-90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#8B5E3C] focus:ring-offset-2 shadow-lg"
                placeholder="Search for products..."
              />
              <button 
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#8B5E3C] text-white p-2 rounded-full hover:bg-[#6d4a30] transition-colors duration-200"
                aria-label="Search"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>
            <p className="text-white text-center mt-4 text-sm md:text-base drop-shadow-md">
              Find the best deals on your favorite items
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4 space-x-3">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`h-4 w-4 rounded-full border-2 border-[#8B5E3C] transition-all duration-300 ${idx === current ? 'bg-[#C19A6B] shadow-lg scale-110' : 'bg-[#F9F6F1]'}`}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
