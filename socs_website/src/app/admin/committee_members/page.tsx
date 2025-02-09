'use client';

import {useEffect, useState} from 'react';
import AdminForm from '@/components/adminForm';
import {fetchAll, saveRecord, deleteRecord, uploadFile} from '@/services/adminService';
import Loading from "@/components/loading";
import Alert from "@/components/alert";

interface CommitteeMembers {
    id: string;
    name: string;
    role: string;
    imageSrc: string;
}

const AdminCommitteeMembersPage = () => {
    const [committeeMembers, setCommitteeMembers] = useState<CommitteeMembers[]>([]);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({id: '', name: '', role: '', imageSrc: ''});

    const [alert, setAlert] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null);

    const showAlert = (message: string, type: 'success' | 'error' | 'info') => {
        setAlert({message, type});
    };

    const loadCommitteeMembers = async () => {
        setLoading(true);
        try {
            const data = await fetchAll('committee_members');
            setCommitteeMembers(data);
        } catch (error) {
            console.error('Error loading committee members:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadCommitteeMembers();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleFileUpload = async (files: FileList | null) => {
        if (!files || files.length === 0) return;
        const file = files[0];

        try {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const path = await uploadFile(file, '/api/upload_image', 'committee_members');
            setFormData({...formData, imageSrc: path});
        } catch (error) {
            console.error('Error uploading file:', error);
            showAlert('Failed to upload file.', 'error');
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            await saveRecord('committee_members', formData);
            const data = await fetchAll('committee_members');
            setCommitteeMembers(data);
            setFormData({id: '', name: '', role: '', imageSrc: ''});
            showAlert('Committee Members saved successfully!', 'success');
        } catch (error) {
            console.error('Error saving committee member:', error);
            showAlert('Failed to save committee member.', 'error');
        } finally {
            setLoading(false);
            loadCommitteeMembers(); // Refresh the page data
        }
    };


    const handleDelete = async (id: string, imagePath: string) => {
        try {
            await deleteRecord('committee_members', id, imagePath);
            const data = await fetchAll('committee_members');
            setCommitteeMembers(data)
            showAlert('committee member deleted successfully!', 'success');
        } catch (error) {
            console.error('Error deleting committee member:', error);
            showAlert('Failed to delete committee member.', 'error');
        } finally {
            setLoading(false);
            loadCommitteeMembers(); // Refresh the page data
        }
    };

    if (loading) return <Loading/>;

    return (
        <div className="p-6">
            {alert && <Alert message={alert.message} type={alert.type} onClose={() => setAlert(null)}/>}
            <h1 className="text-2xl font-bold mb-6">Committee Members Page</h1>

            <AdminForm
                fields={[
                    {label: '', name: 'id', type: 'hidden', value: formData.id, onChange: handleChange},
                    {
                        label: 'Name',
                        name: 'name',
                        type: 'text',
                        value: formData.name,
                        onChange: handleChange,
                        required: true,
                    },
                    {
                        label: 'Role',
                        name: 'role',
                        type: 'text',
                        value: formData.role,
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
                buttonText={formData.id ? 'Update Member' : 'Add Member'}
            />

            <div className="grid grid-cols-1 gap-6 mt-6">
                {committeeMembers.map((member) => (
                    <div
                        key={member.id}
                        className="border p-4 rounded-md shadow-md flex justify-between items-center"
                    >
                        <div>
                            <h3 className="font-bold">{member.name}</h3>
                            <p>{member.role}</p>
                            <img
                                src={member.imageSrc}
                                alt={member.name}
                                className="w-16 h-16 mt-2 rounded-full object-cover"
                            />
                        </div>
                        <div>
                            <button
                                onClick={() => setFormData(member)}
                                className="bg-yellow-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-yellow-600"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(member.id, member.imageSrc)}
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

export default AdminCommitteeMembersPage;
