import React from 'react';
import './assets/css/bootstrap.min.css'; // Import CSS file
import './assets/css/fontawsom-all.min.css';
import './assets/plugins/testimonial/css/owl.carousel.min.css';
import './assets/plugins/testimonial/css/owl.theme.min.css';
import './assets/css/style.css';

function Footer() {
  return (
    <footer className="bg-blue-400 text-white ">
      <div className=" mx-auto px-20">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <h2 className="text-xl font-bold mb-2 underline">About Us</h2>
            <p>
              Atheists in Kenya are committed to fostering a community that values reason, science, and humanism. We advocate for secularism, human rights, and the separation of religion and state to create a more inclusive and progressive Kenya. Join us in promoting critical thinking and evidence-based understanding for a brighter future.
            </p>
          </div>
          <div className=" flex w-full md:w-1/2  ">
            <div className='w=1/2 ml-4'>
            <h2 className="text-xl font-bold mb-2 underline">Contact Us</h2>
            <address className="not-italic">
              Phone: +254 712345678<br />
              Email: <a href="mailto:Wingsdomesticworkers@gmail.com" className="text-white underline">Wingsdomesticworkers@gmail.com</a><br />
              Web: <a href="https://smarteyeapps.com/" className="text-white underline">www.bluedart.in</a>
            </address>
            </div>
            <div className="mt-4 w-1/2 ml-4">
              <h2 className="text-xl font-bold mb-2 underline">Follow Us</h2>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 text-white py-2 mt-2">
        <div className="container mx-auto px-4 text-center">
          <a href="https://www.smarteyeapps.com/" className="text-white">2024 &copy; All Rights Reserved | Designed and Developed by Jim Otieno</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

