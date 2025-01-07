import {supabase} from '@/services/supabaseClient';
import path from "path";
import fs from "fs";

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


/**
 * Uploads a file to the server and returns the relative file path.
 * @param file The file to upload.
 * @param apiEndpoint The API endpoint to handle the file upload.
 */
export async function uploadFile(file: File, apiEndpoint: string): Promise<string> {
    const reader = new FileReader();

    return new Promise((resolve, reject) => {
        reader.onload = async (e) => {
            if (!e.target?.result) return reject('File read error');

            const base64Image = e.target.result.toString();
            try {
                const response = await fetch(apiEndpoint, {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({file: base64Image}),
                });

                const {path} = await response.json();
                resolve(path);
            } catch (error) {
                console.error('Error uploading file:', error);
                reject(error);
            }
        };

        reader.readAsDataURL(file);
    });
}
