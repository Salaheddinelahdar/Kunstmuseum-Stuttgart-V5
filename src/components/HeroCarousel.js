import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const slides = [
  {
    image: {
      mobile: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
      tablet: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80',
      desktop: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1920&q=90'
    },
    title: 'Discover Amazing Deals',
    subtitle: 'Find your next favorite item at unbeatable prices'
  },
  {
    image: {
      mobile: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      tablet: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      desktop: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=90'
    },
    title: 'Quality Pre-Loved Items',
    subtitle: 'Carefully selected items in great condition'
  },
  {
    image: {
      mobile: 'https://images.unsplash.com/photo-1518655048521-f130df041f66?auto=format&fit=crop&w=800&q=80',
      tablet: 'https://images.unsplash.com/photo-1518655048521-f130df041f66?auto=format&fit=crop&w=1200&q=80',
      desktop: 'https://images.unsplash.com/photo-1518655048521-f130df041f66?auto=format&fit=crop&w=1920&q=90'
    },
    title: 'Sustainable Shopping',
    subtitle: 'Help reduce waste by choosing pre-loved items'
  }
];

const HeroCarousel = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Set initial width
    setWindowWidth(window.innerWidth);
    
    // Update width on resize
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    )
  };

  // Function to get the appropriate image based on screen size
  const getImageUrl = (slide) => {
    if (windowWidth < 640) return slide.image.mobile; // Mobile
    if (windowWidth < 1024) return slide.image.tablet; // Tablet
    return slide.image.desktop; // Desktop
  };

  return (
    <div className="relative w-full overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, i) => (
          <div key={i} className="relative">
            <div 
              className="h-[50vh] sm:h-[60vh] md:h-[70vh] w-full bg-cover bg-center transition-all duration-700 ease-in-out"
              style={{
                backgroundImage: `url(${getImageUrl(slide)})`,
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}
              aria-label={slide.title}
            >
              <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
                <div className="max-w-4xl mx-auto text-center px-4">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg mb-3 sm:mb-4 md:mb-6 animate-fadeIn">
                    {slide.title}
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 drop-shadow-md max-w-2xl mx-auto">
                    {slide.subtitle}
                  </p>
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
