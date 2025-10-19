"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home } from "lucide-react";

import Link from "next/link";
import type { Route } from "next";


interface NavLink {
  name: string;
  href: Route;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Typed route-safe hrefs
  const links: NavLink[] = [
    { name: "About", href: "/about" as Route },
    { name: "Contact", href: "/contact" as Route },
    { name: "Updates", href: "/updates" as Route },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">
        {/* === Home Button === */}
        <Link
          href={"/" as Route}
          aria-label="Home"
          className="p-3 rounded-md border border-transparent hover:border-white hover:bg-white hover:text-black transition-all duration-300"
        >
          <Home size={28} />
        </Link>

        {/* === Desktop Links === */}
        <div className="hidden lg:flex gap-10 text-white text-lg font-medium uppercase tracking-wide">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:bg-white hover:text-black px-5 py-2 rounded-md transition-all duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* === Animated Burger / Close Button (Mobile Only) === */}
        <div className="lg:hidden">
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="relative text-white p-3 rounded-md border border-transparent hover:border-white hover:bg-white hover:text-black transition-all duration-300"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <X size={28} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <Menu size={28} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* === Mobile Menu === */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-black/95 text-center py-10 border-t border-white/10 lg:hidden"
          >
            <div className="flex flex-col items-center gap-8 text-xl font-medium uppercase tracking-wide">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-white hover:text-black px-6 py-3 rounded-md transition-all duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <motion.div
              className="my-8 h-px w-2/3 bg-white/10 mx-auto"
              initial={{ opacity: 0, width: "0%" }}
              animate={{ opacity: 1, width: "66%" }}
              exit={{ opacity: 0, width: "0%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
