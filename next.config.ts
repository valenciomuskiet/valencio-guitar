// next.config.ts
import type { NextConfig } from "next";

// Use type casting to safely extend config options
const nextConfig = {
  compiler: {
    // Disable LightningCSS to fix Vercel build errors
    lightningcss: false,
  },
  experimental: {
    typedRoutes: true,
  },
  reactStrictMode: true,
} satisfies NextConfig;

// Export as default
export default nextConfig;
