import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false, // Active le mode strict de React pour la détection de bugs en développement
  images: {    
    unoptimized: true,//Désactiver l'optimisation d'images
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
    domains: ['controlpanel.people243.com','localhost','www.people243.com','people243.com','client.cynomedia-africa.com'], // Ajoutez ici le domaine de votre image
  },

  // D'autres configurations possibles si nécessaire
  async rewrites() {
    return [
      {
        source: '/api/images/:path*', // Toutes les requêtes qui commencent par '/api/images/'
        destination: 'https://controlpanel.people243.com/wp-content/uploads/:path*', // Destination vers le serveur WordPress
      },
    ];
  },

};

export default nextConfig;
