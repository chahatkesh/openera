"use client";

import React from "react";
import { motion } from "framer-motion";

const About = () => {
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
  return (
    <section id="about" className="py-16 relative overflow-hidden">
      {/* Transparent background */}
      <div className="absolute inset-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff02_1px,transparent_1px)] [background-size:40px_40px]"></div>
      
      <div className="container max-w-7xl mx-auto px-6 relative z-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {/* Enhanced Section header */}
          <motion.div variants={fadeInUp} className="mb-12 text-center">
            <h2 className="text-4xl font-bold mb-4 font-heading">
              <span className="text-white">About</span>
              <span className="text-yellow-400"> OpenERA 2025</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full mb-4"></div>
            <p className="text-xl text-yellow-400 font-semibold mb-3">
              India&apos;s Largest Finance + AI Hackathon
            </p>
            <p className="text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
              A national-level hackathon focused on solving real-world problems at the 
              intersection of Artificial Intelligence and Finance
            </p>
          </motion.div>

          {/* Professional Layout - Sidebar + Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            
            {/* Left Sidebar - Key Information */}
            <motion.div variants={fadeInUp} className="lg:col-span-1">
              <div className="bg-gray-900/30 h-full backdrop-blur-sm border border-yellow-400/20 rounded-xl p-6 sticky top-8">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <div className="w-2 h-6 bg-yellow-400 rounded-full mr-3"></div>
                  Event Details
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-yellow-400/5 rounded-lg border border-yellow-400/10">
                    <span className="text-gray-300 font-medium text-sm">Dates</span>
                    <span className="text-yellow-400 font-bold text-sm">25–26 Oct 2025</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-yellow-400/5 rounded-lg border border-yellow-400/10">
                    <span className="text-gray-300 font-medium text-sm">Registration</span>
                    <span className="text-yellow-400 font-bold text-xs">20 Jul – 25 Sep</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-yellow-400/5 rounded-lg border border-yellow-400/10">
                    <span className="text-gray-300 font-medium text-sm">Round 1</span>
                    <span className="text-yellow-400 font-bold text-xs">05 Aug – 05 Oct</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-yellow-400/5 rounded-lg border border-yellow-400/10">
                    <span className="text-gray-300 font-medium text-sm">Round 2</span>
                    <span className="text-yellow-400 font-bold text-xs">24 hr Offline</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-yellow-400/5 rounded-lg border border-yellow-400/10">
                    <span className="text-gray-300 font-medium text-sm">Venue</span>
                    <span className="text-yellow-400 font-bold text-sm">NIT Jalandhar</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-yellow-400/5 rounded-lg border border-yellow-400/10">
                    <span className="text-gray-300 font-medium text-sm">Organizer</span>
                    <span className="text-yellow-400 font-bold text-sm">OpenLearn</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Main Content Area */}
            <motion.div variants={fadeInUp} className="lg:col-span-2 space-y-8">
              
              {/* Competition Format */}
              <div>
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <div className="w-2 h-6 bg-yellow-400 rounded-full mr-3"></div>
                  Competition Format
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-500/10 border border-blue-400/20 rounded-lg p-4">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-blue-400/20 rounded-full flex items-center justify-center mr-3">
                        <span className="text-blue-400 font-bold text-sm">1</span>
                      </div>
                      <h4 className="text-lg font-bold text-blue-400">Round 1</h4>
                    </div>
                    <p className="text-blue-300 font-medium mb-2 text-sm">Online Shortlisting</p>
                    <p className="text-gray-300 text-xs leading-relaxed">
                      Problem statement-based evaluation to select the best teams for the offline round.
                    </p>
                  </div>
                  <div className="bg-yellow-500/10 border border-yellow-400/20 rounded-lg p-4">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-yellow-400/20 rounded-full flex items-center justify-center mr-3">
                        <span className="text-yellow-400 font-bold text-sm">2</span>
                      </div>
                      <h4 className="text-lg font-bold text-yellow-400">Round 2</h4>
                    </div>
                    <p className="text-yellow-300 font-medium mb-2 text-sm">Offline Hackathon</p>
                    <p className="text-gray-300 text-xs leading-relaxed">
                      24–30 hour intensive development at NIT Jalandhar with mentoring and pitching.
                    </p>
                  </div>
                </div>
              </div>

              {/* Eligibility Requirements */}
              <div>
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <div className="w-2 h-6 bg-yellow-400 rounded-full mr-3"></div>
                  Who Can Participate
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-gray-900/20 rounded-lg border border-gray-700/30">
                    <div className="w-12 h-12 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Students</h4>
                    <p className="text-gray-400 text-sm">Undergraduate students from any Indian college</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-gray-900/40 to-gray-800/20 rounded-xl border border-gray-700/30">
                    <div className="w-16 h-16 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Teams</h4>
                    <p className="text-gray-400 text-sm">Teams of 2–4 members</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-gray-900/40 to-gray-800/20 rounded-xl border border-gray-700/30">
                    <div className="w-16 h-16 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Experience</h4>
                    <p className="text-gray-400 text-sm">No prior hackathon experience required</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Event Highlights - Compact Grid */}
          <motion.div variants={fadeInUp} className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center">
              <div className="w-2 h-6 bg-yellow-400 rounded-full mr-3"></div>
              Event Highlights
              <div className="w-2 h-6 bg-yellow-400 rounded-full ml-3"></div>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group bg-gray-900/30 border border-gray-700/30 rounded-lg p-4 text-center hover:border-yellow-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-yellow-400/20 transition-colors duration-300">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="text-base font-bold text-white mb-2">Expert Mentoring</h4>
                <p className="text-gray-400 text-xs leading-relaxed">Guidance from industry professionals</p>
              </div>
              <div className="group bg-gray-900/30 border border-gray-700/30 rounded-lg p-4 text-center hover:border-yellow-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-yellow-400/20 transition-colors duration-300">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10M7 4v16a1 1 0 001 1h8a1 1 0 001-1V4M7 4H5a1 1 0 00-1 1v14a1 1 0 001 1h2" />
                  </svg>
                </div>
                <h4 className="text-base font-bold text-white mb-2">Live Showcases</h4>
                <p className="text-gray-400 text-xs leading-relaxed">Product demos and pitch rounds</p>
              </div>
              <div className="group bg-gray-900/30 border border-gray-700/30 rounded-lg p-4 text-center hover:border-yellow-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-yellow-400/20 transition-colors duration-300">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V4a2 2 0 00-2-2H8a2 2 0 00-2 2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2" />
                  </svg>
                </div>
                <h4 className="text-base font-bold text-white mb-2">Career Opportunities</h4>
                <p className="text-gray-400 text-xs leading-relaxed">Internship and recruitment offers</p>
              </div>
              <div className="group bg-gray-900/30 border border-gray-700/30 rounded-lg p-4 text-center hover:border-yellow-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-yellow-400/20 transition-colors duration-300">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <h4 className="text-base font-bold text-white mb-2">Rewards & Recognition</h4>
                <p className="text-gray-400 text-xs leading-relaxed">Prizes, certificates, and recognition</p>
              </div>
            </div>
          </motion.div>


        </motion.div>
      </div>
    </section>
  );
};

export default About;
