import {useEffect, useState, useRef} from "react";

interface CardSliderPageProps {
    images: string[]; // Array of image URLs (strings)
    intervalTime?: number; // Time interval in milliseconds (optional)
}

const CardSliderPage: React.FC<CardSliderPageProps> = ({
                                                           images,
                                                           intervalTime = 3000,
                                                       }) => {
    const [index, setIndex] = useState(0);
    const [sliderWidth, setSliderWidth] = useState(0);
    const sliderRef = useRef<HTMLDivElement | null>(null);

    // Auto-slide effect
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, intervalTime);

        return () => clearInterval(interval); // Cleanup
    }, [images.length, intervalTime]);

    // Update the slider size on resize
    useEffect(() => {
        const handleResize = () => {
            if (sliderRef.current) {
                // Dynamically get the container width
                const width = sliderRef.current.getBoundingClientRect().width;
                setSliderWidth(width);
            }
        };

        // Set size on initial load
        handleResize();

        // Listen for window resize
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div
            ref={sliderRef}
            className="overflow-hidden w-full"
            style={{
                height: `${sliderWidth}px`, // Ensure the slider remains square (1:1 ratio)
            }}
        >
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                    transform: `translateX(-${index * sliderWidth}px)`,
                    width: `${sliderWidth * images.length}px`, // Dynamic width based on image count
                }}
            >
                {images.map((image, i) => (
                    <img
                        key={i}
                        src={image}
                        alt={`Slide ${i + 1}`}
                        className="rounded-lg shadow-lg"
                        style={{
                            width: `${sliderWidth}px`, // Ensure 1:1 aspect ratio
                            height: `${sliderWidth}px`,
                            objectFit: "cover",
                            flexShrink: 0,
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default CardSliderPage;
