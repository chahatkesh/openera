"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionHeader from './SectionHeader';

const Sponsors = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  const staggerContainer = {
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
      src="https://devfolio.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F055de5cb-e9de-43cf-a87e-c2c43bd5a671%2F_Dark.png?table=block&id=001376d2-c0f1-4312-971e-a6d3588181a2&spaceId=5bc094c8-987c-4274-938f-8a9d3fad1a04&width=660&userId=&cache=v2" 
      alt="DEVFOLIO LOGO" 
      width={200}
      height={60}
      className={`w-full h-full object-contain ${className}`}
    />
  );

  // Ethereum Logo Component
  const EthereumLogo = ({ className }: { className?: string }) => (
    <Image 
      src="https://devfolio.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5bc094c8-987c-4274-938f-8a9d3fad1a04%2F3a99e963-fed1-423a-81b2-8e13661c12ef%2FUntitled.png?table=block&id=b43f6ac2-f22d-4513-814d-a841fc5b6079&spaceId=5bc094c8-987c-4274-938f-8a9d3fad1a04&width=660&userId=&cache=v2" 
      alt="ETHINDIA LOGO" 
      width={200}
      height={60}
      className={`w-full h-full object-contain ${className}`}
    />
  );

  // Sponsor data with actual logos
  const sponsorData = [
    {
      tier: "Platinum",
      sponsors: [
        { type: "placeholder" as const },
        { type: "placeholder" as const }
      ]
    },
    {
      tier: "Gold",
      sponsors: [
        { type: "devfolio" as const, component: DevfolioLogo },
        { type: "placeholder" as const },
        { type: "placeholder" as const },
        { type: "placeholder" as const }
      ]
    },
    {
      tier: "Silver",
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
    <div className="w-full h-full flex flex-col items-center justify-center text-gray-600 font-mono">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className={`${
        tier === "Platinum" ? 'w-24 h-24' : 
        tier === "Gold" ? 'w-16 h-16' : 
        'w-12 h-12'
      }`}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
      <p className="text-center mt-2 text-sm">
        {tier} Sponsor
      </p>
    </div>
  );

  return (
    <section id="sponsors" className="py-12 md:py-16 lg:py-20 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:32px_32px]"></div>
      
      {/* Yellow accent */}
      <div className="absolute bottom-40 -right-32 w-64 h-64 bg-yellow-400/10 rounded-full filter blur-3xl"></div>
      
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
          {sponsorData.map((tierData, tierIndex) => (
            <motion.div 
              key={tierIndex}
              variants={fadeIn}
              className="mb-16 last:mb-0"
            >
              <h3 className="text-xl font-semibold text-center text-yellow-400 mb-8 font-heading">{tierData.tier} Sponsors</h3>
              
              <div className={`grid grid-cols-1 ${
                tierData.tier === "Platinum" ? 'sm:grid-cols-2' : 
                tierData.tier === "Gold" ? 'sm:grid-cols-2 lg:grid-cols-4' : 
                'sm:grid-cols-3 lg:grid-cols-6'
              } gap-8`}>
                {tierData.sponsors.map((sponsor, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    className={`${
                      sponsor.type === "placeholder" 
                        ? `border border-yellow-500/10 rounded-xl ${
                            tierData.tier === "Platinum" ? 'h-40' : 
                            tierData.tier === "Gold" ? 'h-32' : 
                            'h-24'
                          } p-4 hover:border-yellow-500/30 transition-all duration-300`
                        : `${
                            tierData.tier === "Platinum" ? 'h-40' : 
                            tierData.tier === "Gold" ? 'h-32' : 
                            'h-24'
                          } flex items-center justify-center`
                    }`}
                    whileHover={sponsor.type === "placeholder" ? { y: -5 } : {}}
                  >
                    {sponsor.type === "placeholder" ? (
                      <PlaceholderLogo tier={tierData.tier} />
                    ) : sponsor.component ? (
                      <sponsor.component />
                    ) : null}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Become a sponsor */}
          <motion.div 
            variants={fadeIn}
            className="mt-20 text-center"
          >
            <h3 className="text-2xl font-semibold text-white mb-4 font-heading">Become a Sponsor</h3>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8 font-body">
              Interested in sponsoring OpenERA? Connect with innovators, showcase your brand, and support the next generation of fintech solutions.
            </p>
            <motion.a
              href="#contact"
              className="btn-enhanced inline-flex items-center px-8 py-3 border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-medium rounded-full transition-all duration-300 font-body"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sponsorship Opportunities
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors;