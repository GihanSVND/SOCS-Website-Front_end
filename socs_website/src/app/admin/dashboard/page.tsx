'use client';

import {useRouter} from 'next/navigation';
import {useEffect, useState} from 'react';
import {supabase} from '@/services/supabaseClient';
import {Session} from '@supabase/supabase-js';
import {FaNewspaper, FaBullhorn, FaCalendarAlt, FaHandshake, FaUniversity, FaSignOutAlt} from 'react-icons/fa';
import {Poppins} from "next/font/google";

const poppins4 = Poppins({weight: "400", subsets: ["latin"]});
const poppins2 = Poppins({weight: "200", subsets: ["latin"]});

export default function Dashboard() {
    const router = useRouter();
    const [session, setSession] = useState<Session | null>(null);

    useEffect(() => {
        async function fetchSession() {
            const {data, error} = await supabase.auth.getSession();
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
        <div className="min-h-screen bg-black  py-[40px] px-[100px]">
            
            <div className="flex justify-between items-center">
                <h1 className={`${poppins4.className} text-[30px] sm:text-[40px] md:text-[60px] font-extrabold text-gray-300`}>
                    Publish Menu
                </h1>
                <button
                    onClick={handleLogout}
                    className="flex items-center justify-center bg-white text-black px-8 py-4 rounded-[15px] hover:shadow-[0_0_20px_5px_rgba(255,255,255,0.3)] transition shadow-md"
                >
                    <FaSignOutAlt className="text-2xl mr-2" /> {/* Logout icon */}
                    Logout
                </button>
            </div>

            {/* Responsive Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[50px]">
                {[
                    {id: 1, label: 'News', icon: <FaNewspaper/>, page: '/admin/news'},
                    {id: 2, label: 'Announcements', icon: <FaBullhorn/>, page: '/admin/announcement'},
                    {id: 3, label: 'Events', icon: <FaCalendarAlt/>, page: '/admin/events'},
                    {id: 4, label: 'Collaborations', icon: <FaHandshake/>, page: '/admin/collaborations'},
                    {id: 5, label: 'Committee Members', icon: <FaUniversity/>, page: '/admin/committee_members'},
                    {id: 6, label: 'News', icon: <FaNewspaper/>, page: '/admin/news'},
                ].map((rect) => (
                    <div
                        key={rect.id}
                        className={`${poppins2.className} border bg-[#141414] w-full aspect-square rounded-[17px] shadow-md flex flex-col items-center justify-center text-white text-lg font-semibold cursor-pointer transition hover:bg-white hover:text-black hover:shadow-[0_0_20px_10px_rgba(255,255,255,0.2)] border-opacity-20`}
                        onClick={() => handleRectangleClick(rect.page)}
                    >
                        <div className="text-7xl mb-4">{rect.icon}</div> {/* Increased icon size */}
                        <span className="text-l">{rect.label}</span> {/* Increased label size */}
                    </div>
                ))}
            </div>
        </div>
    );
}
