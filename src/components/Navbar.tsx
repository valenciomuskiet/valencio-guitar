"use client";

import { useState } from "react";
import { Menu, X, Youtube, Instagram,  } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-md text-white">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold tracking-widest">
          VALENCIO
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-wide">
          <a href="/" className="hover:text-gray-300 transition">
            Home
          </a>
          <a href="/about" className="hover:text-gray-300 transition">
            About
          </a>
          <a href="/tabs" className="hover:text-gray-300 transition">
            Tabs
          </a>
          <a href="/contact" className="hover:text-gray-300 transition">
            Contact
          </a>

          {/* Social Icons */}
          <div className="flex items-center space-x-4 ml-4">
            <a
              href="https://www.youtube.com/@ValencioGuitar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition"
            >
              <Youtube size={20} />
            </a>
            <a
              href="https://www.instagram.com/valencio.guitar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://open.spotify.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition"
            >
              
            </a>
          </div>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 border-t border-gray-800 flex flex-col items-center space-y-4 py-6 text-lg">
          <a href="/" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="/about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="/tabs" onClick={() => setMenuOpen(false)}>
            Tabs
          </a>
          <a href="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
          <div className="flex space-x-4 pt-4">
            <a
              href="https://www.youtube.com/@ValencioGuitar"
              target="_blank"
              className="hover:text-red-500"
            >
              <Youtube size={22} />
            </a>
            <a
              href="https://www.instagram.com/valencio.guitar"
              target="_blank"
              className="hover:text-pink-500"
            >
              <Instagram size={22} />
            </a>
            <a
              href="https://open.spotify.com/"
              target="_blank"
              className="hover:text-green-500"
            >
              
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
