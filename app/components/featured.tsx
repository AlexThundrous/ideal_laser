"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Card } from "@/ui/card";
import { Button } from "@/ui/button";
import ScrollFloat from "./ui/ScrollFloat";

const products = [
  { id: 1, name: "Table Top Laser Marking Machine", image: "/table_top.png", desc: "Versatile Solution" },
  { id: 2, name: "60W Fiber Laser Marking Machine", image: "/60W_Laser_machne.png", desc: "Compact & Efficient" },
  { id: 3, name: "UV Laser Marking Machine", image: "/UV_Laser_machine.png", desc: "UV Marking Precision" },
  { id: 4, name: "Laser Welding Machine", image: "/Laser_Welding.jpeg", desc: "Precision Welding" },
];
export default function Featured() {
  const { scrollY } = useScroll();
  const titleY = useTransform(scrollY, [600, 1000], [150, 0]);
  return (
    <section className="py-8 md:py-20 bg-gray-50 px-4 md:px-6">
      <ScrollFloat
        containerClassName="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-10"
        animationDuration={1}
        ease='back.inOut(2)'
        scrollStart='center bottom+=50%'
        scrollEnd='bottom bottom-=40%'
        stagger={0.03}
      >
        Featured Machines
      </ScrollFloat>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 md:gap-6 max-w-7xl mx-auto">
        {products.map((product, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <Card className="overflow-hidden hover:shadow-lg transition-shadow p-0 h-64 sm:h-80 md:h-130">
              <div className="flex flex-col h-full w-full">
                {/* Image - 65% */}
                <div className="h-3/5 relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Info - 35% */}
                <div className="h-2/5 p-2 md:p-6 flex flex-col justify-between bg-white">
                  <div>
                    <h3 className="font-semibold text-base md:text-lg mb-2">{product.name}</h3>
                    <p className="text-gray-500 text-xs md:text-sm">
                      {product.desc}
                    </p>
                  </div>
                  <Button className="w-full flex items-center justify-center gap-2">
                    <Link href={`/products/${product.id}`} className="flex items-center justify-center gap-2 w-full">
                      View More Details
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}