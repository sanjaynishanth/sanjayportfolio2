import { motion } from 'framer-motion';
import { GraduationCap, Code, Award } from 'lucide-react';
import ExperienceTimeline from './ExperienceTimeline';
import { Link } from 'react-router-dom';
import img from '../assets/sanjay.jpg';
import study from '../assets/study1.jpg';

// === Animation Variants ===
const textReveal = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// === Style Constants ===
const colors = {
  backgroundRight: '#ffffff',
  primary: '#000000',
  accent: '#000c18ff',
  lightText: '#6c6c6c',
};

const fonts = {
  heading: "'Funnel Sans', sans-serif",
  body: "'Roboto', sans-serif",
};

export default function About() {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-white px-6 md:px-12 py-24"
      style={{ fontFamily: fonts.body }}
    >
      {/* === Section 1: Intro Text & Image === */}
      <div className="flex flex-col-reverse lg:flex-row items-start justify-between gap-16 max-w-7xl mx-auto">
        {/* Text Block */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={staggerContainer}
          className="w-full lg:w-1/2"
        >
          <motion.h2
            variants={textReveal}
            className="text-[80px] leading-none font-bold mb-8"
            style={{ fontFamily: fonts.heading, color: colors.primary }}
          >
            ABOUT
          </motion.h2>

          <motion.p
            variants={textReveal}
            className="text-lg max-w-xl leading-relaxed"
            style={{ color: colors.lightText }}
          >
            I'm a passionate Full-Stack Developer and AI Enthusiast currently pursuing B.Tech in Artificial Intelligence and Data Science. My strength lies in crafting seamless digital experiences using technologies like React, FastAPI, and Java.
          </motion.p>

          <motion.p
            variants={textReveal}
            transition={{ delay: 0.2, ...textReveal.visible.transition }}
            className="text-lg max-w-xl leading-relaxed mt-4"
            style={{ color: colors.lightText }}
          >
            I've delivered production-grade projects with clean UI, strong functionality, and real-world impact. Beyond development, I actively explore how AI tools and automation can speed up workflows, improve code quality, and enhance user interactions.
          </motion.p>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex justify-center items-start"
        >
          <div className="relative w-fit">
            <img
              src={img}
              alt="Sanjay"
              className="w-[360px] h-[650px] object-cover grayscale rounded-md"
            />
            <div className="absolute left-0 bottom-0 w-50 h-85 border-l-8 border-b-8 border-black rounded-bl-md"></div>
          </div>
        </motion.div>
      </div>

      {/* === Section 2: Education Timeline === */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={staggerContainer}
        className="mt-32 px-6 lg:px-0 max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-12"
      >
        {/* Timeline */}
        <div className="mt-[80px] flex-1 h-full flex items-center justify-center">
          <div className="border-l-2 pl-6 border-black space-y-12">
            <motion.div variants={textReveal}>
              <p className="text-2xl font-semibold" style={{ fontFamily: fonts.heading, color: colors.primary }}>
                B.Tech in Artificial Intelligence & Data Science
              </p>
              <p className="text-md mt-1 text-[#6c6c6c]" style={{ fontFamily: fonts.body }}>
                Dr. N.G.P Institute of Technology, Coimbatore
              </p>
              <p className="text-sm mt-1 italic text-[#999999]" style={{ fontFamily: fonts.body }}>
                2022 – Present
              </p>
            </motion.div>

            <motion.div variants={textReveal}>
              <p className="text-2xl font-semibold" style={{ fontFamily: fonts.heading, color: colors.primary }}>
                Higher Secondary Education
              </p>
              <p className="text-md mt-1 text-[#6c6c6c]" style={{ fontFamily: fonts.body }}>
                John Britto Matric Hr. Sec. School, Sathyamangalam
              </p>
              <p className="text-sm mt-1 italic text-[#999999]" style={{ fontFamily: fonts.body }}>
                2020 – 2022
              </p>
            </motion.div>
          </div>
        </div>

        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="flex-1 h-full w-full justify-center items-center hidden lg:flex"
        >
          <img
            src={study}
            alt="Illustration"
            className="w-full max-w-sm h-auto object-contain"
          />
        </motion.div>
      </motion.div>

      {/* === Section 3: What I Do === */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={staggerContainer}
        className="mt-32 px-6 lg:px-0 max-w-5xl"
      >
        <div className="lg:w-3/4 ml-10">
          <motion.h3
            variants={textReveal}
            className="text-5xl font-bold mb-8"
            style={{ fontFamily: fonts.heading, color: colors.primary }}
          >
            What I do
          </motion.h3>

          <motion.p
            variants={textReveal}
            className="text-xl leading-relaxed"
            style={{ color: colors.lightText }}
          >
            I primarily work with custom <strong>JavaScript</strong> and <strong>React</strong>, building structured and maintainable full-stack applications. I design responsive UIs with <strong>Tailwind CSS</strong> and develop scalable backends using <strong>FastAPI</strong> and <strong>PostgreSQL</strong>.
          </motion.p>

          <motion.p
            variants={textReveal}
            transition={{ delay: 0.2, ...textReveal.visible.transition }}
            className="text-xl leading-relaxed mt-6"
            style={{ color: colors.lightText }}
          >
            With growing interest in <strong>AI integration</strong>, I enjoy blending traditional development with smart systems like GPT-based assistants, recommendation systems, and automated content tools — enhancing usability while saving development time.
          </motion.p>
        </div>
      </motion.section>

      {/* === Section 4: Experience Timeline === */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={textReveal}
        className="mt-12 space-y-3"
      >
        <div className="max-w-5xl mx-auto">
          <ExperienceTimeline />
        </div>
      </motion.div>

      {/* === Final CTA: Say Hello === */}
      <div className="min-h-screen flex items-center justify-center text-center py-24 relative z-10">
        <Link to="/contact">
          <motion.h2
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-7xl md:text-[10rem] font-bold cursor-pointer transition-all duration-300"
            style={{ fontFamily: fonts.heading, color: colors.accent }}
          >
            Say Hello
          </motion.h2>
        </Link>
      </div>
    </section>
  );
}
