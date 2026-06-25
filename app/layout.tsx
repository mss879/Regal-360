import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://regal360.lk"),
  title: {
    default: "Regal 360° — Property Services in Sri Lanka",
    template: "%s · Regal 360°",
  },
  description:
    "Sri Lanka's first true one-stop property partner. Residential, commercial and investment property — sales, legal, advisory and development, all under one roof.",
  keywords: [
    "Sri Lanka real estate",
    "property services Colombo",
    "commercial property",
    "residential property",
    "property investment Sri Lanka",
  ],
  openGraph: {
    title: "Regal 360° — Property Services in Sri Lanka",
    description:
      "Sri Lanka's first true one-stop property partner. Everything from a simple purchase to the most complicated sale.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${inter.variable} antialiased`}
    >
      <body className="bg-ink text-white">
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
