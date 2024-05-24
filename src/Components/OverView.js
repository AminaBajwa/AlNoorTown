"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const OverView = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Define an array of blog posts
  const blogPosts = [
    {
      imgSrc: '/Main Gate.jpg',
      title: 'Entrance Gates',
    },
    {
      imgSrc: '/Mosque3D.jpeg',
      title: 'Masjid',
    },
    {
      imgSrc: '/ParkMonoments2.png',
      title: 'Parks and Walkaways',
    },
    {
      imgSrc: '/FountainPark.jpg',
      title: 'Fountain Park',
    },
    {
      imgSrc: '/ElectricityImg.png',
      title: 'Electricity process',
    },
    {
      imgSrc: '/HousePlots.jpg',
      title: 'Plots',
    },
    {
      imgSrc: '/Roads.jpg',
      title: 'Well-Connected Roads',
    },
    {
      imgSrc: 'coomercialArea.png',
      title: 'Commercial Area',
    },
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
          <h5 className="text-center mb-4 md:text-center text-[#c69840]">Amenities</h5>
          <h2 className="text-center text-4xl font-bold mb-12 md:text-center text-[#c69840]">Overview of Al Noor Town</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
            {/* Map over the blogPosts array to generate blog post cards */}
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="relative bg-white rounded-lg m-2 overflow-hidden hover:scale-105 transition-all duration-300"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={post.imgSrc}
                  alt={`Blog Post ${index + 1}`}
                  className="w-full h-52 object-cover cursor-pointer"
                />
                <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
                  <div className="text-center text-white">
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    {/* <Link
                      href=""
                      className="inline-block px-4 py-2 bg-[#c69840] text-white text-sm rounded hover:bg-opacity-80"
                    >
                      Details
                    </Link> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox component */}
      {lightboxOpen && (
        <Lightbox
          mainSrc={blogPosts[lightboxIndex].imgSrc}
          nextSrc={blogPosts[(lightboxIndex + 1) % blogPosts.length].imgSrc}
          prevSrc={blogPosts[(lightboxIndex + blogPosts.length - 1) % blogPosts.length].imgSrc}
          onCloseRequest={() => setLightboxOpen(false)}
          onMovePrevRequest={() => setLightboxIndex((lightboxIndex + blogPosts.length - 1) % blogPosts.length)}
          onMoveNextRequest={() => setLightboxIndex((lightboxIndex + 1) % blogPosts.length)}
        />
      )}
    </>
  );
};

export default OverView;