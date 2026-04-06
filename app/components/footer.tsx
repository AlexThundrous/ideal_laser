"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-8 md:py-12 text-center border-t bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 pb-8 border-b">
          {/* Phone */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Phone className="w-4 h-4 text-blue-600" />
              <h4 className="text-sm font-semibold">Phone</h4>
            </div>
            <a 
              href="tel:9811835860" 
              className="text-xs md:text-sm text-slate-600 hover:text-blue-600 transition-colors"
            >
              +91-9811835860
            </a>
          </div>

          {/* WhatsApp */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Image
                src="/whatsapp.svg"
                alt="WhatsApp"
                width={16}
                height={16}
              />
              <h4 className="text-sm font-semibold">WhatsApp</h4>
            </div>
            <a 
              href="https://wa.me/919811835868" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs md:text-sm text-slate-600 hover:text-green-600 transition-colors"
            >
              +91-9811835868
            </a>
          </div>

          {/* Address with Mini Map */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <MapPin className="w-4 h-4 text-orange-600" />
              <h4 className="text-sm font-semibold">Location</h4>
            </div>
            <div className="w-full max-w-xs h-32 rounded-lg overflow-hidden shadow-sm border border-slate-200 mb-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.0839803334063!2d77.07906!3d28.74961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d016c5c5c5c5d%3A0x1234567890abcdef!2sIdeal%20Lasers!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-xs md:text-sm text-slate-600">© 2026 Ideal Lasers. All rights reserved.</p>
      </div>
    </footer>
  );
}