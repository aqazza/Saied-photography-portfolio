import React, { useState, useEffect } from "react";
import saied5 from "../img/about/saied5.png"

const PortfolioCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://voyagela.com/wp-content/uploads/2022/11/c-PersonalSaiedAshour__VoyageLAPicture_1667877387432-1000x600.jpg"
    },
    {
      image: "https://voyagela.com/wp-content/uploads/2022/11/c-SaiedAshour__IMG2649_1667877726088.jpg"
    },
    {
      image: "https://voyagela.com/wp-content/uploads/2022/11/c-SaiedAshour__Jammin0203_1667877726093.jpg"
    },
    {
      image: "https://scontent-lax3-2.xx.fbcdn.net/v/t1.6435-9/51544806_575402392872112_887251994660569088_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=8Ezb19mWMzcQ7kNvgHXl6yc&_nc_ht=scontent-lax3-2.xx&oh=00_AYBXK3k2gsGUi4b9Pzx3AEOPIaM0mW9H1G_CvgldIfmOuQ&oe=66F4542B"
    },
    {
      image: saied5
    }
  ];

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        handlePrev();
      } else if (event.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center w-full h-full">
      <button 
        className="absolute text-3xl z-50 text-white"  // Added text-white to make the arrow white
        onClick={handlePrev}
        style={{ left: '-30px' }} // Pushed farther to the left
      >
        &larr;
      </button>
      <div className="flex flex-col items-center text-center">
        <img 
          src={slides[currentSlide].image} 
          alt={slides[currentSlide].title} 
          className="w-full h-auto max-h-[400px] rounded-lg"
        />
        <h2 className="text-xl font-bold mt-4 text-white">{slides[currentSlide].title}</h2> {/* Optional: make the title white */}
        <p className="text-sm text-white">{slides[currentSlide].description}</p> {/* Optional: make the description white */}
      </div>
      <button 
        className="absolute text-3xl z-50 text-white"  // Added text-white to make the arrow white
        onClick={handleNext}
        style={{ right: '-30px' }} // Pushed farther to the right
      >
        &rarr;
      </button>
    </div>
  );
};

export default PortfolioCarousel;
