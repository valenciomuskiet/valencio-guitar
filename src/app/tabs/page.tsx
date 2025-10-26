"use client";

type Tab = {
  id: number;
  title: string;
  price: string;
  oldPrice: string;
  videoId: string;
  kofiUrl: string;
};

const TABS: Tab[] = [
  {
    id: 1,
    title: "Messy - Lola Young",
    price: "€2.60",
    oldPrice: "€4,00",
    videoId: "lB5ptkpGdWc",
    kofiUrl: "https://www.mymusicfive.com/valenciosaez/324313",
  },

  {
    id: 2,
    title: "The Elder Scrolls IV: Oblivion Main Theme",
    price: "€2.60",
    oldPrice: "€4,00",
    videoId: "k5gyiUf_kNI",
    kofiUrl: "https://www.mymusicfive.com/valenciosaez/325376",
  },
  // ✅ just add more objects here
];

export default function TabsPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center py-24 px-6">
      <h1 className="text-5xl font-bold mb-12 uppercase">Tabs & Bundles</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full">
        {TABS.map((tab) => (
          <VideoCard key={tab.id} tab={tab} />
        ))}
      </div>
    </main>
  );
}

function VideoCard({ tab }: { tab: Tab }) {
  return (
    <div className="bg-zinc-900 p-5 rounded-xl shadow-lg text-center">
      <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
        <iframe
          className="w-full h-full rounded-lg"
          src={`https://www.youtube-nocookie.com/embed/${tab.videoId}?autoplay=0&mute=0&controls=1&playsinline=1`}
          title={`${tab.title} demo`}
          allow="autoplay; encrypted-media; picture-in-picture"
        ></iframe>
      </div>

      <h3 className="text-2xl font-bold mb-1">{tab.title}</h3>
      <div className="flex justify-center items-center gap-2 mb-3">
        <p className="text-gray-500 line-through">{tab.oldPrice}</p>
        <p className="text-lg font-semibold text-white">{tab.price}</p>
      </div>

      <a
        href={tab.kofiUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-white text-black px-6 py-3 rounded-md font-medium"
      >
        Buy Here
      </a>
    </div>
  );
}
