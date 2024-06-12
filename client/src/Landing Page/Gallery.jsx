import React from 'react';

const imageUrls = [
//   "https://upload.wikimedia.org/wikipedia/commons/0/03/Kashi_Vishwanath_Temple_Banaras.jpg",
  "https://pbs.twimg.com/media/FGRnUzPVEAAbqM8?format=jpg&name=large",
  "https://pbs.twimg.com/media/FGRnNpAVUAYqRYv?format=jpg&name=large",
  "https://pbs.twimg.com/media/FGRnP_TUUAAttG3?format=jpg&name=large",
  "https://i.pinimg.com/originals/c0/7d/17/c07d17d7ca0b9f39f5aded4b6dca8f02.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Benares-_The_Golden_Temple%2C_India%2C_ca._1915_%28IMP-CSCNWW33-OS14-66%29.jpg/1280px-Benares-_The_Golden_Temple%2C_India%2C_ca._1915_%28IMP-CSCNWW33-OS14-66%29.jpg",
  "https://www.jagranimages.com/images/newimg/27072020/27_07_2020-shri-kashi-vishwanath-temple_20557350.jpg",
  "https://www.jansatta.com/wp-content/uploads/2021/12/Kashi-Vishwanath-Mandir.png?w=1024",
  "https://staticimg.amarujala.com/assets/images/2021/11/07/750x506/kashi-vishwanath-dham_1636258507.jpeg?w=674&dpr=1.0",
  "https://staticimg.amarujala.com/assets/images/2020/01/13/750x506/kashi-vishwanath-mandir-varanasi_1578924152.png?w=700&dpr=2.0",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Ahilya_Ghat_by_the_Ganges%2C_Varanasi.jpg/800px-Ahilya_Ghat_by_the_Ganges%2C_Varanasi.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/2/25/Chet_Singh_Ghat_in_Varanasi.jpg"
];

export default function Gallery() {
  return (
    <div className="mx-auto p-4 mt-2">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {imageUrls.map((imageUrl, index) => (
          <div key={index} className="image-container">
            <img
              className="rounded-lg w-full h-full object-cover"
              src={imageUrl}
              alt={`Image ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

