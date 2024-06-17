import React, { useState } from 'react';
import './assets/css/bootstrap.min.css'; // Import CSS file
import './assets/css/fontawsom-all.min.css';
import './assets/plugins/testimonial/css/owl.carousel.min.css';
import './assets/plugins/testimonial/css/owl.theme.min.css';
import './assets/css/style.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-400 text-white py-4">
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">
        <div className="text-2xl font-bold">Logo</div>
        <button
          className="text-white md:hidden"
          onClick={toggleNavbar}
        >
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
        <div className={`w-full md:flex md:items-center md:w-auto ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="md:flex md:space-x-4 mt-4 md:mt-0">
            <li><a href="#home" className="block py-2 md:py-0">Home</a></li>
            <li><a href="#about" className="block py-2 md:py-0">About</a></li>
            <li><a href="#services" className="block py-2 md:py-0">Services</a></li>
            <li><a href="#contact" className="block py-2 md:py-0">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;



