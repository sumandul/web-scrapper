import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const isLoggedIn = request.cookies.has('session');

  const isProtectedPath = request.nextUrl.pathname.startsWith('/dashboard');

  if (!isLoggedIn && isProtectedPath) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
    matcher: ['/about', '/admin', '/profile', '/about/:path*', '/admin/:path*', '/profile/:path*'],
  };
