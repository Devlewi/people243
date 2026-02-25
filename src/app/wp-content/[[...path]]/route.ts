// src/app/wp-content/[[...path]]/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  return new NextResponse(null, { 
    status: 410, 
    statusText: 'Gone' 
  });
}

// On fait la même chose pour toutes les méthodes au cas où
export async function HEAD() {
  return new NextResponse(null, { status: 410 });
}