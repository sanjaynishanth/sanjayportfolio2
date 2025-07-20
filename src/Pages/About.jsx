import React from "react";
import Hero from "../section/About";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="w-screen min-h-screen flex flex-col items-center justify-start"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <Hero />
    </motion.div>
  );
};

export default About;
