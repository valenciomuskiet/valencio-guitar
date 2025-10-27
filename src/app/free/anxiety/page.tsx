"use client";

import Link from "next/link";

export default function FreeAnxietyPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-start pt-28 pb-16 px-6">
      <div className="w-full max-w-3xl bg-zinc-900 p-6 rounded-lg shadow-lg">
        <iframe
          src="/free/anxiety/anxiety.pdf"
          className="w-full h-[65vh] rounded-md"
        ></iframe>

        {/* Buttons under PDF */}
        <div className="flex justify-center gap-4 mt-8">
          <Link
            href="/tabs"
            className="px-6 py-3 border border-white/40 rounded-md hover:bg-white hover:text-black transition text-sm font-medium"
          >
            ← Back to Tabs & Bundles
          </Link>

          <a
            href="/free/anxiety/anxiety.pdf"
            download
            className="bg-white text-black font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition"
          >
            ⬇️ Download PDF
          </a>
        </div>
      </div>
    </main>
  );
}
