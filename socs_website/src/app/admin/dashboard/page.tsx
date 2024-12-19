'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/services/supabaseClient';

export default function Dashboard() {
    const [adminName, setAdminName] = useState<string | null>(null);
    const router = useRouter();

    // Fetch admin details
    // useEffect(() => {
    //     const fetchAdminDetails = async () => {
    //         const { data, error } = await supabase.auth.getUser();
    //
    //         if (error || !data.user) {
    //             console.error('Error fetching admin details:', error?.message || 'No user found');
    //             router.push('/public/login');
    //             return;
    //         }
    //         // Extract admin name from user_metadata or fallback to email
    //         const { user } = data;
    //         setAdminName(user.user_metadata?.full_name || user.email || 'Admin');
    //     };
    //
    //     fetchAdminDetails();
    // }, [router]);

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

    return (
        <div>
            <h1>Welcome, {adminName}</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}
