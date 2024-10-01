"use client";
import Navbar from "@/components/navbar";
import EventNavBar from "@/components/eventsNavBar";
import ImageSlider from "@/components/cardSliderPage";
import { Poppins } from "next/font/google";



const poppins3 = Poppins({ weight: "300", subsets: ["latin"] });


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

<div>
      <div className="grid grid-cols-6 grid-rows-2 gap-4 px-[200px]">
        <div>
          <div className="col-span-2 col-start-1 row-start-2">
            <div className="col-start-2 row-start-1">
              <ImageSlider images={images} />
            </div>
          </div>
        </div>
        <div>
          <div className="col-span-2 col-start-1 row-start-2">
            <div className="col-start-2 row-start-1">
              <ImageSlider images={images} />
            </div>
          </div>
        </div>
        <div className="col-start-1 row-start-2">
          <div className="col-span-2 col-start-1 row-start-2">
            <div className="col-start-2 row-start-1">
              <ImageSlider images={images} />
            </div>
          </div>
        </div>
        <div className="col-start-2 row-start-2">
          <div className="col-span-2 col-start-1 row-start-2">
            <div className="col-start-2 row-start-1">
              <ImageSlider images={images} />
            </div>
          </div>
        </div>
        <div className="col-span-2 row-span-2 col-start-3 row-start-1">
          <div className="col-span-2 col-start-1 row-start-2">
            <div className="col-start-2 row-start-1">
              <ImageSlider images={images} />
            </div>
          </div>
        </div>
        <div className="col-start-5 row-start-1">
          <div className="col-span-2 col-start-1 row-start-2">
            <div className="col-start-2 row-start-1">
              <ImageSlider images={images} />
            </div>
          </div>
        </div>
        <div className="col-start-6 row-start-1">
          <div className="col-span-2 col-start-1 row-start-2">
            <div className="col-start-2 row-start-1">
              <ImageSlider images={images} />
            </div>
          </div>
        </div>
        <div className="col-start-5 row-start-2">
          <div className="col-span-2 col-start-1 row-start-2">
            <div className="col-start-2 row-start-1">
              <ImageSlider images={images} />
            </div>
          </div>
        </div>
        <div className="col-start-6 row-start-2">
          <div className="col-span-2 col-start-1 row-start-2">
            <div className="col-start-2 row-start-1">
              <ImageSlider images={images} />
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
