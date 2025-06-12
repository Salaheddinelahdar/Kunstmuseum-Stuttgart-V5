import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1600003014755-11a5f5d15d6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    alt: 'Vintage collectibles on display',
    title: 'Sell Your Treasures',
    subtitle: 'Turn your vintage items into someone else\'s treasure'
  },
  {
    image: 'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    alt: 'Antique shop interior',
    title: 'Discover Hidden Gems',
    subtitle: 'Find unique vintage pieces for your collection'
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    alt: 'Vintage home decor items',
    title: 'Vintage Home Decor',
    subtitle: 'Add character to your space with timeless pieces'
  },

  {
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    alt: 'Vintage furniture collection',
    title: 'Quality Vintage Finds',
    subtitle: 'Carefully selected pieces with history and charm'
  }
];

const HeroCarousel = ({ searchQuery, onSearchChange, onSearchSubmit }) => {
  const [loadedImages, setLoadedImages] = useState({});
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Preload images
    const loadImages = async () => {
      const imagePromises = slides.map((slide, index) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = slide.image;
          img.onload = () => {
            setLoadedImages(prev => ({
              ...prev,
              [index]: true
            }));
            resolve();
          };
          img.onerror = () => {
            console.error(`Failed to load image: ${slide.image}`);
            resolve();
          };
        });
      });

      await Promise.all(imagePromises);
    };

    loadImages();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchQuery.trim();
    if (query) {
      onSearchChange(query);
      onSearchSubmit();
      
      // Scroll to products section after a small delay to allow state updates
      setTimeout(() => {
        const productsSection = document.getElementById('products-section');
        if (productsSection) {
          productsSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    dotsClass: 'slick-dots !bottom-4',
    appendDots: dots => (
      <div className="absolute bottom-4 w-full">
        <ul className="m-0 p-0 text-center">{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <button className="w-3 h-3 rounded-full bg-white/50 mx-1 focus:outline-none transition-all duration-300 hover:bg-white/75" />
    ),
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex)
  };

  return (
    <div className="relative w-full overflow-hidden">
      <Slider {...settings} className="w-full">
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[400px] md:h-[80vh] w-full">
            <div 
              className="absolute inset-0 w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
                opacity: loadedImages[index] ? 1 : 0,
                transition: 'opacity 0.5s ease-in-out',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
              aria-label={slide.alt}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20">
                <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
                  <div className="w-full max-w-4xl">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-lg">
                      {slide.title}
                    </h2>
                    <p className="text-xl md:text-2xl mb-8 text-white/90 drop-shadow-md">
                      {slide.subtitle}
                    </p>
                    
                    {/* Search Bar */}
                    <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto">
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => onSearchChange(e.target.value)}
                        className="w-full py-4 pl-6 pr-14 rounded-full bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#8B5E3C] focus:ring-offset-2 shadow-lg text-lg"
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
                    
                    <p className="text-white/80 mt-4 text-sm md:text-base drop-shadow-sm">
                      Browse our collection of handpicked items
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroCarousel;
