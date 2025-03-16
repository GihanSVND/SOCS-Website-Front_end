import {supabase} from '@/services/supabaseClient';

/**
 * Fetches all records from the specified table.
 * @param tableName The name of the table to fetch data from.
 */
export async function fetchAll(tableName: string) {
    try {
        const {data, error} = await supabase.from(tableName).select('*');
        if (error) throw error;
        return data || [];
    } catch (error) {
        console.error(`Error fetching data from ${tableName}:`, error);
        throw error;
    }
}

/**
 * Inserts or updates a record in the specified table.
 * @param tableName The name of the table to insert/update data.
 * @param record The record to insert or update.
 * @param idField The name of the ID field in the table (default: 'id').
 */
export async function saveRecord(tableName: string, record: Record<string, unknown>, idField = 'id') {
    try {
        const {[idField]: id, ...recordWithoutId} = record;

        if (id) {
            // Update existing record
            const {error} = await supabase.from(tableName).update(recordWithoutId).eq(idField, id);
            if (error) throw error;
        } else {
            // Insert new record (exclude `id` field)
            const {error} = await supabase.from(tableName).insert(recordWithoutId);
            if (error) throw error;
        }
    } catch (error) {
        console.error(`Error saving record in ${tableName}:`, error);
        throw error;
    }
}


/**
 * Deletes a record from the specified table.
 * @param tableName The name of the table.
 * @param id The ID of the record to delete.
 * @param imagePath
 * @param idField The name of the ID field in the table (default: 'id').
 */
export async function deleteRecord(tableName: string, id: string, imagePath?: string, idField = 'id') {
    try {
        const {error} = await supabase.from(tableName).delete().eq(idField, id);
        if (error) throw error;

        if (imagePath) {
            const response = await fetch('/api/delete_image', {
                method: 'DELETE',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({imagePath}),
            });

            if (!response.ok) {
                throw new Error('Failed to delete image');
            }
        }
    } catch (error) {
        console.error(`Error deleting record in ${tableName}:`, error);
        throw error;
    }
}


export async function uploadFile(file: File, endpoint: string): Promise<string> {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch(endpoint, {
        method: 'POST',
        body: formData,
    });

    if (!response.ok) {
        throw new Error('File upload failed');
    }

    const result = await response.json();
    return result.path; // Return the public URL from Supabase
}


/**
 * Deletes multiple images by their paths.
 * @param imagePaths Array of image paths to delete.
 */
export async function deleteEventImages(imagePaths: string[]) {
    try {
        const response = await fetch('/api/delete_event_images', {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({imagePaths}),
        });

        if (!response.ok) {
            throw new Error('Failed to delete some or all images');
        }

        return await response.json();
    } catch (error) {
        console.error('Error deleting images:', error);
        throw error;
    }
}


