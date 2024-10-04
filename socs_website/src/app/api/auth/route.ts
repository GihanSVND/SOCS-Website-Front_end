import {supabase} from '@/services/supabaseClient';
import {NextRequest, NextResponse} from 'next/server';

export async function POST(req: NextRequest) {
    const {email, password} = await req.json();

    try {
        const {data, error} = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            return NextResponse.json({error: error.message}, {status: 400});
        }

        return NextResponse.json({message: 'Login successful', user: data.user}, {status: 200});
    } catch (error: any) {
        return NextResponse.json({error: 'Failed to log in'}, {status: 500});
    }
}
