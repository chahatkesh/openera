"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import SectionHeader from './SectionHeader';

const Judges = () => {
  // Animation variants
  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.2, ease: "easeOut" }
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

  // Judge placeholder data
  const judgeSlots = Array.from({ length: 4 }, (_, index) => ({
    id: index + 1,
    position: `Judge ${index + 1}`
  }));

  const JudgePlaceholderCard = ({ judge }: { judge: { id: number; position: string } }) => (
    <motion.div
      variants={fadeIn}
      className="group"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-2xl hover:border-yellow-400/40 transition-all duration-500">
        
        {/* Profile Image Area */}
        <div className="relative h-48 overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-yellow-400/10 to-yellow-600/5 flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="OpenERA Logo"
              width={80}
              height={80}
              className="object-contain opacity-40 group-hover:opacity-60 transition-opacity duration-300"
            />
          </div>
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>
        
        {/* Content Area */}
        <div className="p-6 text-center">
          <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-yellow-300 transition-colors duration-300">
            {judge.position}
          </h3>
          
          {/* Placeholder content lines */}
          <div className="space-y-2 mb-4">
            <div className="h-2 bg-gray-700/30 rounded-full w-3/4 mx-auto"></div>
            <div className="h-2 bg-gray-700/30 rounded-full w-1/2 mx-auto"></div>
          </div>
          
          {/* Status indicator */}
          <div className="inline-flex items-center text-xs text-gray-400">
            <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2 opacity-60"></div>
            Revealing Soon
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="judges" className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
      {/* Background patterns - subtle like other sections */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff02_1px,transparent_1px)] [background-size:40px_40px]"></div>
      
      <div className="container max-w-7xl mx-auto px-6 relative z-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {/* Section header */}
          <SectionHeader 
            title="Expert"
            highlight="Judges"
            description="Our distinguished panel of industry experts will evaluate your innovations"
            className="mb-16"
          />

          {/* Judges grid - matching Organizers layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
            {judgeSlots.map((judge) => (
              <JudgePlaceholderCard key={judge.id} judge={judge} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Judges;
