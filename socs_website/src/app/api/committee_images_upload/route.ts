import { NextResponse } from 'next/server';
import { saveBase64File } from '@/utils/fileUtils';

export async function POST(req: Request) {
    try {
        let body;
        try {
            body = await req.json();
        } catch (err) {
            console.error('Error parsing JSON:', err);
            return NextResponse.json({ message: 'Invalid JSON payload' }, { status: 400 });
        }

        const { file } = body;

        // Call the reusable file upload function with a specific path
        const relativePath = await saveBase64File(file, 'committee_members');

        // Respond with the file path
        return NextResponse.json({ path: relativePath }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Failed to upload image' }, { status: 500 });
    }
}

export async function GET() {
    return NextResponse.json(
        { message: 'Use POST to upload images' },
        { status: 405 }
    );
}
