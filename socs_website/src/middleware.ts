import {NextRequest, NextResponse} from 'next/server';
import { supabase } from './services/supabaseClient';

export async function middleware(req: NextRequest) {
    const token = req.cookies.get('auth-token')?.value; // Retrieve token from cookies

    // Protect admin routes
    if (req.nextUrl.pathname.startsWith('/admin')) {
        if (!token) {
            return NextResponse.redirect(new URL('/public/login', req.url)); // Redirect to login if no token
        }

        // Optionally, verify token with Supabase
        const { data: user, error } = await supabase.auth.getUser(token);

        if (error || !user) {
            return NextResponse.redirect(new URL('/public/login', req.url));
        }
    }

    return NextResponse.next();
}

// Configure which paths the middleware applies to
export const config = {
    matcher: ['/admin/:path*'], // Apply to all admin pages
};
