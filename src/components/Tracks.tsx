"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Tracks = () => {
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
        staggerChildren: 0.1
      }
    }
  };

  const tracks = [
    {
      title: "AI Trading Systems",
      icon: "📈",
      description: "Develop intelligent trading algorithms and predictive models for financial markets using machine learning and AI.",
      color: "from-yellow-400 to-orange-500",
      shadowColor: "shadow-yellow-500/20"
    },
    {
      title: "Financial Inclusion",
      icon: "🌍",
      description: "Create solutions that make financial services more accessible to underserved communities and emerging markets.",
      color: "from-blue-400 to-indigo-500",
      shadowColor: "shadow-blue-500/20"
    },
    {
      title: "Decentralized Finance",
      icon: "🔗",
      description: "Build innovative applications for decentralized financial systems using blockchain technology.",
      color: "from-purple-400 to-pink-500",
      shadowColor: "shadow-purple-500/20"
    },
    {
      title: "Wealth Management",
      icon: "💰",
      description: "Design intelligent platforms for personal and institutional wealth management, financial planning, and investment.",
      color: "from-green-400 to-emerald-500",
      shadowColor: "shadow-green-500/20"
    }
  ];

  return (
    <section id="tracks" className="py-24 bg-gray-950 relative overflow-hidden">
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
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-white">Hackathon</span>
              <span className="text-yellow-400"> Tracks</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full"></div>
            <p className="mt-6 text-gray-300 max-w-3xl mx-auto">
              Choose from four exciting tracks focused on the intersection of AI and finance. 
              Each track offers unique challenges and opportunities to innovate.
            </p>
          </motion.div>

          {/* Tracks grid */}
          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {tracks.map((track, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`bg-gray-900 border border-yellow-500/10 rounded-xl overflow-hidden hover:border-yellow-500/30 transition-all duration-300 ${track.shadowColor} hover:shadow-xl`}
              >
                <div className={`h-2 bg-gradient-to-r ${track.color}`}></div>
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="text-4xl mr-4">{track.icon}</div>
                    <h3 className="text-2xl font-semibold text-white">{track.title}</h3>
                  </div>
                  <p className="text-gray-400">{track.description}</p>
                  
                  <div className="mt-6 flex flex-wrap gap-2">
                    {["AI", "Machine Learning", "Finance", "Data Science"].map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mt-8 flex items-center justify-between">
                    <span className="text-yellow-400 text-sm font-medium">View Details</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-yellow-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Judge criteria */}
          <motion.div 
            variants={fadeInUp}
            className="mt-16 bg-gray-900/50 border border-yellow-500/10 rounded-xl p-8"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Judging Criteria</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Innovation",
                  description: "How original and inventive is your solution?",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                    </svg>
                  )
                },
                {
                  title: "Technical Complexity",
                  description: "How sophisticated is the technical implementation?",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
                    </svg>
                  )
                },
                {
                  title: "Impact & Utility",
                  description: "How useful and impactful is your solution?",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                  )
                },
                {
                  title: "Presentation",
                  description: "How well is your solution presented and demonstrated?",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                    </svg>
                  )
                }
              ].map((criterion, index) => (
                <div 
                  key={index} 
                  className="bg-gray-900 border border-yellow-500/5 rounded-lg p-5 hover:border-yellow-500/20 transition-all duration-300"
                >
                  <div className="bg-yellow-500/10 rounded-full p-3 inline-block mb-4">
                    <div className="text-yellow-400">
                      {criterion.icon}
                    </div>
                  </div>
                  <h4 className="text-lg font-medium text-white mb-2">{criterion.title}</h4>
                  <p className="text-sm text-gray-400">{criterion.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Tracks;
