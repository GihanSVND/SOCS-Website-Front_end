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
            <h2 className={`${poppins5.className} text-4xl md:text-5xl pt-10 font-semibold mb-4 text-white`}>COLLABORATIONS</h2>
            <p className={`${poppins4.className} mt-10  mr-[25px] ml-[25px] md:mx-auto max-w-5xl text-white text-[12px] sm:text-[14px] md:text-[16px]`}>
            The Society of Computer Sciences (SOCS) actively collaborates with various organizations within the university and leading tech companies across Sri Lanka to enhance students learning experiences and industry exposure. These partnerships enable SOCS to organize workshops, tech talks, hackathons, and career development programs, providing undergraduates with valuable networking opportunities and hands-on experience. By bridging academia and industry, SOCS ensures that students stay updated with the latest technological advancements and gain practical insights that prepare them for future careers in the IT field.
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
