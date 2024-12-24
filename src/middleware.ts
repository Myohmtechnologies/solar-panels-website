import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import * as jose from 'jose';

export async function middleware(request: NextRequest) {
  // Vérifier si nous sommes sur la page dashboard
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    // Vérifier le token d'authentification
    const token = request.cookies.get('auth-token')?.value;

    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    try {
      const JWT_SECRET = process.env.JWT_SECRET;
      if (!JWT_SECRET) {
        throw new Error('JWT_SECRET non défini');
      }

      // Créer une clé secrète à partir de la chaîne JWT_SECRET
      const secretKey = new TextEncoder().encode(JWT_SECRET);

      // Vérifier le token
      await jose.jwtVerify(token, secretKey);

      const response = NextResponse.next();
      response.headers.set('x-page-type', 'no-default-header');
      return response;
    } catch (error) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // Pour la page merci
  if (request.nextUrl.pathname === '/merci') {
    const response = NextResponse.next();
    response.headers.set('x-page-type', 'no-default-header');
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/merci', '/dashboard/:path*'],
};
