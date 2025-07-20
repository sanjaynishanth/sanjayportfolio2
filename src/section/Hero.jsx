import React from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import {
  Github,
  Linkedin,
  Mail,
  ArrowDownToLine
} from 'lucide-react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { InteractiveHoverButton } from "../components/magicui/interactive-hover-button";

// Colors and fonts (can be moved to a global theme config later)
const colors = {
  light: {
    background: '#ffffff',
    primary: '#000000',
    accent: '#2c3e50', // Adjusted accent for dark mode
    textSecondary: '#6c6c6c',
  },
};

const fonts = {
  heading: "'Funnel Sans', sans-serif",
  body: "'Roboto', sans-serif",
};

export default function Hero({ isDarkMode }) {
  const [text] = useTypewriter({
    words: ['Full-Stack Developer', 'AI Enthusiast', 'Creative Problem Solver'],
    loop: true,
    delaySpeed: 2000,
  });

  const currentTheme = isDarkMode ? colors.dark : colors.light;

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative dark:bg-black transition duration-500">
      {/* Optional animated background placeholder */}
      {/* You can use <AnimatedBackground /> or particles.js later */}

      <div className="max-w-4xl w-full py-16 z-10">
        {/* Hero title with landing animation */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight"
          style={{ fontFamily: fonts.heading, color: currentTheme.primary }}
        >
          <span className="text-gray-800 dark:text-white">Hello, I'm </span>
          <span className="text-accent dark:text-[#1abc9c]">Sanjay</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="mt-4 text-xl md:text-2xl font-light text-gray-600 dark:text-gray-300"
        >
          {text} <Cursor cursorColor="#6c6c6c" />
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.8 }}
          className="mt-6 text-base md:text-lg max-w-2xl mx-auto text-gray-700 dark:text-gray-400"
        >
          I craft responsive, scalable web applications blending AI-powered features, clean UI/UX, and solid backend architecture.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, delay: 1 }}
          className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          {/* MagicUI Button - Hire Me */}
          <Link to="/contact" className="w-full sm:w-auto">
            <InteractiveHoverButton
              className="w-full sm:w-auto px-6 py-3 text-base sm:text-lg border border-gray-800 dark:border-white bg-white text-black dark:bg-white dark:text-black hover:bg-black hover:text-white dark:hover:bg-white/10 dark:hover:text-white transition duration-300"
            >
              Hire Me
            </InteractiveHoverButton>
          </Link>

          {/* Download CV Button */}
          <motion.a
            href="https://drive.google.com/file/d/11B8OYEYigzJF4ITQn4HNcGyNMN0xAw46/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center justify-center px-6 py-3 text-base sm:text-lg rounded-full font-medium shadow-md bg-white text-black dark:bg-transparent dark:text-white border border-gray-800 dark:border-white transition duration-300"
          >
            Download CV
            <ArrowDownToLine className="ml-2 w-5 h-5" />
          </motion.a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8, delay: 1.2 }}
          className="mt-8 flex justify-center gap-6 text-gray-800 dark:text-white"
        >
          {[{
            Icon: Github,
            href: 'https://github.com/sanjaynishanth'
          }, {
            Icon: Linkedin,
            href: 'https://linkedin.com/in/sanjay-s-16312b257'
          }, {
            Icon: Mail,
            href: 'mailto:sanjaynishanth.ss@gmail.com'
          }].map(({ Icon, href }, idx) => (
            <motion.a
              key={idx}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-2xl"
            >
              <Icon />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
