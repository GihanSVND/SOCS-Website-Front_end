'use client';

import {useEffect, useState} from 'react';
import AdminForm from '@/components/adminForm';
import {fetchAll, saveRecord, deleteRecord, uploadFile} from '@/services/adminService';

interface Collaboration {
    id: string;
    description: string;
    imageSrc: string;
}

const CollaborationsPage = () => {
    const [collaborations, setCollaborations] = useState<Collaboration[]>([]);
    const [formData, setFormData] = useState({
        id: '',
        description: '',
        imageSrc: '',
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadCollaborations = async () => {
            setLoading(true);
            try {
                const data = await fetchAll('collaborations');
                setCollaborations(data);
            } catch (error) {
                console.error('Error fetching collaborations:', error);
            } finally {
                setLoading(false);
            }
        };
        loadCollaborations();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleFileUpload = async (files: FileList | null) => {
        if (!files || files.length === 0) return;
        const file = files[0];

        try {
            const path = await uploadFile(file, '/api/collaboration_images_upload');
            setFormData({...formData, imageSrc: path});
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await saveRecord('collaborations', formData);
            const data = await fetchAll('collaborations');
            setCollaborations(data);
            setFormData({id: '', description: '', imageSrc: ''});
        } catch (error) {
            console.error('Error saving collaboration:', error);
        }
    };

    const handleDelete = async (id: string, imagePath: string) => {
        try {
            await deleteRecord('collaborations', id, imagePath);
            const data = await fetchAll('collaborations');
            setCollaborations(data);
        } catch (error) {
            console.error('Error deleting collaboration:', error);
        }
    };


    if (loading) return <div>Loading...</div>;

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Collaborations</h1>

            <AdminForm
                fields={[
                    {
                        label: 'Description',
                        name: 'description',
                        type: 'text',
                        value: formData.description,
                        onChange: handleChange,
                        required: true,
                    },
                    {
                        label: 'Image',
                        name: 'imageSrc',
                        type: 'file',
                        onChange: (e) => handleFileUpload(e.target.files),
                        required: true,
                    },
                ]}
                onSubmit={handleSubmit}
                buttonText={formData.id ? 'Update Collaboration' : 'Add Collaboration'}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {collaborations.map((collaboration) => (
                    <div
                        key={collaboration.id}
                        className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-800 text-white"
                    >
                        <img
                            src={collaboration.imageSrc}
                            alt={collaboration.description}
                            className="w-full h-56 object-cover"
                        />
                        <div className="px-4 py-2">
                            <p>{collaboration.description}</p>
                        </div>
                        <div className="flex justify-end space-x-2 mt-2 px-4 pb-4">
                            <button
                                onClick={() => setFormData(collaboration)}
                                className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(collaboration.id,collaboration.imageSrc)}
                                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CollaborationsPage;
