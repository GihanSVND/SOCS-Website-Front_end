"use client";
import Navbar from "@/components/navbar";
import EventNavBar from "@/components/eventsNavBar";
import ImageSlider from "@/components/cardSliderPage";
import { Poppins } from "next/font/google";
import { useEffect, useState } from "react";
import Image from "next/image";

const poppins1 = Poppins({ weight: "100", subsets: ["latin"] });
const poppins2 = Poppins({ weight: "200", subsets: ["latin"] });
const poppins3 = Poppins({ weight: "300", subsets: ["latin"] });
const poppins4 = Poppins({ weight: "400", subsets: ["latin"] });
const poppins5 = Poppins({ weight: "500", subsets: ["latin"] });
const poppins6 = Poppins({ weight: "600", subsets: ["latin"] });
const poppins7 = Poppins({ weight: "700", subsets: ["latin"] });

export default function Home() {
  const images = [
    "/images/annoncmentcard.png",
    "/images/annoncmentcard.png",
    "/images/annoncmentcard.png",
  ];

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
      <div className="flex flex-col py-[100px] justify-center items-center relative ">
        <h1
          className={`${poppins3.className} absolute text-[60px] font-extrabold text-gray-300`}
        >
          Let Me Hack
        </h1>
      </div>

      <div className="grid grid-cols-6 grid-rows-2 h-[600px] gap-4 p-[50px]">
        <div className="col-span-2 col-start-1 row-start-2">
          <div className="col-start-2 row-start-1">
            <ImageSlider
              images={images}
              intervalTime={4000}
              width={500}
              height={250}
            />
          </div>
        </div>
        <div className="col-start-1 row-start-1">
          <div className="col-start-2 row-start-1">
            <ImageSlider
              images={images}
              intervalTime={5000}
              width={250}
              height={250}
            />
          </div>
        </div>
        <div className="col-start-2 row-start-1">
          <ImageSlider
            images={images}
            intervalTime={6000}
            width={250}
            height={250}
          />
        </div>
        <div className="col-span-2  row-span-2 col-start-3 row-start-1">
          <div className="col-start-2 row-start-1">
            <ImageSlider
              images={images}
              intervalTime={4000}
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="col-span-2 col-start-5 row-start-1">
          <div className="col-start-2 row-start-1">
            <ImageSlider
              images={images}
              intervalTime={4000}
              width={500}
              height={250}
            />
          </div>
        </div>
        <div className="col-start-5 row-start-2">
          <div className="col-start-2 row-start-1">
            <ImageSlider
              images={images}
              intervalTime={6000}
              width={250}
              height={250}
            />
          </div>
        </div>
        <div className="col-start-6 row-start-2">
          <div className="col-start-2 row-start-1">
            <ImageSlider
              images={images}
              intervalTime={6000}
              width={250}
              height={250}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
