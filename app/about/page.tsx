"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ScrollFloat from "@/components/ui/ScrollFloat";
import { CheckCircle } from "lucide-react";

export default function AboutPage() {
  const services = [
    "Fiber Laser Marking Services (since 2005)",
    "CNC Laser Cutting Services for Metal",
    "Industrial Laser Welding Services",
    "Fiber Laser Marking Machine Sales",
    "Laser Cutting Machine Sales",
    "Laser Welding Machine Sales",
    "Machine Installation & Technical Support"
  ];

  const advantages = [
    "20+ years of experience in laser marking",
    "High precision laser marking and cutting solutions",
    "Affordable laser machine price in India",
    "Fast turnaround time and reliable service",
    "Strong after-sales support and training"
  ];

  return (
    <main className="bg-white text-black">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 md:pt-32 pb-16 md:pb-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            About Ideal Laser
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-600 max-w-3xl mx-auto"
          >
            A leading provider of laser marking, cutting, and welding services with over 20 years of experience
          </motion.p>
        </div>
      </section>

      {/* About Content Section */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 bg-slate-100 p-8 md:p-12 rounded-lg"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Who We Are</h2>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                Ideal Laser is a leading provider of laser marking services, laser cutting services, and laser welding services in India, with over 20 years of experience since 2005. We specialize in high-precision fiber laser marking, metal laser cutting, and industrial laser welding solutions for a wide range of industries.
              </p>
              <p>
                We also deal in the sale of advanced laser machines, including fiber laser marking machines, laser cutting machines, and laser welding machines. Our machines are known for high performance, durability, and cost efficiency, helping businesses improve productivity and accuracy.
              </p>
              <p>
                At Ideal Laser, we focus on delivering complete laser solutions, including job work services, machine supply, installation, training, and after-sales support. Our commitment to quality, timely delivery, and customer satisfaction has made us a trusted name in the laser industry.
              </p>
            </div>
          </motion.div>

          {/* Services Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 py-12 border-t border-b border-slate-200"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="rounded-lg overflow-hidden shadow-lg h-full relative"
              >
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                >
                  <source src="/laser_marking.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black/25 rounded-lg pointer-events-none" />
              </motion.div>
              <div className="grid grid-cols-1 gap-4 justify-items-start">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 w-full"
                  >
                    <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700">{service}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Why Choose Us Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Why Choose Ideal Laser</h2>
            <div className="space-y-3">
              {advantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg"
                >
                  <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">{advantage}</span>
                </motion.div>
              ))}
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-8 text-lg text-slate-700 italic font-semibold"
            >
              We aim to provide the best laser marking, cutting, and welding solutions in India with advanced technology and trusted service.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
