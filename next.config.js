/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Keep appDir enabled if you're using the /app folder
    appDir: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  // 👇 This line fixes the Vercel build issue
  optimizeCss: false,
};

module.exports = nextConfig;
