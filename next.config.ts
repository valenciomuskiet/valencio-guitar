import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typedRoutes: true,

  // Completely disable LightningCSS (use PostCSS instead)
  experimental: {
    optimizeCss: false,
  },
};

export default nextConfig;
