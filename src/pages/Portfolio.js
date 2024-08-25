import React, { useContext } from "react";
// import images and videos
import Image1 from "../img/portfolio/1.png";
import Image2 from "../img/portfolio/2.png";
import Image3 from "../img/portfolio/3.png";
import Image4 from "../img/portfolio/4.png";
import Video1 from "../img/portfolio/video1.mp4"; // Import the preview video
import Video1Full from "../img/portfolio/video1full.mp4"; // Import the full video
import Video2 from "../img/portfolio/video2.mp4";
import Video2Full from "../img/portfolio/video2full.mp4";
import Video3 from "../img/portfolio/video3.mp4";
import Video3Full from "../img/portfolio/video3full.mp4";
import Video4 from "../img/portfolio/video4.mp4";
import Video4Full from "../img/portfolio/video4full.mp4";
// import link
import { Link } from "react-router-dom";
// import motion
import { motion } from "framer-motion";
// import transition
import { transition1 } from "../transitions";
// import context
import { CursorContext } from "../context/CursorContext";

const Portfolio = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

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
          {/* text */}
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
              invite you to explore these videos and 
              <b> experience the narratives </b> they bring to life. 
              <br />
              <br />
            </p>
            <Link to={"/contact"} className="btn mb-[30px] mx-auto lg:mx-0">
              Hire me
            </Link>
          </motion.div>
          {/* image grid */}
          <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="grid grid-cols-2 lg:gap-2"
          >
            {/* image 4 */}
            <div
              className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden relative cursor-pointer"
              onClick={() => window.open(Video3Full, "_blank")}
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
            {/* video for Image1 */}
            <div
              className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden relative cursor-pointer"
              onClick={() => window.open(Video1Full, "_blank")}
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

            {/* image 2 */}
            <div
              className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden relative cursor-pointer"
              onClick={() => window.open(Video2Full, "_blank")}
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

            {/* image 3 */}
            <div
              className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden relative cursor-pointer"
              onClick={() => window.open(Video4Full, "_blank")}
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
      </div>
    </motion.section>
  );
};

export default Portfolio;
