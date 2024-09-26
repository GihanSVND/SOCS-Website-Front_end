"use client";

import Navbar from "@/components/navbar";

export default function About() {
    return (
        <div className="bg-black min-h-screen">
            <Navbar />
            <section className="flex justify-between items-start mt-10 relative"> {/* Align items at the start */}
                <div className="text-left ml-32">
                    <h1 className="text-white text-7xl">
                        CONTACT US
                    </h1>
                </div>
                <div className="mr-0 relative -mt-10"> {/* Added margin-top here */}
                    <img 
                        src="/images/contact us.png" 
                        alt="Contact Us" 
                        style={{ width: '600px', height: 'auto' }} // Set width
                    />
                    <div 
                        className="absolute top-0 left-0 h-full w-full bg-gradient-to-l from-black via-black to-transparent opacity-100" 
                        style={{ clipPath: 'inset(0 0% 0 0)' }} // Adjust gradient opacity for the left side
                    />
                </div>
            </section>
        </div>
    );
}