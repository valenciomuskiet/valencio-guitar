export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white px-6 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        🎸 Valencio Saez Guitar
      </h1>
      <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
        Fingerstyle guitarist sharing cinematic covers of popular songs and soundtracks.
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <a
          href="https://www.youtube.com/@ValencioGuitar"
          target="_blank"
          className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl text-lg font-semibold transition"
        >
          YouTube
        </a>
        <a
          href="https://www.instagram.com/valencio.guitar"
          target="_blank"
          className="bg-pink-500 hover:bg-pink-600 px-6 py-3 rounded-xl text-lg font-semibold transition"
        >
          Instagram
        </a>
        <a
          href="mailto:contact@valenciosaez.com"
          className="bg-gray-700 hover:bg-gray-800 px-6 py-3 rounded-xl text-lg font-semibold transition"
        >
          Contact
        </a>
      </div>

      <footer className="mt-12 text-gray-500 text-sm">
        © {new Date().getFullYear()} Valencio Saez — All rights reserved.
      </footer>
    </main>
  );
}
