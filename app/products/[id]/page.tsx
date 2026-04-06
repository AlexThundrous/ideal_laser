import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ProductDetailClient from "./ProductDetailClient";

const products = [
  {
    id: 1,
    name: "Table Top Laser Marking Machine",
    image: "/Table_Top.png",
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

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const productId = parseInt(params.id);

  return (
    <main className="bg-white text-black">
      <Navbar />
      <ProductDetailClient products={products} initialProductId={productId} />
      <Footer />
    </main>
  );
}

