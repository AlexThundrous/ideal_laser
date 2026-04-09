import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import ServiceWorkerRegister from "./components/ServiceWorkerRegister";
import CookieConsent from "./components/CookieConsent";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Ideal Laser - Professional Laser Cutting & Marking Services",
  description: "Expert laser cutting, marking, and welding services with advanced fiber laser technology. High-precision industrial laser solutions for manufacturing.",
  keywords: "laser cutting, laser marking, laser welding, fiber laser, industrial laser, precision cutting, marking services",
  authors: [{ name: "Ideal Laser" }],
  creator: "Ideal Laser",
  publisher: "Ideal Laser",
  icons: [
    { rel: "icon", url: "/icon.png", type: "image/png", sizes: "any" },
  ],
  openGraph: {
    type: "website",
    url: "https://ideallasers.com",
    title: "Ideal Laser - Professional Laser Cutting & Marking Services",
    description: "Expert laser cutting, marking, and welding services with advanced fiber laser technology.",
    siteName: "Ideal Laser",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Ideal Laser Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ideal Laser",
    description: "Professional laser cutting & marking services",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://ideallasers.com",
  },
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
        <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" />
        <link rel="alternate" hrefLang="en" href="https://ideallasers.com" />
        
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Ideal Laser",
              url: "https://ideallasers.com",
              logo: "https://ideallasers.com/logo.png",
              description: "Professional laser cutting, marking, and welding services",
              telephone: "+91-9811835860",
              email: "contact@ideallasers.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Your Address",
                addressLocality: "Delhi",
                addressCountry: "IN",
              },
              sameAs: [
                "https://www.facebook.com/ideallaser",
                "https://www.instagram.com/ideallaser",
                "https://www.linkedin.com/company/ideallaser",
              ],
            }),
          }}
        />

        {/* Structured Data - Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Ideal Laser",
              image: "https://ideallasers.com/logo.png",
              description: "Professional laser cutting, marking, and welding services",
              telephone: "+91-9811835860",
              url: "https://ideallasers.com",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Your Address",
                addressLocality: "Delhi",
                postalCode: "Your Postal Code",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "28.7495",
                longitude: "77.0793",
              },
            }),
          }}
        />
        
      </head>
      <body className="font-sans">
        <ServiceWorkerRegister />
        <CookieConsent />
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  );
}