"use client";
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

interface MousePosition {
  x: number;
  y: number;
}

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  // Track if the button is ready
  const [isButtonLoaded, setIsButtonLoaded] = useState(false);

  // Load Devfolio SDK and initialize button - optimized version with requestIdleCallback
  useEffect(() => {
    // Function to load and initialize the Devfolio SDK
    const loadDevfolioSDK = () => {
      // First, load the SDK script
      const script = document.createElement('script');
      script.src = 'https://apply.devfolio.co/v2/sdk.js';
      script.async = true;
      script.defer = true;
      
      script.onload = () => {
        // Initialize button immediately after script loads
        try {
          if (window.devfolio) {
            window.devfolio.init();
            setIsButtonLoaded(true);
          }
        } catch (error) {
          // Silently catch errors in production
          if (process.env.NODE_ENV !== 'production') {
            console.error('Error initializing Devfolio button:', error);
          }
        }
      };
      
      document.body.appendChild(script);
    };
    
    // Use requestIdleCallback for non-critical initialization (with fallback)
    if (window.requestIdleCallback) {
      window.requestIdleCallback(loadDevfolioSDK, { timeout: 2000 });
    } else {
      // Fallback for browsers without requestIdleCallback
      setTimeout(loadDevfolioSDK, 100);
    }
    
    // Cleanup function
    return () => {
      const script = document.querySelector('script[src="https://apply.devfolio.co/v2/sdk.js"]');
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);
  
  // Set countdown target date (August 1, 2025)
  const targetDate = new Date('2025-08-01T00:00:00').getTime();
  
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
  
  // Handle mouse movement for subtle glow effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent): void => {
      const container = containerRef.current;
      if (!container) return;
      
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      setMousePosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  return (
    <section id="home" className="min-h-screen w-full flex flex-col items-center justify-center pt-8 relative overflow-hidden bg-black" ref={containerRef}>
      {/* Sophisticated background effects */}
      <div className="absolute inset-0 z-0">
        {/* Subtle dot pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Gradient orbs for depth */}
        <motion.div 
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-[0.08]"
          style={{
            background: 'radial-gradient(circle, rgba(255,215,0,0.15) 0%, rgba(255,215,0,0.03) 50%, transparent 100%)',
            filter: 'blur(100px)'
          }}
          variants={floatingVariants}
          animate="animate"
        />
        
        <motion.div 
          className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] rounded-full opacity-[0.06]"
          style={{
            background: 'radial-gradient(circle, rgba(255,165,0,0.12) 0%, rgba(255,165,0,0.02) 50%, transparent 100%)',
            filter: 'blur(120px)'
          }}
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />
        
        {/* Subtle cursor follow effect */}
        <div 
          className="absolute pointer-events-none w-[400px] h-[400px] rounded-full opacity-[0.03] transition-all duration-1000 ease-out"
          style={{ 
            left: `${mousePosition.x - 200}px`, 
            top: `${mousePosition.y - 200}px`,
            background: 'radial-gradient(circle, rgba(255,215,0,0.2) 0%, transparent 70%)',
            filter: 'blur(60px)'
          }}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>
      
      <motion.div 
        className="relative z-10 max-w-5xl w-full px-8 text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Logo and main heading */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col items-center justify-center mt-8"
        >
          <div className="relative w-40 h-40 mb-4">
            <Image
              src="/logo.png"
              alt="OpenERA Logo"
              width={90}
              height={90}
              className="filter drop-shadow-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-3 tracking-tight">
            Open<span className="text-yellow-400">ERA</span>
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto my-6 rounded-full"></div>
        </motion.div>
        
        {/* Hackathon subtitle */}
        <motion.h2 
          variants={itemVariants} 
          className="text-2xl md:text-3xl font-light text-white/90 mb-4 tracking-wide"
        >
          <span className="font-medium">AI</span> + <span className="font-medium">Finance</span> Hackathon
        </motion.h2>
        
        {/* Coming Soon badge */}
        <motion.div variants={itemVariants} className="mb-10">
          <div className="inline-flex items-center gap-3 px-6 py-2 border border-yellow-400/30 rounded-full backdrop-blur-sm bg-yellow-400/5">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <span className="text-yellow-400 font-mono text-lg tracking-wider font-semibold">
              COMING SOON
            </span>
          </div>
        </motion.div>
        
        {/* Elegant progress indicator */}
        <motion.div 
          variants={itemVariants}
          className="relative w-96 max-w-full mx-auto mb-12"
        >
          <div className="h-1 bg-gray-900 rounded-full relative overflow-hidden">
            <motion.div 
              className="absolute left-0 h-full bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"
              style={{ width: '85%' }}
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 1.5,
                delay: 0.5,
                ease: "easeOut"
              }}
            />
            <motion.div 
              className="absolute left-0 h-full w-20 bg-gradient-to-r from-transparent via-yellow-300/60 to-transparent"
              initial={{ x: '-100%' }}
              animate={{ x: '200%' }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
                ease: "easeInOut"
              }}
            />
          </div>
          <div className="flex justify-between mt-3 text-xs text-white/50 tracking-widest uppercase font-mono">
            <span>Event Setup</span>
            <span>85%</span>
          </div>
        </motion.div>
        
        {/* Description */}
        <motion.div variants={itemVariants} className="mb-12">
          <p className="text-white/80 text-lg leading-relaxed font-light max-w-3xl mx-auto">
            Join the revolution where <span className="text-yellow-400 font-medium">AI meets finance</span>. Build groundbreaking solutions, 
            compete with brilliant minds, and shape the next generation of financial technology.
          </p>
        </motion.div>
        
        {/* CTA buttons */}
        <motion.div 
          variants={itemVariants} 
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          {/* Optimized Devfolio button with minimal fallback */}
          <div className="relative">
            {!isButtonLoaded && (
              <motion.div
                className="absolute inset-0 px-8 py-3 bg-blue-600 text-white rounded-full text-lg flex items-center justify-center cursor-pointer z-10"
                whileHover={{ scale: 1.05 }}
                style={{ minWidth: '180px', minHeight: '45px' }}
              >
                Apply with Devfolio
              </motion.div>
            )}
            
            {/* The actual Devfolio button container */}
            <div 
              className="apply-button relative z-20" 
              data-hackathon-slug="openera" 
              data-button-theme="dark-inverted"
            ></div>
          </div>
          
          <motion.a
            href="#about"
            className="px-8 py-3 bg-transparent text-white border border-white/20 hover:border-yellow-400/40 hover:text-yellow-400 rounded-full text-lg transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.a>
        </motion.div>
        
        {/* Countdown section */}
        <motion.div variants={itemVariants} className="mb-14">
          <div className="text-white/60 uppercase tracking-widest text-sm mb-4 font-mono">
            Registration Opens In
          </div>
          <div className="flex justify-center space-x-4 sm:space-x-8">
            {[
              { value: timeLeft.days, label: "Days" },
              { value: timeLeft.hours, label: "Hours" },
              { value: timeLeft.minutes, label: "Minutes" },
              { value: timeLeft.seconds, label: "Seconds" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="text-2xl sm:text-4xl font-bold text-white bg-gray-900 p-3 sm:p-4 rounded-lg w-16 sm:w-20 border border-yellow-500/20">
                  {item.value}
                </div>
                <div className="text-xs sm:text-sm text-yellow-500 mt-2 font-mono tracking-wider">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Geometric accents */}
        <motion.div 
          className="absolute -bottom-10 left-0 w-64 h-64 opacity-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ delay: 1, duration: 1.5 }}
        >
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent to-yellow-400"></div>
          <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-yellow-400 to-transparent"></div>
        </motion.div>
        
        <motion.div 
          className="absolute -bottom-10 right-0 w-64 h-64 opacity-20" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ delay: 1, duration: 1.5 }}
        >
          <div className="absolute top-0 right-0 w-full h-0.5 bg-gradient-to-l from-transparent to-yellow-400"></div>
          <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-yellow-400 to-transparent"></div>
        </motion.div>

        {/* Arrow down */}
        <motion.a
          href="#about"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-yellow-400 hover:text-yellow-300 transition-all"
          animate={{ y: [0, 10, 0] }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
            <path d="M12 5v14M5 12l7 7 7-7"></path>
          </svg>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;