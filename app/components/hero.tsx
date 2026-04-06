"use client";

import { useRouter } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/ui/button";
import { ChevronDown } from "lucide-react";
import GradientText from "@/ui/GradientText";
import BorderGlow from "@/ui/BorderGlow";
import Grainient from "@/ui/Grainient";

export default function Hero() {
  const router = useRouter();
  const { scrollY } = useScroll();
  const blob1Y = useTransform(scrollY, [0, 300], [0, 50]);
  const blob2Y = useTransform(scrollY, [0, 300], [0, -50]);

  const handleKnowMoreClick = () => {
    const productsSection = document.querySelector('section:nth-of-type(2)');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewMachinesClick = () => {
    router.push('/products');
  };
  return (
    <>
      <section className="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden bg-black">
        {/* Animated gradient background */}
        <div className="absolute inset-0">
          <Grainient
            color1="#111827"
            color2="#5B21B6"
            color3="#F59E0B"
            timeSpeed={1.8}
            colorBalance={0}
            warpStrength={0.8}
            warpFrequency={4}
            warpSpeed={2.5}
            warpAmplitude={60}
            blendAngle={0}
            blendSoftness={0.15}
            rotationAmount={600}
            noiseScale={2.5}
            grainAmount={0.12}
            grainScale={2}
            grainAnimated={false}
            contrast={1.4}
            gamma={1}
            saturation={1.4}
            centerX={0}
            centerY={0}
            zoom={0.9}
          />
        </div>
        
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/30" style={{ mixBlendMode: 'multiply' }} />
        
        {/* Subtle noise texture for premium feel */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="noise"/%3E%3C/filter%3E%3Crect width="400" height="400" fill="%23000" filter="url(%23noise)" opacity="0.025"/%3E%3C/svg%3E")',
          backgroundSize: '200px 200px',
          pointerEvents: 'none'
        }} />
        
        {/* Animated background shapes with parallax */}
        <motion.div
          style={{ y: blob1Y }}
          className="absolute top-20 left-10 w-96 h-96 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-45"
          animate={{
            x: [0, 60, 0],
            y: [0, 100, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          style={{ y: blob2Y }}
          className="absolute -bottom-8 right-10 w-96 h-96 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-45"
          animate={{
            x: [0, -60, 0],
            y: [0, -100, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          <div className="px-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <GradientText
                colors={["#fcd34d","#3b82f6","#a855f7"]}
                animationSpeed={4}
                showBorder={false}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 font-heading tracking-tight drop-shadow-lg"
              >
                Complete Industrial Laser Solutions
              </GradientText>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1.2 }}
            className="text-sm md:text-lg lg:text-xl text-gray-300 mb-8 md:mb-16 max-w-2xl mx-auto leading-relaxed"
          >
            Advanced Laser Solutions for Professional Marking, Cutting & Welding
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center"
          >
            <motion.button 
              onClick={handleKnowMoreClick}
              className="text-md md:text-lg font-semibold px-4 md:px-8 py-2 md:py-3 flex items-center justify-center gap-2 cursor-pointer rounded-lg text-white active:scale-95 transition-all border border-white/30 hover:border-white/50"
              style={{
                background: 'rgb(255,255,255)',
                backdropFilter: 'blur(10px)',
                color: '#000000'
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Know More
              <motion.div
                animate={{ y: [0, 2, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ChevronDown size={24} className="text-black" />
              </motion.div>
            </motion.button>
              <BorderGlow
                edgeSensitivity={15}
                glowColor="80 120 80"
                backgroundColor="transparent"
                borderRadius={8}
                glowRadius={5}
                glowIntensity={5}
                coneSpread={30}
                animated={false}
                colors={['#0066ff', '#003399', '#660066']}
              >
                <div className="overflow-hidden! rounded-lg">
                <motion.button
                  onClick={handleViewMachinesClick}
                  className="text-sm md:text-lg px-4 md:px-8 py-2 md:py-3 font-semibold rounded-lg cursor-pointer active:scale-95 transition-all w-full text-white border border-white/15 hover:border-white/30"
                  style={{
                    background: 'rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(10px)'
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Machines
                </motion.button>
                </div>
              </BorderGlow>
          </motion.div>
        </div>
      </section>
    </>
  );
}