"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdCheckCircle, MdEmojiEvents, MdStar, MdCardGiftcard } from "react-icons/md";
import SectionHeader from "./SectionHeader";

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const lastYearImages = [
    {
      image: "/last-year/image1.jpeg",
    },
    {
      image: "/last-year/image2.jpeg",
    },
    {
      image: "/last-year/image3.jpeg",
    },
    {
      image: "/last-year/image4.jpeg",
    }
  ];

  const stats = [
    { 
      number: "01", 
      label: "Two-Round Format: Online + Offline", 
      icon: <MdCheckCircle className="w-6 h-6" />
    },
    { 
      number: "02", 
      label: "24 Hour Offline Hackathon at NIT Jalandhar", 
      icon: <MdEmojiEvents className="w-6 h-6" />
    },
    { 
      number: "03", 
      label: "Mentorship, Product Building, and Pitch Rounds", 
      icon: <MdStar className="w-6 h-6" />
    },
    { 
      number: "04", 
      label: "Exciting Prizes, Swags, and Internship Opportunities", 
      icon: <MdCardGiftcard className="w-6 h-6" />
    }
  ];

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % lastYearImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [lastYearImages.length]);

  return (
    <section id="about" className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff02_1px,transparent_1px)] [background-size:40px_40px]"></div>
      
      <div className="container max-w-6xl mx-auto px-6 relative z-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {/* Section Header */}
          <SectionHeader
            title="About"
            highlight="OpenERA 2025"
            description="Join 500+ innovators for 24 hours of intense development at NIT Jalandhar. Build solutions at the intersection of AI and Finance."
            className="mb-16"
          />

          {/* Main Hero Section - Data Left, Images Right */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            
            {/* Left: Stats & Key Data */}
            <motion.div variants={fadeInUp} className="space-y-8">
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="text-center p-4 bg-yellow-400/5 rounded-lg border border-yellow-400/10 hover:border-yellow-400/30 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex justify-center mb-3">
                      <div className="p-3 bg-gradient-to-br from-yellow-400/20 to-yellow-500/10 rounded-xl border border-yellow-400/20 text-yellow-400">
                        {React.cloneElement(stat.icon, { className: "w-6 h-6" })}
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-yellow-400 mb-1">{stat.number}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Animated Image Showcase */}
            <motion.div variants={fadeInUp} className="relative">
              {/* Main Image Display */}
              <div className="relative h-full mb-6 rounded-xl overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 rounded-xl"
                  >
                    {/* Background Image */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center rounded-lg"
                      style={{
                        backgroundImage: `url(${lastYearImages[currentImageIndex].image})`
                      }}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Image Navigation Dots */}
              <div className="flex justify-center gap-2">
                {lastYearImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'bg-yellow-400 w-8' 
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Small CTA Section */}
          <motion.div variants={fadeInUp} className="text-center mb-8">
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 border border-yellow-400/20 rounded-xl px-6 py-4">
              <div className="text-left">
                <p className="text-white font-semibold text-sm">Ready to innovate?</p>
                <p className="text-gray-400 text-xs">Join the future of FinTech</p>
              </div>
              <motion.a
                href="https://openera.devfolio.co"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black rounded-lg font-semibold text-sm hover:from-yellow-300 hover:to-yellow-400 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Register Now
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
