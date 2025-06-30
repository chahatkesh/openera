"use client";

import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

const Prizes = () => {
  // Refs for sections that will be lazy loaded
  const judgesRef = useRef(null);
  const mentorsRef = useRef(null);
  const trackAwardsRef = useRef(null);
  const specialAwardsRef = useRef(null);
  
  // Check if sections are in view for lazy loading
  const judgesInView = useInView(judgesRef, { once: true, amount: 0.1 });
  const mentorsInView = useInView(mentorsRef, { once: true, amount: 0.1 });
  const trackAwardsInView = useInView(trackAwardsRef, { once: true, amount: 0.1 });
  const specialAwardsInView = useInView(specialAwardsRef, { once: true, amount: 0.1 });

  // Simplified animation variants with reduced duration for faster animations
  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  // Reduced stagger delay between children
  const staggerContainer: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  // Main prize data
  const mainPrizes = [
    {
      place: "1st Place",
      prize: "$20,000",
      extras: ["Investor Meeting", "Media Coverage", "Incubation Support"],
      color: "from-yellow-400 to-yellow-600",
      textColor: "text-yellow-400",
      borderColor: "border-yellow-400/30",
      shadowColor: "shadow-yellow-400/30",
      scale: 1.1,
      translate: 0,
      icon: "🏆",
      isGrand: true
    },
    {
      place: "2nd Place",
      prize: "$10,000",
      extras: ["Cloud Credits", "Mentorship", "Industry Connections"],
      color: "from-gray-300 to-gray-500",
      textColor: "text-gray-300",
      borderColor: "border-gray-300/30",
      shadowColor: "shadow-gray-300/20",
      scale: 1,
      translate: 4,
      icon: "🥈",
      isGrand: false
    },
    {
      place: "3rd Place",
      prize: "$5,000",
      extras: ["Software Licenses", "Learning Resources", "Networking Event"],
      color: "from-amber-600 to-amber-800",
      textColor: "text-amber-600",
      borderColor: "border-amber-600/30",
      shadowColor: "shadow-amber-600/20",
      scale: 1,
      translate: 4,
      icon: "🥉",
      isGrand: false
    }
  ];

  // Judges data
  const judges = [
    {
      name: "Dr. Sarah Chen",
      title: "Chief AI Officer, Goldman Sachs",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&auto=format&fit=crop&q=80",
      expertise: "Machine Learning & Financial Analytics"
    },
    {
      name: "Michael Rodriguez",
      title: "Director of Innovation, JPMorgan Chase",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&auto=format&fit=crop&q=80",
      expertise: "Fintech & Banking Technology"
    },
    {
      name: "Amelia Thompson",
      title: "Founder, BlockFinance",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=300&auto=format&fit=crop&q=80",
      expertise: "Blockchain & Cryptocurrency"
    }
  ];

  // Mentors data
  const mentors = [
    { name: "Raj Patel", expertise: "AI/ML", company: "Microsoft" },
    { name: "Lisa Wong", expertise: "UI/UX", company: "Figma" },
    { name: "Alex Johnson", expertise: "Blockchain", company: "Ethereum Foundation" },
    { name: "David Kim", expertise: "Backend", company: "AWS" },
    { name: "Sophia Martínez", expertise: "Product", company: "Stripe" },
    { name: "James Wilson", expertise: "Frontend", company: "Vercel" },
    { name: "Emma Davis", expertise: "Data Science", company: "Google" },
    { name: "Omar Hassan", expertise: "Finance", company: "Bloomberg" }
  ];

  // Track awards data
  const trackAwards = [
    {
      category: "Best AI Trading Algorithm",
      prize: "$2,500",
      icon: "📈",
      description: "Most effective use of AI for market prediction"
    },
    {
      category: "Financial Inclusion Innovation",
      prize: "$2,500",
      icon: "🌍",
      description: "Most impactful solution for underserved communities"
    },
    {
      category: "DeFi Breakthrough",
      prize: "$2,500",
      icon: "🔗",
      description: "Most innovative use of blockchain technology"
    },
    {
      category: "Best Wealth Management Tool",
      prize: "$2,500",
      icon: "💰",
      description: "Most sophisticated investment planning solution"
    }
  ];

  // Special recognition awards data
  const specialAwards = [
    {
      name: "Most Innovative Solution",
      icon: "✨",
      description: "For the most creative and unique approach"
    },
    {
      name: "Best User Experience",
      icon: "🎨",
      description: "For exceptional design and usability"
    },
    {
      name: "Best Technical Implementation",
      icon: "🔧",
      description: "For engineering excellence and code quality"
    },
    {
      name: "People's Choice Award",
      icon: "👑",
      description: "Voted by hackathon participants"
    }
  ];

  // Additional resources data
  const additionalResources = [
    {
      title: "Cloud Credits",
      description: "AWS and GCP credits for all participating teams",
      icon: "☁️"
    },
    {
      title: "Technical Mentorship",
      description: "1:1 sessions with industry experts during the event",
      icon: "👨‍💻"
    },
    {
      title: "Post-Event Networking",
      description: "Exclusive access to networking events with sponsors",
      icon: "🌐"
    }
  ];

  return (
    <section id="prizes" className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Simplified background elements - reduced blur radius */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent z-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:32px_32px]"></div>
      
      {/* Simplified accent elements */}
      <div className="absolute top-40 -left-32 w-64 h-64 bg-yellow-400/10 rounded-full filter blur-2xl"></div>
      
      <div className="container max-w-7xl mx-auto px-6 relative z-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {/* Section header */}
          <motion.div variants={fadeIn} className="mb-16 text-center">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-white">Premium</span>
              <span className="text-yellow-400"> Prizes</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full"></div>
            <p className="mt-6 text-gray-300 max-w-3xl mx-auto">
              Compete for these exclusive awards and opportunities, valued at over $50,000
            </p>
          </motion.div>

          {/* Main prizes - simplified rendering with fewer animations */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {mainPrizes.map((prize, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className={`bg-gray-900 border ${prize.borderColor} rounded-xl overflow-hidden ${prize.shadowColor} hover:shadow-lg transition-all duration-300`}
                style={{ 
                  zIndex: 10 - index,
                  transform: `scale(${prize.scale}) translateY(${prize.translate}px)` 
                }}
                whileHover={{ y: -5 }}
              >
                <div className={`h-2 bg-gradient-to-r ${prize.color}`}></div>
                <div className="p-8 text-center relative z-10">
                  <div className="text-5xl mb-4">
                    {prize.icon}
                  </div>
                  <h3 className={`text-xl font-semibold ${prize.textColor} mb-2`}>{prize.place}</h3>
                  <div className="text-4xl font-bold text-white mb-4">
                    {prize.prize}
                  </div>
                  <div className="w-16 h-1 bg-gradient-to-r from-gray-700 to-gray-600 mx-auto rounded-full my-4"></div>
                  <ul className="text-gray-400 text-sm space-y-2">
                    {prize.extras.map((extra, idx) => (
                      <li key={idx} className="flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-yellow-400 mr-2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        {extra}
                      </li>
                    ))}
                  </ul>
                  {prize.isGrand && (
                    <div className="mt-4 inline-block bg-yellow-400/10 px-3 py-1 rounded-full">
                      <span className="text-yellow-400 text-xs font-medium">Grand Prize</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Judges Section - Lazy loaded */}
          <div ref={judgesRef} className="my-20 relative">
            {judgesInView && (
              <>
                <h3 className="text-3xl font-semibold text-white text-center mb-4">
                  <span className="relative inline-block">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200">
                      Industry Judges
                    </span>
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
                      initial={{ width: 0, left: "50%" }}
                      animate={{ width: "80%", left: "10%" }}
                      transition={{ duration: 0.6 }}
                    />
                  </span>
                </h3>
                <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
                  Our distinguished panel of judges brings expertise from leading financial institutions and tech innovators
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                  {judges.map((judge, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      className="bg-black border border-yellow-500/10 rounded-xl overflow-hidden group relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 z-10"></div>
                      <div className="relative z-20 p-6 flex flex-col items-center">
                        <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-yellow-500/30 mb-5 group-hover:border-yellow-400 transition-colors duration-300">
                          <div className="w-full h-full bg-gray-800 flex items-center justify-center text-4xl">
                            {judge.name.charAt(0)}
                          </div>
                        </div>
                        <h4 className="text-xl font-bold text-white mb-1">{judge.name}</h4>
                        <p className="text-yellow-400 font-medium text-sm mb-3">{judge.title}</p>
                        <div className="px-4 py-1 rounded-full bg-yellow-400/10 text-yellow-400 text-xs font-medium">
                          {judge.expertise}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="text-center mt-10">
                  <button className="px-5 py-2 border border-yellow-400/30 text-yellow-400 rounded-full text-sm font-medium hover:bg-yellow-400/10 transition-colors duration-300">
                    View All Judges
                  </button>
                </div>
              </>
            )}
          </div>
          
          {/* Mentors Section - Lazy loaded */}
          <div ref={mentorsRef} className="mb-20 relative">
            {mentorsInView && (
              <>
                <h3 className="text-3xl font-semibold text-white text-center mb-4">
                  <span className="relative inline-block">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200">
                      Expert Mentors
                    </span>
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
                      initial={{ width: 0, left: "50%" }}
                      animate={{ width: "80%", left: "10%" }}
                      transition={{ duration: 0.6 }}
                    />
                  </span>
                </h3>
                <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
                  Connect with industry-leading mentors who will guide, support, and elevate your hackathon project
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {mentors.map((mentor, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: Math.min(index * 0.05, 0.3), duration: 0.3 }}
                      className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/10 rounded-lg p-4 hover:border-yellow-400/30 transition-all duration-300"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-full bg-yellow-400/10 flex items-center justify-center text-lg text-yellow-400 font-medium">
                          {mentor.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="text-white font-medium">{mentor.name}</h4>
                          <p className="text-gray-400 text-xs">{mentor.company}</p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <span className="inline-block px-2 py-1 bg-yellow-400/10 rounded-md text-yellow-400 text-xs">
                          {mentor.expertise}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Track awards - Lazy loaded */}
          <div ref={trackAwardsRef}>
            {trackAwardsInView && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-semibold text-white text-center mb-8">Track Awards</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {trackAwards.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: Math.min(index * 0.05, 0.2), duration: 0.3 }}
                      className="bg-gradient-to-b from-gray-900 to-black border border-yellow-500/10 rounded-lg overflow-hidden hover:border-yellow-500/30 transition-all duration-300 group"
                      whileHover={{ y: -5 }}
                    >
                      <div className="h-1 bg-yellow-400/70"></div>
                      <div className="p-5">
                        <div className="flex justify-between items-center mb-3">
                          <div className="text-2xl group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                          <div className="text-xl font-bold text-yellow-400">{item.prize}</div>
                        </div>
                        <h4 className="text-lg font-medium text-white mb-2">{item.category}</h4>
                        <p className="text-gray-400 text-sm">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Special awards - Lazy loaded */}
          <div ref={specialAwardsRef} className="mt-16">
            {specialAwardsInView && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-semibold text-white text-center mb-8">Special Recognition</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {specialAwards.map((award, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: Math.min(index * 0.05, 0.2), duration: 0.3 }}
                      className="bg-black/50 border border-yellow-500/20 rounded-xl p-6 text-center hover:bg-yellow-500/5 transition-all duration-300"
                    >
                      <div className="bg-yellow-500/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-yellow-400 text-xl">{award.icon}</span>
                      </div>
                      <h4 className="text-white font-semibold">{award.name}</h4>
                      <p className="mt-2 text-gray-400 text-sm">{award.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Additional Resources - Simplified with fewer animations */}
          <motion.div 
            variants={fadeIn} 
            className="mt-16 bg-gradient-to-b from-yellow-900/5 to-transparent p-8 rounded-xl border border-yellow-500/10"
          >
            <h3 className="text-xl font-semibold text-yellow-400 mb-6 text-center">Additional Support</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {additionalResources.map((resource, index) => (
                <div key={index} className="p-4">
                  <div className="text-2xl mb-2">{resource.icon}</div>
                  <h4 className="font-medium text-white mb-2">{resource.title}</h4>
                  <p className="text-gray-400 text-sm">{resource.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Disclaimer */}
          <motion.div variants={fadeIn} className="mt-16 text-center text-gray-500 text-sm">
            <p className="max-w-md mx-auto">All prizes are subject to eligibility requirements and official hackathon rules.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Prizes;
