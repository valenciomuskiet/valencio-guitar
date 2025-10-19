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
    videoId: "lB5ptkpGdWc",
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

// TabCard component with TypeScript props
function TabCard({ tab }: { tab: Tab }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: tab.id * 0.1 }}
      className="relative bg-zinc-900 p-5 rounded-xl shadow-lg text-center overflow-hidden hover:scale-105 transition-transform duration-300"
    >
      {/* Video Section */}
      <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden cursor-pointer">
        {!isPlaying ? (
          <>
            <img
              src={tab.image}
              alt={tab.title}
              className="w-full h-full object-cover rounded-lg"
              onClick={() => setIsPlaying(true)}
            />
            <div
              className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold bg-black bg-opacity-30 rounded-lg"
              onClick={() => setIsPlaying(true)}
            >
              ▶
            </div>
          </>
        ) : (
          <iframe
            className="w-full h-full rounded-lg"
            src={`https://www.youtube.com/embed/${tab.videoId}?autoplay=1&mute=0`}
            title={`${tab.title} demo`}
            allow="autoplay; encrypted-media"
          />
        )}
      </div>

      {/* Info */}
      <h3 className="text-2xl font-bold mb-1">{tab.title}</h3>
      <div className="flex justify-center items-center gap-2 mb-3">
        <p className="text-gray-500 line-through">{tab.oldPrice}</p>
        <p className="text-lg font-semibold text-white">{tab.price}</p>
      </div>

      {/* Animated Buy Button with wiggle using tween */}
      <motion.a
        href={tab.kofiUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-white text-black px-6 py-3 rounded-md font-medium"
        whileHover={{
          scale: 1.15,
          rotate: [0, 10, -10, 0], // wiggle/spin animation
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
