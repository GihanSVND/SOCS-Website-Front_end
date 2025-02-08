"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import {useEffect, useState} from "react";
import {supabase} from "@/services/supabaseClient";
import {Poppins} from "next/font/google";

interface NewsItem {
    id: string;
    title: string;
    description: string;
    imageSrc: string;
}

const poppins3 = Poppins({ weight: "300", subsets: ["latin"] });

export default function News() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showImage, setShowImage] = useState(true);
    const [fadeIn, setFadeIn] = useState(false);
    const [newsItems, setNewsItems] = useState<NewsItem[]>([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const {data, error} = await supabase.from('news').select('*'); // Assuming table name is 'news'

                if (error) throw error;

                setNewsItems(data || []);
            } catch (error) {
                console.error("Error fetching news data:", error);
            }
        };

        fetchNews();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                newsItems.length ? (prevIndex + 1) % newsItems.length : 0
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [newsItems]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowImage(false);
            setFadeIn(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="bg-black min-h-screen">
            <Navbar/>
            <section>
                <div className="text-center">
                    <h1 className="text-white text-4xl md:text-7xl mt-16">News</h1>

                    {showImage && newsItems.length > 0 && (
                        <div className="flex justify-center mt-2 relative">
                            <img
                                src="/images/news.png"
                                alt="News Image"
                                className="w-auto max-w-full h-48 md:h-96"
                            />
                            <div
                                className="absolute inset-0 bottom-0 h-3/4 bg-gradient-to-t from-black to-transparent"/>
                        </div>
                    )}

                    <div
                        className={`flex justify-center mt-4 ${
                            showImage ? "mt-8" : "mt-2"
                        } transition-all duration-500 ${
                            fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        }`}
                    >
                        <div
                            className="w-full max-w-[1250px] h-[430px] flex flex-col md:flex-row relative rounded-lg mx-auto px-6">
                            {/* Left Shape */}
                            <div
                                className="flex-1 flex items-center justify-center relative rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
                                style={{
                                    flex: "3 1 0%", // 3/4 of the space
                                    borderWidth: "1px",
                                    borderStyle: "solid",
                                    borderColor: "white",
                                    background: "rgba(58, 58, 58, 0.6)",
                                }}
                            >
                                <div
                                    className="w-full h-full relative overflow-hidden rounded-t-lg md:rounded-l-lg md:rounded-tr-none">
                                    {newsItems.length > 0 && (
                                        <img
                                            src={newsItems[currentIndex]?.imageSrc}
                                            alt={newsItems[currentIndex]?.title}
                                            className="w-full h-full object-cover"
                                        />
                                    )}
                                </div>
                            </div>

                            {/* Right Shape */}
                            <div
                                className="flex-1 flex items-center justify-center relative rounded-b-lg md:rounded-r-lg md:rounded-bl-none"
                                style={{
                                    flex: "1 1 0%", // 1/4 of the space
                                    borderWidth: "0.5px",
                                    borderStyle: "solid",
                                    borderColor: "white",
                                    background: "rgba(58, 58, 58, 0.8)",
                                }}
                            >
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-30 rounded-b-lg md:rounded-r-lg md:rounded-bl-none"></div>
                                <span
                                    className={`${poppins3.className} text-white text-lg md:text-xl lg:text-2xl font-semibold tracking-wide leading-relaxed drop-shadow-md z-10`}>
                                    {newsItems[currentIndex]?.description}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center mt-8">
                        {newsItems.map((_, index) => (
                            <div
                                key={index}
                                className={`mx-1 cursor-pointer ${
                                    currentIndex === index
                                        ? "bg-white w-14 h-2"
                                        : "bg-gray-600 w-2 h-2"
                                } rounded-full transition-all duration-300`}
                                onClick={() => setCurrentIndex(index)}
                            />
                        ))}
                    </div>

                    <div className="flex justify-center mt-24">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            {newsItems.map((newsItem) => (
                                <div
                                    key={newsItem.id}
                                    className="w-full max-w-[360px] h-[470px] rounded-[17px] overflow-hidden bg-gray-800 relative"
                                    style={{boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)"}}
                                >
                                    <div
                                        className="w-full h-2/3 relative rounded-t-[17px]"
                                        style={{backgroundColor: "rgba(58, 58, 58, 0.6)"}}
                                    >
                                        <img
                                            src={newsItem.imageSrc}
                                            alt={newsItem.title}
                                            className="w-full h-full object-cover rounded-t-[17px]"
                                        />
                                    </div>

                                    <div className="w-full h-[1px] bg-gray-500"></div>

                                    <div
                                        className="w-full h-1/3 rounded-b-[17px] flex items-center justify-center"
                                        style={{backgroundColor: "rgba(58, 58, 58, 0.6)"}}
                                    >
                                        <span className="text-white text-lg">{newsItem.description}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
}
