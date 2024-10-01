"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";

import {
  faFacebookSquare,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Footer from "@/components/footer";


export default function ContactUs() {
  const [fadeOut, setFadeOut] = useState(false);

  // Trigger fade-out after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 2000); // 2-second delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <section className="flex justify-between items-start mt-10 ml-20 relative">
        <div className="text-left ml-32">
          <h1 className="text-white text-7xl mb-20">CONTACT US</h1>
          <form className="text-white">
            {/* Name Input Fields */}
            <div className="flex gap-4 mb-6 ">
              <div className="flex-1">
                <label htmlFor="firstName" className="block mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full bg-transparent border-b border-gray-500 focus:outline-none text-white"
                  placeholder=" "
                />
              </div>
              <div className="flex-1 ml-8">
                <label htmlFor="lastName" className="block mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full bg-transparent border-b border-gray-500 focus:outline-none text-white"
                  placeholder=" "
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-transparent border-b border-gray-500 focus:outline-none text-white"
                placeholder=" "
              />
            </div>

            {/* Contact Number Input */}
            <div className="mb-6">
              <label htmlFor="contactNumber" className="block mb-2">
                Contact Number
              </label>
              <input
                type="tel"
                id="contactNumber"
                className="w-full bg-transparent border-b border-gray-500 focus:outline-none text-white"
                placeholder=" "
              />
            </div>

            {/* Category Radio Buttons */}
            <div className="flex flex-col gap-4">
              {" "}
              {/* Display radio buttons vertically */}
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="category"
                  value="undergraduate"
                  className="appearance-none w-4 h-4 border-2 border-gray-500 rounded-md bg-black focus:outline-none relative"
                />
                <span className="text-white">Undergraduate</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="category"
                  value="academia"
                  className="appearance-none w-4 h-4 border-2 border-gray-500 rounded-md bg-black focus:outline-none relative"
                />
                <span className="text-white">Academia</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="category"
                  value="industry"
                  className="appearance-none w-4 h-4 border-2 border-gray-500 rounded-md bg-black focus:outline-none relative"
                />
                <span className="text-white">Industry Person</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="category"
                  value="other"
                  className="appearance-none w-4 h-4 border-2 border-gray-500 rounded-md bg-black focus:outline-none relative"
                />
                <span className="text-white">Other</span>
              </label>
            </div>

            {/* Styling for checked radio button (rectangle white part) */}
            <style jsx>{`
              input[type="radio"]:checked::before {
                content: "";
                position: absolute;
                top: 50%;
                left: 50%;
                width: 60%;
                height: 60%;
                background-color: white;
                transform: translate(-50%, -50%);
                border-radius: 2px;
              }
            `}</style>

            {/* Subject Input */}
            <div className="mb-6 mt-8">
              <label htmlFor="subject" className="block mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full bg-transparent border-b border-gray-500 focus:outline-none text-white"
                placeholder=" "
              />
            </div>

            {/* Message Input */}
            <div className="mb-6">
              <label htmlFor="message" className="block mb-2">
                Message
              </label>
              <textarea
                id="message"
                className="w-full bg-transparent border-b border-gray-500 focus:outline-none text-white"
                rows={4}
                maxLength={1000}
                placeholder=" "
              />
              <p className="text-right text-gray-400 text-sm mt-1">0/1000</p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full p-2 rounded text-white hover:bg-gray-600 flex justify-center items-center"
              style={{
                backgroundColor: "#86868699", // Dark background color
                borderWidth: "1px",

                borderImageSource:
                  "linear-gradient(103.75deg, #FFFFFF 29.85%, rgba(153, 153, 153, 0) 108.02%)",
                borderImageSlice: 1,
              }}
            >
              Submit
              <CheckCircleIcon className="ml-2 w-5 h-5 text-white" />
            </button>
          </form>
        </div>

        {/* Image Section */}
        <div className="mr-0 relative -mt-10">
          {/* First Image */}
          <img
            src="/images/contact us.png"
            alt="Contact Us"
            style={{ width: "600px", height: "auto" }}
          />

          {/* New Image - positioned absolutely over the first image */}
          <img
            src="/images/Contct_Us DarkImage.png" // New image
            alt="New Image"
            className={`absolute top-6 left-0 transition-opacity duration-5000 ${
              fadeOut ? "opacity-0 translate-x-[100%]" : "opacity-100"
            }`}
            style={{
              width: "600px", // Adjust width
              height: "900px", // Adjust height
              objectFit: "cover", // Ensures it scales well
              opacity: fadeOut ? 0 : 1, // Set opacity to 0 after fading out
              display: fadeOut ? "none" : "block", // Hide after animation
            }}
          />
        </div>
      </section>

      {/* Social Figures Section */}
      <section className="bg-black py-20 mt-32">
        <div className="text-center mb-12">
          <h2 className="text-white text-4xl font-bold">SOCIAL FIGURES</h2>
        </div>

        <div className="flex justify-center gap-8 mb-16">
          {/* Facebook */}
          <a href="#" className="text-white hover:text-gray-500">
            <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
            <p className="mt-2 text-sm">Society of Computer Sciences - SUSL</p>
          </a>
          {/* Instagram */}
          <a href="#" className="text-white hover:text-gray-500">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
            <p className="mt-2 text-sm">Society of Computer Sciences - SUSL</p>
          </a>
          {/* LinkedIn */}
          <a href="#" className="text-white hover:text-gray-500">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
            <p className="mt-2 text-sm">Society of Computer Sciences - SUSL</p>
          </a>
          {/* Email */}
          <a
            href="mailto:socs@appsc.sab.ac.lk"
            className="text-white hover:text-gray-500"
          >
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
            <p className="mt-2 text-sm">socs@appsc.sab.ac.lk</p>
          </a>
        </div>

        {/* Location */}
        <div className="flex justify-center">
          <a
            href="#"
            className="text-white hover:text-gray-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-col items-center text-white">
              <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />
              <div className="text-left ml-16">
                <p>Society of Computer Sciences,</p>
                <p>Faculty of Computer Sciences,</p>
                <p>Sabaragamuwa University of Sri Lanka,</p>
                <p>P.O. Box 02, Belihuloya, 70140, Sri Lanka.</p>
              </div>
            </div>
          </a>
        </div>
      </section>
      <Footer/>
    </div>
  );
}