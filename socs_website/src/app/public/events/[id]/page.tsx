"use client";
import {useParams} from 'next/navigation';
import {useEffect, useState} from 'react';

interface Event {
    id: string;
    title: string;
    description: string;
    mainImage: string;
    additionalImages: string[];
}

const EventPage = () => {
    const [event, setEvent] = useState<Event | null>(null);
    const params = useParams();

    useEffect(() => {
        if (!params?.id) return; // Wait until `id` is available

        const fetchEvent = async () => {
            try {
                const response = await fetch(`/api/events/${params.id}`);
                if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
                const data = await response.json();
                setEvent(data);
            } catch (error) {
                console.error('Error fetching event:', error);
            }
        };

        fetchEvent();
    }, [params?.id]);

    if (!params?.id || !event) {
        return <div>Loading...</div>;
    }

    return (
        <div className="bg-black text-white min-h-screen">
            <h1 className="text-5xl font-bold text-center py-8">{event.title}</h1>
            <img src={event.mainImage} alt={event.title} className="w-full h-[500px] object-cover"/>
            <div className="p-8">
                <p>{event.description}</p>
            </div>
            <div className="grid grid-cols-3 gap-4 px-8">
                {event.additionalImages.map((img, index) => (
                    <img key={index} src={img} alt={`Additional ${index + 1}`}
                         className="w-full h-[300px] object-cover"/>
                ))}
            </div>
        </div>
    );
};

export default EventPage;
