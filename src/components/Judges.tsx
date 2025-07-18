"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';

const Judges = () => {
  // Animation variants
  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  const staggerContainer: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="judges" className="py-20 relative overflow-hidden">      
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
              <span className="text-white">Expert</span>
              <span className="text-yellow-400"> Judges</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full"></div>
            <p className="mt-6 text-gray-300 max-w-3xl mx-auto font-body">
              Our distinguished panel of industry experts will evaluate your innovations
            </p>
          </motion.div>

          {/* Main content - Announcement */}
          <motion.div 
            variants={fadeIn}
            className="relative"
          >
            {/* Announcement Card */}
            <div className="max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-yellow-400/30 rounded-2xl overflow-hidden">
                {/* Top accent */}
                <div className="h-2 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
                
                <div className="p-12 text-center">
                  {/* Main announcement */}
                  <h3 className="text-3xl font-bold text-yellow-400 mb-6">
                    Judges Panel
                  </h3>
                  
                  <p className="text-2xl text-white font-semibold mb-8">
                    To Be Announced Soon
                  </p>
                  
                  {/* Coming soon badge */}
                  <div className="inline-block bg-yellow-400/20 px-6 py-3 rounded-full border border-yellow-400/30">
                    <span className="text-yellow-300 font-medium">Stay Tuned for Updates!</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Judges;
