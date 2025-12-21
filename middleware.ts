import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Check if site is paused
  const isPaused = process.env.NEXT_PUBLIC_SITE_PAUSED === 'true'

  // Path to the paused page
  const pausedPath = '/site-paused'

  // Allow access to the paused page, static files, and api routes to avoid loops and breaking assets
  if (
    request.nextUrl.pathname.startsWith(pausedPath) ||
    request.nextUrl.pathname.startsWith('/_next') ||
    request.nextUrl.pathname.startsWith('/static') ||
    request.nextUrl.pathname.match(/\.(png|jpg|jpeg|gif|ico|svg|css|js|woff|woff2)$/)
  ) {
    return NextResponse.next()
  }

  if (isPaused) {
    return NextResponse.rewrite(new URL(pausedPath, request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/:path*',
}
