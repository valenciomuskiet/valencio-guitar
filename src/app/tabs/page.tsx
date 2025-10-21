"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// Define the tab type
type Tab = {
  id: number;
  title: string;
  price: string;
  oldPrice: string;
  image: string;
  videoId: string;
  kofiUrl: string;
};

const tabs: Tab[] = [
  {
    id: 1,
    title: "Messy - Lola Young",
    price: "€2.60",
    oldPrice: "€4,00",
    image: "/tabs/tab1.jpg",
    videoId: "lB5ptkpGdWc", // Replace with your YouTube video ID
    kofiUrl: "https://www.mymusicfive.com/valenciosaez/324313",
  },
];

export default function TabsPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center py-24 px-6">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold mb-12 font-heading uppercase"
      >
        Tabs & Bundles
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full">
        {tabs.map((tab) => (
          <TabCard key={tab.id} tab={tab} />
        ))}
      </div>
    </main>
  );
}

// === Tab Card Component ===
function TabCard({ tab }: { tab: Tab }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: tab.id * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative bg-zinc-900 p-5 rounded-xl shadow-lg text-center overflow-hidden hover:scale-105 transition-transform duration-300"
    >
      {/* === YouTube Preview / Video === */}
      <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
        <iframe
          className="w-full h-full rounded-lg"
          src={`https://www.youtube-nocookie.com/embed/${tab.videoId}?autoplay=${
            isHovered ? 1 : 0
          }&mute=1&controls=0&loop=1&playlist=${tab.videoId}&playsinline=1`}
          title={`${tab.title} demo`}
          loading="lazy"
          allow="autoplay; encrypted-media; picture-in-picture"
          style={{
            backgroundImage: `url(https://img.youtube.com/vi/${tab.videoId}/hqdefault.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      {/* === Info Section === */}
      <h3 className="text-2xl font-bold mb-1">{tab.title}</h3>
      <div className="flex justify-center items-center gap-2 mb-3">
        <p className="text-gray-500 line-through">{tab.oldPrice}</p>
        <p className="text-lg font-semibold text-white">{tab.price}</p>
      </div>

      {/* === Buy Button === */}
      <motion.a
        href={tab.kofiUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-white text-black px-6 py-3 rounded-md font-medium"
        whileHover={{
          scale: 1.15,
          rotate: [0, 10, -10, 0],
          backgroundColor: "#000",
          color: "#fff",
        }}
        whileTap={{ scale: 0.95, rotate: 0 }}
        transition={{ type: "tween", duration: 0.2 }}
      >
        Buy Here
      </motion.a>
    </motion.div>
  );
}
