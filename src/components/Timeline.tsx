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
      date: "25 July",
      title: "Registration Opens",
      description: "Start your journey! Registration begins for all participants.",
      status: "current"
    },
    {
      date: "05 August", 
      title: "Round 1 Problem Reveal",
      description: "Online qualification round problem statement will be released.",
      status: "upcoming"
    },
    {
      date: "30 September",
      title: "Registration Ends",
      description: "Final deadline to register for the hackathon.",
      status: "upcoming"
    },
    {
      date: "05 October",
      title: "Round 1 Submission Deadline",
      description: "Last date to submit your Round 1 solutions.",
      status: "upcoming"
    },
    {
      date: "25-26 October",
      title: "Hack Day",
      description: "The main hackathon event at NIT Jalandhar. 24-30 hours of innovation.",
      status: "upcoming"
    }
  ];

  return (
    <section id="timeline" className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
      <div className="container max-w-5xl mx-auto px-6 relative z-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          {/* Section header */}
          <motion.div variants={fadeIn} className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-white">Event</span>
              <span className="text-yellow-400"> Timeline</span>
            </h2>
            <div className="w-16 h-0.5 bg-yellow-400 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
              Mark your calendars for these key dates in the OpenERA hackathon journey
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <motion.div 
              className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-gray-700"
              initial={{ scaleY: 0, originY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
            
            <div className="relative z-10 space-y-4 md:space-y-8">
              {timelineEvents.map((event, index) => (
                <motion.div 
                  key={index}
                  className="relative flex items-center"
                  variants={fadeIn}
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-6 md:left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full border-2 ${
                    event.status === 'current' 
                      ? 'bg-yellow-400 border-yellow-400' 
                      : 'bg-gray-800 border-gray-600'
                  }`} />
                  
                  {/* Content */}
                  <div className={`w-full md:w-1/2 ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto'
                  }`}>
                    <div className="bg-gray-900/30 border border-gray-700/50 rounded-lg p-6 backdrop-blur-sm hover:border-yellow-400/30 transition-all duration-300">
                      {/* Date badge */}
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                          event.status === 'current'
                            ? 'bg-yellow-400/20 text-yellow-400 border border-yellow-400/30'
                            : 'bg-gray-700/50 text-gray-400 border border-gray-600/30'
                        }`}>
                          {event.date}
                        </span>
                        {event.status === 'current' && (
                          <span className="text-xs text-yellow-400 font-medium">● Current</span>
                        )}
                      </div>
                      
                      {/* Title and description */}
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {event.title}
                      </h3>
                      <p className="hidden md:block text-gray-400 text-sm leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
