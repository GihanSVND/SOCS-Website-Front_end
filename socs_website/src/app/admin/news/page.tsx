'use client';

import {useEffect, useState} from 'react';
import AdminForm from '@/components/adminForm';
import {fetchAll, saveRecord, deleteRecord, uploadFile} from '@/services/adminService';
import Loading from "@/components/loading";
import Alert from "@/components/alert";

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
    const [loading, setLoading] = useState(false);

    const [alert, setAlert] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null);

    const showAlert = (message: string, type: 'success' | 'error' | 'info') => {
        setAlert({message, type});
    };

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

    useEffect(() => {
        loadNewsItems();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleFileUpload = async (files: FileList | null) => {
        if (!files || files.length === 0) return;
        const file = files[0];

        //@ts-expect-error
        setFormData({ ...formData, imageSrc: file }); // Store File object temporarily

        try {
            showAlert('Uploading image, please wait...', 'info');
            const imageUrl = await uploadFile(file, '/api/upload_image'); // Upload file
            setFormData({ ...formData, imageSrc: imageUrl }); // Replace File with URL
            showAlert('Image uploaded successfully!', 'success');
        } catch (error) {
            console.error('Error uploading file:', error);
            showAlert('Failed to upload file.', 'error');
        }
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            let imageUrl = formData.imageSrc; // Check if image URL already exists

            // If imageSrc is a File (new file selected), upload it first
            //@ts-expect-error
            if (formData.imageSrc instanceof File) {
                showAlert('Uploading image, please wait...', 'info');
                imageUrl = await uploadFile(formData.imageSrc, '/api/upload_image'); // Upload file
                showAlert('Image uploaded successfully!', 'success');
            }

            // Ensure we're passing a string (image URL) when saving the news record
            await saveRecord('news', { ...formData, imageSrc: imageUrl });

            // Reload news items
            const data = await fetchAll('news');
            setNewsItems(data);

            // Reset form after successful submission
            setFormData({ id: '', title: '', description: '', imageSrc: '' });

            showAlert('News saved successfully!', 'success');
        } catch (error) {
            console.error('Error saving news item:', error);
            showAlert('Failed to save news.', 'error');
        } finally {
            setLoading(false);
            loadNewsItems();
        }
    };


    const handleDelete = async (id: string, imagePath: string) => {
        try {
            await deleteRecord('news', id, imagePath);
            const data = await fetchAll('news');
            setNewsItems(data);
            showAlert('News deleted successfully!', 'success');
        } catch (error) {
            console.error('Error deleting news item:', error);
            showAlert('Failed to delete news.', 'error');
        } finally {
            setLoading(false);
            loadNewsItems(); // Refresh the page data
        }
    };

    if (loading) return <Loading/>;

    return (
        <div className=" min-h-screen ">
            {alert && <Alert message={alert.message} type={alert.type} onClose={() => setAlert(null)}/>}
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
