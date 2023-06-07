import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request) {
    const pathname = request.nextUrl.pathname;

    if (
        [
            '/manifest.json',
            '/favicon.ico',
        ].includes(pathname)
    )
        return;

    const pathnameIsMissingLocale = !pathname.startsWith('/');

    if (pathnameIsMissingLocale) {
        return NextResponse.redirect(new URL(`/${pathname}`, request.url));
    }
}

export const config = {
    matcher: ['/((?!_next).*)'],
};
