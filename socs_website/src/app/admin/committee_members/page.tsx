'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/services/supabaseClient';

interface TeamMember {
    id: string;
    name: string;
    role: string;
    imageSrc: string;
}

const AdminPage = () => {
    const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({ id: '', name: '', role: '', imageSrc: '' });

    // Fetch team members
    useEffect(() => {
        const fetchTeamMembers = async () => {
            try {
                const { data, error } = await supabase.from('team_members').select('*');
                if (error) throw error;
                setTeamMembers(data || []);
            } catch (error) {
                console.error('Error fetching team members:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchTeamMembers();
    }, []);

    // Handle form changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Add or Update a member
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (formData.id) {
                // Update existing member
                const { error } = await supabase
                    .from('team_members')
                    .update({
                        name: formData.name,
                        role: formData.role,
                        imageSrc: formData.imageSrc,
                    })
                    .eq('id', formData.id);
                if (error) throw error;
            } else {
                // Add new member
                const { error } = await supabase.from('team_members').insert({
                    name: formData.name,
                    role: formData.role,
                    imageSrc: formData.imageSrc,
                });
                if (error) throw error;
            }

            // Refresh the list
            const { data } = await supabase.from('team_members').select('*');
            setTeamMembers(data || []);
            setFormData({ id: '', name: '', role: '', imageSrc: '' }); // Reset form
        } catch (error) {
            console.error('Error saving team member:', error);
        }
    };

    // Delete a member
    const handleDelete = async (id: string) => {
        try {
            const { error } = await supabase.from('team_members').delete().eq('id', id);
            if (error) throw error;

            // Refresh the list
            const { data } = await supabase.from('team_members').select('*');
            setTeamMembers(data || []);
        } catch (error) {
            console.error('Error deleting team member:', error);
        }
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Admin Page</h1>

            {/* Form for Add/Update */}
            <form onSubmit={handleSubmit} className="mb-8">
                <input
                    type="hidden"
                    name="id"
                    value={formData.id}
                    onChange={handleChange}
                />
                <div className="mb-2">
                    <label className="block font-bold">Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="border p-2 w-full"
                        required
                    />
                </div>
                <div className="mb-2">
                    <label className="block font-bold">Role:</label>
                    <input
                        type="text"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="border p-2 w-full"
                        required
                    />
                </div>
                <div className="mb-2">
                    <label className="block font-bold">Image URL:</label>
                    <input
                        type="text"
                        name="imageSrc"
                        value={formData.imageSrc}
                        onChange={handleChange}
                        className="border p-2 w-full"
                        required
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    {formData.id ? 'Update Member' : 'Add Member'}
                </button>
            </form>

            {/* Team Members List */}
            <div className="grid grid-cols-1 gap-4">
                {teamMembers.map((member) => (
                    <div key={member.id} className="border p-4 flex justify-between items-center">
                        <div>
                            <h3 className="font-bold">{member.name}</h3>
                            <p>{member.role}</p>
                            <img src={member.imageSrc} alt={member.name} className="w-16 h-16 mt-2 rounded-full" />
                        </div>
                        <div>
                            <button
                                onClick={() => setFormData(member)} // Populate form for editing
                                className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(member.id)} // Delete member
                                className="bg-red-500 text-white px-4 py-2 rounded"
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

export default AdminPage;

