import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site — emit plain HTML so any static host (Netlify) serves it.
  output: "export",
  // Each route becomes /path/index.html, which Netlify serves at /path and /path/.
  trailingSlash: true,
  images: {
    // Required for next/image under static export (no server optimizer).
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
