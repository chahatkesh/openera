"use client";
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  
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
    <section className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-black" ref={containerRef}>
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
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 50%, transparent 100%)',
            filter: 'blur(100px)'
          }}
          variants={floatingVariants}
          animate="animate"
        />
        
        <motion.div 
          className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] rounded-full opacity-[0.04]"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.01) 50%, transparent 100%)',
            filter: 'blur(120px)'
          }}
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />
        
        {/* Subtle cursor follow effect */}
        <div 
          className="absolute pointer-events-none w-[400px] h-[400px] rounded-full opacity-[0.02] transition-all duration-1000 ease-out"
          style={{ 
            left: `${mousePosition.x - 200}px`, 
            top: `${mousePosition.y - 200}px`,
            background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)',
            filter: 'blur(60px)'
          }}
        />
      </div>
      
      <motion.div 
        className="relative z-10 max-w-4xl w-full px-8 text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        
        {/* Main heading */}
        <motion.h1
          variants={itemVariants} 
          className="text-6xl md:text-5xl font-bold text-white mb-4 tracking-tight pt-20"
          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
        >
          OpenERA
        </motion.h1>
        
        {/* Hackathon subtitle */}
        <motion.h2 
          variants={itemVariants} 
          className="text-2xl md:text-2xl font-light text-white/80 mb-2 tracking-wide"
        >
          AI + Finance Hackathon
        </motion.h2>
        
        {/* Coming Soon badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="inline-flex items-center gap-3 px-6 py-2 border border-orange-400/30 rounded-full backdrop-blur-sm bg-orange-400/5">
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
            <span className="text-orange-400 font-mono text-lg tracking-wider font-semibold">
              COMING SOON
            </span>
          </div>
        </motion.div>
        
        {/* Elegant progress indicator */}
        <motion.div 
          variants={itemVariants}
          className="relative w-96 max-w-full mx-auto mb-12"
        >
          <div className="h-px bg-white/10 relative overflow-hidden">
            <motion.div 
              className="absolute left-0 h-full bg-gradient-to-r from-transparent via-orange-400/60 to-transparent"
              style={{ width: '70%' }}
              initial={{ x: '-100%' }}
              animate={{ x: '200%' }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut" as const
              }}
            />
          </div>
          <div className="flex justify-between mt-3 text-xs text-white/40 tracking-widest uppercase">
            <span>Event Setup</span>
            <span>85%</span>
          </div>
        </motion.div>
        
        {/* Description */}
        <motion.div variants={itemVariants} className="mb-12">
          <p className=" text-white/70 leading-relaxed font-light max-w-3xl mx-auto">
            Join the future of finance where artificial intelligence meets innovation. Build, compete, and shape the next generation of financial technology.
          </p>
        </motion.div>
        
        {/* Launch date */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="inline-flex items-center gap-3 px-8 py-4 border border-white/10 rounded-full backdrop-blur-sm">
            <div className="w-2 h-2 bg-white/40 rounded-full animate-pulse"></div>
            <span className="text-white/70 font-mono text-sm tracking-wider">
              REGISTRATION OPENS SOON
            </span>
          </div>
        </motion.div>
        
        {/* Subtle footer */}
        <motion.div variants={itemVariants} className="mt-16">
          <p className="text-white/30 text-sm font-mono tracking-wide">
            Be part of the financial revolution
          </p>
        </motion.div>
      </motion.div>
      
      {/* Minimal geometric accent */}
      <div className="absolute bottom-8 left-8 w-px h-16 bg-gradient-to-t from-transparent to-white/20"></div>
      <div className="absolute bottom-8 right-8 w-16 h-px bg-gradient-to-l from-transparent to-white/20"></div>
    </section>
  );
};

export default Hero;