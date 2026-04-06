"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import ScrollFloat from "./ui/ScrollFloat";

const categoryImages = [
  { name: "Marking", image: "/table_top.png", desc: "Professional marking systems", id: "marking" },
  { name: "Cutting", image: "/laser_cuting.png", desc: "Precision laser and water jet cutting solutions", id: "cutting" },
  { name: "Welding", image: "/laser_welding.png", desc: "Advanced welding technology", id: "welding" },
];

export default function Categories() {
  const router = useRouter();

  const handleKnowMore = (serviceId: string) => {
    router.push(`/services?service=${serviceId}`);
  };

  return (
    <section className="py-20 md:py-32 px-6 bg-linear-to-b from-[#111827] to-[#1f2937] relative overflow-hidden">
      {/* Grain texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' seed='1'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
      }} />
      
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/2 left-0 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 md:mb-24">
          <ScrollFloat 
            containerClassName="text-white text-3xl md:text-5xl font-bold text-center tracking-tight"
            animationDuration={1.5}
            ease='back.inOut(2)'
            scrollStart='center bottom+=50%'
            scrollEnd='bottom bottom-=40%'
            stagger={0.05}
          >
            Precision Solutions for Every Industry
          </ScrollFloat>
          <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            Advanced laser technology engineered for precision, reliability, and maximum efficiency
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {categoryImages.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group h-80 md:h-96 cursor-pointer"
            >
             
                <div className="relative w-full h-full rounded-2xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.4)] transition-all duration-500 hover:border-white/20 hover:-translate-y-2 hover:scale-[1.01]">
                  {/* Image Container */}
                  <div className="relative w-full h-full overflow-hidden">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      className="object-cover brightness-90 contrast-105 opacity-95 group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-100 group-hover:opacity-80 transition-opacity duration-500" />
                  </div>

                  {/* Content Container */}
                  <div className="absolute bottom-0 w-full bg-linear-to-t from-black/80 via-black/40 to-transparent p-5 md:p-6 flex flex-col justify-end h-40">
                    <div className="w-full">
                      <h3 className="text-xl md:text-2xl font-semibold mb-1 text-white">
                        {cat.name}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-300 opacity-90 mb-3">
                        {cat.desc}
                      </p>
                      <motion.button
                        onClick={() => handleKnowMore(cat.id)}
                        className="inline-flex items-center gap-1 text-sm font-medium text-blue-400 group-hover:text-blue-300 group-hover:underline transition-all duration-300 bg-none border-none cursor-pointer p-0"
                        whileHover={{ x: 4 }}
                      >
                        <span>Know More</span>
                        <motion.div
                          whileHover={{ x: 2 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <ChevronRight className="w-4 h-4" />
                        </motion.div>
                      </motion.button>
                    </div>
                  </div>
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}