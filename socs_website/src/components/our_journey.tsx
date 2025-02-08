// components/OurJourney.tsx
import React from 'react';
import {Poppins} from "next/font/google";

const poppins3 = Poppins({ weight: "300", subsets: ["latin"] });

const OurJourney: React.FC = () => {
    return (
        <section className="bg-black text-white py-16">
            <div className="max-w-7xl mx-auto text-center px-4">
                <h2 className={`${poppins3.className} text-[45px] font-light leading-[67.5px] border-gray-500  mb-4`}>
                    OUR JOURNEY
                </h2>
                <div
                    className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-8">
                    <div className="w-full md:w-1/2 text-gray-300 text-lg">
                        <p className={`${poppins3.className} text-[17px] leading-[25.5px] py-10 ml-16 text-left`}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make
                            a type specimen book. It has survived not only five centuries, but also the leap into
                            electronic typesetting,
                            remaining essentially unchanged.
                        </p>
                    </div>
                    <div className="space-y-4 flex justify-center items-center">
                        <div className="relative w-48 h-48 bg-gradient-to-b from-black to-gray-800 rounded-2xl">
                            <div className="absolute top-4 right-4 w-16 h-16 bg-gray-900 rounded-xl"></div>
                            <div className="absolute bottom-4 left-4 w-12 h-12 bg-gray-900 rounded-xl"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurJourney;
