'use client';

import React, {useEffect, useState} from 'react';
import AdminForm from '@/components/adminForm';
import {fetchAll, saveRecord, deleteRecord, uploadFile} from '@/services/adminService';

interface Event {
    id: string;
    title: string;
    description: string;
    mainImage: string;
    additionalImages: string[];
}

const AdminEventsPage = () => {
    const [events, setEvents] = useState<Event[]>([]);
    const [formData, setFormData] = useState({
        id: '',
        title: '',
        description: '',
        mainImage: '',
        additionalImages: Array(9).fill(''),
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadEvents = async () => {
            setLoading(true);
            try {
                const data = await fetchAll('events');
                setEvents(data);
            } catch (error) {
                console.error('Error fetching events:', error);
            } finally {
                setLoading(false);
            }
        };
        loadEvents();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleFileUpload = async (files: FileList | null, type: string, index?: number) => {
        if (!files || files.length === 0) return;
        const file = files[0];

        try {
            const path = await uploadFile(file, `/api/events_images_upload`);
            if (type === 'main') {
                setFormData({...formData, mainImage: path});
            } else if (index !== undefined) {
                const updatedImages = [...formData.additionalImages];
                updatedImages[index] = path;
                setFormData({...formData, additionalImages: updatedImages});
            }
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await saveRecord('events', formData);
            const data = await fetchAll('events');
            setEvents(data);
            setFormData({
                id: '',
                title: '',
                description: '',
                mainImage: '',
                additionalImages: Array(9).fill(''),
            });
        } catch (error) {
            console.error('Error saving event:', error);
        }
    };

    const handleDelete = async (id: string) => {
        try {
            await deleteRecord('events', id);
            const data = await fetchAll('events');
            setEvents(data);
        } catch (error) {
            console.error('Error deleting event:', error);
        }
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div className="min-h-screen">
            <h1 className="text-4xl font-semibold text-center py-8">Admin: Events</h1>
            <AdminForm
                fields={[
                    {
                        label: 'Title',
                        name: 'title',
                        type: 'text',
                        value: formData.title,
                        onChange: handleChange,
                        required: true
                    },
                    {
                        label: 'Description',
                        name: 'description',
                        type: 'text',
                        value: formData.description,
                        onChange: handleChange
                    },
                    {
                        label: 'Main Image',
                        name: 'mainImage',
                        type: 'file',
                        onChange: (e) => handleFileUpload(e.target.files, 'main'),
                        required: true,
                    },

                    ...formData.additionalImages.map((_, index) => ({
                        label: `Additional Image ${index + 1}`,
                        name: `additionalImage${index}`,
                        type: 'file',

                        onChange: (e) => handleFileUpload(e.target.files, 'additional', index),
                    })),
                ]}
                onSubmit={handleSubmit}
                buttonText={formData.id ? 'Update Event' : 'Add Event'}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 px-6">
                {events.map((event) => (
                    <div key={event.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg text-center">
                        <img src={event.mainImage} alt={event.title} className="w-full h-56 object-cover"/>
                        <div className="p-4">
                            <h3 className="text-xl font-bold">{event.title}</h3>
                            <p className="mt-2">{event.description}</p>
                        </div>
                        <div className="flex justify-end p-4">
                            <button
                                onClick={() => setFormData(event)}
                                className="bg-yellow-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-yellow-600"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(event.id!)}
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

export default AdminEventsPage;
