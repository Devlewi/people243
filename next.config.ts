import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "controlpanel.people243.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
    domains: [
      "people243.com",
      "controlpanel.people243.com",
      "people243.vercel.app",
      "client.cynomedia-africa.com"
    ],
    formats: ["image/avif", "image/webp"], // Active WebP/AVIF pour l'optimisation
  },
};

export default nextConfig;
