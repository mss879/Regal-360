import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Unoptimized so production builds don't require sharp / network at build time.
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
