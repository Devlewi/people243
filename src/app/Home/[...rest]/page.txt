// src/app/Home/[...rest]/page.tsx
import React from "react";
import { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Page supprimée définitivement",
  description: "Cette page a été supprimée et ne sera plus accessible.",
};

const GonePage = () => {
  return (
    <div className="main-full">
      <div className="container" style={{ marginTop: 20, marginBottom: 100 }}>
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
          <div className="text-center">
            <center>              
              <h1 className="text-4xl font-bold text-red-600 mb-4">
                Erreur 410 - Page supprimée définitivement
              </h1>
              <p className="text-lg text-gray-700 mt-4">
                Cette page a été supprimée et ne sera plus accessible.
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

export default GonePage;
