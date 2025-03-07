import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false, // Active le mode strict de React pour la détection de bugs en développement
  images: {    
    remotePatterns: [      
      {
        protocol: "https",
        hostname: "localhost",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "controlpanel.people243.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
    domains: ['controlpanel.people243.com','localhost','www.people243.com','people243.com','people243.vercel.app','client.cynomedia-africa.com'], // Ajoutez ici le domaine de votre image
  },
  
};

export default nextConfig;
