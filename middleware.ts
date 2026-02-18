import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const urlLower = pathname.toLowerCase();

  // LOGS DE DEBUG : Regarde ton terminal (pas la console du navigateur)
  // console.log("Route visitée :", pathname);

  // 1. GESTION STRICTE DE /HOME (avec ou sans slash, peu importe la casse)
  // On teste toutes les variations possibles pour être sûr
  if (urlLower === '/home' || urlLower === '/home/') {
    return NextResponse.redirect(new URL('/', request.url), 301);
  }

  // 2. GESTION DES SOUS-PAGES DE /HOME (Code 410)
  if (urlLower.startsWith('/home/')) {
    return new NextResponse(null, { status: 410 });
  }

  // 3. GESTION DES CATÉGORIES
  if (urlLower.startsWith('/category/')) {
    if (urlLower.includes('/feed')) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL('/', request.url), 301);
  }

  return NextResponse.next();
}

export const config = {
  // Le matcher doit être large pour attraper /Home, /home, /home/ etc.
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}