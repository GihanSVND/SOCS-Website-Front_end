"use client";
import Navbar from "@/components/navbar";
import EventNavBar from "@/components/eventsNavBar";
import ImageSlider from "@/components/cardSliderPage";
import { Poppins } from "next/font/google";
import Footer from "@/components/footer";

const poppins3 = Poppins({ weight: "300", subsets: ["latin"] });

export default function Home() {
  const images1 = [
    "/events/LetMeHack/1.png",
    "/events/LetMeHack/2.png",
    "/events/LetMeHack/3.png",
  ];
  const images2 = [
    "/events/LetMeHack/4.png",
    "/events/LetMeHack/5.png",
    "/events/LetMeHack/6.png",
  ];
  const images3 = [
    "/events/LetMeHack/7.png",
    "/events/LetMeHack/8.png",
    "/events/LetMeHack/9.png",
  ];
  const images4 = [
    "/events/LetMeHack/10.png",
    "/events/LetMeHack/11.png",
    "/events/LetMeHack/12.png",
  ];
  const images5 = [
    "/events/LetMeHack/13.png",
    "/events/LetMeHack/14.png",
    "/events/LetMeHack/15.png",
  ];
  const images6 = [
    "/events/LetMeHack/16.png",
    "/events/LetMeHack/17.png",
    "/events/LetMeHack/18.png",
  ];
  const images7 = [
    "/events/LetMeHack/19.png",
    "/events/LetMeHack/20.png",
    "/events/LetMeHack/21.png",
  ];
  const images8 = [
    "/events/LetMeHack/22.png",
    "/events/LetMeHack/23.png",
    "/events/LetMeHack/24.png",
  ];
  const images9 = [
    "/events/LetMeHack/25.png",
    "/events/LetMeHack/26.png",
    "/events/LetMeHack/27.png",
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
        <div className="grid grid-cols-6 grid-rows-2 gap-4  md:px-[100px]">
          <div>
            <div className="col-span-2 col-start-1 row-start-2 hidden md:block">
              <div className="col-start-2 row-start-1">
                <ImageSlider images={images1} />
              </div>
            </div>
          </div>
          <div>
            <div className="col-span-2 col-start-1 row-start-2 hidden sm:block">
              <div className="col-start-2 row-start-1">
                <ImageSlider images={images2} />
              </div>
            </div>
          </div>
          <div className="col-start-1 row-start-2 hidden md:block">
            <div className="col-span-2 col-start-1 row-start-2">
              <div className="col-start-2 row-start-1">
                <ImageSlider images={images3} />
              </div>
            </div>
          </div>
          <div className="col-start-2 row-start-2 hidden sm:block">
            <div className="col-span-2 col-start-1 row-start-2">
              <div className="col-start-2 row-start-1">
                <ImageSlider images={images4} />
              </div>
            </div>
          </div>
          <div className="col-span-6 sm:col-span-2 row-span-2 cols-start-2 sm:col-start-3 row-start-1 p-10 sm:p-0">
            <div className="col-span-2 col-start-1 row-start-2">
              <div className="col-start-2 row-start-1">
                <ImageSlider images={images5} />
              </div>
            </div>
          </div>
          <div className="col-start-5 row-start-1 hidden sm:block">
            <div className="col-span-2 col-start-1 row-start-2">
              <div className="col-start-2 row-start-1">
                <ImageSlider images={images6} />
              </div>
            </div>
          </div>
          <div className="col-start-6 row-start-1 hidden md:block">
            <div className="col-span-2 col-start-1 row-start-2">
              <div className="col-start-2 row-start-1">
                <ImageSlider images={images7} />
              </div>
            </div>
          </div>
          <div className="col-start-5 row-start-2 hidden sm:block">
            <div className="col-span-2 col-start-1 row-start-2">
              <div className="col-start-2 row-start-1">
                <ImageSlider images={images8} />
              </div>
            </div>
          </div>
          <div className="col-start-6 row-start-2 hidden md:block">
            <div className="col-span-2 col-start-1 row-start-2">
              <div className="col-start-2 row-start-1">
                <ImageSlider images={images9} />
              </div>
            </div>
          </div>
        </div>
        <p className="text-center text-lg mt-16 mr-28 ml-28">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, 
          remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
          and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
      <Footer/>
    </div>
  );
}
