import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {    
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'localhost',
        pathname: '/wp-content/uploads/**', // Autorise les images depuis localhost
      },
      {
        protocol: 'https',
        hostname: 'controlpanel.people243.com', // Ajoute ce domaine
        pathname: '/wp-content/uploads/**', // Autorise les images depuis ce chemin spécifique
      },
    ],
    domains: ['people243.com','controlpanel.people243.com', 'people243.vercel.app','client.cynomedia-africa.com'], // Ajoutez ici le domaine de votre image
  },
  
};

export default nextConfig;
