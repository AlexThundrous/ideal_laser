import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ServicesClient from "./ServicesClient";

const services = [
  {
    id: "marking",
    name: "Marking",
    description: "Professional laser marking for precision engraving on metals, plastics, and more",
    fullDescription: "At Ideal Laser, we provide high-precision laser marking jobwork services for permanent and high-quality marking on various materials. Using advanced fiber laser marking machines, we deliver sharp, clear, and long-lasting markings such as logos, serial numbers, barcodes, and designs. With experience since 2005, we ensure consistent quality, fast turnaround, and cost-effective solutions for all types of marking requirements.",
    image: "/laser_marking.mp4",
    features: [
      "Stainless Steel (SS), Mild Steel (MS), Aluminum, Brass, Copper, Plastic",
      "Logo Marking, Serial Number, QR Code, Barcode, Name Plates, Deep Engraving",
      "Fiber Laser Marking Machine",
      "Up to 300mm x 300mm marking area (custom options available)",
      "Permanent, non-fading, high-contrast marking"
    ],
    specs: {
      "Materials": "SS, MS, Aluminum, Brass, Copper, Plastic",
      "Marking Types": "Logo, Serial, QR Code, Barcode, Name Plates",
      "Machine Type": "Fiber Laser Marking Machine",
      "Area": "Up to 300mm x 300mm"
    },
    pricing: "₹2 – ₹10 per piece",
    pricingNote: "Depends on size & quantity. Deep engraving at extra charges. Best discounted rates for bulk orders.",
    process: [
      { title: "Share Design", description: "Share design / logo / data (Excel for serial numbers)" },
      { title: "Confirmation", description: "Material & marking size confirmation" },
      { title: "Sample Approval", description: "Sample approval before production" },
      { title: "Laser Marking", description: "Precision laser marking process" },
      { title: "Quality & Dispatch", description: "Quality check & dispatch" }
    ]
  },
  {
    id: "cutting",
    name: "Cutting",
    description: "High-speed laser cutting for metals and non-metals with exceptional edge quality",
    fullDescription: "At Ideal Laser, we provide high-precision laser cutting jobwork services for a wide range of industries. With advanced fiber laser technology, we ensure clean edges, accurate dimensions, and fast delivery for both small and bulk orders. With experience since 2005, we specialize in delivering reliable and cost-effective cutting solutions.",
    image: "/laser_cutting.mp4",
    features: [
      "Stainless Steel (SS), Mild Steel (MS), Aluminum, Brass, Copper",
      "Up to 20mm thickness (depending on material)",
      "DXF, CAD, CorelDraw designs supported",
      "Fiber Laser & CNC Laser Cutting Machines",
      "±0.1 mm precision cutting"
    ],
    specs: {
      "Materials": "SS, MS, Aluminum, Brass, Copper",
      "Thickness": "Up to 20mm",
      "File Support": "DXF, CAD, CorelDraw",
      "Machine": "Fiber Laser & CNC Laser"
    },
    pricing: "₹30 – ₹50 per minute",
    pricingNote: "Metal Cutting. Special rates for bulk orders.",
    process: [
      { title: "Share Design", description: "Share your drawing/design (DXF/CAD)" },
      { title: "Material Confirmation", description: "Material & thickness confirmation" },
      { title: "Quotation", description: "Quotation & approval" },
      { title: "Laser Cutting", description: "Precision laser cutting" },
      { title: "Quality & Dispatch", description: "Quality check & dispatch" }
    ]
  },
  {
    id: "welding",
    name: "Welding",
    description: "Precision laser welding for strong, clean joints in delicate applications",
    fullDescription: "At Ideal Laser, we provide high-precision laser welding jobwork services for industrial and commercial applications. Using advanced fiber laser welding technology, we deliver strong, clean, and distortion-free welds—even on thin materials. With experience since 2005, we ensure quality, speed, and reliability for both small and bulk production jobs.",
    image: "/welding_eg.jpeg",
    features: [
      "Stainless Steel (SS), Mild Steel (MS), Aluminum, Brass, Copper",
      "0.5 mm to 8 mm thickness range (depending on material)",
      "Fiber Laser Welding (Handheld & CNC)",
      "Smooth, clean joints with minimal grinding",
      "High precision with low heat distortion"
    ],
    specs: {
      "Materials": "SS, MS, Aluminum, Brass, Copper",
      "Thickness": "0.5 mm to 8 mm",
      "Type": "Fiber Laser Welding (Handheld & CNC)",
      "Finish": "Smooth, clean joints with minimal grinding"
    },
    pricing: "₹8 – ₹25 per inch",
    pricingNote: "Depends on thickness & material. Complex jobs at custom pricing. Bulk orders at special discounted rates.",
    process: [
      { title: "Share Requirements", description: "Share drawing / sample / requirement" },
      { title: "Material Confirmation", description: "Material & thickness confirmation" },
      { title: "Quotation", description: "Quotation & approval" },
      { title: "Laser Welding", description: "Precision laser welding" },
      { title: "Quality & Delivery", description: "Quality check & delivery" }
    ]
  }
];

export default function Services() {
  return (
    <main className="bg-white text-black">
      <Navbar />
      <ServicesClient services={services} />
      <Footer />
    </main>
  );
}

