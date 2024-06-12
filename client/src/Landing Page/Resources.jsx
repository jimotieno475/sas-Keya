import React, { useState } from 'react';
import { websites, books, youtube, podcasts } from './data';

const categories = {
    Websites: websites,
    Books: books,
    YouTube: youtube,
    Podcasts: podcasts,
};

const Resources = () => {
    const [selectedCategory, setSelectedCategory] = useState('Websites');

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center">
            <nav className="w-full bg-blue-400 py-2 shadow-md fixed  z-50">
                <div className="mx-auto flex justify-around">
                    {Object.keys(categories).map((category) => (
                        <button
                            key={category}
                            className={`px-4 py-2 rounded-lg text-white ${
                                selectedCategory === category ? 'bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'
                            }`}
                            onClick={() => handleCategoryClick(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </nav>
            <div className="mx-auto p-14 mt-16">
                <h2 className="text-2xl font-bold mb-10 text-center">{selectedCategory}</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {categories[selectedCategory].map((item, index) => (
                        <div 
                            key={index} 
                            className="p-6 bg-gray-100 border-t-2 border-l-2 border-gray-600 rounded-tr-xl rounded-bl-xl shadow-lg flex flex-col"
                        >
                            <h3 className="text-gray-600 text-center text-lg underline mb-4">
                                {item.title}
                            </h3>
                            <img className="w-full h-48 object-cover rounded-lg mb-4" src={item.img} alt={item.title} />
                            <p className="text-gray-700 mb-4">{item.description}</p>
                            <a
                                href={item.source}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-auto text-blue-500 hover:text-blue-700 underline"
                            >
                                Learn More
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Resources;
