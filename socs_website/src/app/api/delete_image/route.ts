import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function DELETE(req: Request) {
    try {
        const { imagePath } = await req.json();

        if (!imagePath) {
            return NextResponse.json({ error: 'Image path is required' }, { status: 400 });
        }

        const filePath = path.join(process.cwd(), 'public', imagePath);

        fs.unlink(filePath, (err) => {
            if (err) {
                console.error('Error deleting file:', err);
                return NextResponse.json({ error: 'Failed to delete file' }, { status: 500 });
            }
        });

        return NextResponse.json({ message: 'File deleted successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
