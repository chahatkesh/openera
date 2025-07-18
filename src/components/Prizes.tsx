"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';

const Prizes = () => {

  // Simplified animation variants with reduced duration for faster animations
  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  // Reduced stagger delay between children
  const staggerContainer: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  // Main prize data
  const mainPrizes = [
    {
      place: "1st Place",
      prize: "₹50,000",
      extras: ["Investor Meeting", "Media Coverage", "Incubation Support"],
      color: "from-yellow-400 to-yellow-600",
      textColor: "text-yellow-400",
      borderColor: "border-yellow-400/30",
      shadowColor: "shadow-yellow-400/30",
      scale: 1.1,
      translate: 0,
      icon: "🏆",
      isGrand: true
    },
    {
      place: "2nd Place",
      prize: "₹30,000",
      extras: ["Cloud Credits", "Mentorship", "Industry Connections"],
      color: "from-gray-300 to-gray-500",
      textColor: "text-gray-300",
      borderColor: "border-gray-300/30",
      shadowColor: "shadow-gray-300/20",
      scale: 1,
      translate: 4,
      icon: "🥈",
      isGrand: false
    },
    {
      place: "3rd Place",
      prize: "₹20,000",
      extras: ["Software Licenses", "Learning Resources", "Networking Event"],
      color: "from-amber-600 to-amber-800",
      textColor: "text-amber-600",
      borderColor: "border-amber-600/30",
      shadowColor: "shadow-amber-600/20",
      scale: 1,
      translate: 4,
      icon: "🥉",
      isGrand: false
    }
  ];

  // Additional resources data
  const additionalResources = [
    {
      title: "Cloud Credits",
      description: "AWS and GCP credits for all participating teams",
      icon: "☁️"
    },
    {
      title: "Technical Mentorship",
      description: "1:1 sessions with industry experts during the event",
      icon: "👨‍💻"
    },
    {
      title: "Post-Event Networking",
      description: "Exclusive access to networking events with sponsors",
      icon: "🌐"
    }
  ];

  return (
    <section id="prizes" className="py-12 md:py-16 lg:py-20 relative overflow-hidden">      
      <div className="container max-w-7xl mx-auto px-6 relative z-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {/* Section header */}
          <motion.div variants={fadeIn} className="mb-16 text-center">
            <h2 className="text-4xl font-bold mb-4 font-heading">
              <span className="text-white">Premium</span>
              <span className="text-yellow-400"> Prizes</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full"></div>
            <p className="mt-6 text-gray-300 max-w-3xl mx-auto font-body">
              Compete for these exclusive awards and opportunities, valued at over ₹X,00,000
            </p>
          </motion.div>

          {/* Main prizes - All three in a row */}
          <div className="relative">
            {/* Dark blur overlay */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-2xl z-30 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🎁</div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-2">Prizes Will Be Revealed</h3>
                <p className="text-xl text-white font-semibold">20th August 2025</p>
                <div className="mt-4 px-6 py-2 bg-yellow-400/20 rounded-full border border-yellow-400/30">
                  <span className="text-yellow-300 text-sm font-medium">Stay Tuned!</span>
                </div>
              </div>
            </div>

            {/* All Prizes in a row - Same size cards, 1st prize centered */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* 2nd Place */}
              <motion.div
                variants={fadeIn}
                className={`card-hover bg-gray-900 border ${mainPrizes[1].borderColor} rounded-xl overflow-hidden transition-all duration-300 order-1 md:order-1`}
                whileHover={{ 
                  y: -8, 
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                <div className={`h-2 bg-gradient-to-r ${mainPrizes[1].color}`}></div>
                <div className="p-8 text-center relative z-10">
                  <div className="text-4xl mb-4">
                    {mainPrizes[1].icon}
                  </div>
                  <h3 className={`text-xl font-semibold ${mainPrizes[1].textColor} mb-2`}>
                    {mainPrizes[1].place}
                  </h3>
                  <div className="text-3xl font-bold text-white mb-4">
                    {mainPrizes[1].prize}
                  </div>
                  <div className="w-16 h-1 bg-gradient-to-r from-gray-700 to-gray-600 mx-auto rounded-full my-4"></div>
                  <ul className="text-gray-400 text-sm space-y-2">
                    {mainPrizes[1].extras.map((extra, idx) => (
                      <li key={idx} className="flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-yellow-400 mr-2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        {extra}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* 1st Place - Center position */}
              <motion.div
                variants={fadeIn}
                className={`card-hover bg-gray-900 border ${mainPrizes[0].borderColor} rounded-xl overflow-hidden transition-all duration-300 order-2 md:order-2 md:-translate-y-4`}
                whileHover={{ 
                  y: -12, 
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                <div className="h-3 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
                <div className="p-8 text-center relative z-10">
                  <div className="text-5xl mb-4">
                    {mainPrizes[0].icon}
                  </div>
                  <h3 className={`text-xl font-semibold ${mainPrizes[0].textColor} mb-2`}>
                    {mainPrizes[0].place}
                  </h3>
                  <div className="text-4xl font-bold text-white mb-4">
                    {mainPrizes[0].prize}
                  </div>
                  <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full my-4"></div>
                  <ul className="text-gray-400 text-sm space-y-2">
                    {mainPrizes[0].extras.map((extra, idx) => (
                      <li key={idx} className="flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-yellow-400 mr-2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        {extra}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 inline-block bg-yellow-400/20 px-4 py-2 rounded-full border border-yellow-400/30">
                    <span className="text-yellow-400 text-sm font-medium">Grand Prize Winner</span>
                  </div>
                </div>
              </motion.div>

              {/* 3rd Place */}
              <motion.div
                variants={fadeIn}
                className={`card-hover bg-gray-900 border ${mainPrizes[2].borderColor} rounded-xl overflow-hidden transition-all duration-300 order-3 md:order-3`}
                whileHover={{ 
                  y: -8, 
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                <div className={`h-2 bg-gradient-to-r ${mainPrizes[2].color}`}></div>
                <div className="p-8 text-center relative z-10">
                  <div className="text-4xl mb-4">
                    {mainPrizes[2].icon}
                  </div>
                  <h3 className={`text-xl font-semibold ${mainPrizes[2].textColor} mb-2`}>
                    {mainPrizes[2].place}
                  </h3>
                  <div className="text-3xl font-bold text-white mb-4">
                    {mainPrizes[2].prize}
                  </div>
                  <div className="w-16 h-1 bg-gradient-to-r from-gray-700 to-gray-600 mx-auto rounded-full my-4"></div>
                  <ul className="text-gray-400 text-sm space-y-2">
                    {mainPrizes[2].extras.map((extra, idx) => (
                      <li key={idx} className="flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-yellow-400 mr-2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        {extra}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Additional Resources - Simplified with fewer animations */}
          <motion.div 
            variants={fadeIn} 
            className="mt-20 bg-gray-800/20 p-8 rounded-xl border border-yellow-500/10"
          >
            <h3 className="text-xl font-semibold text-yellow-400 mb-6 text-center">Additional Support</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {additionalResources.map((resource, index) => (
                <div key={index} className="p-4">
                  <div className="text-2xl mb-2">{resource.icon}</div>
                  <h4 className="font-medium text-white mb-2">{resource.title}</h4>
                  <p className="text-gray-400 text-sm">{resource.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Prizes;
