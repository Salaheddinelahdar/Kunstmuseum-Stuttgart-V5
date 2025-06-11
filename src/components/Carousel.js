import React, { useEffect, useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1920&q=90",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=90",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1920&q=90",
];

function Carousel() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      <div className="w-full h-64 md:h-96 bg-[#F9F6F1] flex items-center justify-center rounded-xl shadow-lg mt-4">
        <img
          src={images[current]}
          alt="slider"
          className="object-contain w-full h-full transition-all duration-500 rounded-xl"
        />
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
