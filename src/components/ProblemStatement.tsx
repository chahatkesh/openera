"use client";

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const ProblemStatement = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  const problems = [
    {
      id: 1,
      title: "Problem Statement 1",
      description: "Get ready to build innovative solutions leveraging artificial intelligence for financial data analysis and insights.",
      category: "Track",
      locked: true
    },
    {
      id: 2,
      title: "Problem Statement 2",
      description: "Get ready to build innovative solutions leveraging artificial intelligence for financial data analysis and insights.",
      category: "Track",
      locked: true
    },
    {
      id: 3,
      title: "Problem Statement 3",
      description: "Get ready to build innovative solutions leveraging artificial intelligence for financial data analysis and insights.",
      category: "Track",
      locked: true
    }
  ];

  return (
    <section id="problem-statements" className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-yellow-400/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-blue-400/5 rounded-full blur-xl"></div>
      </div>

      <div className="container max-w-6xl mx-auto px-6 relative z-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {/* Section Header */}
          <SectionHeader 
            title="Problem"
            highlight="Statements"
            description="Exciting challenges await you on hack day. Problem statements will be revealed when the hackathon begins."
            className="mb-16"
          />

          {/* Problems Grid */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {problems.map((problem) => (
              <motion.div
                key={problem.id}
                variants={fadeIn}
                className="group relative"
              >
                <div className="bg-gray-900/30 border border-gray-700/50 rounded-xl p-6 h-full backdrop-blur-sm transition-all duration-300 hover:border-gray-600/50 relative overflow-hidden">
                  {/* Lock Overlay */}
                  {problem.locked && (
                    <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm rounded-xl flex items-center justify-center z-10">
                      <div className="text-center">
                        <div className="mb-4">
                          <svg className="w-12 h-12 text-yellow-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                        </div>
                        <p className="text-yellow-400 font-medium text-sm">
                          Unlocks on Hack Day
                        </p>
                        <p className="text-gray-400 text-xs mt-1">
                          25 October 2025
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Problem Number */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-gray-500 font-medium">
                      {problem.category}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                    {problem.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {problem.description}
                  </p>
                </div>

                {/* Animated Border Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-400/20 via-transparent to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div 
            variants={fadeIn}
            className="mt-12 text-center"
          >
            <div className="bg-gray-900/20 border border-gray-700/30 rounded-lg p-6 max-w-2xl mx-auto backdrop-blur-sm">
              <div className="flex items-center justify-center gap-3 mb-3">
                <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h4 className="text-white font-medium">Important Note</h4>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Problem statements will be revealed at the start of the hackathon on <span className="text-yellow-400 font-medium">October 25, 2025</span>. 
                Each team can choose one problem statement to work on during the 24 hour hackathon period.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemStatement;
