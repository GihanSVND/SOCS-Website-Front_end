import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/public/about" },
  { name: "News", href: "/public/news" },
  { name: "Event", href: "/public/events/LetMeHack" },
  { name: "Contact Us", href: "/public/contact_us" },
];

const Navbar = () => {
  const [isMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white flex items-center justify-between px-6 py-3 relative">
      {/* Left Logo */}
      {!isMenuOpen && (
        <div className="absolute left-4 md:left-20 mt-4">
          <Image src="/images/socs_logo.png" alt="Logo" width={40} height={40} />
        </div>
      )}

      {/* Navigation Links */}
      <div className="flex-1 flex justify-center space-x-8 mt-4 text-[18px]">
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
    </nav>
  );
};

export default Navbar;
