import React, { useState } from "react";
import hero1 from "../assets/images/shopping-1.webp";
import hero2 from "../assets/images/shopping-2.jpeg";
import hero3 from "../assets/images/shopping-3.jpg";



const slides = [hero1, hero2, hero3];
function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-screen h-screen pt-8 overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex-none w-screen h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${slide})` }}
          ></div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-black bg-opacity-50 text-black p-3 rounded-full hover:bg-opacity-70 z-10"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-black bg-opacity-50 text-black p-3 rounded-full hover:bg-opacity-70 z-10"
      >
        ❯
      </button>
    </div>
  );
}

export default HeroCarousel;
