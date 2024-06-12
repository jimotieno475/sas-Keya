import React from 'react';
import './assets/css/bootstrap.min.css'; // Import CSS file
import './assets/css/fontawsom-all.min.css';
import './assets/plugins/testimonial/css/owl.carousel.min.css';
import './assets/plugins/testimonial/css/owl.theme.min.css';
import './assets/css/style.css';


function AboutUs (){
        return (
            <div>
     <body className='whole'>
     <div class="page-nav no-margin row">
                   <div class="container">
                       <div class="row">
                           <h2>About Wings Domestic Workers</h2>
                           <ul>
                               <li> <a href="#"><i class="fas fa-home"></i> Home</a></li>
                               <li><i class="fas fa-angle-double-right"></i> About Us</li>
                           </ul>
                       </div>
                   </div>
               </div>
       <div>
        <section className="with-medical">
        <div className="container">
           <div className="inner-title">

                <h2>About Us</h2>
                <p>Take a look at some of our key features</p>
            </div>
            <div className="row">
               
                <div className="col-lg-6 col-md-12 txtr">
                    <h4>Why choose Workers  from <br/>
                     <span>Wings Domestic Workers </span>   
                    </h4>
                    <p>We are always give the best services in kenya in all places in the country From the best workers in the county always prefer us all the time.</p>
                   <ul>
                       <li><i className="fa fa-check"></i> Our Workers come i time .</li>
                       <li><i className="fa fa-check"></i> Our workers do the best jobs always .</li>
                       <li><i className="fa fa-check"></i> We have workers to do all jobs at your home .</li>
                       <li><i className="fa fa-check"></i> Best services in kenya always .</li>
                   </ul>
                </div>
                
                <div className="col-lg-6 col-md-12">
                       <div className="row">
                           <div className="col-md-6">
                               <div className="count-bx">
                                   <h4>22K</h4>
                                   <p>Services Done</p>
                               </div>
                           </div>
                           <div className="col-md-6">
                               <div className="count-bx">
                                   <h4>11K</h4>
                                   <p>Total Clients</p>
                               </div>
                           </div>
                           <div className="col-md-6">
                               <div className="count-bx">
                                   <h4>465</h4>
                                   <p>Projects Done</p>
                               </div>
                           </div>
                           <div className="col-md-6">
                               <div className="count-bx">
                                   <h4>14Y</h4>
                                   <p>Experiance</p>
                               </div>
                           </div>
                       </div>
                </div>
                
            </div>
        </div>
    </section>
    </div>
<div>
    <section className="custom-msg">
        <div className="container">
           <div className=" cust-msg">
                <h2>Always report to us incase of any incoveniences</h2>
                <p>Always report to us inace of any inconveniences from the workers<br/> or the boss our team will folow up and will do the best to solve it</p>
                <div className="btn btn-warning">Report to Us</div>
           </div>
           
        </div>
    </section>
    </div> 
<div>
    <section className="testimonial-container">
        <div className="container">
           <div className="inner-title row">
                <h2>Testimonial</h2>
                <p>Take a look at what people say about us</p>
            </div>
            <div className="row">
                <div className="col-md-offset-2 float-auto col-md-10">
                    <div id="testimonial-slider" className="owl-carousel">
                        <div className="testimonial">
                            <div className="pic">
                                <img src="assets/images/testimonial/member-01.jpg" alt=""/>
                            </div>
                            <p className="description">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda deleniti dolor ipsum molestias mollitia ut. Aliquam aperiam corporis cumque debitis delectus dignissimos. Lorem ipsum dolor sit amet, consectetur.
                            </p>
                            <h3 className="title">williamson
                                <span className="post"> -  Developer</span>
                            </h3>
                        </div>

                        <div className="testimonial">
                            <div className="pic">
                                <img src="assets/images/testimonial/member-02.jpg" alt=""/>
                            </div>
                            <p className="description">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda deleniti dolor ipsum molestias mollitia ut. Aliquam aperiam corporis cumque debitis delectus dignissimos. Lorem ipsum dolor sit amet, consectetur.
                            </p>
                            <h3 className="title">Kristina
                                <span className="post"> - Teacher</span>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>


</body>

            </div>
        );
    }


export default AboutUs;