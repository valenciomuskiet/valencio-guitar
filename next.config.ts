import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typedRoutes: true,

  // Disable lightningcss completely on Vercel
  compiler: {
    // @ts-ignore – undocumented flag
    lightningcss: false,
  },

  experimental: {
    optimizeCss: false, // fall back to PostCSS
  },
};

export default nextConfig;
