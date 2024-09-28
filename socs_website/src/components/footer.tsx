import React from 'react';

function Footer() {
  return (
    <footer className="text-white py-8 mt-32" style={{ backgroundColor: '#0D0D0D' }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Left Section */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-[20px] font-bold  uppercase mb-2">
              Society of Computer Sciences - SOCS
            </h2>
            <p className='mt-4'>soccs@appsoc.sab.ac.lk</p>
            <p className='mt-4'>Society of Computer Sciences,</p>
            <p>Sabaragamuwa University of Sri Lanka,</p>
            <p>P.O. Box 02, Belihuloya 70140, Sri Lanka.</p>
            <p className="mt-4 text-sm">Copyright SOCS © 2024. All rights reserved</p>
          </div>

          {/* Right Section */}
          <div className="flex flex-col md:flex-row justify-between">
            {/* Links */}
            <div className="mb-6 md:mb-0">
              <h3 className="font-bold text-[20px] mb-2">Pages</h3>
              <ul>
                <li><a href="#" className="hover:underline">Home</a></li>
                <li><a href="#" className="hover:underline">About</a></li>
                <li><a href="#" className="hover:underline">News</a></li>
                <li><a href="#" className="hover:underline">Events</a></li>
                <li><a href="#" className="hover:underline">Contact Us</a></li>
              </ul>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-6 md:mt-0">
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
