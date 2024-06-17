import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Logo from './assets/images/sask.png';
import './assets/css/fontawsom-all.min.css'; // Keep this if you still need Font Awesome
import './assets/plugins/testimonial/css/owl.carousel.min.css'; // Keep this if you still need these styles
import './assets/plugins/testimonial/css/owl.theme.min.css'; // Keep this if you still need these styles
import './assets/css/style.css'; // Keep this if you still need these styles

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate()
    return (
        <header className="sticky w-full top-0 z-50 bg-white shadow-md ">
            <div className="bg-gray-800 text-white py-2">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex space-x-10">
                        <span><i className="fas fa-envelope-square"></i> atheist-society-kenya@gmail.com</span>
                        <span><i className="fas fa-phone-square"></i> +254 7XX XXX XXX</span>
                    </div>
                </div>
            </div>
            <div className="bg-blue-300">
                <div className="container mx-auto flex justify-between items-center py-2">
                    <div className="flex items-center">
                        <img src={Logo} alt="Logo" className="h-10" />
                        <button
                            className="text-gray-700 md:hidden ml-4"
                            aria-label="Toggle menu"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                    <nav className={`md:flex space-x-10 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
                        <Link to="/" className="block text-gray-700 hover:text-blue-600 py-2 md:py-0">Home</Link>
                        {/* <Link to="/aboutus" className="block text-gray-700 hover:text-blue-600 py-2 md:py-0">About Us</Link> */}
                        <Link to="/objectives" className="block text-gray-700 hover:text-blue-600 py-2 md:py-0">Objectives</Link>
                        <Link to="/team" className="block text-gray-700 hover:text-blue-600 py-2 md:py-0">Team</Link>
                        <Link to="/gallery" className="block text-gray-700 hover:text-blue-600 py-2 md:py-0">Gallery</Link>
                        <Link to="/events" className="block text-gray-700 hover:text-blue-600 py-2 md:py-0">News & Events</Link>
                        <Link to="/resources" className="block text-gray-700 hover:text-blue-600 py-2 md:py-0">Resources</Link>
                        <Link to="/contactus" className="block text-gray-700 hover:text-blue-600 py-2 md:py-0">Contact Us</Link>
                        {/* <Link to="/join" className="block text-gray-700 hover:text-blue-600 py-2 md:py-0">Join Us</Link> */}
                        <button onClick={()=>navigate("/join")} className="bg-blue-500 text-white p-2 rounded-lg shadow-sm hover:bg-blue-600">Join Us</button>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Navbar;


