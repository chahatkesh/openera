"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Timeline = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  const timelineEvents = [
    {
      date: "August 1, 2025",
      title: "Registration Opens",
      description: "Sign up and form your team of up to 4 members."
    },
    {
      date: "August 15, 2025",
      title: "Project Submissions Begin",
      description: "Start working on your innovative AI finance solution."
    },
    {
      date: "August 25, 2025",
      title: "Workshops & Mentorship",
      description: "Join our expert-led sessions on AI in finance and get guidance."
    },
    {
      date: "September 1-3, 2025",
      title: "Hackathon Weekend",
      description: "48 hours of intense coding, collaboration, and creation."
    },
    {
      date: "September 3, 2025",
      title: "Project Submission Deadline",
      description: "Final code, presentations, and demos are due."
    },
    {
      date: "September 5, 2025",
      title: "Winners Announced",
      description: "Awards ceremony and celebration of all participants."
    }
  ];

  return (
    <section id="timeline" className="py-24 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:32px_32px]"></div>
      
      {/* Yellow accent */}
      <div className="absolute top-40 -right-32 w-64 h-64 bg-yellow-400/10 rounded-full filter blur-3xl"></div>
      
      <div className="container max-w-7xl mx-auto px-6 relative z-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {/* Section header */}
          <motion.div variants={fadeIn} className="mb-20 text-center">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-white">Event</span>
              <span className="text-yellow-400"> Timeline</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full"></div>
            <p className="mt-6 text-gray-300 max-w-3xl mx-auto">
              Mark your calendars for these key dates as we progress through the OpenERA hackathon journey
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <motion.div 
              className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gray-800"
              initial={{ scaleY: 0, originY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-yellow-400"></div>
            </motion.div>
            
            <div className="relative z-10">
              {timelineEvents.map((event, index) => (
                <div key={index} className="mb-16 relative">
                  <motion.div 
                    className={`flex flex-col ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    } items-center`}
                    variants={fadeIn}
                  >
                    {/* Date bubble */}
                    <div className={`w-full md:w-1/2 flex ${
                      index % 2 === 0 ? 'md:justify-end md:pr-10' : 'md:justify-start md:pl-10'
                    } mb-6 md:mb-0`}>
                      <div 
                        className="bg-gray-900 border border-yellow-500/20 px-5 py-2 rounded-full text-yellow-400 font-mono text-sm tracking-wider inline-block"
                        data-date={event.date}
                      >
                        {event.date}
                      </div>
                    </div>
                    
                    {/* Circle connector (only visible on md and above) */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-gray-900 border-2 border-yellow-400 rounded-full"></div>
                    
                    {/* Content */}
                    <div className={`w-full md:w-1/2 ${
                      index % 2 === 0 ? 'md:pl-10' : 'md:pr-10 md:text-right'
                    }`}>
                      <div className="bg-gray-900/50 hover:bg-gray-900 border border-yellow-500/10 hover:border-yellow-500/30 rounded-xl p-6 transition-all duration-300">
                        <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
                        <p className="text-gray-400">{event.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div 
            variants={fadeIn}
            className="mt-10 text-center"
          >
            <motion.a
              href="#register"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-medium rounded-full shadow-lg shadow-yellow-500/20 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Add to Calendar
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
