'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { supabase } from '@/services/supabaseClient';
import { Session } from '@supabase/supabase-js';

export default function Dashboard() {
    const router = useRouter();
    const [session, setSession] = useState<Session | null>(null)

    useEffect(() => {
        async function fetchSession() {
            const { data, error } = await supabase.auth.getSession();
            if (error) {
                console.error('Error fetching session:', error);
                return;
            }
            console.log(data)
            console.log('Session:', session);
            setSession(data.session); // Safe to set the session here
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

    return (
        <div>
            <h1>Welcome,</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}
