import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Import icons from lucide-react

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/public/about" },
  { name: "News", href: "/public/news" },
  { name: "Event", href: "/public/events/LetMeHack" },
  { name: "Contact Us", href: "/public/contact_us" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="z-20 bg-black text-white flex items-center justify-between px-6 py-4 relative">

      {/* Left Logo (Desktop) & Mobile Menu Button */}
      <div className="absolute left-4 md:left-20 flex items-center">
        {/* Hamburger Menu - Mobile Only */}
        <button
          className="md:hidden text-white focus:outline-none mt-4"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* Desktop Logo - Hidden on Mobile */}
        <div className="hidden md:block ml-4">
          <Image src="/images/socs_logo.png" alt="Logo" width={40} height={40} />
        </div>
      </div>

      {/* Navigation Links - Desktop */}
      <div className="hidden md:flex flex-1 justify-center space-x-8 mt-4 text-[18px]">
        {menuItems.map((item) => (
          <Link key={item.name} href={item.href} className="hover:font-bold">
            {item.name}
          </Link>
        ))}
      </div>

      {/* Right SOCS Logo */}
      <div className="absolute right-4 md:right-20 mt-4">
        <Image
          src="/images/socs_logo_name.png"
          alt="SOCS Logo"
          width={80}
          height={30}
        />
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black text-white flex flex-col items-start justify-start py-6 space-y-4 md:hidden z-50">
            {menuItems.map((item) => (
            <Link
                key={item.name}
                href={item.href}
                className="hover:font-bold text-lg ml-8"
                onClick={() => setIsMenuOpen(false)} // Close menu on click
            >
                {item.name}
            </Link>
            ))}
        </div>
        )}

    </nav>
  );
};

export default Navbar;
