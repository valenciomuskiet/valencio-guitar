"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Home() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, 120]);

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden">

      {/* === Background Image === */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/valencio-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(65%) contrast(1.05)",
          y,
        }}
      />

      {/* === Gradient Overlay === */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

      {/* === Hero Content === */}
      <section className="relative z-10 px-6 w-full flex flex-col items-center justify-center">
        <motion.h1
          className="text-[3.2rem] sm:text-[5rem] md:text-[6.5rem] lg:text-[7.5rem] font-extrabold tracking-[0.05em] leading-[1.05] mb-3 sm:mb-5 uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          VALENCIO SAEZ
        </motion.h1>

        <motion.p
          className="text-base sm:text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          Fingerstyle Guitar
        </motion.p>

        {/* === Main Buttons === */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.4, ease: "easeOut" }}
        >
          {/* Guitar Tabs */}
          <a
            href="/tabs"
            className="w-full sm:w-auto bg-white text-black font-semibold px-8 py-4 rounded-xl text-lg hover:bg-gray-200 transition-all duration-300 hover:scale-105"
          >
            Guitar Tabs
          </a>

          {/* Latest Work (YouTube Short) */}
          <a
            href="https://www.youtube.com/shorts/oZHkuWwTXoQ"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto border border-white text-white font-semibold px-8 py-4 rounded-xl text-lg hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
          >
            Latest Work
          </a>
        </motion.div>

        {/* === Social Icons === */}
        <motion.div
          className="flex gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
        >
          <a
            href="https://youtube.com/@ValencioGuitar"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full border border-white/70 hover:bg-white hover:text-black transition-all duration-300 hover:scale-110"
            title="YouTube"
          >
            <FaYoutube className="w-7 h-7" />
          </a>

          <a
            href="https://instagram.com/valencio.saez"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full border border-white/70 hover:bg-white hover:text-black transition-all duration-300 hover:scale-110"
            title="Instagram"
          >
            <FaInstagram className="w-7 h-7" />
          </a>

          <a
            href="https://www.tiktok.com/@valencio.saez"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full border border-white/70 hover:bg-white hover:text-black transition-all duration-300 hover:scale-110"
            title="TikTok"
          >
            <FaTiktok className="w-7 h-7" />
          </a>
        </motion.div>
      </section>

      {/* === Scroll Indicator === */}
      <p className="absolute bottom-6 text-gray-400 text-sm tracking-wide">
      </p>
    </main>
  );
}
