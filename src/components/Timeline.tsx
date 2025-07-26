"use client";

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

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
      date: "25 July - 25 September",
      title: "Registration",
      description: "Start your journey! Registration is live for all participants.",
      status: "current"
    },
    {
      date: "05 September - 05 October", 
      title: "Round 1: Assignment Submission",
      description: "Round 1 assignment submission opens. Problem statements will be available.",
      status: "upcoming"
    },
    {
      date: "07 October", 
      title: "Shortlisted Teams Announcement",
      description: "Teams shortlisted for Finale Round will be announced.",
      status: "upcoming"
    },
    {
      date: "25 October - 26 October",
      title: "Hackathon Day",
      description: "The final round in-person hackathon at NIT Jalandhar.",
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
          <SectionHeader 
            title="Event"
            highlight="Timeline"
            description="Mark your calendars for these key dates in the OpenERA hackathon journey"
            className="mb-16"
          />

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line */}
            <motion.div 
              className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400 via-gray-600 to-gray-700"
              initial={{ scaleY: 0, originY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
            
            <div className="relative z-10 space-y-8 sm:space-y-12">
              {timelineEvents.map((event, index) => (
                <motion.div 
                  key={index}
                  className="relative flex items-start"
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-2 sm:left-6 w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 sm:border-3 z-20 ${
                    event.status === 'current' 
                      ? 'bg-yellow-400 border-yellow-300 shadow-lg shadow-yellow-400/50' 
                      : 'bg-gray-800 border-gray-600'
                  }`}>
                    {event.status === 'current' && (
                      <div className="absolute inset-0 rounded-full bg-yellow-400 animate-ping opacity-20"></div>
                    )}
                  </div>
                  
                  {/* Content Card */}
                  <div className="ml-10 sm:ml-16 flex-1">
                    <div className="bg-gradient-to-br from-gray-900/40 to-gray-800/20 border border-gray-700/30 rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 backdrop-blur-sm hover:border-yellow-400/30 transition-all duration-300 group">
                      
                      {/* Date Badge */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 mb-3 sm:mb-4">
                        <span className={`inline-flex items-center text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full self-start ${
                          event.status === 'current'
                            ? 'bg-yellow-400/20 text-yellow-400 border border-yellow-400/30'
                            : 'bg-gray-700/30 text-gray-300 border border-gray-600/30'
                        }`}>
                          <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                          <span className="inline">{event.date}</span>
                        </span>
                        {event.status === 'current' && (
                          <span className="hidden md:inline-flex items-center text-xs text-yellow-400 font-medium bg-yellow-400/10 px-2 sm:px-3 py-1 rounded-full self-start">
                            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-400 rounded-full mr-1.5 sm:mr-2 animate-pulse"></span>
                            Active Now
                          </span>
                        )}
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-yellow-400 transition-colors">
                        {event.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                        {event.description}
                      </p>
                      
                      {/* Progress indicator for current event */}
                      {event.status === 'current' && (
                        <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-700/50">
                          <div className="flex items-center text-xs sm:text-sm text-yellow-400">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-400 rounded-full mr-2"></div>
                            {event.title} is currently live
                          </div>
                        </div>
                      )}
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
