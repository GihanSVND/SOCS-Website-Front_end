"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import {useEffect, useState} from "react";
import {FaChevronDown} from "react-icons/fa";

export default function News() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showImage, setShowImage] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);

  const shapeImages = [
    "/images/news.png",
    "/images/annoncmentcard.png",
    "/images/annoncmentcard.png",
    "/images/annoncmentcard.png",
    "/images/annoncmentcard.png",
  ];

  const shapeGrid = [
    { id: 1, text: "1st part" },
    { id: 2, text: "2nd part" },
    { id: 3, text: "3rd part" },
    { id: 4, text: "4th part" },
    { id: 5, text: "5th part" },
    { id: 6, text: "6th part" },
    { id: 7, text: "7th part" },
    { id: 8, text: "8th part" },
    { id: 9, text: "9th part" },
  ];

  const newsImages = [
    "/images/news.png",
    "/images/annoncmentcard.png",
    "/images/news.png",
    "/images/annoncmentcard.png",
    "/images/news.png",
    "/images/annoncmentcard.png",
    "/images/news.png",
    "/images/annoncmentcard.png",
    "/images/news.png",
  ];

  const shapeTexts = [
    "This is 2nd",
    "This is 3rd",
    "This is 4th",
    "This is 5th",
      "This is 6th",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % shapeImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [shapeImages.length]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(false);
      setFadeIn(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    console.log("Current Image:", shapeImages[currentIndex]);
  }, [currentIndex]);

  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <section>
          <div className="text-center">
              <h1 className="text-white text-4xl md:text-7xl mt-16">News</h1>

              {showImage && (
                  <div className="flex justify-center mt-2 relative">
                      <img
                          src="/images/news.png"
                          alt="News Image"
                          className="w-auto max-w-full h-48 md:h-96"
                      />
                      <div className="absolute inset-0 bottom-0 h-3/4 bg-gradient-to-t from-black to-transparent"/>
                  </div>
              )}

              <div
                  className={`flex justify-center mt-4 ${
                      showImage ? "mt-8" : "mt-2"
                  } transition-all duration-500 ${
                      fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
              >
                  <div className="w-full max-w-[1250px] h-[430px] flex flex-col md:flex-row relative rounded-lg mx-auto px-6">
                      {/* Left Shape */}
                      <div
                          className="flex-1 flex items-center justify-center relative rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
                          style={{
                              flex: "3 1 0%",  // 3/4 of the space
                              borderWidth: "1px",
                              borderStyle: "solid",
                              borderColor: "white",
                              background: "rgba(58, 58, 58, 0.6)",
                          }}
                      >
                          <div
                              className="w-full h-full relative overflow-hidden rounded-t-lg md:rounded-l-lg md:rounded-tr-none">
                              <img
                                  src={shapeImages[currentIndex]}
                                  alt={`Shape ${currentIndex + 1}`}
                                  className="w-full h-full object-cover"
                              />
                          </div>
                      </div>

                      {/* Right Shape */}
                      <div
                          className="flex-1 flex items-center justify-center relative rounded-b-lg md:rounded-r-lg md:rounded-bl-none"
                          style={{
                              flex: "1 1 0%",  // 1/4 of the space
                              borderWidth: "0.5px",
                              borderStyle: "solid",
                              borderColor: "white",
                              background: "rgba(58, 58, 58, 0.8)",
                          }}
                      >
                          <div
                              className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-30 rounded-b-lg md:rounded-r-lg md:rounded-bl-none"
                          ></div>
                          <span className="text-white text-xl md:text-2xl relative z-10">
        {shapeTexts[currentIndex]}
      </span>
                      </div>
                  </div>
              </div>


              <div className="flex justify-center mt-8">
                  {shapeImages.map((_, index) => (
                      <div
                          key={index}
                          className={`mx-1 cursor-pointer ${
                              currentIndex === index
                                  ? "bg-white w-14 h-2"
                                  : "bg-gray-600 w-2 h-2"
                          } rounded-full transition-all duration-300`}
                          onClick={() => setCurrentIndex(index)}
                      />
                  ))}
              </div>

              <div
                  className={`flex justify-center mt-4 ${
                      showImage ? "mt-16" : "mt-2"
                  } transition-all duration-500 ${
                      fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
              >
                  <div
                      className="flex items-center justify-center w-8 h-8 border-2 border-white rounded-full cursor-pointer">
                      <FaChevronDown className="text-white text-xl"/>
                  </div>
              </div>

              <div className="flex justify-center mt-24">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                      {shapeGrid.map((shape, index) => (
                          <div
                              key={shape.id}
                              className="w-full max-w-[360px] h-[470px] rounded-[17px] overflow-hidden bg-gray-800 relative"
                              style={{boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)"}}
                          >
                              <div
                                  className="w-full h-2/3 relative rounded-t-[17px]"
                                  style={{backgroundColor: "rgba(58, 58, 58, 0.6)"}}
                              >
                                  <img
                                      src={newsImages[index]}
                                      alt={`Shape ${index + 1}`}
                                      className="w-full h-full object-cover rounded-t-[17px]"
                                  />
                                  <div
                                      className="absolute top-0 left-0 w-full h-full rounded-t-[17px]"
                                      style={{
                                          background:
                                              "radial-gradient(circle at 50% 15%, rgba(255, 255, 255, 0.2), transparent 60%)",
                                      }}
                                  ></div>
                              </div>

                              <div
                                  className="w-full h-[1px] bg-gray-500"
                                  style={{
                                      top: "66%",
                                      background:
                                          "linear-gradient(to right, rgba(255, 255, 255, 0.5), rgba(58, 58, 58, 0.6))",
                                  }}
                              ></div>

                              <div
                                  className="w-full h-1/3 rounded-b-[17px] flex items-center justify-center"
                                  style={{backgroundColor: "rgba(58, 58, 58, 0.6)"}}
                              >
                                  <span className="text-white text-lg">{shape.text}</span>
                              </div>

                              <div
                                  className="absolute inset-0 rounded-[17px] pointer-events-none"
                                  style={{
                                      borderWidth: "1px",
                                      borderStyle: "solid",
                                      borderColor: "transparent",
                                      borderRadius: "17px",
                                      background:
                                          "linear-gradient(135deg, rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.7)) border-box",
                                      WebkitMask:
                                          "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                                      WebkitMaskComposite: "xor",
                                      maskComposite: "exclude",
                                  }}
                              ></div>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
      </section>
        <Footer/>
    </div>
  );
}
