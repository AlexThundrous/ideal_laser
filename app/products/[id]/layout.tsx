const products = [
  { id: 1, name: "Table Top Laser Marking Machine" },
  { id: 2, name: "60W Fiber Laser Marking Machine" },
  { id: 3, name: "UV Laser Marking Machine" },
  { id: 4, name: "Laser Welding Machine" },
  { id: 5, name: "Fiber Metal Laser Cutting Machine" },
];

export async function generateStaticParams() {
  return products.map(product => ({
    id: product.id.toString(),
  }));
}

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
