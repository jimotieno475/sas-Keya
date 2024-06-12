// App.js

import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Footer from './Landing Page/Footer';
import Navbar from './Landing Page/Navbar';
import Home from './Landing Page/HomePage';
import ContactUs from './Landing Page/ContactUs';
import Services from './Landing Page/Services';
import AboutUs from './Landing Page/AboutUs';
import Pricing from './Landing Page/Pricing';
import Objectives from './Landing Page/Objectives';
import Team from './Landing Page/Team';
import Gallery from './Landing Page/Gallery';
import NewsEvents from './Landing Page/NewsEvents';
import Resources from './Landing Page/Resources';
import JoinUs from './Landing Page/JoinUs';


function App (){
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path='/objectives' element={<Objectives/>}/>
        <Route path="/team" element={<Team/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/events" element={<NewsEvents/>} />
        <Route path="/resources" element={<Resources/>} />
        <Route path="/join" element={<JoinUs/>} />
        {/* Add more routes as needed */}
        </Routes>
        <Footer/>
    </Router>
  );
};

export default App;
