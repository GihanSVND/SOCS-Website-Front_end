'use client';

import {useEffect, useState} from 'react';
import CollaborationCard from '@/components/cards/CollaborationCard';
import {fetchAll} from '@/services/adminService';
import { Poppins } from "next/font/google";

const poppins5 = Poppins({ weight: "500", subsets: ["latin"] });
const poppins4 = Poppins({ weight: "400", subsets: ["latin"] });

interface Collaboration {
    id: string;
    description: string;
    imageSrc: string;
}

const CollaborationsSection = () => {
    const [collaborations, setCollaborations] = useState<Collaboration[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadCollaborations = async () => {
            setLoading(true);
            try {
                const data = await fetchAll('collaborations');
                setCollaborations(data);
            } catch (error) {
                console.error('Error fetching collaborations:', error);
            } finally {
                setLoading(false);
            }
        };
        loadCollaborations();
    }, []);

    return (
        <section className="text-center py-16 bg-black">
            <h2 className={`${poppins5.className} text-5xl pt-10 font-semibold mb-4 text-white`}>COLLABORATIONS</h2>
            <p className={`${poppins4.className} mt-10 mx-auto max-w-5xl text-white`}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                leap into electronic typesetting, remaining essentially unchanged.
            </p>
            {loading ? (
                <div className="text-white">Loading...</div>
            ) : (
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-5 max-w-6xl mx-auto">
                    {collaborations.map((collaboration) => (
                        <CollaborationCard
                            key={collaboration.id}
                            title={`Collaboration ${collaboration.id}`}
                            description={collaboration.description}
                            imageSrc={collaboration.imageSrc}
                        />
                    ))}
                </div>
            )}
        </section>
    );
};

export default CollaborationsSection;
