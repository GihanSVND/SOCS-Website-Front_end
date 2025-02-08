import Image from 'next/image';

interface AnnouncementsCardProps {
    title: string;
    description: string;
    imageSrc: string;
}

const AnnouncementsCardComponent: React.FC<AnnouncementsCardProps> = ({ title, description, imageSrc }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-black text-white relative">
            <div className="relative">
                {/* Background Image */}
                <Image
                    src={imageSrc}
                    alt={title}
                    width={500}
                    height={400}
                    className="w-full h-56  object-cover"
                />
                {/* Top Right Badge */}
                <div className="absolute top-2 right-2 bg-gray-900 text-white text-sm px-3 py-1 rounded-full shadow-md">
                    {title}
                </div>
            </div>

            {/* Bottom Text */}
            <div className="px-4 py-2 bg-gray-800 text-gray-400 text-sm">
                {description}
            </div>
        </div>
    );
};

export default AnnouncementsCardComponent;
