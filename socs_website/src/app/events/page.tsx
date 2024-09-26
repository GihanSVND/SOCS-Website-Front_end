"use client";
import Navbar from "@/components/navbar";
import EventNavBar from "@/components/eventsNavBar";
import { Poppins } from "next/font/google";

const poppins1 = Poppins({ weight: "100", subsets: ["latin"] });
const poppins2 = Poppins({ weight: "200", subsets: ["latin"] });
const poppins3 = Poppins({ weight: "300", subsets: ["latin"] });
const poppins4 = Poppins({ weight: "400", subsets: ["latin"] });
const poppins5 = Poppins({ weight: "500", subsets: ["latin"] });
const poppins6 = Poppins({ weight: "600", subsets: ["latin"] });
const poppins7 = Poppins({ weight: "700", subsets: ["latin"] });

export default function Event() {
  return (
    <div className="bg-black text-white">
      <Navbar></Navbar>
      <div className="flex flex-col py-[100px] justify-center items-center relative ">
        <h1
          className={`${poppins3.className} absolute text-[100px] font-extrabold text-gray-300`}
        >
          Events
        </h1>

        
      </div>

      <div className="bg-black text-white">
        <EventNavBar></EventNavBar>
      </div>
    </div>
  );
}
