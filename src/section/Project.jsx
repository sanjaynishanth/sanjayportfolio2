// src/pages/Project.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projects from "../data/ProjectData.json";
import ProjectThumbnail from "../components/ProjectThumbnail";
import ProjectDescription from "../components/ProjectDescription";
import Skills from "../components/Skills";

const Project = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const titleVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    const ctaVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.5, ease: "easeOut" } },
        hover: { scale: 1.05, transition: { type: "spring", stiffness: 400, damping: 10 } }
    };

    const projectsSectionHeight = projects.length * 100; // In vh units for desktop sticky effect

    return (
        <div className="bg-white text-black w-full min-h-screen">

            {/* Section 1: Projects Title */}
            <section className="w-full py-8 flex justify-center items-center">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={titleVariants}
                    className="w-full text-center"
                >
                    <h1
                        className="text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight"
                        style={{ fontFamily: "'Funnel Sans', sans-serif", color: '#000c18ff' }}
                    >
                        Projects
                    </h1>
                </motion.div>
            </section>

            {/* Section 2: Main Project Viewer Section (Desktop Split View) */}
            {/* This section will only be active on large screens (lg:flex-row) */}
            <section
                className="relative hidden lg:flex flex-row w-full" // Explicitly hidden on mobile
                style={{ height: `${projectsSectionHeight}vh` }}
            >
                {/* Right: Sticky Project Description */}
                <div className="sticky top-0 w-full lg:w-1/2 h-screen overflow-y-auto flex items-center justify-center p-20">
                    <AnimatePresence mode="wait">
                        {/* Only animate if project is defined to avoid errors on initial load */}
                        {projects[activeIndex] && (
                            <ProjectDescription key={projects[activeIndex].name} project={projects[activeIndex]} />
                        )}
                    </AnimatePresence>
                </div>

                {/* Left: Scrollable Thumbnail List */}
                <div className="w-full lg:w-1/2 flex flex-col">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="h-screen flex items-center justify-center p-4"
                        >
                            <ProjectThumbnail
                                project={project}
                                index={index}
                                onInView={setActiveIndex}
                                isActive={index === activeIndex}
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* Section 2 (Alternative): Mobile Project Viewer Section */}
            {/* This section will only be active on small screens (lg:hidden) */}
            <section className="lg:hidden w-full h-auto overflow-y-auto py-8 px-4">
                <div className="w-full flex flex-col items-center justify-center gap-12">
                    {projects.map((project, index) => (
                        <div key={index} className="w-full flex flex-col gap-6">
                            {/* Project Thumbnail for mobile - no inView logic needed here */}
                            <ProjectThumbnail
                                project={project}
                                index={index}
                                onInView={() => {}} // No active index tracking on mobile for this layout
                                isActive={false} // No 'active' styling for individual thumbnails in this stacked view
                            />
                            {/* Project Description for mobile - disable animation as they are all stacked */}
                            <ProjectDescription
                                project={project}
                                disableAnimation={true} // Disable Framer Motion animations for mobile stack
                            />
                        </div>
                    ))}
                </div>
            </section>


            {/* Section 3: View More Projects CTA */}
            <section className="w-full py-16 flex flex-col justify-center items-center bg-white">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    viewport={{ once: false, amount: 0.5 }}
                    variants={ctaVariants}
                    className="w-full text-center flex justify-center items-center"
                >
                    <a
                        href="https://github.com/sanjaynishanth"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-6 py-2 text-lg md:px-8 md:py-3 md:text-xl font-bold rounded-full border border-black bg-white text-black hover:bg-black hover:text-white transition-colors duration-300 shadow-lg"
                        style={{ fontFamily: "'Funnel Sans', sans-serif" }}
                    >
                        View More Projects
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-external-link ml-2"
                        >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <path d="M15 3h6v6"></path>
                            <path d="M10 14 21 3"></path>
                        </svg>
                    </a>
                </motion.div>
            </section>

            <Skills />
        </div>
    );
};

export default Project;