"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Button } from "@/ui/button";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const TAGS = ["cutting", "welding", "marking"];

const PRODUCTS = [
    {
    id: 1,
    name: "Table Top Laser Marking Machine",
    image: "/table_top.png",
    tags: ["marking"],
    description: "Versatile Solution - Compact and efficient marking system",
  },
  {
    id: 2,
    name: "60W Fiber Laser Marking Machine",
    image: "/60W_Laser_machne.png",
    tags: ["marking"],
    description: "Compact & Efficient - High precision marking machine for industrial applications",
  },
  {
    id: 3,
    name: "UV Laser Marking Machine",
    image: "/UV_Laser_machine.png",
    tags: ["marking"],
    description: "UV Marking Precision - High precision UV laser marking for plastics and organics",
  },
  {
    id: 4,
    name: "Laser Welding Machine",
    image: "/laser_welding.png",
    tags: ["welding"],
    description: "Precision Welding - Advanced welding solution for modern industry",
  },
  {
    id: 5,
    name: "Fiber Metal Laser Cutting Machine",
    image: "/laser_cuting.png",
    tags: ["cutting"],
    description: "High-Speed Cutting - Professional grade cutting machine",
  },
];

export default function ProductsPage() {
  const [activeTags, setActiveTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    setActiveTags((prev) =>
      prev.includes(tag)
        ? prev.filter((t) => t !== tag)
        : [...prev, tag]
    );
  };

  const filtered =
    activeTags.length === 0
      ? PRODUCTS
      : PRODUCTS.filter((p) =>
          activeTags.some((tag) => p.tags.includes(tag))
        );

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-linear-to-br from-slate-50 via-slate-100 to-slate-50 px-6 py-20 pt-32">
        <div className="max-w-7xl mx-auto">

      {/* HEADER */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4"
      >
        <h1 className="text-4xl font-heading tracking-tight text-slate-900 font-semibold">Products</h1>

        <div className="flex gap-3">
          {TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`px-4 py-2 rounded-full border transition ${
                activeTags.includes(tag)
                  ? "bg-slate-900 text-white border-slate-900"
                  : "border-slate-300 text-slate-600 hover:border-slate-400 hover:text-slate-900"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </motion.div>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-5">
        {filtered.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="rounded-xl overflow-hidden border border-slate-200 bg-white cursor-pointer group shadow-sm hover:shadow-lg transition-shadow"
            >
            {/* IMAGE */}
            <div className="overflow-hidden relative h-56 bg-slate-50">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            {/* CONTENT */}
            <div className="p-5">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {product.name}
              </h3>

              <p className="text-slate-600 text-sm mb-4">
                {product.description}
              </p>

              <div className="flex items-center gap-2 text-slate-900 font-semibold group-hover:text-blue-600 transition">
                Know More
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
            </motion.div>
          </Link>
        ))}
      </div>


        </div>
      </main>
      <Footer />
    </>
  );
}