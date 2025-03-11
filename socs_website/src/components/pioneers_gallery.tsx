'use client';

import {useState} from 'react';
import Image from 'next/image';
import {motion} from 'framer-motion';

interface Pioneer {
    name: string;
    role: string;
    imageSrc: string;
}

// Static members for each year
const teamData: Record<number, Pioneer[]> = {
    2023: [
        {name: 'Mr. ABC Perera', role: 'President', imageSrc: '/images/president.png'},
        {name: 'Mr. ABC Perera', role: 'Secretary', imageSrc: '/images/secretary.png'},
        {name: 'Mr. ABC Perera', role: 'Senior Treasurer', imageSrc: '/images/treasurer.png'},
        {name: 'Mr. ABC Perera', role: 'Treasurer', imageSrc: '/images/treasurer.png'},
        {name: 'Mr. ABC Perera', role: 'Vice President', imageSrc: '/images/vp.png'},
        {name: 'Mr. ABC Perera', role: 'Editor', imageSrc: '/images/editor.png'},
        {name: 'Mr. ABC Perera', role: 'Vice Secretary', imageSrc: '/images/vice-secretary.png'}
    ],
    2022: [
        {name: 'Mr. XYZ Silva', role: 'President', imageSrc: '/images/president.png'},
        {name: 'Mr. XYZ Silva', role: 'Secretary', imageSrc: '/images/secretary.png'},
        {name: 'Mr. XYZ Silva', role: 'Senior Treasurer', imageSrc: '/images/treasurer.png'},
        {name: 'Mr. XYZ Silva', role: 'Treasurer', imageSrc: '/images/treasurer.png'},
        {name: 'Mr. XYZ Silva', role: 'Vice President', imageSrc: '/images/vp.png'},
        {name: 'Mr. XYZ Silva', role: 'Editor', imageSrc: '/images/editor.png'},
        {name: 'Mr. XYZ Silva', role: 'Vice Secretary', imageSrc: '/images/vice-secretary.png'}
    ],
    2021: [
        {name: 'Mr. LMN Fernando', role: 'President', imageSrc: '/images/president.png'},
        {name: 'Mr. LMN Fernando', role: 'Secretary', imageSrc: '/images/secretary.png'},
        {name: 'Mr. LMN Fernando', role: 'Senior Treasurer', imageSrc: '/images/treasurer.png'},
        {name: 'Mr. LMN Fernando', role: 'Treasurer', imageSrc: '/images/treasurer.png'},
        {name: 'Mr. LMN Fernando', role: 'Vice President', imageSrc: '/images/vp.png'},
        {name: 'Mr. LMN Fernando', role: 'Editor', imageSrc: '/images/editor.png'},
        {name: 'Mr. LMN Fernando', role: 'Vice Secretary', imageSrc: '/images/vice-secretary.png'}
    ]
};

// Available years
const years = [2023, 2022, 2021];

const PioneersGallery = () => {
    const [selectedYearIndex, setSelectedYearIndex] = useState(0);
    const selectedYear = years[selectedYearIndex];
    const currentMembers = teamData[selectedYear] || [];

    const handleNextYear = () => {
        if (selectedYearIndex > 0) {
            setSelectedYearIndex(selectedYearIndex - 1);
        }
    };

    const handlePrevYear = () => {
        if (selectedYearIndex < years.length - 1) {
            setSelectedYearIndex(selectedYearIndex + 1);
        }
    };

    return (
        <section className="py-7 bg-black text-white">
            {/* Year Selection with Arrows */}
            <div className="flex items-center justify-center mb-6">
                <button
                    onClick={handlePrevYear}
                    className="text-white px-4 py-2 rounded hover:bg-gray-700 disabled:opacity-50"
                    disabled={selectedYearIndex === years.length - 1}
                >
                    ◀
                </button>
                <h2 className="text-2xl font-semibold mx-6">{selectedYear} / {selectedYear + 1}</h2>
                <button
                    onClick={handleNextYear}
                    className="text-white px-4 py-2 rounded hover:bg-gray-700 disabled:opacity-50"
                    disabled={selectedYearIndex === 0}
                >
                    ▶
                </button>
            </div>

            {/* Members Grid */}
            <motion.div
                key={selectedYear}
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
            >
                <div className="flex justify-center px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 max-w-4xl">
                        {currentMembers.slice(0, 4).map((member, index) => (
                            <div key={index} className="text-center">
                                <div className="w-32 h-32 mx-auto mb-4 relative">
                                    <Image
                                        src={member.imageSrc}
                                        alt=" "
                                        width={128}
                                        height={128}
                                        className="rounded-full border-4 border-white object-cover"
                                    />
                                </div>
                                <h3 className="font-bold text-lg">{member.role}</h3>
                                <p className="text-sm text-gray-300">{member.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Last 3 members centered */}
                <div className="flex justify-center mt-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
                        {currentMembers.slice(4).map((member, index) => (
                            <div key={index} className="text-center">
                                <div className="w-32 h-32 mx-auto mb-4 relative">
                                    <Image
                                        src={member.imageSrc}
                                        alt=" "
                                        width={128}
                                        height={128}
                                        className="rounded-full border-4 border-white object-cover"
                                    />
                                </div>
                                <h3 className="font-bold text-lg">{member.role}</h3>
                                <p className="text-sm text-gray-300">{member.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default PioneersGallery;
