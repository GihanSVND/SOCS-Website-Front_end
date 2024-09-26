"use client";

import Navbar from "@/components/navbar";
import { useState, useEffect } from "react";

export default function News() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const shapes = [
        { title: 'Shape 1' },
        { title: 'Shape 2' },
        { title: 'Shape 3' },
        { title: 'Shape 4' },
        { title: 'Shape 5' },
    ];

    
    return (
        <div className="bg-black min-h-screen">
            <Navbar />
            <section>
                <div className="text-center">
                    <h1 className="text-white text-7xl mt-16">News</h1>
                    <div className="flex justify-center mt-2">
                        <img 
                            src="/images/news.png" 
                            alt="News Image" 
                            className="w-auto h-96"
                        />
                    </div>

                    {/* Shapes Display */}
                    <div className="flex justify-center mt-4">
                        <div 
                            className="w-[700px] h-[350px] border-2 border-white flex"
                            style={{ borderRadius: '20px' }}
                        >
                            {/* Left Part - 65% Width, Darker Background */}
                            <div 
                                className="flex-[0.65] flex items-center justify-center"
                                style={{ background: 'rgba(58, 58, 58, 0.6)', borderTopLeftRadius: '20px', borderBottomLeftRadius: '20px' }}
                            >
                                <span className="text-white text-xl">{shapes[currentIndex].title}</span>
                            </div>
                            {/* Right Part - 35% Width, Lighter Background */}
                            <div 
                                className="flex-[0.35] flex items-center justify-center"
                                style={{ background: 'rgba(58, 58, 58, 0.9)', borderTopRightRadius: '20px', borderBottomRightRadius: '20px' }}
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
                </div>
            </section>
        </div>
    );
}
