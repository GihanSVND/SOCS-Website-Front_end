'use client';

import {useEffect, useState} from 'react';
import AnnouncementsCardComponent from '@/components/cards/announcements_card';
import {fetchAll} from '@/services/adminService';

interface Announcement {
    id: string;
    title: string;
    description: string;
    imageSrc: string;
}

const AnnouncementsPage = () => {
    const [announcements, setAnnouncements] = useState<Announcement[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadAnnouncements = async () => {
            setLoading(true);
            try {
                const data = await fetchAll('announcements');
                setAnnouncements(data);
            } catch (error) {
                console.error('Error fetching announcements:', error);
            } finally {
                setLoading(false);
            }
        };
        loadAnnouncements();
    }, []);

    if (loading) return <div className="text-center">Loading...</div>;

    return (
        <section className="text-center py-16 bg-black">
            <h2 className="text-4xl font-semibold mb-4 text-white">ANNOUNCEMENT</h2>
            {/* Container for the card components */}
            <div className="flex justify-center items-center space-x-8 mt-10">
                    {announcements.map((announcement) => (
                        <AnnouncementsCardComponent
                            key={announcement.id}
                            title={announcement.title}
                            description={announcement.description}
                            imageSrc={announcement.imageSrc}
                        />
                    ))}
            </div>
        </section>
    );
};

export default AnnouncementsPage;
