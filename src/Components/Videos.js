
import React, { useState } from 'react';

const Videos = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const openModal = (videoSrc) => {
    setCurrentVideo(videoSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setCurrentVideo(null);
    setModalOpen(false);
  };

  const blogPosts = [
    { src: 'https://www.youtube.com/embed/MIwuVbtdr_U?si=oBJalsN1EaBSILjV', type: 'video/mp4' },
    { src: 'https://www.youtube.com/embed/hOCEq9UU1z8?si=b6_mWcEQPwKU5b1K', type: 'video/mp4' },
    { src: 'https://www.youtube.com/embed/ZTkLvRjU_OU?si=CLUIJhNijFV2QXvz', type: 'video/mp4' },
    { src: 'https://youtube.com/embed/eop3a3lADbc?si=Cj9q8FaKXVdj9cnQ', type: 'video/mp4' },
    { src: 'https://www.youtube.com/embed/jD0QTFKqFxM?si=XCrC6_FJ_zdVnV11" ', type: 'video/mp4' },
    { src: 'https://youtube.com/embed/U00PKreU3zU', type: 'video/mp4' },
    { src: '/WalkAways.mp4', type: 'video/mp4' },
    { src: '/MosqueVideo.mp4', type: 'video/mp4' },
  ];

  return (
    <>
      <div className="bg-white p-4 font-sans my-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          {blogPosts.map((post, index) => (
            <div key={index} className="relative bg-white m-2 overflow-hidden hover:scale-105 transition-all duration-300">
              {/* <video
                src={post.src}
                type={post.type}
                className="w-full h-52 object-cover cursor-pointer"
                controls
                onClick={() => openModal(post.src)}
              /> */}
               <iframe width="560" height="315" 
                src={post.src}
                title={post.type}
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen 
                controls
                className="w-full h-52 object-cover cursor-pointer">
                  
                </iframe>
            </div>
          ))}
        </div>
      </div>

      {modalOpen && (
        
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
           <button onClick={(e) => { e.stopPropagation(); closeModal(); }} className="absolute top-2 right-2 text-white text-2xl focus:outline-none">&times;</button>
          <div className="relative w-3/4 h-3/4">

            <video
              src={currentVideo}
              type="video/mp4"
              className="w-full h-full"
              controls
              autoPlay
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Videos;
