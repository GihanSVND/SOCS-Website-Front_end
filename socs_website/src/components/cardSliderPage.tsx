import { useEffect, useState } from "react";

// Define the prop types for the component
interface CardSliderPageProps {
  images: string[]; // Array of image URLs (strings)
  intervalTime?: number; // Time interval in milliseconds (optional)
  width?: number; // Slider width (optional)
  height?: number; // Slider height (optional)
}

const CardSliderPage: React.FC<CardSliderPageProps> = ({
  images,
  intervalTime = 3000,
  width = 250, // Default width is 250px
  height = 250, // Default height is 250px
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalTime); // Use the intervalTime prop for changing slides
    return () => clearInterval(interval);
  }, [images.length, intervalTime]);

  return (
    <div className="overflow-hidden" style={{ width: `${width}px` }}>
      {" "}
      {/* Use the width prop */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * width}px)` }} // Use width prop to calculate movement
      >
        {images.map((image, i) => (
          <img
            key={i}
            src={image}
            alt={`Slide ${i + 1}`}
            className="rounded-lg shadow-lg"
            style={{
              width: `${width}px`,
              height: `${height}px`,
              objectFit: "cover",
            }} // Use width and height props
          />
        ))}
      </div>
    </div>
  );
};

export default CardSliderPage;
