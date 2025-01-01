import { supabase } from '@/services/supabaseClient';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    const { email, password } = await req.json();

    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 400 });
        }

        const response = NextResponse.json(
            { message: 'Login successful', user: data.user },
            { status: 200 }
        );

        // Set auth token in cookie
        response.cookies.set('auth-token', data.session?.access_token || '', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24, // 1 day
            path: '/',
        });

        return response;
    } catch (error) {
        let errorMessage = 'Failed to log in';
        if (error instanceof Error) {
            errorMessage += ': ' + error.message;
        }
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}
