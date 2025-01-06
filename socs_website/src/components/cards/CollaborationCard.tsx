interface CollaborationCardProps {
    title: string;
    description: string;
    imageSrc: string;
}

const CollaborationCard: React.FC<CollaborationCardProps> = ({title, description, imageSrc}) => {
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img src={imageSrc} alt={title} className="w-full h-60 object-cover"/>
            <div className="p-5">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-gray-700 mt-3">{description}</p>
            </div>
        </div>
    );
};

export default CollaborationCard;
