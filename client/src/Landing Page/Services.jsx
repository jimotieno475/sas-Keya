import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Cleaner from './assets/images/services/cleaner1.jpg';
import Cooking from './assets/images/services/cook 1.avif';
import LawnMowing from './assets/images/services/loan $ flower.jpg';
import Carcleaning from './assets/images/services/car wash 1.avif';
import Maid from './assets/images/services/maid 2.jpg';
import Laundry from './assets/images/services/loungry1.jpg';
import Plumbing from './assets/images/services/plumber 1.jpg';
import Shambaboy from './assets/images/services/shamba 1.jpg'
import './assets/css/bootstrap.min.css'; // Import CSS file
import './assets/css/fontawsom-all.min.css';
import './assets/plugins/testimonial/css/owl.carousel.min.css';
import './assets/plugins/testimonial/css/owl.theme.min.css';
import './assets/css/style.css';

function Services (){
        return (
            <div>
     <body className='whole'>
        <Navbar/>
    <div class="page-nav no-margin row">
                   <div class="container">
                       <div class="row">
                           <h2>Our Services</h2>
                           <ul>
                               <li> <a href="#"><i class="fas fa-home"></i> Home</a></li>
                               <li><i class="fas fa-angle-double-right"></i> About Us</li>
                           </ul>
                       </div>
                   </div>
    </div>

    <div>
         <section className="latest-features">
            <div className="container">
                <div className="inner-title">
    
                    <h2> Latest Features & Services</h2>
                    <p>Take a look at some of latest features and services provided by our team</p>
                </div>
    
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <div className="single-feature">
                           <img src={Cleaner} alt=""/>
                           <div className="bn-dgt">
                            <i className="fas fa-hospital-alt"></i>
                            <h5>House Cleaning</h5>
                            <p>The workers provide quality work to the employees with the best cleaning skills they can clean Offices , Homes , Hospitals and all work places.</p>
                            </div>
                        </div>
                    </div>
    
                    <div className="col-md-3 col-sm-6">
                        <div className="single-feature">
                           <img src={Cooking} alt=""/>
                           <div className="bn-dgt">
                            <i className="fas fa-user-md"></i>
                            <h5>Cooking</h5>
                            <p>Our Cooks makes the best meals in homes ,events ,hotels  or anywhere they can be required to Cook.</p>
                            </div>
                        </div>
                    </div>
    
                    <div className="col-md-3 col-sm-6">
                        <div className="single-feature">
                           <img src={LawnMowing} alt=""/>
                           <div className="bn-dgt">
                            <i className="fas fa-briefcase-medical"></i>
                            <h5>Lawn Mowing</h5>
                            <p> Our Workers provide good servicess of Loan Mowing with good machines and grass disposing if necessary in your compound.</p>
                            </div>
                        </div>
                    </div>
                      <div className="col-md-3 col-sm-6">
                        <div className="single-feature">
                           <img src={Carcleaning} alt=""/>
                           <div className="bn-dgt">
                                <i className="fas fa-briefcase-medical"></i>
                                <h5>Car Cleaning</h5>
                                <p> Our car cleaners give you services at the comfort of your home or you can take your car to their car washes.</p>
                             </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="single-feature">
                           <img src={Maid} alt=""/>
                           <div className="bn-dgt">
                                <i className="fas fa-briefcase-medical"></i>
                                <h5>Maid</h5>
                                <p> our workers provide good maid services cooking ,laundry and cleaning with high quality and descipline.</p>
                             </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="single-feature">
                           <img src={Laundry} alt=""/>
                           <div className="bn-dgt">
                                <i className="fas fa-briefcase-medical"></i>
                                <h5>Laundry</h5>
                                <p> You will be provided with the best laundry services from our workers from washing ,drying and ironing if needed.</p>
                             </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="single-feature">
                           <img src={Plumbing} alt=""/>
                           <div className="bn-dgt">
                                <i className="fas fa-briefcase-medical"></i>
                                <h5>Plumbing</h5>
                                <p> We have the best plumbers you can ever want in kenya you will be given the best services.</p>
                             </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="single-feature">
                           <img src={Shambaboy} alt=""/>
                           <div className="bn-dgt">
                                <i className="fas fa-briefcase-medical"></i>
                                <h5>Farm Worker /Shamba Boy</h5>
                                <p>We have very skilled farm workers who will give you very good services .</p>
                             </div>
                        </div>
                    </div>
                </div>
                    
            </div>
    
        </section>
        </div>
<Footer/>

</body>

            </div>
        );
    }


export default Services;