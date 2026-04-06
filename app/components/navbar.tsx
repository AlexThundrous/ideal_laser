"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full backdrop-blur-lg bg-black/60 z-50 border-b border-white/15 shadow-lg"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-1 px-3 md:px-6">
        <Link href="/" className="w-28 md:w-44 h-12 md:h-16 cursor-pointer mr-8 md:mr-12">
          <Image
            src="/logo.svg"
            alt="Ideal Laser"
            width={224}
            height={100}
            className="w-full h-full object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex gap-4 md:gap-8 text-white/70">
          <Link href="/about" className="hover:text-white transition-colors duration-300 text-sm md:text-lg font-medium">About</Link>
          <Link href="/products" className="hover:text-white transition-colors duration-300 text-sm md:text-lg font-medium">Products</Link>
          <Link href="/services" className="hover:text-white transition-colors duration-300 text-sm md:text-lg font-medium">Services</Link>
          <Link href="/contact" className="hover:text-white transition-colors duration-300 text-sm md:text-lg font-medium">Contact</Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="sm:hidden text-white text-2xl focus:outline-none"
        >
          ☰
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto" },
          closed: { opacity: 0, height: 0 },
        }}
        transition={{ duration: 0.3 }}
        className="sm:hidden bg-black/40 backdrop-blur-sm border-t border-white/5 overflow-hidden"
      >
        <motion.div
          className="flex flex-col gap-4 text-white/70 px-3 py-4"
          variants={{
            open: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
            closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
          }}
        >
          {['Products', 'Services', 'About', 'Contact'].map((item) => (
            <motion.div
              key={item}
              variants={{
                open: { opacity: 1, x: 0 },
                closed: { opacity: 0, x: -10 },
              }}
            >
              <Link
                href={`/${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="hover:text-white transition-colors duration-300 text-sm font-medium"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.nav>
  );
}