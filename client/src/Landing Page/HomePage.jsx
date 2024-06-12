import React from 'react';
import { useNavigate,Link } from 'react-router-dom';
import './assets/css/bootstrap.min.css'; // Import CSS file
import './assets/css/fontawsom-all.min.css';
import './assets/plugins/testimonial/css/owl.carousel.min.css';
import './assets/plugins/testimonial/css/owl.theme.min.css';
import './assets/css/style.css';
import { useState } from 'react';
import Modal from 'react-modal';

function Home (){
    const navigate=useNavigate()
    // const redirectToLogin = () => {
    //     navigate('/login');}
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
      setModalIsOpen(true);
    };
  
    const closeModal = () => {
      setModalIsOpen(false);
    };
  return (
            <div>
     <body className='whole'>
     <div className="slider h-screen bg-custom-image bg-cover bg-center bg-no-repeat ">
      <div className="container mx-auto flex flex-col justify-center items-center h-full text-center">
        <div className="slider-titl flex flex-col items-center">
          <div className="bg-opacity-50 bg-gray-800 p-6 rounded-lg">
            <h1 className="text-white text-4xl font-bold mb-4">
            Welcome to the Skeptics and Atheist Society of Kenya
            </h1>
            <p className="text-white mb-6">
            A society of Atheists, Skeptics, Agnostics, Philosophers,Secularists, Humanists and Rationalists
            </p>
          </div>
        </div>
      </div>
    </div>


<div>
<section className="packages mt-12">
      <div className="flex flex-col md:flex-row mt-2">
        <div className="w-full md:w-1/2 p-6">
          <div className="slider-titl flex flex-col rounded-lg">
            <div className="homeBio">
              <p>
                The Skeptics and Atheist Society of Kenya is a community for all
                who lack belief in the existence of a god or gods.
                <br />
                <br />
                A place where rationality, skepticism and human rights are the
                order of the day, where freedom of expression is appreciated not demonized and open and respectful
                sharing of information and opinions is encouraged.
                <br />
                <br />
                We are of the opinion that it is important to question what it
                is you believe and why. Without questioning, there is no way to know whether the beliefs you hold are true or false.
                <br />
                <br />
                We host debates and discussions every Friday and Sunday. We also
                have a YouTube channel.
                <br />
                <br />
                Membership is open to anyone. We hope you find this community
                welcoming and inspiring.
              </p>

              <div className="homeBtns flex space-x-4 mt-4">
                <Link to="/join" className="bg-blue-500 text-white py-2 px-4 rounded">Join us</Link>
                <a
                  href="https://www.youtube.com/channel/UCBPLMRPHyxsxdn55S9V1buw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-500 text-white py-2 px-4 rounded"
                >
                  View channel
                </a>
              </div>
              <div className="border border-gray-300 p-4 mt-6 bg-gray-100">
                <p><strong>Disclaimer:</strong></p>
                <p>
                  This application is currently under development. Features, functionalities, and user interface elements may change as development progresses. Users may encounter bugs, errors, or unexpected behaviors while using the application. By using this application, you acknowledge that it is still in its development phase and may not fully represent the final product. We appreciate your patience and understanding as we work to improve and enhance the application.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* YouTube Thumbnail */}
        <div className="w-full md:w-1/2 p-6 flex items-center justify-center">
          <div className="w-full h-3/4 cursor-pointer" onClick={openModal}>
            <iframe
              src="https://www.youtube.com/embed/fu2OxCajxqQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-lg w-full h-full"
            />
          </div>

          {/* Modal for YouTube Video */}
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="YouTube Video"
            className="modal relative max-w-2xl mx-auto bg-white p-4 rounded-lg"
            overlayClassName="overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          >
            <button
              onClick={closeModal}
              className="absolute top-0 right-0 mt-4 mr-4 text-2xl font-bold text-gray-800"
            >
              &times;
            </button>
            <div className="video-container">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/fu2OxCajxqQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </Modal>
        </div>
      </div>
    </section>
    </div>
   
<div>
    <section className="custom-msg">
        <div className="container">
           <div className=" cust-msg">
                <h2>Are you interested in joining us</h2>
                <p>You can join us by clicking the button bellow and you can also give donations to support  us </p>
                <button onClick={()=>navigate("/join")} className="btn btn-warning text-white p-2 rounded-lg shadow-sm hover:bg-blue-600">Join Us</button>
           </div>
           
        </div>
    </section>
    </div>
</body>

            </div>
        );
    }


export default Home;


