"use client";

import React from 'react';
import { motion } from 'framer-motion';

const ProblemStatements = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const }
    }
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  // Problem statement cards (locked state)
  const problemStatements = [
    {
      title: "Decentralized Identity Verification",
      code: "PS001",
      status: "Locked",
      theme: "Financial Security",
    },
    {
      title: "AI-Powered Risk Assessment",
      code: "PS002",
      status: "Locked",
      theme: "Investment Analysis",
    },
    {
      title: "Inclusive Banking Solutions",
      code: "PS003", 
      status: "Locked",
      theme: "Financial Inclusion",
    },
    {
      title: "Blockchain Compliance System",
      code: "PS004",
      status: "Locked",
      theme: "Regulatory Technology",
    },
    {
      title: "Sustainable Finance Platform",
      code: "PS005",
      status: "Locked",
      theme: "ESG Investing",
    }
  ];

  // Neon border effect component
  const NeonBorder = () => (
    <>
      {/* Top left corner */}
      <div className="absolute top-0 left-0">
        <div className="h-8 w-1 bg-yellow-400 shadow-[0_0_10px_3px_rgba(250,204,21,0.7)]"></div>
        <div className="h-1 w-8 bg-yellow-400 shadow-[0_0_10px_3px_rgba(250,204,21,0.7)]"></div>
      </div>
      
      {/* Top right corner */}
      <div className="absolute top-0 right-0">
        <div className="h-8 w-1 bg-yellow-400 shadow-[0_0_10px_3px_rgba(250,204,21,0.7)]"></div>
        <div className="h-1 w-8 bg-yellow-400 shadow-[0_0_10px_3px_rgba(250,204,21,0.7)]"></div>
      </div>
      
      {/* Bottom right corner */}
      <div className="absolute bottom-0 right-0">
        <div className="h-8 w-1 bg-yellow-400 shadow-[0_0_10px_3px_rgba(250,204,21,0.7)]"></div>
        <div className="h-1 w-8 bg-yellow-400 shadow-[0_0_10px_3px_rgba(250,204,21,0.7)]"></div>
      </div>
      
      {/* Bottom left corner */}
      <div className="absolute bottom-0 left-0">
        <div className="h-8 w-1 bg-yellow-400 shadow-[0_0_10px_3px_rgba(250,204,21,0.7)]"></div>
        <div className="h-1 w-8 bg-yellow-400 shadow-[0_0_10px_3px_rgba(250,204,21,0.7)]"></div>
      </div>
    </>
  );

  return (
    <section id="problem-statements" className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent z-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:32px_32px]"></div>
      
      {/* Yellow accent */}
      <div className="absolute bottom-40 -left-32 w-64 h-64 bg-yellow-400/10 rounded-full filter blur-3xl"></div>
      
      <div className="container max-w-7xl mx-auto px-6 relative z-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {/* Section header */}
          <motion.div variants={fadeInUp} className="mb-16 text-center">
            <h2 className="text-4xl font-bold mb-4 font-heading">
              <span className="text-white">Problem</span>
              <span className="text-yellow-400"> Statements</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full"></div>
            <p className="mt-6 text-gray-300 max-w-3xl mx-auto font-body">
              Locked challenges awaiting your innovative solutions. Problem statements will be revealed at the start of the hackathon.
              Get ready to tackle real-world AI and finance challenges.
            </p>
          </motion.div>

          {/* Problem statement grid */}
          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {problemStatements.map((problem, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  boxShadow: "0 0 25px 5px rgba(250, 204, 21, 0.3)",
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className="card-hover relative bg-gray-900 border border-yellow-400/10 rounded-xl p-8 overflow-hidden group min-h-[280px] flex flex-col justify-between"
              >
                <NeonBorder />
                
                {/* Card content */}
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300 font-heading">
                      {problem.title}
                    </h3>
                    <span className="bg-gray-800 text-yellow-400 text-xs font-bold px-2 py-1 rounded font-body">
                      {problem.code}
                    </span>
                  </div>

                  <p className="text-gray-400 mb-6 text-sm font-body">Theme: {problem.theme}</p>
                </div>
                
                {/* Lock indicator */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="mr-2 text-yellow-400">🔒</span>
                    <span className="text-sm text-yellow-400 font-medium">
                      {problem.status}
                    </span>
                  </div>
                  
                  <div className="bg-gray-800 bg-opacity-50 rounded-lg px-3 py-1 text-sm">
                    <motion.div
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        repeatType: "reverse" 
                      }}
                      className="text-yellow-400"
                    >
                      Unlocks at kickoff
                    </motion.div>
                  </div>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Coming soon hint */}
          <motion.div 
            variants={fadeInUp}
            className="mt-12 text-center"
          >
            <p className="text-yellow-400/80 italic">
              Full problem statements will be revealed at the hackathon kickoff
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemStatements;
