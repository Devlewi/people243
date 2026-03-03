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
      
{/*
<!-- Revive Adserver iFrame Tag - Generated with Revive Adserver v5.4.1 -->
<iframe id='a3b9446b' name='a3b9446b' src='https://adserver.cynomedia.com/www/delivery/afr.php?zoneid=218&amp;cb=INSERT_RANDOM_NUMBER_HERE' frameborder='0' scrolling='no' width='336' height='280' allow='autoplay'>
<a href='https://adserver.cynomedia.com/www/delivery/ck.php?n=ab2be8e9&amp;cb=INSERT_RANDOM_NUMBER_HERE' target='_blank'>
<img src='https://adserver.cynomedia.com/www/delivery/avw.php?zoneid=218&amp;cb=INSERT_RANDOM_NUMBER_HERE&amp;n=ab2be8e9' border='0' alt='' /></a></iframe>

href='https://adserver.cynomedia.com/www/delivery/ck.php?n=a20175cb&amp;cb=INSERT_RANDOM_NUMBER_HERE'
*/}


<iframe
        id="a06f9d4f"
        name="a06f9d4f"
        src={`https://adserver.cynomedia.com/www/delivery/afr.php?zoneid=218&cb=${randomNumber}`}
        frameBorder="0"
        scrolling="no"
        width="336"
        height="280"
        allow="autoplay"
      >
        <a href={`https://adserver.cynomedia.com/www/delivery/ck.php?n=a20175cb&amp&cb=${randomNumber}`} target="_blank" rel="noopener noreferrer">
          <Image
            src={`https://adserver.cynomedia.com/www/delivery/avw.php?zoneid=218&cb=${randomNumber}&n=a20175cb`}
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
