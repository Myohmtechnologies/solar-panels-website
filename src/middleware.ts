import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
  matcher: [
    '/api/:path*',
    '/dashboard/:path*',
    '/login',
    '/((?!_next/static|_next/image|favicon.ico).*)',
    '/borne-de-recharge-voiture-électrique/:path*',
    '/borne-de-recharge/:path*',
  ],
};

// URLs à rediriger (anciennes vers nouvelles)
const redirects = new Map([
  ['/panneaux-solaires', '/guide-aides-subventions'],
  ['/installation', '/qui-sommes-nous'],
  // Ajoutez d'autres redirections ici
]);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Gestion des redirections
  if (redirects.has(pathname)) {
    return NextResponse.redirect(new URL(redirects.get(pathname)!, request.url));
  }

  const isApiRoute = pathname.startsWith('/api');
  const isDashboardRoute = pathname.startsWith('/dashboard');
  const isLoginRoute = pathname === '/login';

  // Allow all API routes to be dynamic
  if (isApiRoute) {
    return NextResponse.next();
  }

  // Handle authentication for dashboard routes
  if (isDashboardRoute || isLoginRoute) {
    try {
      const token = request.cookies.get('auth-token');
      
      if (!token && !isLoginRoute) {
        return NextResponse.redirect(new URL('/login', request.url));
      }

      if (token && isLoginRoute) {
        return NextResponse.redirect(new URL('/dashboard', request.url));
      }

      return NextResponse.next();
    } catch {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // Si l'URL contient "borne-de-recharge-voiture-électrique", rediriger vers "borne-de-recharge"
  if (pathname.includes('borne-de-recharge-voiture-électrique')) {
    const newPath = pathname.replace('borne-de-recharge-voiture-électrique', 'borne-de-recharge');
    return NextResponse.redirect(new URL(newPath, request.url));
  }

  // Log 404s
  if (!isApiRoute && !isDashboardRoute && !isLoginRoute) {
    const response = NextResponse.next();
    response.headers.set('x-middleware-cache', 'no-cache');
    
    // Log 404s to your analytics or monitoring system
    if (response.status === 404) {
      console.error(`404 Error: ${pathname}`);
      // Vous pouvez ajouter ici un appel à votre système d'analytics
    }
  }

  return NextResponse.next();
}
