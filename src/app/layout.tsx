import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "OpenERA",
  description: "AI + Finance Hackathon by OpenLearn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Performance optimizations */}
        <link rel="preconnect" href="https://apply.devfolio.co" />
        <link rel="dns-prefetch" href="https://apply.devfolio.co" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-black text-white relative overflow-x-hidden`}
      >
        {/* AI/Finance background pattern */}
        <div className="fixed inset-0 pointer-events-none">
          {/* Neural network pattern */}
          <div className="absolute inset-0 opacity-[0.02]">
            <svg width="100%" height="100%" className="animate-pulse">
              <defs>
                <pattern id="neural-grid" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="1" fill="#FFD700"/>
                  <circle cx="60" cy="40" r="1.5" fill="#FFD700"/>
                  <circle cx="100" cy="20" r="1" fill="#FFD700"/>
                  <circle cx="40" cy="80" r="1" fill="#FFD700"/>
                  <circle cx="80" cy="100" r="1.5" fill="#FFD700"/>
                  <path d="M20,20 Q40,40 60,40 T100,20" stroke="#FFD700" strokeWidth="0.5" fill="none"/>
                  <path d="M60,40 Q50,60 40,80 T80,100" stroke="#FFD700" strokeWidth="0.3" fill="none"/>
                  <path d="M20,20 L40,80 M100,20 L80,100" stroke="#FFD700" strokeWidth="0.2" fill="none"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#neural-grid)"/>
            </svg>
          </div>
          
          {/* Financial grid overlay */}
          <div className="absolute inset-0 opacity-[0.015]">
            <svg width="100%" height="100%">
              <defs>
                <pattern id="finance-grid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                  <rect width="80" height="80" fill="none" stroke="#FFD700" strokeWidth="0.5"/>
                  <rect width="40" height="40" fill="none" stroke="#FFD700" strokeWidth="0.3"/>
                  <line x1="0" y1="20" x2="80" y2="20" stroke="#FFD700" strokeWidth="0.2"/>
                  <line x1="0" y1="60" x2="80" y2="60" stroke="#FFD700" strokeWidth="0.2"/>
                  <line x1="20" y1="0" x2="20" y2="80" stroke="#FFD700" strokeWidth="0.2"/>
                  <line x1="60" y1="0" x2="60" y2="80" stroke="#FFD700" strokeWidth="0.2"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#finance-grid)"/>
            </svg>
          </div>
        </div>
        
        {children}
      </body>
    </html>
  );
}
