'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { supabase } from '@/services/supabaseClient';

abstract class CommitteeMember {
    abstract name: string;
    abstract role: string;
    abstract imageSrc: string;
}

const CommitteeMemberGallery = () => {
    const [teamMembers, setTeamMembers] = useState<CommitteeMember[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTeamMembers = async () => {
            try {
                const { data, error } = await supabase.from('committee_members').select('*');
                console.log(data);
                if (error) throw error;

                setTeamMembers(data || []);
            } catch (error) {
                if (error instanceof Error) {
                    console.error('Error fetching team members:', error.message);
                } else {
                    console.error('An unexpected error occurred:', error);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchTeamMembers();
    }, []);

    if (loading) {
        return <div className="text-center text-white py-7">Loading team members...</div>;
    }

    return (
        <section className="py-7 bg-black text-white">
            {/* Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-14 max-w-4xl mx-auto">
                {teamMembers.slice(0, 4).map((member, index) => (
                    <div key={index} className="text-center">
                        <div className="w-[200px] h-[200px] mx-auto mb-4 relative">
                            <Image
                                src={member.imageSrc}
                                alt={member.name}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-full border-white"
                            />
                        </div>
                        <h3 className="font-bold text-lg">{member.role}</h3>
                        <p className="text-sm text-gray-300">{member.name}</p>
                    </div>
                ))}
            </div>

            {/* Second Row - Centered */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 mt-12 max-w-3xl mx-auto place-items-center">
                {teamMembers.slice(4, 7).map((member, index) => (
                    <div key={index} className="text-center">
                        <div className="w-[200px] h-[200px] mx-auto mb-4 relative">
                            <Image
                                src={member.imageSrc}
                                alt={member.name}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-full border-white"
                            />
                        </div>
                        <h3 className="font-bold text-lg">{member.role}</h3>
                        <p className="text-sm text-gray-300">{member.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CommitteeMemberGallery;
