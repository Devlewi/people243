"use client";

import React, { useEffect, useState } from "react";

const Banner336x280: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Empêche le rendu côté serveur

  return (
    <div>
      {/* Affichage de l'iframe publicitaire */}
      <iframe
        id="a5699f99"
        name="a5699f99"
        src={`https://client.cynomedia-africa.com/www/delivery/afr.php?zoneid=208&cb=${Date.now()}`}
        frameBorder="0"
        scrolling="no"
        width="336"
        height="280"
        allow="autoplay"
        style={{ display: "block", margin: "0 auto" }}
      ></iframe>
    </div>
  );
};

export default Banner336x280;
