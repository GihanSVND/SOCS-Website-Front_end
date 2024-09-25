import Image from 'next/image';

const AnnouncementsCardComponent = () => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-black text-white relative">
            <div className="relative">
                {/* Background Image */}
                <Image
                    src="/images/annoncmentcard.png"
                    alt="Fortnight Meetup"
                    width={500}
                    height={400}
                    className="w-full h-56 object-cover"
                />
                {/* Top Right Badge */}
                <div className="absolute top-2 right-2 bg-gray-900 text-white text-sm px-3 py-1 rounded-full shadow-md">
                    FORTNIGHT
                </div>
            </div>

            {/* Bottom Text */}
            <div className="px-4 py-2 bg-gray-800 text-gray-400 text-sm">
                Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you...
            </div>
        </div>
    );
}

export default AnnouncementsCardComponent;
