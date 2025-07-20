import React from "react";
import Hero from "../section/Hero";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      className="w-screen h-screen flex items-center justify-center"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <Hero />
    </motion.div>
  );
};

export default Home;
