// src/components/ExperienceTimeline.jsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, Calendar } from "lucide-react";

const experiences = [
  {
    title: "IEEE 2024 Region 10 Summer School",
    organization: "VIT",
    description: "AI & IoT in Smart Environments",
    date: "2024",
  },
  {
    title: "Internship",
    organization: "CubeAI",
    description: "Machine Learning Intern",
    date: "2024",
  },
  {
    title: "United International Conference",
    organization: "United Institute Of Technology",
    description: "Intelligent Web Companion",
    date: "2025",
  },
  
];

const colors = {
  primary: "#000000",
  accent: "#000c18ff",         // Used for icon background and highlights
  lightText: "#6c6c6c",      // Used for description text
};

const fonts = {
  heading: "'Funnel Sans', sans-serif",
  body: "'Roboto', sans-serif",
};

export default function ExperienceTimeline() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="pt-20">
      {/* Section Heading */}
      <motion.h2
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-3xl sm:text-4xl font-bold text-center mb-16"
        style={{ fontFamily: fonts.heading, color: colors.primary }}
      >
        Experience & Certifications
      </motion.h2>

      {/* Timeline Container */}
      <div className="relative max-w-3xl mx-auto before:absolute before:inset-y-0 before:left-1/2 before:w-1 before:bg-gray-300">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`relative mb-12 w-full md:w-1/2 px-4 ${
              i % 2 === 0 ? "md:ml-auto text-left" : "md:mr-auto text-left"
            }`}
          >
            {/* Card */}
            <div
              className="bg-white border border-gray-200 shadow-md rounded-lg p-6 relative"
              style={{ fontFamily: fonts.body }}
            >
              {/* Icon Bubble */}
              <div
                className="absolute -left-4 md:left-auto md:-right-4 top-6 w-8 h-8 text-white rounded-full flex items-center justify-center z-10"
                style={{ backgroundColor: colors.accent }}
              >
                <Award size={16} />
              </div>

              {/* Date */}
              <div
                className="flex items-center gap-2 mb-2 font-medium text-sm"
                style={{ color: colors.accent }}
              >
                <Calendar size={16} />
                <span>{exp.date}</span>
              </div>

              {/* Title */}
              <h3
                className="text-xl font-semibold"
                style={{ fontFamily: fonts.heading, color: colors.primary }}
              >
                {exp.title}
              </h3>

              {/* Organization */}
              <p className="text-sm font-medium mb-1" style={{ color: colors.accent }}>
                {exp.organization}
              </p>

              {/* Description */}
              <p className="text-sm leading-relaxed" style={{ color: colors.lightText }}>
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
