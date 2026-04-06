"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const products = [
  {
    id: 1,
    name: "Table Top Laser Marking Machine",
    image: "/table_top.png",
    desc: "Versatile Solution",
    fullDescription: "Versatile table-top laser marking system suitable for various materials. Compact yet powerful, perfect for small to medium production runs.",
    features: [
      "Compact table-top design",
      "Multi-material support",
      "User-friendly interface",
      "Fast processing speed",
      "Energy efficient",
      "Real-time preview system"
    ],
    specs: {
      power: "20W-100W Fiber Laser",
      workingArea: "150mm x 150mm",
      speed: "7000mm/s",
      precision: "±0.1mm",
      cooling: "Air-cooled",
      materials: "Steel, Aluminum, Stainless Steel"
    }
  },
  {
    id: 2,
    name: "60W Fiber Laser Marking Machine",
    image: "/60W_Laser_machne.png",
    desc: "Compact & Efficient",
    fullDescription: "A compact and efficient fiber laser marking system perfect for precision engraving on metals and non-metals. Ideal for industrial applications requiring high-speed, high-precision marking.",
    features: [
      "60W Fiber Laser",
      "Precision up to ±0.05mm",
      "Marking speed up to 7000mm/s",
      "Compact desktop design",
      "Easy-to-use software interface",
      "Air-cooled system"
    ],
    specs: {
      power: "60W Fiber Laser",
      wavelength: "1064nm",
      markingArea: "150mm x 150mm",
      frequency: "20-100kHz",
      cooling: "Air-cooled",
      weight: "45kg"
    }
  },
  {
    id: 3,
    name: "UV Laser Marking Machine",
    image: "/UV_Laser_machine.png",
    desc: "UV Marking Precision",
    fullDescription: "High-precision UV laser marking system specifically designed for plastics and organic materials. Features advanced Galvo head technology with manual focusing and achieves exceptional marking quality on non-metal surfaces.",
    features: [
      "UV Laser (355nm wavelength)",
      "3W / 5W Power options",
      "Galvo head technology",
      "70x70mm or 110x110mm working area",
      "Manual focusing with red light positioning",
      "Ezcad / Ezcad Lite software support"
    ],
    specs: {
      laserType: "UV laser",
      power: "3W / 5W",
      wavelength: "355nm",
      workingArea: "70×70mm / 110×110mm",
      operatingPlatform: "Ezcad / Ezcad Lite",
      cooling: "Air-cooled / water-cooled"
    }
  },
  {
    id: 4,
    name: "Laser Welding Machine",
    image: "/Laser_Welding.jpeg",
    desc: "Precision Welding",
    fullDescription: "Advanced laser welding system for precision joining of delicate materials. Perfect for electronics, jewelry, medical devices, and precision engineering applications.",
    features: [
      "500W-3000W Fiber Laser",
      "Minimal heat impact",
      "No filler material required",
      "Precision spot welding",
      "Maximum penetration control",
      "Ideal for sensitive materials"
    ],
    specs: {
      power: "500W-3000W",
      spotSize: "0.1mm-0.3mm",
      precision: "±0.01mm",
      speed: "Variable up to 100mm/s",
      cooling: "Water-cooled",
      accuracy: "±0.05mm"
    }
  },
  {
    id: 5,
    name: "Fiber Metal Laser Cutting Machine",
    image: "/laser_cuting.png",
    desc: "High-Speed Cutting",
    fullDescription: "High-speed fiber laser cutting system for metals and alloys. Delivers clean edges with minimal heat distortion, perfect for industrial metal processing.",
    features: [
      "1500W-12000W Fiber Laser",
      "Clean edge quality",
      "Minimal heat distortion",
      "Up to 30mm material thickness",
      "Automatic material detection",
      "Nesting optimization"
    ],
    specs: {
      power: "1500W-12000W Fiber Laser",
      cuttingArea: "1500mm x 3000mm",
      speed: "500-1000mm/s",
      precision: "±0.1mm",
      maxThickness: "30mm",
      cooling: "Water-cooled"
    }
  }
];

export default function ProductPage() {
  const params = useParams();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    if (params?.id) {
      const productId = parseInt(params.id as string);
      const foundProduct = products.find(p => p.id === productId);
      setProduct(foundProduct);
    }
  }, [params]);

  if (!product) {
    return (
      <main className="bg-white text-black">
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-xl text-gray-600">Loading product...</p>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="bg-white text-black">
      <Navbar />
      
      <section className="mt-4 py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
          >
            {/* Image */}
            <div className="flex justify-center items-center rounded-lg overflow-hidden shadow-xl">
              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={500}
                className="w-full h-auto"
              />
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h2>
                <p className="text-gray-600 text-lg mb-4">{product.fullDescription}</p>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specifications */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Specifications</h3>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(product.specs).map(([key, value]: [string, any]) => (
                    <div key={key} className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-600 text-sm capitalize">{key.replace(/([A-Z])/g, ' $1')}</p>
                      <p className="font-semibold text-gray-900">{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <motion.button
                onClick={() => window.location.href = '/contact'}
                className="mt-8 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get A Quote
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

