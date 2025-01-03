import { saveBase64File } from '@/utils/fileUtils';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const { file, type } = await req.json(); // `type` specifies if it's main or additional
        const path = await saveBase64File(file, `events/${type}`);
        return NextResponse.json({ path }, { status: 200 });
    } catch (error) {
        console.error('Error uploading event image:', error);
        return NextResponse.json({ message: 'Failed to upload image' }, { status: 500 });
    }
}
