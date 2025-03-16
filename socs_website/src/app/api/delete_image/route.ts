import {NextResponse} from 'next/server';
import {createClient} from "@supabase/supabase-js";

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function DELETE(req: Request) {
    try {
        const {imagePath} = await req.json();

        if (!imagePath) {
            return NextResponse.json({error: 'Image path is required'}, {status: 400});
        }

        const basePath = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/`;
        if (!imagePath.startsWith(basePath)) {
            return NextResponse.json({error: 'Invalid image path'}, {status: 400});
        }

        const storagePath = imagePath.replace(basePath, '');
        console.log(`Attempting to delete: ${storagePath}`);
        // Delete file from Supabase Storage
        const {error} = await supabase.storage.from('images').remove([storagePath]);

        if (error) {
            console.error('Error deleting file:', error);
            return NextResponse.json({error: 'Failed to delete file from Supabase'}, {status: 500});
        }

        return NextResponse.json({message: 'File deleted successfully'}, {status: 200});

    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({error: 'Internal server error'}, {status: 500});
    }
}
