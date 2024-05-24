
"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const Images = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Define an array of blog posts
  const blogPosts = [
    
       '/Main Gate.jpg',
       '/Mosque.JPG',
       '/MosqueNightView.png',
       '/MosqueConstruc.png',
       '/ParkMonoments2.png',
       '/FountainPark.jpg',
       '/MosqueArea.png',
       '/HousePlots.jpg',
       '/Office.JPG',
       '/Roads.jpg',
       '/Office.JPG',
       '/house1.JPG',
       '/house2.JPG',
       '/house3.JPG',
       '/House4.png',
       '/coomercialArea.png',
       '/Comercial4.png',
       '/WalkAway.png',
       '/Area1.JPG',
       '/ElectricityImg.png',
    
    // Add other blog posts here
  ];

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <div className="bg-white p-4 font-[sans-serif] my-20 ">
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
            {/* Map over the blogPosts array to generate blog post cards */}
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="relative bg-white m-2 overflow-hidden hover:scale-105 transition-all duration-300"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={post}
                  alt={`Image ${index + 1}`}
                  className="w-full h-52 object-cover cursor-pointer"
                />
                <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
                  {/* Add your content here */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox component */}
      {lightboxOpen && (
        <Lightbox
          mainSrc={blogPosts[lightboxIndex]}
          nextSrc={blogPosts[(lightboxIndex + 1) % blogPosts.length]}
          prevSrc={blogPosts[(lightboxIndex + blogPosts.length - 1) % blogPosts.length]}
          onCloseRequest={() => setLightboxOpen(false)}
          onMovePrevRequest={() => setLightboxIndex((lightboxIndex + blogPosts.length - 1) % blogPosts.length)}
          onMoveNextRequest={() => setLightboxIndex((lightboxIndex + 1) % blogPosts.length)}
        />
      )}
    </>
  );
};

export default Images;