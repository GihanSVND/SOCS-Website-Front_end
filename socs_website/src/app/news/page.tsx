"use client";

import Navbar from "@/components/navbar";

export default function News() {
    return (
        <div className="bg-black min-h-screen">
            <Navbar />
            <section>
                <div className="text-center">
                    <h1 className="text-white text-7xl mt-16">
                        News
                    </h1>
                    <div className="flex justify-center mt-2">
                        <img 
                            src="/images/news.png" 
                            alt="News Image" 
                            className="w-auto h-96"
                        />
                    </div>
                    {/* Rectangle below the image */}
                    <div className="flex justify-center mt-4">
                        <div className="flex w-full max-w-xl">
                            <div 
                                className="w-3/5 h-[250px] border-2 border-white" 
                                style={{ 
                                    background: 'rgba(58, 58, 58, 0.6)', 
                                    borderTopLeftRadius: '20px', 
                                    borderBottomLeftRadius: '20px' 
                                }}
                            ></div>
                            <div 
                                className="w-2/5 h-[250px] border-2 border-white" 
                                style={{ 
                                    background: 'rgba(58, 58, 58, 1.0)',
                                    borderTopRightRadius: '20px', 
                                    borderBottomRightRadius: '20px' 
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
