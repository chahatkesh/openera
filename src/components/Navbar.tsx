"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  // Navigation items
  const navItems = [
    { id: "about", label: "About" },
    { id: "problem-statements", label: "Problem Statements" },
    { id: "timeline", label: "Timeline" },
    { id: "prizes", label: "Prizes" },
    { id: "judges", label: "Judges" },
    { id: "sponsors", label: "Sponsors" },
    { id: "organizers", label: "Team" }
  ];

  // Smooth scroll function
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 64; // navbar height
      const elementPosition = element.offsetTop - navHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  }, []);

  // Handle scroll events for navbar background and active section detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Update navbar background
      setScrolled(scrollY > 50);
      
      // Update active section
      const sections = navItems.map(item => ({
        id: item.id,
        element: document.getElementById(item.id)
      })).filter(section => section.element);

      const currentSection = sections.find(section => {
        if (!section.element) return false;
        const rect = section.element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navItems]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (mobileMenuOpen && !target.closest('nav')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [mobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-[100] ${
        scrolled 
          ? "bg-black/95 backdrop-blur-md border-b border-yellow-500/20" 
          : "bg-black/50 backdrop-blur-sm"
      } transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.button 
            className="flex items-center focus:outline-none rounded-lg p-1 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onClick={() => scrollToSection('home')}
            aria-label="Go to home"
          >
            <Image
              src="/logo.png"
              alt="OpenERA Logo"
              width={36}
              height={36}
              className="mr-3"
            />
            <h2 className="text-xl font-bold text-white" style={{ fontFamily: 'Jersey 15, cursive' }}>
              Open<span className="text-yellow-400">ERA</span>
            </h2>
          </motion.button>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 text-sm uppercase tracking-wider rounded-md transition-all duration-200 focus:outline-none cursor-pointer ${
                  activeSection === item.id
                    ? "text-yellow-400 font-semibold"
                    : "text-gray-300 hover:text-yellow-400 font-medium"
                }`}
                whileHover={{ 
                  scale: 1.05,
                  y: -1
                }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Navigate to ${item.label}`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-yellow-400 rounded-full"
                    layoutId="activeIndicator"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
            <motion.a
              href="https://openera.devfolio.co"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black rounded-lg font-semibold text-sm uppercase tracking-wide hover:from-yellow-300 hover:to-yellow-400 focus:outline-none cursor-pointer transition-all duration-200"
              whileHover={{ 
                scale: 1.03,
                y: -1
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              aria-label="Register for OpenERA hackathon"
            >
              Register
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button 
              className="text-gray-300 hover:text-yellow-400 p-2 rounded-md focus:outline-none cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div 
        className={`md:hidden bg-black/95 border-b border-yellow-500/20 backdrop-blur-md ${
          mobileMenuOpen ? 'block' : 'hidden'
        }`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: mobileMenuOpen ? 1 : 0, 
          height: mobileMenuOpen ? "auto" : 0 
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block w-full text-left px-3 py-3 rounded-md text-sm uppercase tracking-wider transition-all duration-200 focus:outline-none cursor-pointer ${
                activeSection === item.id
                  ? "text-yellow-400 bg-yellow-400/10 font-semibold border-l-4 border-yellow-400"
                  : "text-gray-300 hover:text-yellow-400 hover:bg-gray-900/50"
              }`}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
            >
              {item.label}
            </motion.button>
          ))}
          <motion.a
            href="https://openera.devfolio.co"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full px-4 py-3 mt-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black rounded-lg font-semibold text-sm uppercase tracking-wide text-center hover:from-yellow-300 hover:to-yellow-400 focus:outline-none cursor-pointer transition-all duration-200"
            onClick={() => setMobileMenuOpen(false)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Register
          </motion.a>
        </div>
      </motion.div>
    </motion.nav>
  );
}
