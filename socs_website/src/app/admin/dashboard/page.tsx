'use client';

import { useRouter } from 'next/navigation';

export default function Dashboard() {
    const router = useRouter();


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
