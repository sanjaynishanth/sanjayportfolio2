// src/components/ProjectDescription.jsx
import React from "react";
import { motion } from "framer-motion";
import {
    FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaJsSquare, FaDatabase, FaGitAlt,
    FaAws, FaDocker, FaLinux, FaFigma,
} from 'react-icons/fa';
import { SiTailwindcss, SiFastapi, SiPostgresql, SiMongodb, SiFirebase, SiMysql, SiGraphql } from 'react-icons/si';
import { IoLogoFirebase } from "react-icons/io5";

const TechIcons = {
    "React": <FaReact className="text-blue-500" />,
    "Node.js": <FaNodeJs className="text-green-600" />,
    "Express.js": <FaNodeJs className="text-gray-700" />,
    "Python": <FaPython className="text-blue-600" />,
    "HTML": <FaHtml5 className="text-orange-600" />,
    "CSS": <FaCss3Alt className="text-blue-600" />,
    "JavaScript": <FaJsSquare className="text-yellow-500" />,
    "Tailwind CSS": <SiTailwindcss className="text-teal-500" />,
    "FastAPI": <SiFastapi className="text-green-700" />,
    "PostgreSQL": <SiPostgresql className="text-blue-700" />,
    "MongoDB": <SiMongodb className="text-green-700" />,
    "MySQL": <SiMysql className="text-blue-700" />,
    "Firebase": <IoLogoFirebase className="text-orange-500" />,
    "Git": <FaGitAlt className="text-orange-600" />,
    "AWS": <FaAws className="text-orange-500" />,
    "Docker": <FaDocker className="text-blue-500" />,
    "Linux": <FaLinux className="text-gray-700" />,
    "Figma": <FaFigma className="text-purple-600" />,
    "SQL": <FaDatabase className="text-gray-600" />,
    "GraphQL": <SiGraphql className="text-pink-600" />,
};

const descriptionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
            staggerChildren: 0.1,
        }
    },
    exit: {
        opacity: 0,
        y: -30,
        transition: {
            duration: 0.4,
            ease: "easeIn"
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
};

const ProjectDescription = ({ project, disableAnimation = false }) => {
    const colors = {
        backgroundRight: '#ffffff',
        primary: '#000000',
        accent: '#000c18ff',
        lightText: '#6c6c6c',
    };

    if (!project) {
        return (
            <div className="flex justify-center items-center h-full text-xl text-gray-500">
                Select a project to see details.
            </div>
        );
    }

    // Conditionally apply animation props
    const animationProps = disableAnimation
        ? {} // No animation props if disabled
        : {
            variants: descriptionVariants,
            initial: "hidden",
            animate: "visible",
            exit: "exit",
        };

    const itemAnimationProps = disableAnimation
        ? {}
        : { variants: itemVariants };


    return (
        <motion.div
            key={project.name}
            {...animationProps} // Spread conditional animation props here
            className="transition-all duration-300 space-y-4 p-6 md:p-10" // Adjusted for mobile
            style={{
                fontFamily: "'Roboto', sans-serif",
                color: colors.primary,
                backgroundColor: colors.backgroundRight,
            }}
        >
            <motion.h2
                {...itemAnimationProps} // Apply conditional item animation props
                className="text-3xl md:text-4xl font-bold tracking-tight" // Adjusted font size for mobile
                style={{ fontFamily: "'Funnel Sans', sans-serif" }}
            >
                {project.name}
            </motion.h2>

            <motion.p
                {...itemAnimationProps}
                className="text-base md:text-lg" // Adjusted font size for mobile
                style={{ color: colors.lightText }}
            >
                {project.description}
            </motion.p>

            <motion.div {...itemAnimationProps}>
                <h4
                    className="text-lg md:text-xl font-semibold mb-2" // Adjusted font size for mobile
                    style={{ color: colors.accent }}
                >
                    Highlights
                </h4>
                <ul
                    className="list-disc list-inside text-sm md:text-base" // Adjusted font size for mobile
                    style={{ color: colors.lightText }}
                >
                    {project.highlights.map((point, i) => (
                        <motion.li key={i} {...itemAnimationProps}>{point}</motion.li>
                    ))}
                </ul>
            </motion.div>

            <motion.div {...itemAnimationProps} className="flex flex-wrap gap-2 mt-3 md:gap-3 md:mt-4">
                {project.tech.map((tool, i) => (
                    <span
                        key={i}
                        className="px-3 py-0.5 rounded-full text-xs md:px-4 md:py-1 md:text-sm font-medium shadow-sm flex items-center gap-1 md:gap-2"
                        style={{
                            backgroundColor: "#f0f0f0",
                            color: colors.accent,
                            border: "1px solid #ddd",
                        }}
                    >
                        {TechIcons[tool] || null}
                        {tool}
                    </span>
                ))}
            </motion.div>

            <motion.div {...itemAnimationProps} className="flex flex-wrap gap-3 mt-4">
                {project.github && (
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-black bg-white px-5 py-1.5 text-sm md:px-6 md:py-2 md:text-base font-medium text-black transition-all duration-300 hover:bg-black hover:text-white shadow-md"
                    >
                        <span className="absolute inset-0 translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out bg-black opacity-10"></span>
                        <span className="relative z-10">GitHub</span>
                    </a>
                )}

                {project.live && project.live !== "#" && (
                    <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-black bg-white px-5 py-1.5 text-sm md:px-6 md:py-2 md:text-base font-medium text-black transition-all duration-300 hover:bg-black hover:text-white shadow-md"
                    >
                        <span className="absolute inset-0 translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out bg-black opacity-10"></span>
                        <span className="relative z-10">Live</span>
                    </a>
                )}
            </motion.div>
        </motion.div>
    );
};

export default ProjectDescription;