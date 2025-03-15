"use client";
import Navbar from "@/components/navbar";
import { Poppins } from "next/font/google";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Image from 'next/image';
import Footer from "@/components/footer";
import PioneersGallery from "@/components/pioneers_gallery";
import React from "react";


const poppins3 = Poppins({ weight: "300", subsets: ["latin"] });
const poppins4 = Poppins({ weight: "400", subsets: ["latin"] });
const poppins5 = Poppins({ weight: "500", subsets: ["latin"] });


export default function About() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      
      {/* First Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Left Text Section */}
          <div className="space-y-6 text-center sm:text-left">
            <h1 className={`${poppins4.className} text-[100px] text-gray-300 leading-none mt-7  mb-2`}>
              SOCS
            </h1>
            <h2 className={`${poppins4.className} text-[21px] text-gray-300 leading-[35px] tracking-[0.09em]  mb-10`}>
              SABARAGAMUWA UNIVERSITY OF SRI LANKA
            </h2>
            <p className={`${poppins3.className} text-[12px] sm:text-[14px] md:text-[16px] leading-[25.5px]  `}>
            The Society of Computer Sciences - SOCS at Sabaragamuwa University
            of Sri Lanka is a leading student organization within the university
            and the Faculty of Computing, dedicated to enhancing knowledge,
            experience, and engagement in the field of computer science. The
            society actively organizes a variety of events, including workshops,
            hackathons, guest lectures, and networking sessions, providing
            students with hands-on learning opportunities and industry exposure
            </p>
            <h3 className={`${poppins3.className} text-[21px] tracking-[0.09em]  mb-0`}>
              FOLLOW US ON
            </h3>
            <div className="flex justify-center md:justify-start item-center  space-x-14 mt-0">
              <a href="#" className="text-white hover:text-gray-400">
                <FaFacebookF size={45} />
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <FaLinkedinIn size={45} />
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <FaInstagram size={45} />
              </a>
            </div>
          </div>
          
          {/* Right Image Section */}
          <div className="hidden sm:flex justify-center">
            <Image
              src="/images/MountImg.png"
              alt="Mountain Image"
              width={500}
              height={500}
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Second Section: Vision & Mission */}
      <div className="container mx-auto px-6 py-12 mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start ">
          
          {/* Left Image */}
          <div className="flex justify-start md:justify-start">
            <Image
              src="/images/statue-vision.png"
              alt="Statue with futuristic glasses"
              width={500}
              height={500}
              className="object-cover"
            />
          </div>

          {/* Right Text */}
          <div className="space-y-12 mt-20 mx-[10px] " >
            
            {/* Vision Section */}
            <div className="text-left">
              <h2 className={`${poppins3.className} text-[45px] font-light leading-[67.5px] border-l-2 border-gray-500 pl-4 mb-4`}>
                VISION
              </h2>
              <p className={`${poppins3.className} text-[14px] font-light leading-[21px] text-gray-300 pl-4`}>
              spearheading global innovation by a vibrant community of next-generation technologists. We network innovators to attract, nurture, and retain exceptional talent in technical disciplines, empowering them to their expertise and creativity to engineer groundbreaking solutions that uplift humanity to create the future of technology.
              </p>
            </div>

            {/* Mission Section */}
            <div className="text-right">
              <h2 className={`${poppins3.className} text-[45px] font-light leading-[67.5px] border-r-2 border-gray-500 pr-4 mb-4`} style={{ direction: 'rtl' }}>
                MISSION
              </h2>
              <p className={`${poppins3.className} text-[14px] font-light leading-[21px] text-gray-300 pr-4`}>
              Our mission is to cultivate a community of learners and innovators by providing exceptional educational opportunities, Networking ,collaboration, and nurturing creativity.
              </p>
            </div>
          </div>
        </div>
      </div>

      
      <div className="container text-center  mx-auto px-10">

      <h2 className={`${poppins5.className} text-4xl md:text-5xl py-7 font-semibold mb-4 text-white`}>ANNOUNCEMENT</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Left Text Section */}
          <div className="space-y-6 text-center sm:text-left">
            
            <p className={`${poppins3.className} text-[12px] sm:text-[14px] md:text-[16px] leading-[25.5px] `}>
            Founded in 2012 by students of the Department of Computing and Information Systems, the Society of Computer Sciences (SOCS) aims to enhance IT knowledge among undergraduates. It organizes university-wide events, addresses IT-related needs, and promotes computer literacy among students and the broader community. Through its commitment to education and innovation, SOCS continues to shape the IT landscape at Sabaragamuwa University of Sri Lanka.
            </p>
            
            
          </div>
          
          {/* Right Image Section */}
          <div className="flex justify-center">
            <Image
              src="/images/JRimg.png"
              alt="Mountain Image"
              width={500}
              height={500}
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Executive Committee Section */}
      <section className="text-center py-16 bg-black">
      <h2 className={`${poppins4.className} text-5xl text-center  font-semibold mb-4 text-white`}>PIONEERS</h2>
        
        <PioneersGallery/>
      </section>

      <Footer/>
    </div>

  );
}
