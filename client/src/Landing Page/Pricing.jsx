import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './assets/css/bootstrap.min.css'; // Import CSS file
import './assets/css/fontawsom-all.min.css';
import './assets/plugins/testimonial/css/owl.carousel.min.css';
import './assets/plugins/testimonial/css/owl.theme.min.css';
import './assets/css/style.css';

function Pricing (){
        return (
            <div>
     <body className='whole'>

<Navbar/>

    <div class="page-nav no-margin row">
                   <div class="container">
                       <div class="row">
                           <h2>Our Pricing</h2>
                           <ul>
                               <li> <a href="#"><i class="fas fa-home"></i> Home</a></li>
                               <li><i class="fas fa-angle-double-right"></i> About Us</li>
                           </ul>
                       </div>
                   </div>
               </div>

<div>
    <section className="packages">
        <div className="container">
           <div className="inner-title">

                <h2>Our Packages</h2>
                <p>Take a look at some of our Packages</p>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="product-box ultimate">
                        <div className="product-popular">
                            Most Popular
                        </div>
                        <div className="product-header">
                            <h4>
                                Workers Package
                            </h4>
                            <p>
                                Pay to join the workers
                            </p>
                        </div>
                        <div className="product-price">
                            1000ksh<span className="term">/Unlimited</span>
                        </div>
                        <div className="product-features">
                            <ul className="smal">
                                <li>
                                    Paid through M-pesa
                                </li>
                                <li>
                                    Need to pay to join
                                </li>
                            </ul>
                        </div>
                        <div className="product-order">
                            <a className="btn btn-info" href="products-cloud-hosting.html#cloud-starter-monthly">
                                <i className="fas fa-shopping-cart icon-left"></i>Order Now
                            </a>
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


export default Pricing;