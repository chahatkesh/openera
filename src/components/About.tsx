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
  };  return (
    <section id="about" className="py-12 md:py-16 lg:py-20 relative overflow-hidden section-border">
      {/* Enhanced background elements for blueprint integration */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-transparent via-black/50 to-transparent z-10"></div>
      
      {/* Localized blueprint effects */}
      <div className="absolute inset-0 opacity-[0.008]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 30% 40%, rgba(255, 215, 0, 0.1) 1px, transparent 2px),
              radial-gradient(circle at 70% 60%, rgba(255, 215, 0, 0.08) 1px, transparent 2px)
            `,
            backgroundSize: '120px 120px, 180px 180px',
            animation: 'neuralGlow 8s ease-in-out infinite alternate'
          }}
        />
      </div>
      
      {/* Subtle data flow lines */}
      <div className="absolute left-0 top-1/3 w-full h-px opacity-[0.015] bg-gradient-to-r from-transparent via-yellow-400 to-transparent" 
           style={{ animation: 'dataStream 20s linear infinite' }} />
      
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
              <span className="text-white">About</span>
              <span className="text-yellow-400"> OpenERA</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-5 font-heading">
                Revolutionizing Finance with AI
              </h3>
              <p className="text-gray-300 mb-6 text-lg font-body">
                OpenERA is a premier hackathon that brings together developers,
                data scientists, financial experts, and innovators to build
                groundbreaking solutions at the intersection of artificial
                intelligence and finance.
              </p>
              <p className="text-gray-300 mb-6 font-body">
                Our mission is to accelerate the transformation of financial
                services through cutting-edge AI technologies and to nurture a
                community of visionaries who are shaping the future of the
                industry.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="border border-yellow-500/20 bg-yellow-500/5 p-5 rounded-lg">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">
                    48+
                  </div>
                  <div className="text-gray-400 text-sm">
                    Hours of Innovation
                  </div>
                </div>
                <div className="border border-yellow-500/20 bg-yellow-500/5 p-5 rounded-lg">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">
                    200+
                  </div>
                  <div className="text-gray-400 text-sm">
                    Expected Participants
                  </div>
                </div>
                <div className="border border-yellow-500/20 bg-yellow-500/5 p-5 rounded-lg">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">
                    $50K+
                  </div>
                  <div className="text-gray-400 text-sm">in Prizes</div>
                </div>
                <div className="border border-yellow-500/20 bg-yellow-500/5 p-5 rounded-lg">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">
                    20+
                  </div>
                  <div className="text-gray-400 text-sm">Industry Mentors</div>
                </div>
              </div>
            </div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="aspect-square max-w-md mx-auto relative">
                {/* Main image frame */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl p-1">
                  <div className="absolute inset-0 bg-gray-900 rounded-xl overflow-hidden">
                    {/* Replace with an actual image related to AI and finance */}
                    <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                      <div className="text-yellow-400 text-9xl opacity-30">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1}
                          stroke="currentColor"
                          className="w-32 h-32"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-6 -left-6 w-12 h-12 border-2 border-yellow-400/30 rounded-lg"></div>
                <div className="absolute -bottom-6 -right-6 w-12 h-12 border-2 border-yellow-400/30 rounded-full"></div>
                <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 w-4 h-16 bg-yellow-400/20 rounded-full"></div>
                <div className="absolute left-1/2 -bottom-8 transform -translate-x-1/2 w-16 h-4 bg-yellow-400/20 rounded-full"></div>
              </div>
            </motion.div>
          </motion.div>

          {/* Why participate */}
          <motion.div className="mt-24" variants={fadeInUp}>
            <h3 className="text-2xl font-semibold text-white mb-8 text-center font-heading">
              Why Participate in OpenERA?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 - Staggered positioning */}
              <motion.div
                className="card-hover bg-gray-900/50 border border-yellow-500/20 p-6 rounded-xl backdrop-blur-sm md:mt-0"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-yellow-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white mb-3 font-heading">
                  Innovation Hub
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Work alongside industry experts and cutting-edge technology to
                  build solutions that can reshape the financial landscape.
                </p>
              </motion.div>

              {/* Card 2 - Staggered positioning */}
              <motion.div
                className="card-hover bg-gray-900/50 border border-yellow-500/20 p-6 rounded-xl backdrop-blur-sm md:mt-8"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-yellow-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white mb-3 font-heading">
                  Network & Learn
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Connect with like-minded innovators, learn from mentors, and
                  build relationships that extend beyond the hackathon.
                </p>
              </motion.div>

              {/* Card 3 - Staggered positioning */}
              <motion.div
                className="card-hover bg-gray-900/50 border border-yellow-500/20 p-6 rounded-xl backdrop-blur-sm md:mt-4"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-yellow-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white mb-3 font-heading">
                  Win Big
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Compete for substantial prizes, gain recognition in the
                  industry, and potentially secure funding for your innovative
                  ideas.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
