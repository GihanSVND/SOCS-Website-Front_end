"use client";
import Navbar from "@/components/navbar";
import { Poppins } from "next/font/google";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Image from 'next/image';

const poppins1 = Poppins({ weight: "100", subsets: ["latin"] });
const poppins3 = Poppins({ weight: "300", subsets: ["latin"] });
const poppins7 = Poppins({ weight: "700", subsets: ["latin"] });

export default function About() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      
      {/* First Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Left Text Section */}
          <div className="space-y-6 text-left">
            <h1 className={`${poppins3.className} text-[100px] text-gray-300 leading-none mt-7 ml-16 mb-2`}>
              SOCS
            </h1>
            <h2 className={`${poppins3.className} text-[21px] text-gray-300 leading-[35px] tracking-[0.09em] ml-16 mb-10`}>
              SABARAGAMUWA UNIVERSITY OF SRI LANKA
            </h2>
            <p className={`${poppins3.className} text-[17px] leading-[25.5px] py-10 ml-16`}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <h3 className={`${poppins3.className} text-[21px] leading-[35px] tracking-[0.09em] ml-16 mb-0`}>
              FOLLOW US ON
            </h3>
            <div className="flex space-x-14 ml-16 mt-0">
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
          <div className="flex justify-center">
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
              src="/images/statue-vision.png" // Replace with your actual image path
              alt="Statue with futuristic glasses"
              width={500}
              height={500}
              className="object-cover"
            />
          </div>

          {/* Right Text */}
          <div className="space-y-12 mt-20" style={{ marginRight: "50px" }}>
            
            {/* Vision Section */}
            <div className="text-left">
              <h2 className={`${poppins3.className} text-[45px] font-light leading-[67.5px] border-l-2 border-gray-500 pl-4 mb-4`}>
                VISION
              </h2>
              <p className={`${poppins3.className} text-[14px] font-light leading-[21px] text-gray-300 pl-4`}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
              </p>
            </div>

            {/* Mission Section */}
            <div className="text-right">
              <h2 className={`${poppins3.className} text-[45px] font-light leading-[67.5px] border-r-2 border-gray-500 pr-4 mb-4`} style={{ direction: 'rtl' }}>
                MISSION
              </h2>
              <p className={`${poppins3.className} text-[14px] font-light leading-[21px] text-gray-300 pr-4`}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
