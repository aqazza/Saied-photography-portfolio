import React, { useContext } from 'react';
// Importing components
import Header from './components/Header';
import AnimRoutes from './components/AnimRoutes';
// Importing router
import { BrowserRouter as Router } from 'react-router-dom';
// Importing motion from framer-motion
import { motion } from 'framer-motion';
// Importing cursor context
import { CursorContext } from './context/CursorContext';

const App = () => {
  const { cursorVariants, cursorBG } = useContext(CursorContext);

  return (
    <>
      <Router>
        <Header />
        <AnimRoutes />
      </Router>
      {/* Custom cursor */}
      <motion.div
        variants={cursorVariants}
        animate={cursorBG}
        className="w-[32px] h-[32px] bg-primary fixed top-0 left-0 pointer-events-none z-50 rounded-full"
      />
    </>
  );
};

export default App;
