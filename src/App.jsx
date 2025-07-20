import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Work from "./Pages/Work";




import CustomCursor from "./components/CustomCursor";
import FloatingNav from "./components/FloatingNav";
import Contact from "./section/Contact";



function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        
       
        <Route path="/contact" element={<Contact/>} />
        
        {/* <Route path="/contact" element={<Contact />} /> */}
        
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="relative bg-background-light text-text-primary font-body w-screen h-screen overflow-x-hidden overflow-y-auto">
        <CustomCursor />
        <FloatingNav/>
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;
