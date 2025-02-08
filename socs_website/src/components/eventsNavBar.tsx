import React, { useState } from 'react';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage menu open/close

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggles the dropdown menu
  };

  return (
    <nav className="bg-black text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Centered Section for Larger Screens */}
        <div className="hidden md:flex w-full justify-center space-x-10 font-light text-lg">
          
        <a href="/public/events/LetMeHack" className="hover:text-gray-400">Let Me Hack</a>
          <a href="/public/events/FortNight" className="hover:text-gray-400">FortNight</a>
          <a href="#" className="hover:text-gray-400">Virtual Rival</a>
          <a href="#" className="hover:text-gray-400">CodeNight</a>
          <a href="#" className="hover:text-gray-400">Connecting Dots</a>
          <a href="#" className="hover:text-gray-400">Vidunena</a>
        </div>

        {/* Mobile Menu Icon for xs, sm Screens */}
        <div className="md:hidden flex items-center w-full justify-between">
          {/* Logo (for branding) */}
          
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Dropdown Menu for Mobile Screens */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 py-2 space-y-2 bg-black text-left">
          <a href="/public/events/LetMeHack" className="block hover:text-gray-400">Let Me Hack</a>
          <a href="/public/events/FortNight" className="block hover:text-gray-400">FortNight</a>
          <a href="#" className="block hover:text-gray-400">Virtual Rival</a>
          <a href="#" className="block hover:text-gray-400">CodeNight</a>
          <a href="#" className="block hover:text-gray-400">Connecting Dots</a>
          <a href="#" className="block hover:text-gray-400">Vidunena</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
