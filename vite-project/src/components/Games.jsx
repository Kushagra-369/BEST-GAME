import React from 'react';
import image1 from '../assets/images/life1.jpg';
import image2 from '../assets/images/life2.jpg';
import image3 from '../assets/images/life3.jpg';
import image4 from '../assets/images/life4.jpg';
import { Element } from 'react-scroll';
import { Link } from 'react-router-dom';

export default function Games() {

  const data = [
    { id: 1, title: image1 },
    { id: 2, title: image2 },
    { id: 3, title: image3 },
    { id: 4, title: image4 },
  ];

  return (
    <Element name="games">
      <div className="w-150 md:w-full bg-blue-800 text-white">
        {/* Heading */}
        <div className="text-center py-20">
          <h1 className="text-7xl font-bold">Life is Strange Games</h1>
          <h1 className="py-10 text-2xl">A series of thrilling supernatural mysteries to experience.</h1>
        </div>

        {/* Game Thumbnails */}
        <div className="flex flex-wrap justify-center gap-10 pb-20">
          {data.map((item) => (
            <div key={item.id} className="flex justify-center">
              <Link to={`/bestgame${item.id}`}>
                <img
                  className="w-80 h-60 md:w-72 md:h-56 rounded-2xl hover:scale-105 transition-transform duration-300 cursor-pointer shadow-lg"
                  src={item.title}
                  alt={`Game ${item.id}`}
                />
                <h1 className="text-center mt-3 text-xl hover:text-yellow-300 transition-colors">
                  bestgame {item.id}
                </h1>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
}
