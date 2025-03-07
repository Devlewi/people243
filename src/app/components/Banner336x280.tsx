"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const Banner336x280: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const [randomNumber, setRandomNumber] = useState<number>(Math.floor(Math.random() * 1000000));

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    // Génère un nouveau numéro aléatoire toutes les 30 secondes, si nécessaire
    const interval = setInterval(() => {
      setRandomNumber(Math.floor(Math.random() * 1000000));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  if (!isClient) return null; // Empêche le rendu côté serveur

  return (
    <div>
      {/* Affichage de l'iframe publicitaire */}
      <iframe
        id="a178c37c"
        name="a178c37c"
        src={`https://client.cynomedia-africa.com/www/delivery/afr.php?zoneid=218&cb=${randomNumber}`}
        frameBorder="0"
        scrolling="no"
        width="336"
        height="280"
        allow="autoplay"
      >
        <a href={`https://client.cynomedia-africa.com/www/delivery/ck.php?n=ab1357a3&cb=${randomNumber}`} target="_blank" rel="noopener noreferrer">
          <Image
            src={`https://client.cynomedia-africa.com/www/delivery/avw.php?zoneid=218&cb=${randomNumber}&n=ab1357a3`}
            width={336}
            height={280}
            alt="Advertisement"
          />
        </a>
      </iframe>
    </div>
  );
};

export default Banner336x280;
