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
            radial-gradient(ellipse at top left, rgba(16, 185, 129, 0.1) 0%, rgba(0, 0, 0, 1) 50%),
            radial-gradient(ellipse at bottom right, rgba(59, 130, 246, 0.08) 0%, rgba(0, 0, 0, 1) 50%),
            linear-gradient(135deg, #000814 0%, #001d3d 25%, #003566 50%, #001d3d 75%, #000814 100%)
          `
        }}
      >
        {/* AI + Finance Background System */}
        <div className="fixed inset-0 pointer-events-none z-0">
          
          {/* Financial Chart Grid */}
          <div 
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(16, 185, 129, 0.4) 1px, transparent 1px),
                linear-gradient(90deg, rgba(16, 185, 129, 0.4) 1px, transparent 1px),
                linear-gradient(rgba(255, 215, 0, 0.2) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 215, 0, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px, 60px 60px, 300px 300px, 300px 300px',
              animation: 'financialGrid 10s ease-in-out infinite alternate'
            }}
          />

          {/* Stock Market Chart Lines */}
          <div className="absolute inset-0 opacity-[0.06]">
            <svg width="100%" height="100%" className="absolute inset-0">
              <defs>
                <pattern id="stock-charts" x="0" y="0" width="200" height="150" patternUnits="userSpaceOnUse">
                  {/* Candlestick chart elements */}
                  <g fill="none" stroke="#10b981" strokeWidth="1" opacity="0.4">
                    <path d="M20,60 L20,90 M20,75 L30,75 L30,85 L20,85 Z">
                      <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite" />
                    </path>
                    <path d="M50,40 L50,80 M50,55 L60,55 L60,70 L50,70 Z" stroke="#ef4444">
                      <animate attributeName="opacity" values="0.3;0.7;0.3" dur="4s" repeatCount="indefinite" begin="1s" />
                    </path>
                    <path d="M80,50 L80,85 M80,65 L90,65 L90,75 L80,75 Z">
                      <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2.5s" repeatCount="indefinite" begin="0.5s" />
                    </path>
                    <path d="M110,45 L110,75 M110,55 L120,55 L120,65 L110,65 Z">
                      <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3.5s" repeatCount="indefinite" begin="2s" />
                    </path>
                    <path d="M140,35 L140,70 M140,50 L150,50 L150,60 L140,60 Z" stroke="#ef4444">
                      <animate attributeName="opacity" values="0.3;0.6;0.3" dur="4.5s" repeatCount="indefinite" begin="1.5s" />
                    </path>
                    <path d="M170,55 L170,90 M170,70 L180,70 L180,80 L170,80 Z">
                      <animate attributeName="opacity" values="0.4;0.7;0.4" dur="3s" repeatCount="indefinite" begin="2.5s" />
                    </path>
                  </g>
                  
                  {/* Trend lines */}
                  <path d="M20,75 Q60,55 120,60 T180,70" stroke="#FFD700" strokeWidth="1.5" fill="none" opacity="0.4">
                    <animate attributeName="stroke-dasharray" values="0,200;100,100;200,0;0,200" dur="8s" repeatCount="indefinite" />
                  </path>
                  <path d="M20,85 Q80,65 140,70 T180,75" stroke="#3b82f6" strokeWidth="1" fill="none" opacity="0.3">
                    <animate attributeName="stroke-dasharray" values="0,180;90,90;180,0;0,180" dur="10s" repeatCount="indefinite" begin="2s" />
                  </path>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#stock-charts)" />
            </svg>
          </div>

          {/* AI Neural Network Layer - Enhanced for Hackathon */}
          <div className="absolute inset-0 opacity-[0.18]">
            <svg width="100%" height="100%" className="absolute inset-0">
              <defs>
                <pattern id="ai-network" x="0" y="0" width="240" height="240" patternUnits="userSpaceOnUse">
                  {/* Core AI Processing Hub - Central brain */}
                  <circle cx="120" cy="120" r="8" fill="#FFD700" opacity="0.9">
                    <animate attributeName="r" values="6;12;6" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite" />
                  </circle>
                  
                  {/* Financial Data Input Nodes */}
                  <circle cx="60" cy="60" r="5" fill="#10b981" opacity="0.8">
                    <animate attributeName="r" values="3;7;3" dur="4s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.6;0.9;0.6" dur="4s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="180" cy="60" r="4" fill="#10b981" opacity="0.7">
                    <animate attributeName="r" values="2;6;2" dur="5s" repeatCount="indefinite" begin="1s" />
                    <animate attributeName="opacity" values="0.5;0.8;0.5" dur="5s" repeatCount="indefinite" begin="1s" />
                  </circle>
                  
                  {/* Market Analysis Nodes */}
                  <circle cx="60" cy="180" r="4.5" fill="#3b82f6" opacity="0.6">
                    <animate attributeName="r" values="2.5;6.5;2.5" dur="6s" repeatCount="indefinite" begin="2s" />
                    <animate attributeName="opacity" values="0.4;0.7;0.4" dur="6s" repeatCount="indefinite" begin="2s" />
                  </circle>
                  <circle cx="180" cy="180" r="4" fill="#3b82f6" opacity="0.75">
                    <animate attributeName="r" values="2;6;2" dur="4.5s" repeatCount="indefinite" begin="1.5s" />
                    <animate attributeName="opacity" values="0.55;0.85;0.55" dur="4.5s" repeatCount="indefinite" begin="1.5s" />
                  </circle>
                  
                  {/* Hidden Layer Nodes - Algorithm Processing */}
                  <circle cx="40" cy="120" r="3.5" fill="#ef4444" opacity="0.6">
                    <animate attributeName="r" values="2;5;2" dur="3.5s" repeatCount="indefinite" begin="0.7s" />
                    <animate attributeName="opacity" values="0.4;0.7;0.4" dur="3.5s" repeatCount="indefinite" begin="0.7s" />
                  </circle>
                  <circle cx="200" cy="120" r="3.5" fill="#ef4444" opacity="0.6">
                    <animate attributeName="r" values="2;5;2" dur="3.8s" repeatCount="indefinite" begin="1.2s" />
                    <animate attributeName="opacity" values="0.4;0.7;0.4" dur="3.8s" repeatCount="indefinite" begin="1.2s" />
                  </circle>
                  <circle cx="120" cy="40" r="3.5" fill="#8b5cf6" opacity="0.65">
                    <animate attributeName="r" values="2;5;2" dur="4.2s" repeatCount="indefinite" begin="0.3s" />
                    <animate attributeName="opacity" values="0.45;0.75;0.45" dur="4.2s" repeatCount="indefinite" begin="0.3s" />
                  </circle>
                  <circle cx="120" cy="200" r="3.5" fill="#8b5cf6" opacity="0.65">
                    <animate attributeName="r" values="2;5;2" dur="4.1s" repeatCount="indefinite" begin="1.8s" />
                    <animate attributeName="opacity" values="0.45;0.75;0.45" dur="4.1s" repeatCount="indefinite" begin="1.8s" />
                  </circle>
                  
                  {/* Data Input Connections - Financial feeds */}
                  <g stroke="#10b981" strokeWidth="1.5" fill="none" opacity="0.6">
                    <path d="M60,60 Q90,90 120,120">
                      <animate attributeName="stroke-dasharray" values="0,100;50,50;100,0;0,100" dur="5s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.3;0.8;0.3" dur="5s" repeatCount="indefinite" />
                    </path>
                    <path d="M180,60 Q150,90 120,120">
                      <animate attributeName="stroke-dasharray" values="0,100;50,50;100,0;0,100" dur="6s" repeatCount="indefinite" begin="1s" />
                      <animate attributeName="opacity" values="0.3;0.8;0.3" dur="6s" repeatCount="indefinite" begin="1s" />
                    </path>
                  </g>
                  
                  {/* Processing Connections - AI analysis */}
                  <g stroke="#3b82f6" strokeWidth="1.2" fill="none" opacity="0.5">
                    <path d="M120,120 Q150,150 180,180">
                      <animate attributeName="stroke-dasharray" values="0,90;45,45;90,0;0,90" dur="7s" repeatCount="indefinite" begin="2s" />
                      <animate attributeName="opacity" values="0.2;0.7;0.2" dur="7s" repeatCount="indefinite" begin="2s" />
                    </path>
                    <path d="M120,120 Q90,150 60,180">
                      <animate attributeName="stroke-dasharray" values="0,90;45,45;90,0;0,90" dur="5.5s" repeatCount="indefinite" begin="0.5s" />
                      <animate attributeName="opacity" values="0.2;0.7;0.2" dur="5.5s" repeatCount="indefinite" begin="0.5s" />
                    </path>
                  </g>
                  
                  {/* Hidden Layer Processing */}
                  <g stroke="#ef4444" strokeWidth="1" fill="none" opacity="0.4">
                    <path d="M40,120 Q80,120 120,120">
                      <animate attributeName="stroke-dasharray" values="0,80;40,40;80,0;0,80" dur="4s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.2;0.6;0.2" dur="4s" repeatCount="indefinite" />
                    </path>
                    <path d="M120,120 Q160,120 200,120">
                      <animate attributeName="stroke-dasharray" values="0,80;40,40;80,0;0,80" dur="4.5s" repeatCount="indefinite" begin="1s" />
                      <animate attributeName="opacity" values="0.2;0.6;0.2" dur="4.5s" repeatCount="indefinite" begin="1s" />
                    </path>
                    <path d="M120,40 Q120,80 120,120">
                      <animate attributeName="stroke-dasharray" values="0,80;40,40;80,0;0,80" dur="3.8s" repeatCount="indefinite" begin="0.3s" />
                      <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3.8s" repeatCount="indefinite" begin="0.3s" />
                    </path>
                    <path d="M120,120 Q120,160 120,200">
                      <animate attributeName="stroke-dasharray" values="0,80;40,40;80,0;0,80" dur="4.2s" repeatCount="indefinite" begin="1.8s" />
                      <animate attributeName="opacity" values="0.2;0.6;0.2" dur="4.2s" repeatCount="indefinite" begin="1.8s" />
                    </path>
                  </g>
                  
                  {/* Advanced Neural Pathways - Multi-layer connections */}
                  <g stroke="#8b5cf6" strokeWidth="0.8" fill="none" opacity="0.35">
                    <path d="M60,60 Q40,120 60,180">
                      <animate attributeName="stroke-dasharray" values="0,120;60,60;120,0;0,120" dur="8s" repeatCount="indefinite" begin="1.5s" />
                      <animate attributeName="opacity" values="0.15;0.5;0.15" dur="8s" repeatCount="indefinite" begin="1.5s" />
                    </path>
                    <path d="M180,60 Q200,120 180,180">
                      <animate attributeName="stroke-dasharray" values="0,120;60,60;120,0;0,120" dur="9s" repeatCount="indefinite" begin="2.5s" />
                      <animate attributeName="opacity" values="0.15;0.5;0.15" dur="9s" repeatCount="indefinite" begin="2.5s" />
                    </path>
                    <path d="M60,60 Q120,40 180,60">
                      <animate attributeName="stroke-dasharray" values="0,140;70,70;140,0;0,140" dur="7s" repeatCount="indefinite" begin="3s" />
                      <animate attributeName="opacity" values="0.15;0.5;0.15" dur="7s" repeatCount="indefinite" begin="3s" />
                    </path>
                    <path d="M60,180 Q120,200 180,180">
                      <animate attributeName="stroke-dasharray" values="0,140;70,70;140,0;0,140" dur="6.5s" repeatCount="indefinite" begin="1s" />
                      <animate attributeName="opacity" values="0.15;0.5;0.15" dur="6.5s" repeatCount="indefinite" begin="1s" />
                    </path>
                  </g>
                  
                  {/* Central Processing Core - Decision making */}
                  <g stroke="#FFD700" strokeWidth="2" fill="none" opacity="0.7">
                    <circle cx="120" cy="120" r="15" strokeDasharray="5,5">
                      <animate attributeName="stroke-dasharray" values="5,5;10,10;5,5" dur="4s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.5;0.9;0.5" dur="4s" repeatCount="indefinite" />
                      <animateTransform attributeName="transform" type="rotate" values="0 120 120;360 120 120" dur="20s" repeatCount="indefinite" />
                    </circle>
                  </g>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#ai-network)" />
            </svg>
          </div>

          {/* Financial Data Streams */}
          <div 
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 20%, rgba(16, 185, 129, 0.3) 2px, transparent 3px),
                radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.25) 1.5px, transparent 2.5px),
                radial-gradient(circle at 20% 80%, rgba(255, 215, 0, 0.3) 2px, transparent 3px),
                radial-gradient(circle at 80% 80%, rgba(239, 68, 68, 0.2) 1px, transparent 2px)
              `,
              backgroundSize: '150px 150px, 120px 120px, 180px 180px, 100px 100px',
              animation: 'dataStreams 12s ease-in-out infinite alternate'
            }}
          />

          {/* Market Scanning Lines */}
          <div 
            className="absolute inset-0 opacity-[0.06]"
            style={{
              background: `linear-gradient(
                0deg,
                transparent 0%,
                transparent 48%,
                rgba(16, 185, 129, 0.4) 50%,
                transparent 52%,
                transparent 100%
              )`,
              animation: 'marketScanVertical 20s linear infinite'
            }}
          />
          
          <div 
            className="absolute inset-0 opacity-[0.05]"
            style={{
              background: `linear-gradient(
                90deg,
                transparent 0%,
                transparent 48%,
                rgba(59, 130, 246, 0.3) 50%,
                transparent 52%,
                transparent 100%
              )`,
              animation: 'marketScanHorizontal 25s linear infinite'
            }}
          />

          {/* AI Processing Indicators */}
          <div 
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `
                linear-gradient(45deg, transparent 48%, rgba(59, 130, 246, 0.2) 49%, rgba(59, 130, 246, 0.2) 51%, transparent 52%),
                linear-gradient(-45deg, transparent 48%, rgba(16, 185, 129, 0.15) 49%, rgba(16, 185, 129, 0.15) 51%, transparent 52%),
                linear-gradient(0deg, transparent 49%, rgba(255, 215, 0, 0.1) 50%, transparent 51%)
              `,
              backgroundSize: '250px 250px, 200px 200px, 300px 300px',
              animation: 'aiProcessingLines 15s linear infinite'
            }}
          />

          {/* Financial Noise - Market volatility representation */}
          <div 
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `
                radial-gradient(circle at 1px 1px, rgba(16, 185, 129, 0.1) 1px, transparent 0),
                radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.08) 1px, transparent 0),
                radial-gradient(circle at 1px 2px, rgba(255, 215, 0, 0.06) 1px, transparent 0)
              `,
              backgroundSize: '30px 30px, 45px 45px, 60px 60px',
              animation: 'marketVolatility 6s ease-in-out infinite alternate'
            }}
          />

          {/* Cryptocurrency Mining Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: `
                repeating-linear-gradient(
                  30deg,
                  transparent,
                  transparent 3px,
                  rgba(16, 185, 129, 0.1) 3px,
                  rgba(16, 185, 129, 0.1) 6px
                ),
                repeating-linear-gradient(
                  -30deg,
                  transparent,
                  transparent 4px,
                  rgba(59, 130, 246, 0.08) 4px,
                  rgba(59, 130, 246, 0.08) 8px
                )
              `,
              animation: 'cryptoMining 18s linear infinite'
            }}
          />

          {/* Trading Algorithm Visualization - Reduced for focus */}
          <div className="absolute inset-0 opacity-[0.08]">
            <svg width="100%" height="100%" className="absolute inset-0">
              <defs>
                <pattern id="trading-algo" x="0" y="0" width="220" height="220" patternUnits="userSpaceOnUse">
                  {/* Algorithm decision nodes */}
                  <g>
                    <circle cx="55" cy="55" r="5" fill="#10b981" opacity="0.7">
                      <animate attributeName="r" values="3;7;3" dur="3s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.5;0.9;0.5" dur="3s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="165" cy="55" r="4" fill="#3b82f6" opacity="0.6">
                      <animate attributeName="r" values="2;6;2" dur="4s" repeatCount="indefinite" begin="1s" />
                      <animate attributeName="opacity" values="0.4;0.8;0.4" dur="4s" repeatCount="indefinite" begin="1s" />
                    </circle>
                    <circle cx="55" cy="165" r="4.5" fill="#FFD700" opacity="0.5">
                      <animate attributeName="r" values="2.5;6.5;2.5" dur="5s" repeatCount="indefinite" begin="2s" />
                      <animate attributeName="opacity" values="0.3;0.7;0.3" dur="5s" repeatCount="indefinite" begin="2s" />
                    </circle>
                    <circle cx="165" cy="165" r="4" fill="#ef4444" opacity="0.65">
                      <animate attributeName="r" values="2;6;2" dur="3.5s" repeatCount="indefinite" begin="1.5s" />
                      <animate attributeName="opacity" values="0.45;0.85;0.45" dur="3.5s" repeatCount="indefinite" begin="1.5s" />
                    </circle>
                    <circle cx="110" cy="110" r="6" fill="#FFD700" opacity="0.8">
                      <animate attributeName="r" values="4;8;4" dur="2.5s" repeatCount="indefinite" begin="0.5s" />
                      <animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite" begin="0.5s" />
                    </circle>
                  </g>
                  
                  {/* Trading signal pathways */}
                  <g stroke="#10b981" strokeWidth="1.2" fill="none" opacity="0.4">
                    <path d="M55,55 Q110,35 165,55">
                      <animate attributeName="stroke-dasharray" values="0,110;55,55;110,0;0,110" dur="6s" repeatCount="indefinite" />
                    </path>
                    <path d="M165,55 Q185,110 165,165">
                      <animate attributeName="stroke-dasharray" values="0,90;45,45;90,0;0,90" dur="7s" repeatCount="indefinite" begin="1s" />
                    </path>
                    <path d="M165,165 Q110,185 55,165">
                      <animate attributeName="stroke-dasharray" values="0,100;50,50;100,0;0,100" dur="5s" repeatCount="indefinite" begin="2s" />
                    </path>
                    <path d="M55,165 Q35,110 55,55">
                      <animate attributeName="stroke-dasharray" values="0,85;42,43;85,0;0,85" dur="8s" repeatCount="indefinite" begin="0.5s" />
                    </path>
                  </g>
                  
                  {/* Buy/Sell signal indicators */}
                  <g stroke="#3b82f6" strokeWidth="0.8" fill="none" opacity="0.3">
                    <path d="M55,55 L110,110 L165,165" stroke="#10b981">
                      <animate attributeName="stroke-dasharray" values="0,120;60,60;120,0;0,120" dur="9s" repeatCount="indefinite" begin="1.5s" />
                    </path>
                    <path d="M165,55 L110,110 L55,165" stroke="#ef4444">
                      <animate attributeName="stroke-dasharray" values="0,115;57,58;115,0;0,115" dur="8s" repeatCount="indefinite" begin="2.5s" />
                    </path>
                  </g>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#trading-algo)" />
            </svg>
          </div>
        </div>
        
        {/* Financial Data Particles */}
        <div className="fintech-particles" />
        
        {/* AI Processing Particles */}
        <div className="ai-particles" />
        
        {children}
      </body>
    </html>
  );
}
