"use client";
import Navbar from "@/components/navbar";
import EventNavBar from "@/components/eventsNavBar";
import ImageSlider from "@/components/cardSliderPage";
import { Poppins } from "next/font/google";
import Footer from "@/components/footer";

const poppins3 = Poppins({ weight: "300", subsets: ["latin"] });

function FortNight() {
    const images1 = [
        "/events/FortNight/1.png",
        "/events/FortNight/2.png",
        "/events/FortNight/3.png",
      ];
      const images2 = [
        "/events/FortNight/4.png",
        "/events/FortNight/5.png",
        "/events/FortNight/6.png",
      ];
      const images3 = [
        "/events/FortNight/7.png",
        "/events/FortNight/8.png",
        "/events/FortNight/9.png",
      ];
      const images4 = [
        "/events/FortNight/10.png",
        "/events/FortNight/11.png",
        "/events/FortNight/12.png",
      ];
      const images5 = [
        "/events/FortNight/13.png",
        "/events/FortNight/14.png",
        "/events/FortNight/15.png",
      ];
      const images6 = [
        "/events/FortNight/16.png",
        "/events/FortNight/17.png",
        "/events/FortNight/18.png",
      ];
      const images7 = [
        "/events/FortNight/19.png",
        "/events/FortNight/20.png",
        "/events/FortNight/21.png",
      ];
      const images8 = [
        "/events/FortNight/22.png",
        "/events/FortNight/23.png",
        "/events/FortNight/24.png",
      ];
      const images9 = [
        "/events/FortNight/25.png",
        "/events/FortNight/26.png",
        "/events/FortNight/27.png",
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
              FortNight
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
            Fortnight is a monthly knowledge-sharing event organized by the Society of Computer Sciences (SOCS) where students from the Faculty of Computing present insightful sessions on various tech-related topics. Designed to foster peer learning and intellectual engagement, the event also includes fun activities, creating an interactive and enjoyable environment. Fortnight serves as a platform for students to enhance their presentation skills, exchange knowledge, and stay updated with emerging trends in the field of computing.
            </p>
          </div>
          <div>
      <h2 className={`${poppins3.className} text-5xl font-semibold mb-4 text-white text-center py-[70px]`}>UPDATES</h2>
      </div>
          <Footer/>
          
        </div>
      );
    }

export default FortNight