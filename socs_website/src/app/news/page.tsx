"use client";

import Navbar from "@/components/navbar";
import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function News() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showImage, setShowImage] = useState(true);
    const [fadeIn, setFadeIn] = useState(false); // State for fade-in effect
    const shapes = [
        { title: 'Shape 1' },
        { title: 'Shape 2' },
        { title: 'Shape 3' },
        { title: 'Shape 4' },
        { title: 'Shape 5' },
    ];

    const shapeGrid = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
        { id: 9 }
    ];

    // Auto-rotate shapes every 2 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % shapes.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [shapes.length]);

    // Hide the image and trigger fade-in effect after 2 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowImage(false);
            setFadeIn(true); // Start fade-in effect
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="bg-black min-h-screen">
            <Navbar />
            <section>
                <div className="text-center">
                    <h1 className="text-white text-7xl mt-16">News</h1>

                    {/* Conditional Rendering for Image */}
                    {showImage && (
                        <div className="flex justify-center mt-2">
                            <img 
                                src="/images/news.png" 
                                alt="News Image" 
                                className="w-auto h-96"
                            />
                            <div className="absolute inset-0 bottom-0 h-3/4 bg-gradient-to-t from-black to-transparent" />
                        </div>
                    )}

                    {/* Circular Icon Underneath */}
                    <div className={`flex justify-center mt-4 ${showImage ? 'mt-16' : 'mt-2'} transition-all duration-500 ${fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        <div 
                            className="flex items-center justify-center w-5 h-5 border-2 border-white rounded-full cursor-pointer"
                        >
                            <FaChevronDown className="text-white text-1xl" />
                        </div>
                    </div>

                    {/* Shapes Display */}
                    <div className={`flex justify-center mt-4 ${showImage ? 'mt-8' : 'mt-2'} transition-all duration-500 ${fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        <div 
                            className="w-[700px] h-[350px] flex relative rounded-lg" // Removed border here
                        >
                            {/* Left Part - 65% Width, Darker Background */}
                            <div 
                                className="flex-[0.65] flex items-center justify-center rounded-l-lg border-2 border-white" // Added border class for the left part
                                style={{ background: 'rgba(58, 58, 58, 0.6)', borderTopLeftRadius: '24px', borderBottomLeftRadius: '24px' }}
                            >
                                <span className="text-white text-xl">{shapes[currentIndex].title}</span>
                            </div>

                            {/* White Border Line */}
                            <div className="absolute top-0 bottom-0 left-[65%] w-[0.5px] bg-white" />

                            {/* Right Part - 35% Width, Lighter Background */}
                            <div 
                                className="flex-[0.35] flex items-center justify-center rounded-r-lg border-2 border-white" // Added border class for the right part
                                style={{ background: 'rgba(58, 58, 58, 0.9)', borderTopRightRadius: '24px', borderBottomRightRadius: '24px' }}
                            >
                                <span className="text-black text-xl">Additional Info</span>
                            </div>
                        </div>
                    </div>

                    {/* Dots for Navigation */}
                    <div className="flex justify-center mt-16">
                        {shapes.map((_, index) => (
                            <div
                                key={index}
                                className={`mx-1 cursor-pointer ${currentIndex === index ? 'bg-white w-14 h-3' : 'bg-gray-600 w-3 h-3'} rounded-full transition-all duration-300`}
                                onClick={() => setCurrentIndex(index)}
                            />
                        ))}
                    </div>

                    {/* Centered Shape Grid with Horizontal Gap */}
                    <div className="flex justify-center mt-16">
                        <div className="grid grid-cols-3 gap-3">
                            {shapeGrid.map((shape) => (
                                <div 
                                    key={shape.id}
                                    className="w-[150px] h-[150px] bg-gradient-to-b from-gray-600 to-gray-800 rounded-md"
                                    style={{ boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)' }}
                                >
                                    {/* Placeholder for shape content */}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
