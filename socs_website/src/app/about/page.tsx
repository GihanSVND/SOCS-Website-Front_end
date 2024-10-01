"use client";
import Navbar from "@/components/navbar";
import { Poppins } from "next/font/google";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const poppins1 = Poppins({ weight: "100", subsets: ["latin"] });
const poppins3 = Poppins({ weight: "300", subsets: ["latin"] });
const poppins7 = Poppins({ weight: "700", subsets: ["latin"] });

export default function About() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 text-left">
            <h1 className={`${poppins3.className} text-[100px] text-gray-300 leading-none mt-7 ml-10 mb-2`}>
              SOCS
            </h1>
            <h2 className={`${poppins3.className} text-[23px] text-gray-300 leading-[35px] tracking-[0.09em] ml-10 mb-10`}>
              SABARAGAMUWA UNIVERSITY OF SRI LANKA
            </h2>
            <p className={`${poppins3.className} text-[17px] leading-[25.5px] py-10 ml-10`}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <h3 className={`${poppins3.className} text-[23px] leading-[35px] tracking-[0.09em] ml-10`}>
              FOLLOW US ON
            </h3>
            <div className="flex space-x-14 ml-8">
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
          <div className="flex justify-center">
            <img src="/images/MountImg.png" alt="Mountain Image"/>
          </div>
        </div>
      </div>
    </div>
  );
}
