import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1920&q=90",
    title: "Discover Amazing Deals",
    subtitle: "Find your next favorite item at unbeatable prices"
  },
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=90",
    title: "Quality Pre-Loved Items",
    subtitle: "Carefully selected items in great condition"
  },
  {
    image: "https://images.unsplash.com/photo-1518655048521-f130df041f66?auto=format&fit=crop&w=1920&q=90",
    title: "Sustainable Shopping",
    subtitle: "Help reduce waste by choosing pre-loved items"
  }
];

const HeroCarousel = () => {
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
  };

  return (
    <div className="relative w-full">
      <Slider {...settings}>
        {slides.map((slide, i) => (
          <div key={i}>
            <div
              className="h-[70vh] w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="h-full w-full bg-black/40 flex flex-col items-center justify-center p-4">
                <h1 className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg text-center mb-4">
                  {slide.title}
                </h1>
                <p className="text-white text-xl md:text-2xl max-w-2xl text-center drop-shadow-lg">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroCarousel;
