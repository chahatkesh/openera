import React from 'react';

const Organizers = () => {
  // Organizer details
  const organizers = [
    {
      name: "Vatsal Khanna",
      linkedin: "https://linkedin.com/in/vatsal-khanna",
      twitter: "https://twitter.com/vatsal_khanna",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&auto=format&fit=crop&q=80"
    },
    {
      name: "Chahat Kesharwani",
      linkedin: "https://linkedin.com/in/chahat-kesharwani",
      twitter: "https://twitter.com/chahat_kesh",
      image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=300&h=300&auto=format&fit=crop&q=80"
    },
    {
      name: "Ratinderdeep Singh",
      linkedin: "https://linkedin.com/in/ratinderdeep-singh",
      twitter: "https://twitter.com/ratinder_singh",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&auto=format&fit=crop&q=80"
    },
    {
      name: "Harshvardhan Agarwal",
      linkedin: "https://linkedin.com/in/harshvardhan-agarwal",
      twitter: "https://twitter.com/harsh_agarwal",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&auto=format&fit=crop&q=80"
    },
  ];

  return (
    <section id="organizers" className="py-24 bg-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Circuit-like pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" className="animate-pulse">
            <defs>
              <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M10 10h80v80h-80z" fill="none" stroke="#facc15" strokeWidth="0.5"/>
                <circle cx="10" cy="10" r="2" fill="#facc15"/>
                <circle cx="90" cy="90" r="2" fill="#facc15"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)"/>
          </svg>
        </div>
        
        {/* Glowing orbs */}
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-yellow-400/2 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-yellow-400/1 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Angular shapes */}
        <div className="absolute top-40 right-10 w-24 h-24 border border-yellow-400/20 rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute bottom-40 left-10 w-16 h-16 border border-yellow-400/30 rotate-12 animate-bounce" style={{animationDuration: '3s'}}></div>
      </div>
      
      <div className="container max-w-7xl mx-auto px-6 relative z-20">
        {/* Section header */}
        <div className="mb-16 text-center">
          <div className="relative inline-block">
            <h2 className="text-5xl md:text-6xl font-black mb-4 relative">
              <span className="text-white">ORGANI</span>
              <span className="text-yellow-400 relative">
                ZERS
                <div className="absolute -bottom-2 left-0 w-full h-2 bg-yellow-400/20 skew-x-12"></div>
              </span>
            </h2>
            {/* Glitch effect lines */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 left-0 w-full h-0.5 bg-yellow-400 animate-pulse opacity-60"></div>
              <div className="absolute bottom-1/4 right-0 w-3/4 h-0.5 bg-yellow-400 animate-pulse opacity-40" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
          </div>
          
          <p className="mt-8 text-gray-300 max-w-3xl mx-auto text-lg font-light">
            Meet the <span className="text-yellow-400 font-semibold">visionary minds</span> behind OpenERA hackathon
          </p>
        </div>

        {/* Organizers grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {organizers.map((person, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Animated border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              
              {/* Card */}
              <div className="relative bg-black border border-yellow-400/20 rounded-xl overflow-hidden hover:border-yellow-400/50 transition-all duration-500 transform hover:-translate-y-2">
                {/* Image container */}
                <div className="relative h-64 overflow-hidden">
                  {/* Hexagonal clip path overlay */}
                  <div className="absolute inset-0 z-10 bg-black/20" style={{
                    clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
                  }}></div>
                  
                  {/* Image */}
                  <img 
                    src={person.image} 
                    alt={person.name}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80"></div>
                  <div className="absolute inset-0 bg-yellow-400/0 group-hover:bg-yellow-400/10 transition-all duration-500"></div>
                  
                  {/* Scan line effect */}
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-yellow-400 opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                  <div className="absolute bottom-0 right-0 w-0.5 h-full bg-yellow-400 opacity-0 group-hover:opacity-100 group-hover:animate-ping" style={{animationDelay: '0.5s'}}></div>
                </div>
                
                {/* Content - Fixed layout */}
                <div className="p-6 relative">
                  {/* Glitch bars */}
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-yellow-400/0 group-hover:bg-yellow-400/60 transition-all duration-300"></div>
                  
                  {/* Name section - stacked layout for better visibility */}
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors duration-300 leading-tight">
                      {person.name}
                    </h3>
                    <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-yellow-400 to-transparent transition-all duration-500 mt-1"></div>
                  </div>
                  
                  {/* Social media buttons - side by side */}
                  <div className="flex justify-center gap-3">
                    {/* LinkedIn button */}
                    <a 
                      href={person.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center bg-yellow-400/10 hover:bg-yellow-400 rounded-lg transition-all duration-300 group-hover:rotate-12 group-hover:scale-110"
                      title="LinkedIn Profile"
                    >
                      <svg className="w-5 h-5 text-yellow-400 group-hover:text-black transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                      </svg>
                    </a>
                    
                    {/* Twitter/X button */}
                    <a 
                      href={person.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center bg-yellow-400/10 hover:bg-yellow-400 rounded-lg transition-all duration-300 group-hover:-rotate-12 group-hover:scale-110"
                      title="Twitter/X Profile"
                    >
                      <svg className="w-4 h-4 text-yellow-400 group-hover:text-black transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                      </svg>
                    </a>
                  </div>
                  
                  {/* Tech-style decoration */}
                  <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
                </div>
                
                {/* Corner decorations */}
                <div className="absolute top-3 left-3 w-4 h-4 border-l-2 border-t-2 border-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2 border-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Organizers;