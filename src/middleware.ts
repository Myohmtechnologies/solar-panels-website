import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
  matcher: [
    '/api/:path*',
    '/dashboard/:path*',
    '/login',
  ],
};

export function middleware(request: NextRequest) {
  const isApiRoute = request.nextUrl.pathname.startsWith('/api');
  const isDashboardRoute = request.nextUrl.pathname.startsWith('/dashboard');
  const isLoginRoute = request.nextUrl.pathname === '/login';

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

  return NextResponse.next();
}
