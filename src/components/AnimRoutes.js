import React from 'react';
// Importing the pages
import Home from '../pages/Home';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';

// Importing routes, route, and useLocation hook from react-router-dom
import { Routes, Route, useLocation } from 'react-router-dom';
// Importing AnimatePresence from framer-motion
import { AnimatePresence } from 'framer-motion';

const AnimRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence initial={false} mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimRoutes;
