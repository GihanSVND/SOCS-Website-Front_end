import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
    const [active, setActive] = useState('Home');
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the side menu

    const menuItems = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/public/about' },
        { name: 'News', href: '/public/news' },
        { name: 'Event', href: '/public/events/LetMeHack' },
        { name: 'Contact Us', href: '/public/contact_us' },
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-black text-white py-4 px-10 flex justify-between items-center relative">
            {/* Hamburger Icon */}
            {!isMenuOpen && ( // Show hamburger only when the side menu is closed
                <div
                    className="absolute top-4 left-4 md:hidden cursor-pointer z-50 mt-2"
                    onClick={toggleMenu}
                >
                    <div className="w-6 h-0.5 bg-white mb-1"></div>
                    <div className="w-6 h-0.5 bg-white mb-1"></div>
                    <div className="w-6 h-0.5 bg-white"></div>
                </div>
            )}

            {/* Left Logo (Hidden on smaller screens when menu is open) */}
            {!isMenuOpen && (
                <div className="hidden md:flex items-center ml-16 mt-4 md:ml-0">
                    <Image src="/images/socs_logo.png" alt="Logo" width={40} height={40}/>
                </div>
            )}

            {/* Right SOCS Logo (Always visible in the right corner) */}
            <div className="absolute right-4 md:right-10 mt-4">
                <Image src="/images/socs_logo_name.png" alt="SOCS Logo" width={80} height={30}/>
            </div>

            {/* Main Menu (Hidden in mobile view) */}
            <div className="flex-grow flex justify-center mt-4">
                <ul className="hidden md:flex space-x-8 text-lg ">
                    {menuItems.map((item) => (
                        <li key={item.name}>
                            <Link legacyBehavior href={item.href}>
                                <a
                                    onClick={() => setActive(item.name)}
                                    className={`${
                                        active === item.name ? 'font-bold underline decoration-2' : ''
                                    } hover:text-gray-400 transition duration-300`}
                                >
                                    {item.name}
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Side Menu */}
                <div
                    className={`fixed top-0 left-0 h-full bg-black text-white p-5 transition-transform ${
                        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    } md:hidden`}
                    style={{width: '130px'}}
                >
                    <button
                        className="text-white text-lg absolute top-4 right-4"
                        onClick={toggleMenu}
                    >
                        &#x2715; {/* Close icon */}
                    </button>
                    <ul className="space-y-4 mt-8">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <Link legacyBehavior href={item.href}>
                                    <a
                                        onClick={() => {
                                            setActive(item.name);
                                            toggleMenu(); // Close menu on link click
                                        }}
                                        className={`block ${
                                            active === item.name ? 'font-bold underline decoration-2' : ''
                                        } hover:text-gray-400 transition duration-300`}
                                    >
                                        {item.name}
                                    </a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
);
};

export default Navbar;
