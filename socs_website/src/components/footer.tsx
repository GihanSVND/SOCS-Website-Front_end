import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
  return (
    <footer className="text-white py-8 mt-32" style={{ backgroundColor: '#0D0D0D' }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center ">

          {/* Left Section */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-lg md:text-[20px] font-bold uppercase mb-2">
              Society of Computer Sciences - SOCS
            </h2>
            <p className='mt-4'>
              <a href="mailto:socs@appsc.sab.ac.lk" className="hover:underline">
                socs@appsc.sab.ac.lk
              </a>
            </p>
            <p className='mt-4'>Society of Computer Sciences,</p>
            <p>Sabaragamuwa University of Sri Lanka,</p>
            <p className='mb-3'>P.O. Box 02, Belihuloya 70140, Sri Lanka.</p>
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-center md:items-end md:ml-auto text-center md:text-right">
            {/* Links */}
            <div className="mb-6 md:mb-0">
              <h3 className="font-bold text-lg md:text-[20px] mb-4">Pages</h3>
              <ul className='mb-3'>
                <li><a href="/" className="hover:underline">Home</a></li>
                <li><a href="/public/about" className="hover:underline">About</a></li>
                <li><a href="/public/news" className="hover:underline">News</a></li>
                <li><a href="/public/events/LetMeHack" className="hover:underline">Events</a></li>
                <li><a href="/public/contact_us" className="hover:underline">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Line with Specified Width */}
      <hr 
        className="my-4" 
        style={{
          border: 'none',
          height: '2px',              
          backgroundColor: '#808080', 
          width: '98%',
          margin: '0 auto',           
        }} 
      />

      <div className="container mx-auto px-4 text-center">
        <p className="mt-4 text-sm">Copyright SOCS © 2024. All rights reserved</p>
      </div>
      
      {/* Social Icons */}
      <div className="flex flex-col items-center mt-4">
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-400">
            <i className="fa-brands fa-square-facebook text-lg md:text-2xl"></i>
          </a>
          <a href="#" className="hover:text-gray-400">
            <i className="fa-brands fa-linkedin text-lg md:text-2xl"></i>
          </a>
          <a href="#" className="hover:text-gray-400">
            <i className="fa-brands fa-square-instagram text-lg md:text-2xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
