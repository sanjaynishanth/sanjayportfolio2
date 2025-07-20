"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Home, Briefcase, User } from "lucide-react";

// Colors from your design system
const colors = {
  backgroundLeft: '#ffffff',
  backgroundRight: '#ffffff',
  primary: '#000000',
  secondary: '#000000',
  accent: '#000000',
  lightText: '#6c6c6c',
};

// Utility function
const cn = (...classes) => classes.filter(Boolean).join(" ");

// Navigation items with paths
const navItems = [
  { path: "/", icon: <Home size={24} />, label: "Home" },
  { path: "/work", icon: <Briefcase size={24} />, label: "Work" },
  { path: "/about", icon: <User size={24} />, label: "About" },
];

export default function FloatingNav() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "fixed bottom-6 inset-x-0 mx-auto max-w-fit px-6 py-3 rounded-full",
          "backdrop-blur-md border shadow-xl z-[9999]",
          "flex items-center justify-center gap-6"
        )}
        style={{
          backgroundColor: `${colors.backgroundLeft}cc`, // semi-transparent white
          borderColor: "#e5e7eb",
        }}
      >
        {navItems.map((item, i) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={i}
              to={item.path}
              className={cn(
                "relative flex items-center gap-2 text-base transition-all px-4 py-2 rounded-full font-medium",
                isActive
                  ? "text-white"
                  : `text-[${colors.primary}] hover:text-[${colors.accent}]`
              )}
              style={{
                backgroundColor: isActive ? colors.accent : "transparent",
              }}
            >
              <span className="block sm:hidden">{item.icon}</span>
              <span className="hidden sm:block">{item.label}</span>

              {/* Floating dot indicator */}
              {isActive && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full"
                />
              )}
            </Link>
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
}
