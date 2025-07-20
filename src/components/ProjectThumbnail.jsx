// src/components/ProjectThumbnail.jsx
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const fonts = {
    heading: "'Funnel Sans', sans-serif",
    body: "'Roboto', sans-serif",
};

const ProjectThumbnail = ({ project, index, onInView, isActive }) => {
    const [ref, inView] = useInView({
        threshold: 0.4, // Adjusted threshold to make activation a bit smoother
        triggerOnce: false, // <-- Crucial for re-triggering on scroll up/down
    });

    useEffect(() => {
        if (inView) {
            onInView(index);
        }
    }, [inView, index, onInView]);

    const thumbnailVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
        active: { scale: 1.03, boxShadow: "0 0 30px rgba(255, 255, 255, 0.8)" }, // Slightly larger and glowing when active
        inactive: { scale: 1, boxShadow: "0 0 20px #ffffff" }, // Back to original state
    };

    return (
        <motion.div
            ref={ref}
            className={`project-card flex w-full flex-row p-2 ${isActive ? 'opacity-100' : 'opacity-70'} transition-opacity duration-300`}
            initial="hidden"
            whileInView="visible"
            animate={isActive ? "active" : "inactive"}
            variants={thumbnailVariants}
            viewport={{ once: false, amount: 0.4 }}
        >
            <div className="flex flex-col lg:mx-10 lg:w-full">
                <a
                    draggable="false"
                    className="relative cursor-pointer overflow-hidden rounded-2xl border border-white-3 dark:border-white/15 p-1.5 shadow-2xl lg:h-[560px] lg:rounded-3xl lg:p-2"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        backgroundColor: "#000000",
                        color: "#ffffff",
                        fontFamily: fonts.body,
                    }}
                >
                    <div
                        className="absolute inset-x-0 top-0 h-px"
                        style={{
                            background: "linear-gradient(90deg, rgba(0, 0, 0, 0) 5%, rgba(255, 255, 255, 0.8) 35%, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0.8) 65%, rgba(0, 0, 0, 0) 95%)",
                        }}
                    ></div>

                    <div className="group relative flex size-full flex-col items-center justify-between overflow-hidden rounded-xl lg:rounded-2xl dark:bg-linear-to-b from-black/40 to-transparent transition-all duration-300">
                        <div
                            className="absolute inset-0 -z-1"
                            style={{
                                background: "linear-gradient(188.62deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 1) 100%)",
                            }}
                        ></div>

                        <div
                            className="absolute inset-x-0 top-px z-10 h-[0.8px] opacity-70"
                            style={{
                                background: "linear-gradient(90deg, rgba(0, 0, 0, 0) 20%, rgb(255, 255, 255) 50%, rgba(0, 0, 0, 0) 80%)",
                            }}
                        ></div>

                        <div
                            className="hidden w-full flex-row items-center justify-between px-12 py-8 lg:flex"
                            style={{
                                color: "#ffffff",
                                fontFamily: fonts.heading,
                            }}
                        >
                            <h3 className="max-w-[90%] text-2xl">{project.description}</h3>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-arrow-right size-6"
                                aria-hidden="true"
                            >
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                            </svg>
                        </div>

                        <img
                            alt={project.name}
                            loading="lazy"
                            width="1203"
                            height="753"
                            src={project.image}
                            className="lg:group-hover:translate-y-10 w-full max-w-[85%] translate-y-5 -rotate-3 rounded-t-lg border-[1.5px] border-white/20 transition-all duration-300 will-change-transform lg:block lg:rotate-0 lg:group-hover:scale-[1.08] lg:group-hover:-rotate-3 shadow-[0_0_20px_#ffffff]"
                        />
                    </div>
                </a>
            </div>
        </motion.div>
    );
};

export default ProjectThumbnail;