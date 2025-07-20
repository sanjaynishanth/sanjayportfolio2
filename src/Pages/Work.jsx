import React from "react";

import { motion } from "framer-motion";
import Project from "../section/Project";

const Work = () => {
  return (
    <motion.div
      className="w-screen min-h-screen flex flex-col items-center justify-start"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <Project />
    </motion.div>
  );
};

export default Work;
