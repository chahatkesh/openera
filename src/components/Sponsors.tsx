"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import SectionHeader from './SectionHeader';

const Sponsors = () => {
  // Animation variants
  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  const staggerContainer: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Devfolio Logo Component
  const DevfolioLogo = ({ className }: { className?: string }) => (
    <Image 
      src="/sponsors/devfolio.png" 
      alt="DEVFOLIO LOGO" 
      width={200}
      height={60}
      className={`w-full h-full object-contain ${className}`}
    />
  );

  // Ethereum Logo Component
  const EthereumLogo = ({ className }: { className?: string }) => (
    <Image 
      src="/sponsors/ethereum.png" 
      alt="ETHEREUM LOGO" 
      width={200}
      height={60}
      className={`w-full h-full object-contain ${className}`}
    />
  );

  // Sponsor data with actual logos
  const sponsorData = [
    {
      tier: "Platinum",
      description: "Premium Partners",
      gridCols: "grid-cols-1 md:grid-cols-2",
      cardHeight: "h-44",
      sponsors: [
        { type: "placeholder" as const },
        { type: "placeholder" as const }
      ]
    },
    {
      tier: "Gold",
      description: "Gold Partners", 
      gridCols: "grid-cols-2 md:grid-cols-4",
      cardHeight: "h-36",
      sponsors: [
        { type: "devfolio" as const, component: DevfolioLogo },
        { type: "placeholder" as const },
        { type: "placeholder" as const },
        { type: "placeholder" as const }
      ]
    },
    {
      tier: "Silver",
      description: "Silver Partners",
      gridCols: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
      cardHeight: "h-28",
      sponsors: [
        { type: "ethereum" as const, component: EthereumLogo },
        { type: "placeholder" as const },
        { type: "placeholder" as const },
        { type: "placeholder" as const },
        { type: "placeholder" as const },
        { type: "placeholder" as const }
      ]
    }
  ];

  const PlaceholderLogo = ({ tier }: { tier: string }) => (
    <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 group-hover:text-yellow-300 transition-colors duration-300">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`${
        tier === "Platinum" ? 'w-16 h-16' : 
        tier === "Gold" ? 'w-12 h-12' : 
        'w-10 h-10'
      } mb-3`}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
      <p className="text-center text-xs font-medium">
        {tier} Sponsor
      </p>
    </div>
  );

  return (
    <section id="sponsors" className="py-20 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:32px_32px]"></div>
      
      {/* Floating accent elements */}
      <div className="absolute top-20 -left-32 w-64 h-64 bg-yellow-400/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 -right-32 w-80 h-80 bg-yellow-400/8 rounded-full filter blur-3xl"></div>
      
      <div className="container max-w-7xl mx-auto px-6 relative z-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {/* Section header */}
          <SectionHeader 
            title="Our"
            highlight="Sponsors"
            description="OpenERA is made possible by these amazing organizations committed to innovation in AI and finance"
            className="mb-16"
          />

          {/* Sponsors tiers */}
          <div className="space-y-16">
            {sponsorData.map((tierData, tierIndex) => (
              <motion.div 
                key={tierIndex}
                variants={fadeIn}
                className="relative"
              >
                {/* Tier header with enhanced styling */}
                <div className="text-center mb-12">
                  <div className="inline-block relative">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 font-heading">
                      {tierData.tier}
                      <span className="text-yellow-400 ml-2">Sponsors</span>
                    </h3>
                  </div>
                </div>
                
                {/* Sponsors grid with enhanced cards */}
                <div className={`grid ${tierData.gridCols} gap-6`}>
                  {tierData.sponsors.map((sponsor, index) => (
                    <motion.div
                      key={index}
                      variants={fadeIn}
                      className="group"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      {sponsor.type === "placeholder" ? (
                        <div className={`${tierData.cardHeight} bg-gradient-to-br from-gray-900/40 to-gray-800/20 backdrop-blur-sm border border-gray-700/30 hover:border-yellow-400/40 rounded-xl p-6 transition-all duration-300 group-hover:shadow-lg`}>
                          <PlaceholderLogo tier={tierData.tier} />
                        </div>
                      ) : (
                        <div className={`${tierData.cardHeight} bg-gradient-to-br from-gray-900/60 to-gray-800/30 backdrop-blur-sm border border-yellow-400/20 hover:border-yellow-400/40 rounded-xl p-6 flex items-center justify-center transition-all duration-300`}>
                          {sponsor.component && <sponsor.component />}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors;