import React from 'react';

interface DefaultAvatarProps {
  name: string;
  size?: number;
  className?: string;
}

const DefaultAvatar: React.FC<DefaultAvatarProps> = ({ name, size = 80, className = "" }) => {
  const initials = name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <div 
      className={`relative inline-flex items-center justify-center bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 border border-yellow-400/30 rounded-full ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 rounded-full opacity-10">
        <svg width="100%" height="100%" className="rounded-full">
          <defs>
            <pattern id={`avatar-pattern-${name}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="#FFD700" opacity="0.3"/>
              <circle cx="5" cy="5" r="0.5" fill="#FFD700" opacity="0.2"/>
              <circle cx="15" cy="15" r="0.5" fill="#FFD700" opacity="0.2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#avatar-pattern-${name})`}/>
        </svg>
      </div>
      
      {/* Professional silhouette icon */}
      <div className="relative z-10 text-yellow-400/80">
        <svg 
          width={size * 0.6} 
          height={size * 0.6} 
          viewBox="0 0 24 24" 
          fill="currentColor"
        >
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      </div>
      
      {/* Initials overlay */}
      <div 
        className="absolute inset-0 flex items-center justify-center text-yellow-400 font-heading font-semibold"
        style={{ fontSize: size * 0.25 }}
      >
        {initials}
      </div>
      
      {/* Subtle glow effect */}
      <div className="absolute inset-0 rounded-full border border-yellow-400/20 shadow-inner"></div>
    </div>
  );
};

export default DefaultAvatar;
