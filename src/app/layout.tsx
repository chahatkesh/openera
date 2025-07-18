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
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased text-white relative overflow-x-hidden`}
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(15, 15, 23, 0.95) 0%, rgba(0, 0, 0, 1) 70%),
            radial-gradient(circle at 80% 70%, rgba(25, 25, 35, 0.8) 0%, rgba(0, 0, 0, 1) 70%),
            linear-gradient(135deg, #000000 0%, #0a0a0f 50%, #000000 100%)
          `
        }}
      >
        {/* Living Blueprint Background System */}
        <div className="fixed inset-0 pointer-events-none z-0">
          {/* Primary Grid Layer - Circuit board inspiration */}
          <div 
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255, 215, 0, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 215, 0, 0.3) 1px, transparent 1px),
                linear-gradient(rgba(255, 215, 0, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 215, 0, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px',
              animation: 'gridPulse 8s ease-in-out infinite alternate'
            }}
          />
          
          {/* Neural Network Layer - Animated connections */}
          <div className="absolute inset-0 opacity-[0.008]">
            <svg width="100%" height="100%" className="absolute inset-0">
              <defs>
                <pattern id="neural-network" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                  {/* Neural nodes */}
                  <circle cx="50" cy="50" r="2" fill="#FFD700" opacity="0.6">
                    <animate attributeName="opacity" values="0.3;0.8;0.3" dur="4s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="150" cy="50" r="1.5" fill="#FFD700" opacity="0.4">
                    <animate attributeName="opacity" values="0.2;0.6;0.2" dur="6s" repeatCount="indefinite" begin="1s" />
                  </circle>
                  <circle cx="100" cy="150" r="2.5" fill="#FFD700" opacity="0.5">
                    <animate attributeName="opacity" values="0.2;0.7;0.2" dur="5s" repeatCount="indefinite" begin="2s" />
                  </circle>
                  
                  {/* Neural connections */}
                  <path d="M50,50 Q100,25 150,50" stroke="#FFD700" strokeWidth="0.5" fill="none" opacity="0.3">
                    <animate attributeName="opacity" values="0.1;0.4;0.1" dur="3s" repeatCount="indefinite" />
                  </path>
                  <path d="M150,50 Q125,100 100,150" stroke="#FFD700" strokeWidth="0.3" fill="none" opacity="0.2">
                    <animate attributeName="opacity" values="0.05;0.3;0.05" dur="4s" repeatCount="indefinite" begin="1.5s" />
                  </path>
                  <path d="M50,50 Q75,100 100,150" stroke="#FFD700" strokeWidth="0.4" fill="none" opacity="0.25">
                    <animate attributeName="opacity" values="0.1;0.35;0.1" dur="3.5s" repeatCount="indefinite" begin="0.5s" />
                  </path>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#neural-network)" />
            </svg>
          </div>
          
          {/* Data Flow Layer - Representing financial data streams */}
          <div 
            className="absolute inset-0 opacity-[0.012]"
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(255, 215, 0, 0.15) 1px, transparent 2px),
                radial-gradient(circle at 75% 75%, rgba(255, 215, 0, 0.1) 1px, transparent 2px),
                radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.08) 0.5px, transparent 1px)
              `,
              backgroundSize: '150px 150px, 200px 200px, 80px 80px',
              animation: 'dataFlow 12s linear infinite'
            }}
          />
          
          {/* Depth Layer - Subtle noise texture for sophistication */}
          <div 
            className="absolute inset-0 opacity-[0.003]"
            style={{
              backgroundImage: `
                radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 0),
                radial-gradient(circle at 1px 1px, rgba(255, 215, 0, 0.1) 1px, transparent 0)
              `,
              backgroundSize: '50px 50px, 100px 100px',
              animation: 'breathe 6s ease-in-out infinite alternate'
            }}
          />
          
          {/* Scanning Line Effect - Tech blueprint feel */}
          <div 
            className="absolute inset-0 opacity-[0.005]"
            style={{
              background: `linear-gradient(
                90deg,
                transparent 0%,
                transparent 45%,
                rgba(255, 215, 0, 0.1) 50%,
                transparent 55%,
                transparent 100%
              )`,
              animation: 'scanLine 20s linear infinite'
            }}
          />
          
          {/* Financial Data Nodes - Representing market data points */}
          <div className="absolute inset-0 opacity-[0.006]">
            <svg width="100%" height="100%" className="absolute inset-0">
              <defs>
                <pattern id="financial-nodes" x="0" y="0" width="300" height="300" patternUnits="userSpaceOnUse">
                  {/* Market data points */}
                  <g>
                    <circle cx="75" cy="75" r="1.5" fill="#FFD700" opacity="0.4">
                      <animate attributeName="r" values="1;2.5;1" dur="3s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="225" cy="75" r="1" fill="#FFD700" opacity="0.3">
                      <animate attributeName="r" values="0.5;2;0.5" dur="4s" repeatCount="indefinite" begin="1s" />
                      <animate attributeName="opacity" values="0.1;0.5;0.1" dur="4s" repeatCount="indefinite" begin="1s" />
                    </circle>
                    <circle cx="150" cy="225" r="2" fill="#FFD700" opacity="0.5">
                      <animate attributeName="r" values="1;3;1" dur="5s" repeatCount="indefinite" begin="2s" />
                      <animate attributeName="opacity" values="0.2;0.7;0.2" dur="5s" repeatCount="indefinite" begin="2s" />
                    </circle>
                    <circle cx="75" cy="225" r="1.2" fill="#FFD700" opacity="0.35">
                      <animate attributeName="r" values="0.8;2.2;0.8" dur="3.5s" repeatCount="indefinite" begin="0.5s" />
                      <animate attributeName="opacity" values="0.15;0.55;0.15" dur="3.5s" repeatCount="indefinite" begin="0.5s" />
                    </circle>
                    <circle cx="225" cy="225" r="1.8" fill="#FFD700" opacity="0.45">
                      <animate attributeName="r" values="1.2;2.8;1.2" dur="4.5s" repeatCount="indefinite" begin="1.5s" />
                      <animate attributeName="opacity" values="0.2;0.65;0.2" dur="4.5s" repeatCount="indefinite" begin="1.5s" />
                    </circle>
                  </g>
                  
                  {/* Data connection lines - representing financial relationships */}
                  <g stroke="#FFD700" strokeWidth="0.3" fill="none">
                    <path d="M75,75 Q150,50 225,75" opacity="0.2">
                      <animate attributeName="stroke-dasharray" values="0,100;50,50;100,0;0,100" dur="6s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.1;0.3;0.1" dur="6s" repeatCount="indefinite" />
                    </path>
                    <path d="M225,75 Q200,150 225,225" opacity="0.15">
                      <animate attributeName="stroke-dasharray" values="0,80;40,40;80,0;0,80" dur="7s" repeatCount="indefinite" begin="1s" />
                      <animate attributeName="opacity" values="0.05;0.25;0.05" dur="7s" repeatCount="indefinite" begin="1s" />
                    </path>
                    <path d="M225,225 Q150,250 75,225" opacity="0.18">
                      <animate attributeName="stroke-dasharray" values="0,90;45,45;90,0;0,90" dur="5.5s" repeatCount="indefinite" begin="2s" />
                      <animate attributeName="opacity" values="0.08;0.28;0.08" dur="5.5s" repeatCount="indefinite" begin="2s" />
                    </path>
                    <path d="M75,225 Q50,150 75,75" opacity="0.16">
                      <animate attributeName="stroke-dasharray" values="0,85;42,43;85,0;0,85" dur="6.5s" repeatCount="indefinite" begin="0.5s" />
                      <animate attributeName="opacity" values="0.06;0.26;0.06" dur="6.5s" repeatCount="indefinite" begin="0.5s" />
                    </path>
                    <path d="M75,75 L150,225" opacity="0.12">
                      <animate attributeName="stroke-dasharray" values="0,70;35,35;70,0;0,70" dur="8s" repeatCount="indefinite" begin="1.5s" />
                      <animate attributeName="opacity" values="0.04;0.2;0.04" dur="8s" repeatCount="indefinite" begin="1.5s" />
                    </path>
                    <path d="M225,75 L75,225" opacity="0.14">
                      <animate attributeName="stroke-dasharray" values="0,75;37,38;75,0;0,75" dur="7.5s" repeatCount="indefinite" begin="2.5s" />
                      <animate attributeName="opacity" values="0.05;0.22;0.05" dur="7.5s" repeatCount="indefinite" begin="2.5s" />
                    </path>
                  </g>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#financial-nodes)" />
            </svg>
          </div>
          
          {/* Circuit Board Traces - AI processing pathways */}
          <div 
            className="absolute inset-0 opacity-[0.004]"
            style={{
              backgroundImage: `
                linear-gradient(45deg, transparent 48%, rgba(255, 215, 0, 0.1) 49%, rgba(255, 215, 0, 0.1) 51%, transparent 52%),
                linear-gradient(-45deg, transparent 48%, rgba(255, 215, 0, 0.08) 49%, rgba(255, 215, 0, 0.08) 51%, transparent 52%),
                linear-gradient(0deg, transparent 49%, rgba(255, 215, 0, 0.06) 50%, transparent 51%)
              `,
              backgroundSize: '400px 400px, 350px 350px, 250px 250px',
              animation: 'circuitFlow 25s linear infinite, circuitPulse 8s ease-in-out infinite alternate'
            }}
          />
          
          {/* AI Processing Nodes - Representing machine learning activity */}
          <div 
            className="absolute inset-0 opacity-[0.007]"
            style={{
              backgroundImage: `
                radial-gradient(circle at 15% 15%, rgba(255, 215, 0, 0.15) 1px, transparent 2px),
                radial-gradient(circle at 35% 85%, rgba(255, 215, 0, 0.12) 1px, transparent 2px),
                radial-gradient(circle at 85% 35%, rgba(255, 215, 0, 0.18) 1px, transparent 2px),
                radial-gradient(circle at 65% 65%, rgba(255, 215, 0, 0.10) 1px, transparent 2px),
                radial-gradient(circle at 85% 85%, rgba(255, 215, 0, 0.14) 1px, transparent 2px)
              `,
              backgroundSize: '180px 180px, 220px 220px, 160px 160px, 200px 200px, 140px 140px',
              animation: 'aiProcessing 15s ease-in-out infinite alternate'
            }}
          />
        </div>
        
        {/* CSS-only floating particles for added "life" */}
        <div className="floating-particles" />
        
        {/* Financial data visualization particles */}
        <div className="financial-particles" />
        
        {children}
      </body>
    </html>
  );
}
