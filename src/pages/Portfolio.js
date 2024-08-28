import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import { CursorContext } from "../context/CursorContext";
import Video1 from "../img/portfolio/video1.mp4"; 
import Video1Full from "../img/portfolio/video1full.mp4";
import Video2 from "../img/portfolio/video2.mp4";
import Video2Full from "../img/portfolio/video2full.mp4";
import Video3 from "../img/portfolio/video3.mp4";
import Video3Full from "../img/portfolio/video3full.mp4";
import Video4 from "../img/portfolio/video4.mp4";
import Video4Full from "../img/portfolio/video4full.mp4";
import port2 from "../img/portfolio/port2.jpg";

const PortfolioCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Sunset Through the Shutters",
      description: "A moment of solitude and serene beauty as daylight fades.",
      image: port2
    },
    {
      title: "Ethereal Glimpse",
      description: "A fleeting moment where light and shadow dance.",
      image: "https://voyagela.com/wp-content/uploads/2022/11/c-SaiedAshour__thumbnailIMG9394_1667878443346.jpg"
    },
    {
      title: "Reflections of Serenity",
      description: "A peaceful reflection inviting contemplation and introspection.",
      image: "https://scontent-lax3-1.xx.fbcdn.net/v/t1.6435-9/53121569_590723548006663_5984337594631061504_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0327a3&_nc_ohc=WjE__OxmKdwQ7kNvgEYWhzq&_nc_ht=scontent-lax3-1.xx&oh=00_AYB1y1iSvmqqbJOxEzndbdo__2UNNxPfUglY6kDT_7tNTg&oe=66F48139"
    },
    {
      title: "Whispers of the Horizon",
      description: "Delicate balance between the known and the unknown, as the sea meets the sky.",
      image: "https://voyagela.com/wp-content/uploads/2022/11/c-SaiedAshour__DSCF0281FINAL_1667878491428.jpg"
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

  return (
    <div className="relative flex items-center justify-center w-full h-full">
      <button 
        className="absolute left-0 text-3xl z-50" 
        onClick={handlePrev}
        style={{ left: '10px' }}
      >
        &larr;
      </button>
      <div className="flex flex-col items-center text-center">
        <img 
          src={slides[currentSlide].image} 
          alt={slides[currentSlide].title} 
          className="w-full h-auto max-h-[400px] rounded-lg"
        />
        <h2 className="text-xl font-bold mt-4">{slides[currentSlide].title}</h2>
        <p className="text-sm">{slides[currentSlide].description}</p>
      </div>
      <button 
        className="absolute right-0 text-3xl z-50" 
        onClick={handleNext}
        style={{ right: '10px' }}
      >
        &rarr;
      </button>
    </div>
  );
};

const Portfolio = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const [showCarousel, setShowCarousel] = useState(false);
  const [showFullscreenVideo, setShowFullscreenVideo] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const handleOpenCarousel = () => {
    setShowCarousel(true);
  };

  const handleCloseCarousel = () => {
    setShowCarousel(false);
  };

  const handleOpenFullscreenVideo = (video) => {
    setCurrentVideo(video);
    setShowFullscreenVideo(true);
  };

  const handleCloseFullscreenVideo = () => {
    setShowFullscreenVideo(false);
    setCurrentVideo(null);
  };

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        handleCloseFullscreenVideo();
      }
    };

    if (showFullscreenVideo) {
      window.addEventListener("keydown", handleEscKey);
    } else {
      window.removeEventListener("keydown", handleEscKey);
    }

    return () => {
      window.removeEventListener("keydown", handleEscKey);
    };
  }, [showFullscreenVideo]);

  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section"
    >
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8">
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="flex flex-col lg:items-start"
          >
            <h1 className="h1">Portfolio</h1>
            <p className="mb-12 max-w-sm">
              Welcome to my portfolio, where I share my journey as a
              videographer. Here, you'll find a collection of videos that
              capture moments, stories, and emotions. Each piece reflects my
              passion for visual storytelling and the art of filmmaking. I
              invite you to explore these videos and{" "}
              <b
                onClick={handleOpenCarousel}
                className="text-primary cursor-pointer underline"
              >
                experience the narratives
              </b>{" "}
              they bring to life.
              <br />
              <br />
            </p>
            <Link to={"/contact"} className="btn mb-[30px] mx-auto lg:mx-0">
              Hire me
            </Link>
          </motion.div>

          <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="grid grid-cols-2 lg:gap-2"
          >
            <div
              className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden relative cursor-pointer"
              onClick={() => handleOpenFullscreenVideo(Video3Full)}
            >
              <video
                className="object-cover h-full w-full hover:scale-110 transition-all duration-500"
                src={Video3}
                alt=""
                muted
                loop
                autoPlay
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <div
              className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden relative cursor-pointer"
              onClick={() => handleOpenFullscreenVideo(Video1Full)}
            >
              <video
                className="object-cover h-full w-full hover:scale-110 transition-all duration-500"
                src={Video1}
                alt=""
                muted
                loop
                autoPlay
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <div
              className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden relative cursor-pointer"
              onClick={() => handleOpenFullscreenVideo(Video2Full)}
            >
              <video
                className="object-cover h-full w-full hover:scale-110 transition-all duration-500"
                src={Video2}
                alt=""
                muted
                loop
                autoPlay
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <div
              className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden relative cursor-pointer"
              onClick={() => handleOpenFullscreenVideo(Video4Full)}
            >
              <video
                className="object-cover h-full w-full hover:scale-110 transition-all duration-500"
                src={Video4}
                alt=""
                muted
                loop
                autoPlay
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {showCarousel && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
            onClick={handleCloseCarousel}
          >
            <div
              className="relative bg-white p-8 rounded-lg max-w-3xl mx-auto overflow-hidden"
              style={{ maxHeight: "90vh", width: "80%", height: "80%" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="overflow-y-auto h-full relative">
                <PortfolioCarousel />
              </div>
            </div>
          </div>
        )}

        {/* Fullscreen Video Modal */}
        {showFullscreenVideo && currentVideo && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
            onClick={handleCloseFullscreenVideo} // Clicking outside the video closes the modal
          >
            <div
              className="relative bg-transparent"
              onClick={(e) => e.stopPropagation()} // Prevent click propagation to background
            >
              <video
                className="w-full h-full max-h-full max-w-full"
                src={currentVideo}
                controls
                autoPlay
              />
            </div>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default Portfolio;
