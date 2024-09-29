import { useEffect, useState, useRef } from "react";

// Define the prop types for the component
interface CardSliderPageProps {
  images: string[]; // Array of image URLs (strings)
  intervalTime?: number; // Time interval in milliseconds (optional)
}

const CardSliderPage: React.FC<CardSliderPageProps> = ({
  images,
  intervalTime = 3000,
}) => {
  const [index, setIndex] = useState(0);
  const [sliderSize, setSliderSize] = useState({ width: 250, height: 250 });
  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalTime);
    return () => clearInterval(interval);
  }, [images.length, intervalTime]);

  useEffect(() => {
    const handleResize = () => {
      if (sliderRef.current) {
        // Dynamically get the container size
        const { width, height } = sliderRef.current.getBoundingClientRect();
        setSliderSize({ width, height });
      }
    };

    // Set size on load
    handleResize();

    // Listen for window resize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      ref={sliderRef}
      className="overflow-hidden"
      style={{
        width: "100%", // Full width of the container
        height: "auto", // Height adjusts based on aspect ratio
      }}
    >
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${index * sliderSize.width}px)`,
          width: `${sliderSize.width * images.length}px`, // Dynamic width based on image count
        }}
      >
        {images.map((image, i) => (
          <img
            key={i}
            src={image}
            alt={`Slide ${i + 1}`}
            className="rounded-lg shadow-lg"
            style={{
              width: `${sliderSize.width}px`, // Adjust width dynamically
              height: `${sliderSize.height}px`, // Adjust height dynamically
              objectFit: "cover",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CardSliderPage;
