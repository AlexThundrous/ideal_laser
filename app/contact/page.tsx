"use client";

import { motion } from "framer-motion";
import { Phone, MapPin } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function ContactPage() {
  return (
    <main className="bg-slate-900 text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-22 md:pt-26 pb-6 md:pb-8 px-6 bg-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-2"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-300 max-w-3xl mx-auto"
          >
            Get in touch with Ideal Laser for any inquiries or support
          </motion.p>
        </div>
      </section>

      {/* Contact Content Section */}
      <section className="py-16 md:py-24 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Director */}
                <div className="bg-slate-800 p-6 md:p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Managing Director
                  </h3>
                  <p className="text-lg text-slate-200 font-semibold">
                    Mr. Ranjan Sahoo
                  </p>
                </div>

                {/* WhatsApp */}
                <motion.a
                  href="https://wa.me/919811835868"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start gap-4 p-6 bg-slate-800 rounded-lg hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <Image
                    src="/whatsapp.svg"
                    alt="WhatsApp"
                    width={24}
                    height={24}
                    className="shrink-0 mt-1"
                  />
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      WhatsApp
                    </h4>
                    <p className="text-slate-300">+91-9811835868</p>
                  </div>
                </motion.a>

                {/* Phone */}
                <motion.a
                  href="tel:9811835860"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start gap-4 p-6 bg-slate-800 rounded-lg hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <Phone className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Phone</h4>
                    <p className="text-slate-300">+91-9811835860</p>
                  </div>
                </motion.a>

                {/* Address */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-6 bg-slate-800 rounded-lg"
                >
                  <MapPin className="w-6 h-6 text-orange-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white mb-2">
                      Address
                    </h4>
                    <p className="text-slate-300 leading-relaxed">
                      M/S Ideal Lasers
                      <br />
                      288, FIRST FLOOR, GOVINDA MOHALLA
                      <br />
                      HAIDERPUR, SHALIMAR BAGH
                      <br />
                      DELHI-110088
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Google Map */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }} 
              style={{
                position: "relative",
                width: "100%",
                paddingBottom: "56.25%"
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%"
                }}
                className="rounded-lg overflow-hidden shadow-lg"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d895723.11075306!2d75.92718799999999!3d28.721984500000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd309eebed77%3A0xf6e3da6bed396fc4!2sIdeal%20Laser!5e0!3m2!1sen!2sin!4v1774449171166!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
