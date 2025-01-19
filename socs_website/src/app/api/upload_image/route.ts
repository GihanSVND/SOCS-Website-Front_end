import { saveBase64File } from '@/utils/fileUtils';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const { file, uploadDir } = await req.json();

        if (!uploadDir) {
            return NextResponse.json({ message: 'Upload directory is required' }, { status: 400 });
        }

        const path = await saveBase64File(file, uploadDir);
        return NextResponse.json({ path }, { status: 200 });
    } catch (error) {
        console.error('Error uploading file:', error);
        return NextResponse.json({ message: 'Failed to upload file' }, { status: 500 });
    }
}
