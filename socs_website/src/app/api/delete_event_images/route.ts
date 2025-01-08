import fs from 'fs';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';

export async function DELETE(req: NextRequest) {
    try {
        const { imagePaths } = await req.json();

        if (!imagePaths || !Array.isArray(imagePaths)) {
            return NextResponse.json({ message: 'Image paths must be an array' }, { status: 400 });
        }

        const failedPaths: string[] = [];
        imagePaths.forEach((imagePath) => {
            const filePath = path.join(process.cwd(), 'public', imagePath);
            try {
                if (fs.existsSync(filePath)) {
                    fs.unlinkSync(filePath);
                }
            } catch (err) {
                console.error(`Error deleting file at ${filePath}:`, err);
                failedPaths.push(imagePath);
            }
        });

        if (failedPaths.length > 0) {
            return NextResponse.json(
                { message: 'Some files could not be deleted', failedPaths },
                { status: 500 }
            );
        }

        return NextResponse.json({ message: 'All files deleted successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error deleting images:', error);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
}
