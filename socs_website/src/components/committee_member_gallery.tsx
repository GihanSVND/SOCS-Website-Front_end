import Image from 'next/image';

const teamMembers = [
    {
        name: 'Mr. Shavinda Wanigasekara',
        role: 'PRESIDENT',
        imageSrc: '/group9.png', // Replace with the correct image path
    },
    {
        name: 'Mr. Gihan Savinda',
        role: 'SECRETARY',
        imageSrc: '/images/2.png', // Replace with the correct image path
    },
    {
        name: 'Miss Ashansa Wijeratne',
        role: 'SENIOR TREASURE',
        imageSrc: '/group9.png', // Replace with the correct image path
    },
    {
        name: 'Mr. Ravindu Chandrarathna',
        role: 'TREASURE',
        imageSrc: '/group9.png', // Replace with the correct image path
    },
    {
        name: 'Mr. Sajika Dilshan',
        role: 'VICE PRESIDENT',
        imageSrc: '/group9.png', // Replace with the correct image path
    },
    {
        name: 'Ms. Kawmadi Sandakal',
        role: 'EDITOR',
        imageSrc: '/group9.png', // Replace with the correct image path
    },
    {
        name: 'Ms. Isuri Perera',
        role: 'VICE SECRETARY',
        imageSrc: '/group9.png', // Replace with the correct image path
    },
];

const Committee_member_gallery = () => {
    return (
        <section className="py-7 bg-black text-white">
            {/* First row - 4 items */}
            <div className="flex justify-center px-4">
                <div className="grid grid-cols-4 gap-14 max-w-4xl">
                    {teamMembers.slice(0, 4).map((member, index) => (
                        <div key={index} className="text-center">
                            {/* Circular Image with Border */}
                            <div className="w-32 h-32 mx-auto mb-4 relative">
                                <Image
                                    src={member.imageSrc}
                                    alt={member.name}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-full border-4 border-white"
                                />
                            </div>
                            <h3 className="font-bold text-lg">{member.role}</h3>
                            <p className="text-sm text-gray-300">{member.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Second row - 3 items, centered */}
            <div className="flex justify-center gap-14 mt-12">
                {teamMembers.slice(4, 7).map((member, index) => (
                    <div key={index} className="text-center">
                        {/* Circular Image with Border */}
                        <div className="w-32 h-32 mx-auto mb-4 relative">
                            <Image
                                src={member.imageSrc}
                                alt={member.name}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-full border-4 border-white"
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

export default Committee_member_gallery;
