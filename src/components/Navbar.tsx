"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-[100] ${
        scrolled 
          ? "bg-black/90 backdrop-blur-md border-b border-yellow-500/20" 
          : "bg-black/50 backdrop-blur-sm"
      } transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Image
              src="/logo.png"
              alt="OpenERA Logo"
              width={36}
              height={36}
              className="mr-3"
            />
            <h2 className="text-xl font-bold text-white">
              Open<span className="text-yellow-400">ERA</span>
            </h2>
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {[
              { id: "about", label: "About" },
              { id: "problem-statements", label: "Problem Statements" },
              { id: "timeline", label: "Timeline" },
              { id: "prizes", label: "Prizes" },
              { id: "sponsors", label: "Sponsors" },
              { id: "organizers", label: "Team" }
            ].map((item) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                className="px-4 py-2 text-gray-300 hover:text-yellow-400 transition-colors duration-200 rounded-md text-sm uppercase tracking-wider"
                whileHover={{ 
                  scale: 1.05,
                  color: "#FFD700" 
                }}
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href="#register"
              className="ml-4 px-6 py-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black rounded-full font-semibold text-sm uppercase tracking-wider"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 500, damping: 15 }}
            >
              Register
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              className="text-gray-300 hover:text-yellow-400"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          className="md:hidden bg-black/95 border-b border-yellow-500/20 backdrop-blur-md"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-4 space-y-2">
            {[
              { id: "about", label: "About" },
              { id: "problem-statements", label: "Problem Statements" },
              { id: "timeline", label: "Timeline" },
              { id: "prizes", label: "Prizes" },
              { id: "sponsors", label: "Sponsors" },
              { id: "organizers", label: "Team" }
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="block px-3 py-2 text-gray-300 hover:text-yellow-400 hover:bg-gray-900/50 rounded-md text-sm uppercase tracking-wider"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#register"
              className="block px-3 py-2 mt-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black rounded-md font-medium text-sm uppercase tracking-wider text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Register
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
