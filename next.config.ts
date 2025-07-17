import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable optimizations
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'devfolio.notion.site',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Enable compression
  compress: true,
  reactStrictMode: true,
  // Disable developer features in production
  productionBrowserSourceMaps: false,
};

export default nextConfig;
