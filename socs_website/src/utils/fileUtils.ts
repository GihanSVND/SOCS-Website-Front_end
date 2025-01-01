import fs from 'fs';
import path from 'path';

/**
 * Saves a base64 image to the specified directory.
 * @param base64File - The base64 string of the file.
 * @param uploadDir - The relative directory path where the file should be saved.
 * @returns The relative path of the saved file.
 */
export async function saveBase64File(base64File: string, uploadDir: string): Promise<string> {
    // Decode the base64 image string
    const matches = base64File.match(/^data:(.+);base64,(.+)$/);
    if (!matches || matches.length !== 3) {
        throw new Error('Invalid image data');
    }

    const fileType = matches[1];
    const imageData = matches[2];
    const buffer = Buffer.from(imageData, 'base64');

    // Generate a unique file name
    const fileName = `${Date.now()}.png`; // Adjust extension based on fileType if needed
    const filePath = path.join(process.cwd(), 'public', uploadDir, fileName);

    // Ensure the directory exists
    const directory = path.dirname(filePath);
    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory, { recursive: true });
    }

    // Write the file
    fs.writeFileSync(filePath, buffer);

    // Return the relative path
    return `/${uploadDir}/${fileName}`;
}
