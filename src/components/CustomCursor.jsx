// src/components/CustomCursor.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        const addHoverEvents = () => {
            document.querySelectorAll("a, button, .cursor-hover").forEach((el) => {
                el.addEventListener("mouseenter", () => setHovered(true));
                el.addEventListener("mouseleave", () => setHovered(false));
            });
        };

        const move = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", move);
        addHoverEvents();
        return () => window.removeEventListener("mousemove", move);
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block"
            animate={{ x: position.x - 12, y: position.y - 12 }}
            
            transition={{
                type: "spring",
                stiffness: 250, 
                damping: 35,    
                mass: 1      
            }}
        >
            <div
                className={`w-6 h-6 rounded-full border-2 border-accent ${
                    hovered ? "scale-150 bg-accent opacity-20" : "opacity-100"
                } transition-transform duration-300`}
            ></div>
        </motion.div>
    );
};

export default CustomCursor;
