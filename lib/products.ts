// Shared products data
export const products = [
  {
    id: 1,
    name: "60W Fiber Laser Marking Machine",
    image: "/60W_Laser_machine.jpeg",
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
    id: 2,
    name: "Laser Welding Machine",
    image: "/Laser_Welding.jpeg",
    desc: "Precision Welding",
    fullDescription: "Advanced laser welding system for precision joining of delicate materials. Perfect for electronics, jewelry, medical devices, and precision engineering applications.",
    features: [
      "500W-1000W Fiber Laser",
      "Minimal heat impact",
      "No filler material required",
      "Precision spot welding",
      "Maximum penetration control",
      "Ideal for sensitive materials"
    ],
    specs: {
      power: "500W-1000W",
      spotSize: "0.1mm-0.3mm",
      precision: "±0.01mm",
      speed: "Variable up to 100mm/s",
      cooling: "Water-cooled",
      accuracy: "±0.05mm"
    }
  },
  {
    id: 3,
    name: "Table Top Laser Marking Machine",
    image: "/Table_Top_Machine.jpeg",
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
      power: "50W-100W CO2 Laser",
      workingArea: "400mm x 300mm",
      speed: "1000mm/s",
      precision: "±0.1mm",
      cooling: "Air-cooled",
      materials: "Wood, Acrylic, Leather, Metals"
    }
  },
  {
    id: 4,
    name: "Fiber Metal Laser Cutting Machine",
    image: "/laser_cuttng.png",
    desc: "High-Speed Cutting",
    fullDescription: "High-speed fiber laser cutting system for metals and alloys. Delivers clean edges with minimal heat distortion, perfect for industrial metal processing.",
    features: [
      "150W-300W Fiber Laser",
      "Clean edge quality",
      "Minimal heat distortion",
      "Up to 50mm material thickness",
      "Automatic material detection",
      "Nesting optimization"
    ],
    specs: {
      power: "150W-300W Fiber Laser",
      cuttingArea: "1300mm x 900mm",
      speed: "500-1000mm/s",
      precision: "±0.1mm",
      maxThickness: "50mm",
      cooling: "Water-cooled"
    }
  }
];

export function getProductById(id: number) {
  return products.find(p => p.id === id);
}

export function getAllProducts() {
  return products;
}
