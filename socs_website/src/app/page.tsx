'use client'
import Image from 'next/image';
import Navbar from "@/components/navbar";
import AnnouncementsCardComponent from "@/components/announcements_card";
import Committee_member_gallery from "@/components/committee_member_gallery";
import Footer from "@/components/footer";

export default function Home() {

    return (
        <div className="bg-black text-white">
            <Navbar></Navbar>
            {/* Hero Section */}
            <section>
                <div className="relative flex items-center justify-center h-screen bg-black">
                    <div className="absolute inset-0 z-0 flex justify-center items-center">
                        <Image
                            src="/images/socs_with_head.png"
                            alt="Robotic Head"
                            width={600}
                            height={500}
                            className="z-0 opacity-90"
                        />
                    </div>
                    <div className="z-0 flex space-x-4">
                        <Image
                            src="/images/robotic-head.png"
                            alt="Robotic Head"
                            width={500}
                            height={500}
                            className="z-0 opacity-90"
                        />
                        <div
                            className="absolute bottom-10 left-0 right-0 h-32 bg-gradient-to-t from-black/70 to-transparent blur-md"></div>
                    </div>
                </div>
                <div className="z-10 text-center">
                    <h1 className="text-5xl  tracking-tight">SOCIETY OF COMPUTER SCIENCES</h1>
                    <p className="text-2xl mt-4">
                        Sabaragamuwa University of Sri Lanka
                    </p>
                    <p className="mt-10 mx-auto max-w-5xl p-5">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum
                    </p>
                </div>
            </section>

            {/* Announcements Section */}
            <section className="text-center py-16 bg-black">
                <h2 className="text-4xl font-semibold mb-4 text-white">ANNOUNCEMENT</h2>
                {/* Container for the card components */}
                <div className="flex justify-center items-center space-x-8 mt-10">
                    <AnnouncementsCardComponent/>
                    <AnnouncementsCardComponent/>
                    <AnnouncementsCardComponent/>
                </div>
            </section>

            {/* Executive Committee Section */}
            <section className="text-center py-16 bg-black">
                <h2 className="text-4xl font-semibold mb-4 text-white">Executive Committee</h2>
                <p className="text-lg mb-12 text-gray-400">Year 2024 / 2025</p>
                <Committee_member_gallery/>
            </section>


            {/* COLLABORATIONS Section */}
            <section className="text-center py-16 bg-black">
                <h2 className="text-4xl font-semibold mb-4 text-white">COLLABORATIONS</h2>
                <p className="mt-10 mx-auto max-w-5xl p-5">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially unchanged.
                </p>
                {/* Static Image Cards */}
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-5 max-w-6xl mx-auto">
                    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                        <img src="/images/annoncmentcard.png" alt="Collaboration 1" className="w-full h-60 object-cover" />
                        <div className="p-5">
                            <h3 className="text-xl font-semibold">Collaboration 1</h3>
                            <p className="text-gray-700 mt-3">Description of the first collaboration.</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                        <img src="/images/annoncmentcard.png" alt="Collaboration 2" className="w-full h-60 object-cover" />
                        <div className="p-5">
                            <h3 className="text-xl font-semibold">Collaboration 2</h3>
                            <p className="text-gray-700 mt-3">Description of the second collaboration.</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                        <img src="/images/annoncmentcard.png" alt="Collaboration 3" className="w-full h-60 object-cover" />
                        <div className="p-5">
                            <h3 className="text-xl font-semibold">Collaboration 3</h3>
                            <p className="text-gray-700 mt-3">Description of the third collaboration.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Banner Section */}
            <section className="relative text-center" style={{height: '500px'}}>
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{backgroundImage: 'url(/images/home_banner.png)'}}
                >
                </div>
            </section>

            <Footer></Footer>
        </div>

    );
}
