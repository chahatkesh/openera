import React from 'react';
import Image from 'next/image';
import { RiLinkedinFill, RiTwitterXLine, RiInstagramLine } from 'react-icons/ri';
import SectionHeader from './SectionHeader';

const Organizers = () => {
  // Organizer details
  const organizers = [
    {
      name: "Vatsal Khanna",
      designation: "Marketing Lead",
      linkedin: "https://linkedin.com/in/vatsalkhanna",
      twitter: "https://x.com/vatsalkhanna55",
      instagram: "https://instagram.com/vatsalkhanna5",
      image: "/team/vatsal.jpeg"
    },
    {
      name: "Chahat Kesharwani",
      designation: "Finance Lead",
      linkedin: "https://linkedin.com/in/chahatkesharwani",
      twitter: "https://x.com/chahatkesh",
      instagram: "https://instagram.com/chahat.kesharwanii",
      image: "/team/chahat.jpeg"
    },
    {
      name: "Ratinderdeep Singh",
      designation: "Logistics Head",
      linkedin: "https://linkedin.com/in/ratinderdeepsingh",
      twitter: "https://x.com/Ratinder_999",
      instagram: "https://instagram.com/ratinder_999",
      image: "/team/ratinder.jpeg"
    },
    {
      name: "Harshvardhan Agarwal",
      designation: "Operations Lead",
      linkedin: "https://linkedin.com/in/harshvardhan-agarwal-605931281",
      twitter: "https://x.com/Harshag_91",
      instagram: "https://instagram.com/harshvardhan_5579",
      image: "/team/harsh.jpg"
    },
  ];

  return (
    <section id="organizers" className="py-20 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6 relative z-20">
        {/* Section header */}
        <SectionHeader 
          title="Contact"
          highlight="Us"
          description="Get in touch with our organizing team for any queries about the hackathon"
          className="mb-16"
        />

        {/* Organizers grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {organizers.map((person, index) => (
            <div
              key={index}
              className="group"
            >
              {/* Modern Card Design */}
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-2xl hover:border-yellow-400/40 transition-all duration-500 hover:scale-[1.02]">
                
                {/* Profile Image - Full width at top */}
                <div className="relative h-72 overflow-hidden">
                  {person.image && person.image !== "/logo.png" ? (
                    <Image 
                      src={person.image} 
                      alt={person.name}
                      width={350}
                      height={350}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-yellow-400/20 to-yellow-600/10 flex items-center justify-center">
                      <div className="text-6xl font-bold text-yellow-400">
                        {person.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                  )}
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Social Links - Floating on image */}
                  <div className="absolute bottom-4 right-4 flex space-x-3 transition-all duration-300">
                    {/* LinkedIn */}
                    <a 
                      href={person.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-black/60 backdrop-blur-sm hover:bg-blue-600 border border-white/30 hover:border-blue-400 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                      title="LinkedIn"
                    >
                      <RiLinkedinFill className="w-5 h-5 text-white" />
                    </a>
                    
                    {/* Twitter/X */}
                    <a 
                      href={person.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-black/60 backdrop-blur-sm hover:bg-gray-700 border border-white/30 hover:border-gray-400 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                      title="Twitter"
                    >
                      <RiTwitterXLine className="w-4 h-4 text-white" />
                    </a>
                    
                    {/* Instagram */}
                    <a 
                      href={person.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-black/60 backdrop-blur-sm hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 border border-white/30 hover:border-purple-400 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                      title="Instagram"
                    >
                      <RiInstagramLine className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="py-8">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-yellow-400 transition-colors duration-300">
                      {person.name}
                    </h3>
                    <p className="text-gray-400 text-sm font-medium group-hover:text-yellow-300 transition-colors duration-300">
                      {person.designation}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Organizers;