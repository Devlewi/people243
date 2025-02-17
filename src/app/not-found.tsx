// src/app/not-found.tsx

import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contenu Non Trouvé",
  description: "Désolé, le contenu que vous cherchez n'existe pas.",
};

const NotFound = () => {
  return (
    <div className="main-full">
      <div className="container" style={{ marginTop: 20, marginBottom: 100 }}>
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
          <div className="text-center">
            {/* Image ajoutée ici */}
            <center>
            <Image
  src="/images/404.png"
  alt="Erreur 404"
  className="mx-auto mb-6"
  width={450}  // Largeur fixe de l'image
  height={450}
/>
            <h1 className="text-4xl font-bold text-red-600 mb-4">
              Erreur 404 - Contenu Non Trouvé
            </h1>
            <p className="text-lg text-gray-700 mt-4">
              Le contenu que vous cherchez n&apos;existe pas ou a été déplacé.
            </p>
            <div className="mt-6">
              <Link
                href="/"
                className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Retour à l&apos;accueil
              </Link>
            </div>
            </center>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
