"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function UpcomingPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center text-center text-white bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />

      {/* Animated content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center px-6"
      >
        <h1 className="text-5xl md:text-7xl font-heading font-bold mb-4 uppercase tracking-wide">
          Coming Soon
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-md">
          This page is currently under construction.
        </p>

        {/* ✅ Fixed Link */}
        <Link
          href="/"
          className="mt-8 border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition duration-300"
        >
          Return Home
        </Link>
      </motion.div>
    </main>
  );
}
