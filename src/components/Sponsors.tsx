"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Sponsors = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Placeholder for sponsor logos
  const sponsorPlaceholders = [
    { tier: "Platinum", count: 2 },
    { tier: "Gold", count: 4 },
    { tier: "Silver", count: 6 }
  ];

  return (
    <section id="sponsors" className="py-24 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:32px_32px]"></div>
      
      {/* Yellow accent */}
      <div className="absolute bottom-40 -right-32 w-64 h-64 bg-yellow-400/10 rounded-full filter blur-3xl"></div>
      
      <div className="container max-w-7xl mx-auto px-6 relative z-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {/* Section header */}
          <motion.div variants={fadeIn} className="mb-16 text-center">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-white">Our</span>
              <span className="text-yellow-400"> Sponsors</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full"></div>
            <p className="mt-6 text-gray-300 max-w-3xl mx-auto">
              OpenERA is made possible by these amazing organizations committed to innovation in AI and finance
            </p>
          </motion.div>

          {/* Sponsors tiers */}
          {sponsorPlaceholders.map((tier, tierIndex) => (
            <motion.div 
              key={tierIndex}
              variants={fadeIn}
              className="mb-16 last:mb-0"
            >
              <h3 className="text-xl font-semibold text-center text-yellow-400 mb-8">{tier.tier} Sponsors</h3>
              
              <div className={`grid grid-cols-1 ${
                tier.tier === "Platinum" ? 'sm:grid-cols-2' : 
                tier.tier === "Gold" ? 'sm:grid-cols-2 lg:grid-cols-4' : 
                'sm:grid-cols-3 lg:grid-cols-6'
              } gap-8`}>
                {Array.from({ length: tier.count }).map((_, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    className={`bg-gray-900/50 border border-yellow-500/10 rounded-xl ${
                      tier.tier === "Platinum" ? 'h-40' : 
                      tier.tier === "Gold" ? 'h-32' : 
                      'h-24'
                    } flex items-center justify-center p-4 hover:border-yellow-500/30 hover:bg-gray-900 transition-all duration-300`}
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-gray-600 font-mono">
                      {/* This would be replaced with actual sponsor logos */}
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className={`mx-auto ${
                        tier.tier === "Platinum" ? 'w-24 h-24' : 
                        tier.tier === "Gold" ? 'w-16 h-16' : 
                        'w-12 h-12'
                      }`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                      </svg>
                      <p className="text-center mt-2 text-sm">
                        {tier.tier} Sponsor
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Become a sponsor */}
          <motion.div 
            variants={fadeIn}
            className="mt-20 text-center"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">Become a Sponsor</h3>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Interested in sponsoring OpenERA? Connect with innovators, showcase your brand, and support the next generation of fintech solutions.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center px-8 py-3 border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-medium rounded-full transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sponsorship Opportunities
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors;
