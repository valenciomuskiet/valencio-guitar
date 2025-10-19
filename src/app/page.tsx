"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full flex flex-col justify-center items-center bg-black text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/valencio-hero.jpg')",
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-900/40 via-black/70 to-black/90"></div>

      {/* Hero content */}
      <section className="relative z-10 flex flex-col items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-extrabold tracking-tight mb-4"
        >
          VALENCIO SAEZ
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl"
        >
          Unlock Fingerstyle Guitar Across All Music
        </motion.p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="https://www.youtube.com/@ValencioGuitar"
            target="_blank"
            className="border border-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-white hover:text-black transition"
          >
            Watch Video
          </a>
          <a
            href="/tabs"
            className="bg-white text-black px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-200 transition"
          >
            Guitar Tabs
          </a>
        </div>
      </section>

      {/* Scroll cue */}
      <div className="absolute bottom-10 text-gray-400 animate-bounce text-sm tracking-wider">
        ↓ SCROLL
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 text-gray-500 text-sm">
        © {new Date().getFullYear()} Valencio Saez — All rights reserved.
      </footer>
    </main>
  );
}
