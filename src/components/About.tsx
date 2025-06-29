"use client";

import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
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
        delayChildren: 0.2
      }
    }
  };

  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent z-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:32px_32px]"></div>
      
      {/* Yellow accent */}
      <div className="absolute top-40 -left-64 w-96 h-96 bg-yellow-400/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 -right-64 w-96 h-96 bg-yellow-500/5 rounded-full filter blur-3xl"></div>
      
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
              <span className="text-white">About</span>
              <span className="text-yellow-400"> OpenERA</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-5">Revolutionizing Finance with AI</h3>
              <p className="text-gray-300 mb-6 text-lg">
                OpenERA is a premier hackathon that brings together developers, data scientists, financial experts, 
                and innovators to build groundbreaking solutions at the intersection of artificial intelligence and finance.
              </p>
              <p className="text-gray-300 mb-6">
                Our mission is to accelerate the transformation of financial services through cutting-edge AI technologies 
                and to nurture a community of visionaries who are shaping the future of the industry.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="border border-yellow-500/20 bg-yellow-500/5 p-5 rounded-lg">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">48+</div>
                  <div className="text-gray-400 text-sm">Hours of Innovation</div>
                </div>
                <div className="border border-yellow-500/20 bg-yellow-500/5 p-5 rounded-lg">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">200+</div>
                  <div className="text-gray-400 text-sm">Expected Participants</div>
                </div>
                <div className="border border-yellow-500/20 bg-yellow-500/5 p-5 rounded-lg">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">$50K+</div>
                  <div className="text-gray-400 text-sm">in Prizes</div>
                </div>
                <div className="border border-yellow-500/20 bg-yellow-500/5 p-5 rounded-lg">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">20+</div>
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
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-32 h-32">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
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
          <motion.div 
            className="mt-24"
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">Why Participate in OpenERA?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Innovation",
                  description: "Leverage cutting-edge AI technologies to develop financial solutions that could redefine the industry.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  )
                },
                {
                  title: "Networking",
                  description: "Connect with industry leaders, potential employers, investors, and like-minded innovators.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                    </svg>
                  )
                },
                {
                  title: "Learning",
                  description: "Gain hands-on experience with new technologies and expand your knowledge through workshops and mentorship.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                    </svg>
                  )
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-900/50 border border-yellow-500/10 rounded-xl p-6 hover:border-yellow-500/30 transition-all duration-300"
                  whileHover={{ y: -5, boxShadow: '0 10px 30px -15px rgba(255, 215, 0, 0.15)' }}
                >
                  <div className="bg-yellow-500/10 rounded-full p-3 inline-block mb-4">
                    <div className="text-yellow-400">
                      {item.icon}
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3">{item.title}</h4>
                  <p className="text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
