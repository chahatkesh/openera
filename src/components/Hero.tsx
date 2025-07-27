"use client";
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Load Devfolio SDK - Fixed implementation
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    
    return () => {
      const existingScript = document.querySelector('script[src="https://apply.devfolio.co/v2/sdk.js"]');
      if (existingScript && existingScript.parentNode) {
        existingScript.parentNode.removeChild(existingScript);
      }
    };
  }, []);
  
  // Set countdown target date for registration end (September 25, 2025)
  const targetDate = new Date('2025-09-25T23:59:59').getTime();
  
  // Update countdown timer every second
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);
    
    return () => clearInterval(interval);
  }, [targetDate]);
  
  return (
    <section id="home" className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="relative z-10 w-full max-w-7xl mx-auto text-center">
        {/* Main Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 pt-30 sm:mb-10 lg:mb-12"
        >
           {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/20 mb-4 sm:mb-6">
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            <span className="text-yellow-400 text-xs sm:text-sm font-medium">India&apos;s Largest Finance + AI Hackathon</span>
          </div>

          <h1 className="text-7xl lg:text-8xl xl:text-9xl text-white mb-4 sm:mb-6 font-jersey15">
            Open<span className="text-yellow-400">ERA</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8 px-2">
            Join India&apos;s top student innovators for an electrifying hackathon at the crossroads of 
            <span className="text-yellow-400 font-medium"> Artificial Intelligence and Finance</span>
          </p>

          {/* Event Details */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-6 text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>NIT Jalandhar</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="whitespace-nowrap">25–26 October 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="whitespace-nowrap">24 Hours</span>
            </div>
          </div>
        </motion.div>

        {/* Hackathon Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mb-10 sm:mb-12"
        >
          <div className="text-gray-400 text-xs sm:text-sm md:text-base mb-4 sm:mb-6 uppercase tracking-wider">
            Registration Ends In
          </div>
          
          <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6 max-w-xs sm:max-w-sm md:max-w-lg mx-auto">
            {[
              { value: timeLeft.days, label: "Days" },
              { value: timeLeft.hours, label: "Hours" },
              { value: timeLeft.minutes, label: "Min" },
              { value: timeLeft.seconds, label: "Sec" }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 border border-gray-700/30"
              >
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1">
                  {item.value.toString().padStart(2, '0')}
                </div>
                <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-500">
            Registration: 25 July – 25 September 2025
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
        >
          {/* Fixed Devfolio Button - Responsive Container */}
          <div className="w-full sm:w-auto flex justify-center cursor-pointer">
            <div 
              className="apply-button" 
              data-hackathon-slug="openera" 
              data-button-theme="dark"
              style={{ 
                height: '44px', 
                width: '100%',
                maxWidth: '312px',
                minWidth: '280px'
              }}
            ></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;