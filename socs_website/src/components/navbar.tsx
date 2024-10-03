import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
    const [active, setActive] = useState('Home');

    const menuItems = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/public/about' },
        { name: 'News', href: '/public/news' },
        { name: 'Event', href: '/public/events/LetMeHack' },
        { name: 'Contact Us', href: '/public/contact_us' },
    ];

    return (
        <nav className="bg-black text-white py-4 px-10 flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
                <Image src="/images/socs_logo.png" alt="Logo" width={40} height={40} />
            </div>

            {/* Menu */}
            <ul className="hidden md:flex space-x-8 text-lg">
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

            {/* SOCS Logo */}
            <div className="flex items-center">
                <Image src="/images/socs_logo_name.png" alt="SOCS Logo" width={80} height={30} />
            </div>
        </nav>
    );
};

export default Navbar;
