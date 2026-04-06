"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "@/ui/button";
import ScrollFloat from "./ui/ScrollFloat";

export default function CTA() {
  return (
    <section className="py-12 md:py-20 text-center bg-black text-white">
      <ScrollFloat 
        containerClassName="!text-sm md:!text-3xl font-bold mb-4 md:mb-6"
        animationDuration={2.5}
        ease='back.inOut(2)'
        scrollStart='center bottom+=50%'
        scrollEnd='bottom bottom-=40%'
        stagger={0.05}
      >
        Ready to Upgrade Your Production?
      </ScrollFloat>

      <Button size="lg">Contact Us</Button>
    </section>
  );
}