// import React, { useState } from 'react';
// import Modal from 'react-modal';

// function NewsEvents() {
//     const [modalIsOpen, setModalIsOpen] = useState(false);
//     const [currentVideoUrl, setCurrentVideoUrl] = useState('');
//     const [filter, setFilter] = useState('');
//     const [selectedCategory, setSelectedCategory] = useState('weekly');

//     const openModal = (videoUrl) => {
//         setCurrentVideoUrl(videoUrl);
//         setModalIsOpen(true);
//     };

//     const closeModal = () => {
//         setModalIsOpen(false);
//     };

//     // Define an array of video objects with title and URL
//     const videoData = [
//         { title: "Weekly Video 1", url: "https://www.youtube.com/embed/fu2OxCajxqQ", category: "weekly" },
//         { title: "Weekly Video 2", url: "https://www.youtube.com/embed/k3ClSjNvcXw", category: "weekly" },
//         { title: "Weekly Video 2", url: "https://www.youtube.com/embed/k3ClSjNvcXw", category: "weekly" },
//         { title: "Weekly Video 2", url: "https://www.youtube.com/embed/k3ClSjNvcXw", category: "weekly" },
//         { title: "Weekly Video 2", url: "https://www.youtube.com/embed/k3ClSjNvcXw", category: "weekly" },
//         { title: "Weekly Video 2", url: "https://www.youtube.com/embed/k3ClSjNvcXw", category: "weekly" },
//         { title: "Weekly Video 2", url: "https://www.youtube.com/embed/k3ClSjNvcXw", category: "weekly" },
//         { title: "Weekly Video 2", url: "https://www.youtube.com/embed/k3ClSjNvcXw", category: "weekly" },
//         { title: "Weekly Video 2", url: "https://www.youtube.com/embed/k3ClSjNvcXw", category: "weekly" },
//         { title: "Weekly Video 2", url: "https://www.youtube.com/embed/k3ClSjNvcXw", category: "weekly" },
//         { title: "Monthly Video 1", url: "https://www.youtube.com/embed/t7XCb5BJt4Q", category: "monthly" },
//         { title: "Monthly Video 1", url: "https://www.youtube.com/embed/t7XCb5BJt4Q", category: "monthly" },
//         { title: "Monthly Video 1", url: "https://www.youtube.com/embed/t7XCb5BJt4Q", category: "monthly" },
//         { title: "Monthly Video 1", url: "https://www.youtube.com/embed/t7XCb5BJt4Q", category: "monthly" },
//         { title: "Monthly Video 1", url: "https://www.youtube.com/embed/t7XCb5BJt4Q", category: "monthly" },
//         { title: "Monthly Video 1", url: "https://www.youtube.com/embed/t7XCb5BJt4Q", category: "monthly" },
//         { title: "Monthly Video 1", url: "https://www.youtube.com/embed/t7XCb5BJt4Q", category: "monthly" },
//         { title: "Monthly Video 1", url: "https://www.youtube.com/embed/t7XCb5BJt4Q", category: "monthly" },

//         // Add more videos as needed
//     ];

//     // Filter videos based on selected category and search filter
//     const filteredVideos = videoData.filter(video => {
//         return (
//             (video.category === selectedCategory || selectedCategory === 'all') &&
//             video.title.toLowerCase().includes(filter.toLowerCase())
//         );
//     });

//     // Function to handle category filter
//     const handleCategoryFilter = (category) => {
//         setSelectedCategory(category);
//     };

//     return (
//         <div className="relative font-inter antialiased">
//             <main className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
//                 <div className="w-full max-w-10xl mx-auto px-7 max-h-10xl">
//                     {/* Filter buttons */}
//                     <div className="flex justify-between items-center mb-4">
//                         <button onClick={() => handleCategoryFilter('weekly')} className={`px-4 py-2 rounded-md focus:outline-none ${selectedCategory === 'weekly' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>Weekly</button>
//                         <button onClick={() => handleCategoryFilter('monthly')} className={`px-4 py-2 rounded-md focus:outline-none ${selectedCategory === 'monthly' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>Monthly</button>
//                         <input
//                             type="text"
//                             placeholder="Search by title..."
//                             value={filter}
//                             onChange={(e) => setFilter(e.target.value)}
//                             className="px-4 py-2 rounded-md focus:outline-none border border-gray-300"
//                         />
//                     </div>

//                     {/* Video grid */}
//                     <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                         {filteredVideos.map((video, index) => (
//                             <div key={index} className="w-full p-2 flex items-center justify-center">
//                                 <div className="w-full cursor-pointer" onClick={() => openModal(video.url)}>
//                                     <iframe
//                                         src={video.url}
//                                         title={video.title}
//                                         frameBorder="0"
//                                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                                         allowFullScreen
//                                         className="rounded-lg shadow-lg w-full h-full"
//                                         style={{ aspectRatio: '16 / 9' }} // Maintain aspect ratio of 16:9
//                                     />
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     {/* Modal for YouTube Video */}
//                     <Modal
//                         isOpen={modalIsOpen}
//                         onRequestClose={closeModal}
//                         contentLabel="YouTube Video"
//                         className="modal relative max-w-2xl mx-auto bg-white p-4 rounded-lg"
//                         overlayClassName="overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
//                     >
//                         <button
//                             onClick={closeModal}
//                             className="absolute top-0 right-0 mt-4 mr-4 text-2xl font-bold text-gray-800"
//                         >
//                             &times;
//                         </button>
//                         <div className="video-container">
//                             <iframe
//                                 width="560"
//                                 height="315"
//                                 src={currentVideoUrl}
//                                 title="YouTube video player"
//                                 frameBorder="0"
//                                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                                 allowFullScreen
//                             ></iframe>
//                         </div>
//                     </Modal>
//                 </div>
//             </main>
//         </div>
//     );
// }

// export default NewsEvents;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

function NewsEvents() {
    const [videos, setVideos] = useState([]);
    const [filter, setFilter] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentVideoUrl, setCurrentVideoUrl] = useState('');
    const [nextPageToken, setNextPageToken] = useState(null);
    const [loading, setLoading] = useState(true);
    const [fetchedVideoIds, setFetchedVideoIds] = useState(new Set());
    const [currentPage, setCurrentPage] = useState(1);

    const API_KEY = 'AIzaSyCrqlexWqralIfU0X3jSuS_xTqdBABtV7A'; // Replace with your API key
    const CHANNEL_ID = 'UCBPLMRPHyxsxdn55S9V1buw'; // Replace with the obtained channel ID

    useEffect(() => {
        fetchVideos();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            handleNextPage();
        }, 15000); // 10 seconds interval

        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, [currentPage, videos]);

    const fetchVideos = async (pageToken = '') => {
        try {
            setLoading(true);
            const response = await axios.get(
                `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=50&pageToken=${pageToken}`
            );

            const newVideos = response.data.items.filter(video => {
                const videoId = video.id.videoId;
                return !fetchedVideoIds.has(videoId) && videoId;
            });

            if (newVideos.length > 0) {
                setFetchedVideoIds(prevIds => new Set([...prevIds, ...newVideos.map(video => video.id.videoId)]));
                setVideos(prevVideos => [...prevVideos, ...newVideos]);
            }

            setNextPageToken(response.data.nextPageToken);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching videos:', error);
            setLoading(false);
        }
    };

    const openModal = (videoId) => {
        setCurrentVideoUrl(`https://www.youtube.com/embed/${videoId}`);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const filteredVideos = videos.filter(video =>
        video.snippet.title.toLowerCase().includes(filter.toLowerCase())
    );

    const videosPerPage = 12;
    const totalPages = Math.ceil(filteredVideos.length / videosPerPage);
    const displayedVideos = filteredVideos.slice((currentPage - 1) * videosPerPage, currentPage * videosPerPage);

    const handleNextPage = () => {
        setCurrentPage(prevPage => (prevPage < totalPages ? prevPage + 1 : 1));
    };

    const handlePrevPage = () => {
        setCurrentPage(prevPage => (prevPage > 1 ? prevPage - 1 : totalPages));
    };

    return (
        <div className="relative font-inter antialiased">
            <main className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
                <div className="w-full max-w-10xl mx-auto px-7 max-h-10xl">
                    <div className="flex justify-between items-center mb-4">
                        <input
                            type="text"
                            placeholder="Search by title..."
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                            className="px-4 py-2 rounded-md focus:outline-none border border-gray-300"
                        />
                    </div>

                    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {displayedVideos.map((video, index) => (
                            <div key={index} className="w-full p-2 flex items-center justify-center">
                                <div className="w-full cursor-pointer" onClick={() => openModal(video.id.videoId)}>
                                    <iframe
                                        src={`https://www.youtube.com/embed/${video.id.videoId}`}
                                        title={video.snippet.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="rounded-lg shadow-lg w-full h-full"
                                        style={{ aspectRatio: '16 / 9' }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-between mt-4">
                        <button
                            onClick={handlePrevPage}
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
                            onClick={handleNextPage}
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

                    {nextPageToken && !loading && (
                        <button
                            onClick={() => fetchVideos(nextPageToken)}
                            className="mt-4 px-4 py-2 rounded-md bg-blue-500 text-white"
                        >
                            Load More
                        </button>
                    )}

                    {loading && <div>Loading...</div>}

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
                                src={currentVideoUrl}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </Modal>
                </div>
            </main>
        </div>
    );
}

export default NewsEvents;
