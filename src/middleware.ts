import type { NextRequest, NextFetchEvent } from 'next/server'
import { authGuard } from './util/middleware/authGuard/authGuard'

export async function middleware(req: NextRequest, event: NextFetchEvent) {
  return authGuard(req)
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
