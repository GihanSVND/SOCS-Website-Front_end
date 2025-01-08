import { supabase } from '@/services/supabaseClient';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const { data, error } = await supabase.from('news').select('*');
        if (error) throw error;
        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        console.error('Error fetching news:', error);
        return NextResponse.json({ message: 'Failed to fetch news' }, { status: 500 });
    }
}
