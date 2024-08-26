import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import { CursorContext } from "../context/CursorContext";
import PortfolioCarousel from "../components/PortfolioCarousel"; // Same as Portfolio page
import WomanImg from "../img/about/saied1.png";

const About = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const [showCarousel, setShowCarousel] = useState(false);

  const handleOpenCarousel = () => {
    setShowCarousel(true);
  };

  const handleCloseCarousel = () => {
    setShowCarousel(false);
  };

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
          {/* Image Section */}
          <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden">
            <img src={WomanImg} alt="" className="w-full h-auto object-cover" />
          </div>

          {/* Text Section */}
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start"
          >
            <h1 className="h1">About me</h1>
            <p className="mb-12 max-w-sm">
              I am a fanatic of film and storytelling mostly in the form of
              drama and rich character developments and visuals. I believe film 
              stands apart from movies, offering a completely unique and immersive 
              feeling that ultimately determines the final experience as a viewer. 
              As a cinematographer, I am in charge of leading the
              dance for the audience. I control how you feel based on the
              motions of the camera. In my personal life, capturing moments has 
              become more than just a hobby—<b
                onClick={handleOpenCarousel}
                className="text-primary cursor-pointer underline"
              >
                it's a natural extension of who I am.
              </b> 
              <br />
              <br />
              I love love love capturing people in their
              most dream-like state to create a feeling of “missing” or
              nostalgia. After all, a photo IS a memory.
            </p>
            <Link to={"/portfolio"} className="btn mb-[30px] mx-auto lg:mx-0">
              View my work
            </Link>
          </motion.div>
        </div>

        {/* Carousel Section */}
        {showCarousel && (
  <div
    className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
    onClick={handleCloseCarousel}
  >
    <div
      className="relative p-8 rounded-lg max-w-3xl mx-auto overflow-hidden"
      style={{ maxHeight: "90vh", width: "80%", height: "80%", background: 'transparent' }}
      onClick={(e) => e.stopPropagation()}
    >
      <PortfolioCarousel />
    </div>
  </div>
)}

      </div>
    </motion.section>
  );
};

export default About;
