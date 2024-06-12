import React, { useState, useEffect } from 'react';
import Member from './Member';

const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const profiles = [
    {
      memberName: 'Morris Wachira',
      memberPosition: 'Chairman',
      memberImg: '/images/team-members/morris-1-edit.jpg',
      classList: 'carousel-item active',
      customStyle: { objectPosition: 'top' },
    },
    {
      memberName: 'Dorcas Soita',
      memberPosition: 'Vice Chair',
      memberImg: '/images/team-members/dorcas-3.jpg',
      classList: 'carousel-item',
      customStyle: { objectPosition: 'top' },
    },
    {
      memberName: 'Eston Kagota',
      memberPosition: 'Secretary',
      memberImg: '/images/team-members/eston-1.jpg',
      classList: 'carousel-item',
      customStyle: { objectPosition: 'top' },
    },
    {
      memberName: 'Jeffrey Adams',
      memberPosition: 'Assistant Secretary',
      memberImg: '/images/team-members/geoffrey-2.jpg',
      classList: 'carousel-item',
      customStyle: { objectPosition: 'top' },
    },
    {
      memberName: 'Stanley Njoroge',
      memberPosition: 'Treasurer',
      memberImg: '/images/team-members/stanley-1.jpg',
      classList: 'carousel-item',
      customStyle: { objectPosition: 'top' },
    },
    {
      memberName: 'Adiel Kilonzi',
      memberPosition: 'Assistant Treasurer',
      memberImg: '/images/team-members/adiel-1.jpg',
      classList: 'carousel-item',
      customStyle: { objectPosition: 'top' },
    },
  ];

  const back = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 1 ? prevIndex - 1 : profiles.length
    );
  };

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < profiles.length ? prevIndex + 1 : 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 10000); // 10 seconds interval

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="rounded-full bg-gray-600 text-white absolute top-5 right-5 text-sm px-2 text-center z-10">
        {currentIndex}/{profiles.length}
      </div>

      {profiles.map((profile, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${currentIndex === index + 1 ? 'opacity-100' : 'opacity-0'}`}
        >
          <Member profile={profile} />
        </div>
      ))}

      <button
        onClick={back}
        className="absolute left-14 top-1/2 -translate-y-1/2 w-11 h-11 flex justify-center items-center rounded-full shadow-md z-10 bg-gray-100 hover:bg-gray-200"
      >
        <svg
          className="w-8 h-8 font-bold transition duration-500 ease-in-out transform motion-reduce:transform-none text-gray-500 hover:text-gray-600 hover:-translate-x-0.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>

      <button
        onClick={next}
        className="absolute right-14 top-1/2 -translate-y-1/2 w-11 h-11 flex justify-center items-center rounded-full shadow-md z-10 bg-gray-100 hover:bg-gray-200"
      >
        <svg
          className="w-8 h-8 font-bold transition duration-500 ease-in-out transform motion-reduce:transform-none text-gray-500 hover:text-gray-600 hover:translate-x-0.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  );
};

export default Team;

