'use client';

import { useEffect, useState } from 'react';
import { fetchAll } from '@/services/adminService';

interface Announcement {
    id: string;
    title: string;
    description: string;
    imageSrc: string;
}

const AnnouncementsCardComponent = ({ title, description, imageSrc }: Announcement) => {
    return (
        <div className="relative w-full h-full group rounded-[17px] overflow-hidden">
            {/* Full-size image */}
            <img src={imageSrc} alt={title} className="w-full h-full object-cover" />

            {/* Black background description overlay - appears on hover */}
            <div className="absolute bottom-0 w-full bg-black bg-opacity-80 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm">{description}</p>
            </div>
        </div>
    );
};

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
        <section className="text-center py-16 bg-black px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
            <h2 className="text-4xl font-semibold mb-4 text-white">ANNOUNCEMENT</h2>
            {/* Container for the card components with horizontal scrolling */}
            <div className="flex overflow-x-auto space-x-8 mt-10" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {announcements.map((announcement) => (
                    <div key={announcement.id} className="flex-shrink-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]">
                        <AnnouncementsCardComponent {...announcement} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AnnouncementsPage;
