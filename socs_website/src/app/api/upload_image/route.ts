import {NextResponse} from 'next/server';
import {supabase} from "@/services/supabaseClient";

export async function POST(req: Request) {
    try {
        // Read formData from request
        const formData = await req.formData();
        const file = formData.get('file') as File;

        if (!file) {
            return NextResponse.json({message: 'File is required'}, {status: 400});
        }

        const fileExt = file.name.split('.').pop();
        const fileName = `news/${Date.now()}.${fileExt}`;

        // Convert file content to a Buffer
        const fileBuffer = await file.arrayBuffer();
        const fileBlob = new Blob([fileBuffer], {type: file.type});

        // Upload file to Supabase Storage
        const {data, error} = await supabase.storage
            .from('images') // Replace with your actual Supabase bucket name
            .upload(fileName, fileBlob, {
                contentType: file.type, // Ensures correct file type
                cacheControl: '3600',
                upsert: false,
            });
        console.log("error 2")
        if (error) {
            console.error('Upload error:', error.message);
            return NextResponse.json({message: 'Failed to upload file'}, {status: 500});
        }
        console.log("error")
        // Get the public URL of the uploaded file
        const {data: publicUrlData} = supabase.storage
            .from('images')
            .getPublicUrl(fileName);

        return NextResponse.json({path: publicUrlData.publicUrl}, {status: 200});
    } catch (error) {
        console.error('Error uploading file:', error);
        return NextResponse.json({message: 'Failed to upload file'}, {status: 500});
    }
}
