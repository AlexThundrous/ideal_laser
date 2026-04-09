import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Ideal Laser - Professional Laser Cutting & Marking Services",
  description: "Expert laser cutting, marking, and welding services with advanced fiber laser technology",
  icons: [
    { rel: "icon", url: "/icon.png", type: "image/png", sizes: "any" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/icon.png" type="image/png" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}