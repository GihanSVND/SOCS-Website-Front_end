'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { supabase } from '@/services/supabaseClient';
import { Session } from '@supabase/supabase-js';
import { FaNewspaper } from 'react-icons/fa'; // Example icon from react-icons

export default function Dashboard() {
    const router = useRouter();
    const [session, setSession] = useState<Session | null>(null);

    useEffect(() => {
        async function fetchSession() {
            const { data, error } = await supabase.auth.getSession();
            if (error) {
                console.error('Error fetching session:', error);
                return;
            }
            console.log(data);
            console.log('Session:', session);
            setSession(data.session);
        }

        fetchSession();
    }, []);

    // Logout handler
    const handleLogout = async () => {
        try {
            const response = await fetch('/api/logout', {
                method: 'POST',
            });
            if (response.ok) {
                router.push('/public/login'); // Redirect to login page after logout
            } else {
                console.error('Logout failed');
            }
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    // Rectangle click handler
    const handleRectangleClick = (page: string) => {
        router.push(page); // Navigate to the specified page
    };

    return (
        <div className="min-h-screen bg-black p-[100px]">
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold">Welcome,</h1>
                <button
                    onClick={handleLogout}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Logout
                </button>
            </div>

            {/* Responsive Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[50px]">
                {[
                    { id: 1, label: 'News', icon: <FaNewspaper />, page: '/admin/news' },
                    { id: 2, label: 'News', icon: <FaNewspaper />, page: '/admin/news' },
                    { id: 3, label: 'News', icon: <FaNewspaper />, page: '/admin/news' },
                    { id: 4, label: 'News', icon: <FaNewspaper />, page: '/admin/news' },
                    { id: 5, label: 'News', icon: <FaNewspaper />, page: '/admin/news' },
                    { id: 6, label: 'News', icon: <FaNewspaper />, page: '/admin/news' },
                ].map((rect) => (
                    <div
                        key={rect.id}
                        className="border bg-[#141414] w-full aspect-square rounded-[17px] shadow-md flex flex-col items-center justify-center text-white text-lg font-semibold cursor-pointer transition hover:bg-white hover:text-black hover:shadow-[0_0_20px_10px_rgba(255,255,255,0.2)]"
                        onClick={() => handleRectangleClick(rect.page)}
                    >
                        <div className="text-3xl mb-2">{rect.icon}</div>
                        <span>{rect.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
