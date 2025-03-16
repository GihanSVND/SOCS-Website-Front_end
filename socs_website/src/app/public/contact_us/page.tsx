"use client";

import { useState, useEffect } from "react";
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
import { useRouter } from "next/navigation";

export default function ContactUs() {
  const [fadeOut, setFadeOut] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    category: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const [alert, setAlert] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null); // State to manage success/error alert

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        setAlert({ message: "Your message has been sent successfully!", type: "success" });
        setTimeout(() => router.push("/"), 2000); // Redirect after 2 seconds
      } else {
        setAlert({ message: result.message || "Something went wrong.", type: "error" });
      }
    } catch (error) {
      console.error("Error:", error);
      setAlert({ message: "Error sending message.", type: "error" });
    } finally {
      setIsSubmitting(false);
    }
  };

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

        {/* Alert Message */}
        {alert && (
            <div
                className={`fixed top-5 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-md text-white ${
                    alert.type === "success" ? "bg-green-500" : "bg-red-500"
                }`}
            >
              {alert.message}
            </div>
        )}

        <section className="flex flex-col lg:flex-row justify-between items-start mt-10 px-4 md:px-10 lg:px-20 relative">
          <div className="text-left lg:ml-32 w-full lg:w-1/2">
            <h1 className="text-white text-5xl lg:text-7xl mb-10 lg:mb-20">CONTACT US</h1>
            <form onSubmit={handleSubmit} className="text-white">
              {/* Name Input Fields */}
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <label htmlFor="firstName" className="block mb-2">
                    First Name
                  </label>
                  <input
                      type="text"
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      name="firstName"
                      className="w-full bg-transparent border-b border-gray-500 focus:outline-none text-white"
                      placeholder=" "
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="lastName" className="block mb-2">
                    Last Name
                  </label>
                  <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
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
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
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
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-gray-500 focus:outline-none text-white"
                    onInput={(e) => {
                    const input = e.target as HTMLInputElement; // Cast to HTMLInputElement
                    input.value = input.value.replace(/[^0-9]/g, ""); // Allow only numeric characters
                    }}
                    required
                    placeholder=" "
                />
              </div>

              {/* Category Radio Buttons */}
              <div className="flex flex-col gap-4 mb-6">
                {["undergraduate", "academia", "industry", "other"].map((category) => (
                    <label className="flex items-center space-x-3" key={category}>
                      <input
                          type="radio"
                          name="category"
                          value={category}
                          checked={formData.category === category} // Ensure the radio is checked if the value matches
                          onChange={handleChange}
                          className="w-4 h-4 border-2 border-gray-500 rounded-md bg-black focus:outline-none relative"
                      />
                      <span className="text-white">{category.charAt(0).toUpperCase() + category.slice(1)}</span>
                    </label>
                ))}
              </div>

              {/* Subject Input */}
              <div className="mb-6 mt-8">
                <label htmlFor="subject" className="block mb-2">
                  Subject
                </label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
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
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
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
                  disabled={isSubmitting}
                  className="w-full p-2 rounded text-white hover:bg-gray-600 flex justify-center items-center"
                  style={{
                    backgroundColor: "#86868699",
                    borderWidth: "1px",
                    borderImageSource:
                        "linear-gradient(103.75deg, #FFFFFF 29.85%, rgba(153, 153, 153, 0) 108.02%)",
                    borderImageSlice: 1,
                  }}
              >
                {isSubmitting ? "Sending..." : "Submit"}
                <CheckCircleIcon className="ml-2 w-5 h-5 text-white" />
              </button>
            </form>
          </div>

          {/* Image Section */}
          <div className="relative mt-5 left-20 lg:mt-0 lg:mr-0 w-full lg:w-1/2">
            <img
                src="/images/contact%20us.png"
                alt="Contact Us"
                className="hidden lg:block w-full h-auto"
            />
            <img
                src="/images/Contct_Us%20DarkImage.png"
                alt="New Image"
                className={`absolute top-6 left-4 transition-opacity duration-5000 hidden lg:block ${
                    fadeOut ? "opacity-0 translate-x-[100%]" : "opacity-100"
                }`}
                style={{
                  width: "600px",
                  height: "900px",
                  objectFit: "cover",
                  opacity: fadeOut ? 0 : 1,
                  display: fadeOut ? "none" : "block",
                }}
            />
          </div>
        </section>

        {/* Social Figures Section */}
        <section className="bg-black py-20 mt-32 px-4 md:px-10 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-white text-4xl font-bold">SOCIAL FIGURES</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center mb-16 text-white">
            <a href="#" className="hover:text-gray-500 flex items-center space-x-2">
              <FontAwesomeIcon icon={faFacebookSquare} style={{ fontSize: '38px' }} />
              <p className="text-[15px]">Society of Computer Sciences - SUSL</p>
            </a>
            <a href="#" className="hover:text-gray-500 flex items-center space-x-2">
              <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '38px' }} />
              <p className="text-[15px]">Society of Computer Sciences - SUSL</p>
            </a>
            <a href="#" className="hover:text-gray-500 flex items-center space-x-2">
              <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '38px' }} />
              <p className="text-[15px]">Society of Computer Sciences - SUSL</p>
            </a>
            <a href="mailto:socs@appsc.sab.ac.lk" className="hover:text-gray-500 flex items-center space-x-2 mr-24">
              <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '38px' }} />
              <p className="text-[15px]">socs@appsc.sab.ac.lk</p>
            </a>
            <a href="mailto:socs@appsc.sab.ac.lk" className="hover:text-gray-500 flex  space-x-2 ml-8">
              <FontAwesomeIcon icon={faMapMarkerAlt} style={{ fontSize: '38px' }} />
              <p className="text-[15px]">
                Society of Computer Sciences,<br/>
                Faculty of Computer Sciences, <br/>
                Sabaragamuwa University of Sri Lanka, <br/>
                P.O. Box 02, Belihuloya, 70140, Sri Lanka.
              </p>
            </a>
          </div>
        </section>
        <Footer />
      </div>
  );
}
