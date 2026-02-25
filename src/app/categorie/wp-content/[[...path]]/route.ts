// src/app/wp-content/[[...path]]/route.ts
// ET
// src/app/categorie/wp-content/[[...path]]/route.ts

import { NextResponse } from 'next/server';

// Cette fonction intercepte les requêtes GET (images, scripts, etc.)
export async function GET() {
  return new NextResponse(null, { 
    status: 410, 
    statusText: 'Gone' 
  });
}

// On ajoute HEAD car les robots comme Googlebot font souvent des requêtes HEAD 
// pour vérifier la validité d'un lien sans télécharger le fichier
export async function HEAD() {
  return new NextResponse(null, { 
    status: 410, 
    statusText: 'Gone' 
  });
}

// Optionnel : Bloquer aussi les tentatives de POST si des vieux scripts essaient d'envoyer des données
export async function POST() {
  return new NextResponse(null, { status: 410 });
}