import { saveBase64File } from '@/utils/fileUtils';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const { file } = await req.json();

        const path = await saveBase64File(file, 'news');
        return NextResponse.json({ path }, { status: 200 });
    } catch (error) {
        console.error('Error uploading news image:', error);
        return NextResponse.json({ message: 'Failed to upload image' }, { status: 500 });
    }
}

export async function GET() {
    return NextResponse.json(
        { message: 'Use POST to upload images' },
        { status: 405 }
    );
}
