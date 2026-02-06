import { NextResponse } from 'next/server';

export function GET() {
  //console.log('🚨 Handler appelé');
  return new NextResponse('410 - Supprimé', {
    status: 410,
    statusText: 'Gone',
  });
}
