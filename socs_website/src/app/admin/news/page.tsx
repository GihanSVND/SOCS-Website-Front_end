'use client';

import {useEffect, useState} from 'react';
import AdminForm from '@/components/adminForm';
import {fetchAll, saveRecord, deleteRecord, uploadFile} from '@/services/adminService';

interface NewsItem {
    id: string;
    title: string;
    description: string;
    imageSrc: string;
}

const NewsPage = () => {
    const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
    const [formData, setFormData] = useState({
        id: '',
        title: '',
        description: '',
        imageSrc: '',
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadNewsItems = async () => {
            setLoading(true);
            try {
                const data = await fetchAll('news');
                setNewsItems(data);
            } catch (error) {
                console.error('Error fetching news:', error);
            } finally {
                setLoading(false);
            }
        };
        loadNewsItems();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleFileUpload = async (files: FileList | null) => {
        if (!files || files.length === 0) return;
        const file = files[0];

        try {
            const path = await uploadFile(file, '/api/news_images_upload');
            setFormData({...formData, imageSrc: path});
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await saveRecord('news', formData);
            const data = await fetchAll('news');
            setNewsItems(data);
            setFormData({id: '', title: '', description: '', imageSrc: ''});
        } catch (error) {
            console.error('Error saving news item:', error);
        }
    };

    const handleDelete = async (id: string, imagePath: string) => {
        try {
            await deleteRecord('news', id, imagePath);
            const data = await fetchAll('news');
            setNewsItems(data);
        } catch (error) {
            console.error('Error deleting news item:', error);
        }
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div className=" min-h-screen ">
            <h1 className="text-4xl font-semibold text-center py-8">News</h1>
            <AdminForm
                fields={[
                    {
                        label: 'Title',
                        name: 'title',
                        type: 'text',
                        value: formData.title,
                        onChange: handleChange,
                        required: true,
                    },
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
                buttonText={formData.id ? 'Update News' : 'Add News'}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-6">
                {newsItems.map((newsItem) => (
                    <div
                        key={newsItem.id}
                        className="bg-gray-800 rounded-lg overflow-hidden shadow-lg text-center"
                    >
                        <img
                            src={newsItem.imageSrc}
                            alt={newsItem.title}
                            className="w-full h-56 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-bold">{newsItem.title}</h3>
                            <p className="mt-2">{newsItem.description}</p>
                        </div>
                        <div className="flex justify-end p-4">
                            <button
                                onClick={() => setFormData(newsItem)}
                                className="bg-yellow-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-yellow-600"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(newsItem.id, newsItem.imageSrc)}
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

export default NewsPage;
