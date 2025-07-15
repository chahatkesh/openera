import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable optimizations
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  // Optimize bundle size
  optimizeFonts: true,
  // Enable compression
  compress: true,
  // Improve build performance
  swcMinify: true,
  reactStrictMode: true,
  // Disable developer features in production
  productionBrowserSourceMaps: false,
};

export default nextConfig;
