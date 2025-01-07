import { supabase } from '@/services/supabaseClient';

import { NextRequest, NextResponse } from 'next/server';

// @ts-ignore
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;

    try {
        const { data, error } = await supabase.from('events').select('*').eq('id', id).single();
        if (error) throw error;
        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        console.error('Error fetching event:', error);
        return NextResponse.json({ message: 'Failed to fetch event' }, { status: 500 });
    }
}
//