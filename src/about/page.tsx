"use client";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/valencio-hero.jpg')",
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

      {/* Hero Content */}
      <section className="relative z-10 px-6">
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-4">
          VALENCIO SAEZ
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Unlock Fingerstyle Guitar Across All Music
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://youtube.com/@ValencioGuitar"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition"
          >
            Watch Video
          </a>
          <a
            href="/tabs"
            className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
          >
            Guitar Tabs
          </a>
        </div>
      </section>

      {/* Scroll indicator */}
      <p className="absolute bottom-6 text-gray-400 text-sm tracking-wide">
        ↓ SCROLL
      </p>
    </main>
  );
}
