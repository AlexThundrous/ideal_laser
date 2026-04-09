"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { AspectRatio } from "@/ui/aspect-ratio";
import ScrollFloat from "@/components/ui/ScrollFloat";
import Stepper, { Step } from "@/components/ui/Stepper";

interface Service {
  id: string;
  name: string;
  description: string;
  fullDescription: string;
  image: string;
  features: string[];
  specs: Record<string, string | undefined>;
  pricing: string;
  pricingNote: string;
  process: Array<{ title: string; description: string }>;
}

interface ServicesClientProps {
  services: Service[];
}

export default function ServicesClient({ services }: ServicesClientProps) {
  const router = useRouter();
  const [activeService, setActiveService] = useState(services[0].id);

  const currentService = services.find((s) => s.id === activeService)!;

  const handleTabClick = (serviceId: string) => {
    setActiveService(serviceId);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-20 px-6 bg-linear-to-b from-[#111827] to-[#1f2937]">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollFloat
            containerClassName="text-white text-3xl md:text-5xl font-bold tracking-tight"
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
          >
            Our Services
          </ScrollFloat>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Comprehensive laser solutions tailored to your industrial needs
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="pt-6 md:pt-8 pb-16 md:pb-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Service Tabs */}
          <div className="flex flex-wrap gap-4 md:gap-6 justify-center mb-8 md:mb-10">
            {services.map((service) => (
              <motion.button
                key={service.id}
                onClick={() => handleTabClick(service.id)}
                className={`px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold transition-all ${
                  activeService === service.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {service.name}
              </motion.button>
            ))}
          </div>

          {/* Service Detail */}
          <motion.div
            key={activeService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start"
          >
            {/* Image and Stats - Shows first on mobile */}
            <div className="space-y-6 md:hidden order-first">
              {(currentService.id === "marking" || currentService.id === "cutting") && (
                <AspectRatio ratio={16 / 9} className="shadow-xl">
                  <video
                    src={currentService.image}
                    autoPlay
                    muted
                    loop
                    className="w-full h-full object-cover rounded-lg"
                  />
                </AspectRatio>
              )}
              {currentService.id !== "marking" && currentService.id !== "cutting" && (
                <AspectRatio ratio={1} className="shadow-xl">
                  <Image
                    src={currentService.image}
                    alt={currentService.name}
                    width={600}
                    height={600}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </AspectRatio>
              )}
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {currentService.name}
                </h2>
                <p className="text-gray-600 text-lg mb-4">
                  {currentService.fullDescription}
                </p>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {currentService.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-gray-700"
                    >
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
                  {Object.entries(currentService.specs).map(([key, value]) => (
                    <div key={key} className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-600 text-sm capitalize">
                        {key.replace(/([A-Z])/g, " $1")}
                      </p>
                      <p className="font-semibold text-gray-900">{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing */}
              {currentService.pricing && (
                <div className="bg-linear-to-r from-blue-50 to-blue-100 border-l-4 border-blue-600 p-6 rounded-lg">
                  <p className="text-sm text-gray-600 mb-2">
                    <span className="inline-block bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs font-semibold mr-2">
                      INDICATIVE PRICING
                    </span>
                    Estimate
                  </p>
                  <p className="text-3xl font-bold text-blue-900 mb-2">
                    {currentService.pricing}
                  </p>
                  <p className="text-gray-700 text-sm">{currentService.pricingNote}</p>
                </div>
              )}

              {/* Jobwork Process */}
              {currentService.process && (
                <div className="text-left w-full">
                  <h3 className="text-xl font-semibold mb-8">Jobwork Process</h3>
                  <div className="mt-8 text-left w-full">
                    <Stepper
                      backButtonText="Previous"
                      nextButtonText="Next"
                      onFinalStepCompleted={() => console.log("Process completed!")}
                    >
                      {currentService.process.map((step, idx) => (
                        <Step key={idx}>
                          <div className="py-6 text-left">
                            <h4 className="text-2xl font-bold text-blue-600 mb-2">
                              Step {idx + 1}: {step.title}
                            </h4>
                            <p className="text-gray-700 text-lg">
                              {step.description}
                            </p>
                          </div>
                        </Step>
                      ))}
                    </Stepper>
                  </div>
                </div>
              )}

              {/* CTA Button */}
              <motion.button
                onClick={() => router.push("/contact")}
                className="mt-8 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Request Quote
              </motion.button>
            </div>

            {/* Image and Stats - Hidden on mobile, shows on desktop */}
            <div className="space-y-6 hidden md:block">
              {(currentService.id === "marking" || currentService.id === "cutting") && (
                <AspectRatio ratio={16 / 9} className="shadow-xl">
                  <video
                    src={currentService.image}
                    autoPlay
                    muted
                    loop
                    className="w-full h-full object-cover rounded-lg"
                  />
                </AspectRatio>
              )}
              {currentService.id !== "marking" && currentService.id !== "cutting" && (
                <AspectRatio ratio={1} className="shadow-xl">
                  <Image
                    src={currentService.image}
                    alt={currentService.name}
                    width={600}
                    height={600}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </AspectRatio>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
